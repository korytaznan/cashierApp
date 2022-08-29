import React, { FC } from 'react';
import { Container, Div, Text, Touch } from '@components';
import { colors, sizes } from '@theme';
import { Formik } from 'formik';
import { Alert, TextInput } from 'react-native';
import { useCreateUnitMerchandiseMutation } from '@graphql';
import { goBack } from '@utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';

export const AddUnitMerchandise: FC<
  NativeStackScreenProps<RootStackParamList, 'ADD_UNIT_MERCHANDISE'>
> = ({ route }) => {
  const [createUnitMerchandise] = useCreateUnitMerchandiseMutation({
    onCompleted(data) {
      if (data.createUnitMerchandise.success) {
        route.params?.refetchUnit && route.params?.refetchUnit();
        goBack();
      }
    },
    onError(error) {
      Alert.alert('error', error.message);
    },
  });

  return (
    <Container isHeader title="Thêm nhóm hàng hoá" isRightClose>
      <Div padding={sizes.base * 2} flex={1}>
        <Formik
          initialValues={{ unitCode: '', unitName: '', description: '' }}
          validateOnBlur
          onSubmit={(variables) => createUnitMerchandise({ variables })}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Div flex={1}>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Mã đơn vị
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Mã đơn vị"
                    onChangeText={handleChange('unitCode')}
                    onBlur={handleBlur('unitCode')}
                    value={values.unitCode}
                    returnKeyType="next"
                  />
                </Div>
              </Div>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Tên đơn vị
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Tên đơn vị"
                    onChangeText={handleChange('unitName')}
                    onBlur={handleBlur('unitName')}
                    value={values.unitName}
                    returnKeyType="next"
                  />
                </Div>
              </Div>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Mô tả
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  height={sizes.base * 14}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Mô tả"
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                    multiline
                  />
                </Div>
              </Div>
              <Touch onPress={handleSubmit}>
                <Div
                  padding={sizes.base}
                  blue
                  radius={sizes.radius}
                  center
                  middle
                  mt={sizes.base * 2}>
                  <Text header white semibold>
                    Thêm
                  </Text>
                </Div>
              </Touch>
            </Div>
          )}
        </Formik>
      </Div>
    </Container>
  );
};
