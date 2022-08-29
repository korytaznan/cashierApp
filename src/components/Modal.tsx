import React, { memo } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import RNModal from 'react-native-modal';
import { colors, sizes } from '@theme';
import { DEVICE, BOTTOM_SPACE } from '@const';

interface IPropsModal {
  isVisible: boolean;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  children: React.ReactNode;
}

export const Modal = memo(
  ({
    isVisible,
    onBackdropPress = () => null,
    onBackButtonPress = () => null,
    children,
  }: IPropsModal) => {
    return (
      <RNModal
        isVisible={isVisible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        hasBackdrop={true}
        backdropOpacity={0.2}
        animationOutTiming={500}
        backdropTransitionOutTiming={500}
        deviceHeight={DEVICE.WINDOW_HEIGHT}
        deviceWidth={DEVICE.WINDOW_WIDTH}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        avoidKeyboard
        style={styles.resetStyleModal}>
        {/* <TouchableWithoutFeedback onPress={onBackdropPress}>
          <View style={styles.viewOpacity} />
        </TouchableWithoutFeedback> */}
        <View style={styles.container}>{children}</View>
      </RNModal>
    );
  },
);

const styles = StyleSheet.create({
  resetStyleModal: {
    margin: 0,
    padding: 0,
    // paddingLeft: sizes.base * 2,
    paddingHorizontal: sizes.base,
  },
  viewOpacity: {
    opacity: 0,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    // width: DEVICE.SCREEN_WIDTH,
    // paddingBottom: BOTTOM_SPACE,
    // borderTopLeftRadius: sizes.radius * 3,
    // borderTopRightRadius: sizes.radius * 3,
  },
});
