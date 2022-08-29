import React from 'react';
import { Container, Div, Text, Touch } from '@components';
import { Formik } from 'formik';
import { colors, sizes } from '@theme';
import { Alert, TextInput } from 'react-native';
import { useCreateMerchandiseGroupMutation } from '@graphql';
import { goBack } from '@utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';

export const AddMerchandiseGroup: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ADD_MERCHANDISE_GROUP'>
> = ({ route }) => {
  const [createMerchandiseGroup] = useCreateMerchandiseGroupMutation({
    onCompleted(data) {
      if (data.createMerchandiseGroup.success) {
        route.params?.refetchGroup && route.params?.refetchGroup();
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
          initialValues={{ merchandiseGroupCode: '', merchandiseGroupName: '', description: '' }}
          validateOnBlur
          onSubmit={(variables) => createMerchandiseGroup({ variables })}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Div flex={1}>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Mã nhóm hàng
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Mã nhóm hàng"
                    onChangeText={handleChange('merchandiseGroupCode')}
                    onBlur={handleBlur('merchandiseGroupCode')}
                    value={values.merchandiseGroupCode}
                    returnKeyType="next"
                  />
                </Div>
              </Div>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Tên nhóm hàng
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Tên nhóm hàng"
                    onChangeText={handleChange('merchandiseGroupName')}
                    onBlur={handleBlur('merchandiseGroupName')}
                    value={values.merchandiseGroupName}
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
