import {View, Text, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';
// import {BlurView, VibrancyView} from '@react-native-community/blur';
import ProgressBar from './ProgressBar';

export function Uploading({image, video, progress}){

    return(
        <View style={{alignItems: 'center', justifyContent:'center', zIndex: 1, backgroundColor: 'grey', opacity: 0.6,}}> 
            {/* <Modal animationType="slide"
                transparent={false}
                visible={true} // Pass the visibility state here
                onRequestClose={() => closeModal()}
                style={{width: '60%', backgroundColor: 'red'}}>

            </Modal> */}
            {/* <VibrancyView></VibrancyView> */}
        </View>
    )


}