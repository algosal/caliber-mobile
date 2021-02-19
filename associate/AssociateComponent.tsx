//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View } from 'react-native';
import AssociateDetail from './AssociateDetail';
import { Associate, QCFeedback } from './AssociateService';

interface AssociateProps {
    assoc: Associate;
    qcFB: QCFeedback;
}


function AssociateComponent(props: AssociateProps) {
    return (
        <View>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
        </View>

    );
}

export default AssociateComponent;