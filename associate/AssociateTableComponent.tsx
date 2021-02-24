//Shows associate name, technical status, note (editable)
import React, { useEffect, useState } from 'react';
import 'react-native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import style from '../global_styles';
import { getAssociates } from '../store/actions';
import { AssociateState } from '../store/store';
import AssociateDetail from './AssociateDetail';
import AssociateService, { Associate, AssociateWithFeedback, QCFeedback } from './AssociateService';
import { shuffle, sortAssociateByFirstName, sortAssociateByFirstNameReversed, sortAssociateByLastName, sortAssociateByLastNameReversed } from './sort';

interface AssociateProps {
    assoc: Associate[];
}
//let com = useSelector((state: BatchAction) => state.batch);


/**
 * Get Associate needs to do some stuff here.
 */
//let qcFeedback = AssociateService.getAssociate(assoc);
let assoc1 = new AssociateWithFeedback();
assoc1.associate.firstName = "TylerTest"
assoc1.associate.lastName = "BetaTest"
let assoc2 = new AssociateWithFeedback();
assoc2.associate.firstName = "KathrynTest"
assoc2.associate.lastName = "AlphaTest"
let assoc3 = new AssociateWithFeedback();
assoc3.associate.firstName = "SillyTest"
assoc3.associate.lastName = "CharlieTest"
let assoc4 = new AssociateWithFeedback();
assoc4.associate.firstName = "MaryTest"
assoc4.associate.lastName = "DeltaTest"





function AssociateTableComponent(props: AssociateProps) {
    let tempAssociates = [assoc1, assoc2, assoc3, assoc4];
    let dispatch = useDispatch();
    let associates = useSelector((state: AssociateState) => state.associates);
    let iconName: string = 'angle-up';
    let iconColor: string = '#F26925';
    associates = [...tempAssociates];
    const [sortDirection, setSortDirection] = useState("FUp");


    useEffect(() => {
        getQCNotes();
    }, []);

    /**
     * Retrievs QC Notes from back end.
     */
    function getQCNotes() {
        let listofassociates:AssociateWithFeedback[] = [];
        props.assoc.forEach(async (asoc) => {
            let qcnotes:QCFeedback = await AssociateService.getAssociate(val,batch,week);
            if(qcnotes) {
                let val = new AssociateWithFeedback();
                val.associate =asoc;
                val.qcFeedback = qcnotes;
                listofassociates.push(val);
            } else {
                let val = new AssociateWithFeedback();
                val.associate =asoc;
                listofassociates.push(val);
            }
        })
        dispatch(getAssociates(listofassociates));
    }

    /**
     * Switches sorting direction for first name (Button Handler)
     */
    function switchSortingF() {
        if (sortDirection == "FUp") {
            setSortDirection("FDown");
            let val = [...associates];
            sortAssociateByFirstName(val);
            getAssociates(val);
        } else {
            setSortDirection("FUp");
            let val = [...associates];
            sortAssociateByFirstNameReversed(val);
            getAssociates(val);
        }
    }

    /**
     * Switches sorting direction for last name (Button Handler)
     */
    function switchSortingL() {
        if (sortDirection == "LUp") {
            setSortDirection("LDown");
            let val = [...associates];
            sortAssociateByLastName(val);
            getAssociates(val);
        } else {
            setSortDirection("LUp");
            let val = [...associates];
            sortAssociateByLastNameReversed(val);
            getAssociates(val);
        }
    }
    return (
        <View style = {style.associatesViewComponent}>
            <Button onPress = {() => {alert(JSON.stringify(associates))}}></Button>
            <Button onPress={async () => {
                await shuffle(associates);
                setTimeout(() => {
                    dispatch(getAssociates([...associates]));
                }, 500);
            }
            } title='Randomize List' buttonStyle={style.button}></Button>
            <TouchableOpacity style={style.tOSF} activeOpacity={.7}>
                <Text style={style.fNameSortH} onPress={switchSortingF}>Sort By First Name</Text>
                {sortDirection == "FUp" ? <Icon
                    style={style.iconsf}
                    name={iconName}
                    type='font-awesome'
                    color={iconColor}
                    testID='statusIcon' /> :  sortDirection == "FDown" ?
                    <Icon
                        style={style.iconsf}
                        name={'angle-down'}
                        type='font-awesome'
                        color={iconColor}
                        testID='statusIcon' /> : <Text></Text>}
            </TouchableOpacity>
            <TouchableOpacity style={style.tOSL} activeOpacity={.7}>
                <Text style={style.lNameSortH} onPress={switchSortingL}>Sort By Last Name</Text>
                {sortDirection == "LUp" ? <Icon
                    style={style.iconsl}
                    name={iconName}
                    type='font-awesome'
                    color={iconColor}
                    testID='statusIcon' /> : sortDirection == "LDown" ?
                    <Icon
                        style={style.iconsl}
                        name={'angle-down'}
                        type='font-awesome'
                        color={iconColor}
                        testID='statusIcon' /> : <Text></Text>}
            </TouchableOpacity>
            <FlatList
                style ={style.flatListAssociates}
                data={associates}
                renderItem={({ item }) => (<AssociateDetail associate={item.associate} qcFeedback={item.qcFeedback}></AssociateDetail>)}
                keyExtractor={(item) => item.associate.firstName}
            />
        </View>

    );
}

export default AssociateTableComponent;