import { Container, Div, Text } from '@components';
import React, { FC } from 'react';
import { Formik } from 'formik';
import { colors, sizes } from '@theme';
import { Alert, TextInput, TouchableOpacity } from 'react-native';
import { useCreateTableMutation } from '@graphql';
import { goBack } from '@utils';

export const AddTable: FC = () => {
  const [createTable, { loading }] = useCreateTableMutation({
    onCompleted(data) {
      if (data.createTable.success) {
        goBack();
      }
    },
    onError(error) {
      Alert.alert(error.message);
    },
  });
  const onPressCreate = (values: { name: string; fromNumber: string; toNumber: string }) => {
    const fromNumber = Number(values.fromNumber);
    const toNumber = Number(values.toNumber);
    const name = values.name;
    if (!values.fromNumber.length) {
      return createTable({
        variables: {
          tableCode: name.length
            ? `Ban_${name}_${values.toNumber}`.toUpperCase()
            : `Ban_${values.toNumber}`.toUpperCase(),
          tableName: name.length ? `Bàn ${name} ${values.toNumber}` : `Bàn ${values.toNumber}`,
          used: true,
          description: '',
        },
      });
    }
    if (!values.toNumber.length) {
      return createTable({
        variables: {
          tableCode: name.length
            ? `Ban_${name}_${values.fromNumber}`.toUpperCase()
            : `Ban_${values.fromNumber}`.toUpperCase(),
          tableName: name.length ? `Bàn ${name} ${values.fromNumber}` : `Bàn ${values.fromNumber}`,
          used: true,
          description: '',
        },
      });
    }
    for (let index = fromNumber; index <= toNumber; index++) {
      let stringIndex = index < 10 ? `0${index}` : index;
      const tableCode = name.length ? `Ban_${name}_${stringIndex}` : `Ban_${stringIndex}`;
      const tableName = name.length ? `Bàn ${name} ${stringIndex}` : `Bàn ${stringIndex}`;
      createTable({
        variables: {
          tableCode: tableCode.toUpperCase(),
          tableName: tableName,
          used: true,
          description: '',
        },
      });
    }
  };
  return (
    <Container isHeader title="Thêm bàn" isRightClose>
      <Div padding={sizes.base * 2}>
        <Formik
          initialValues={{ name: '', fromNumber: '', toNumber: '' }}
          validateOnBlur
          onSubmit={onPressCreate}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Ký hiệu
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Ký hiệu"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    returnKeyType="next"
                  />
                </Div>
              </Div>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Từ số
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Từ số"
                    onChangeText={handleChange('fromNumber')}
                    onBlur={handleBlur('fromNumber')}
                    value={values.fromNumber}
                    returnKeyType="next"
                  />
                </Div>
              </Div>
              <Div mt={sizes.base * 2}>
                <Text blue header semibold>
                  Đến số
                </Text>
                <Div
                  padding={[sizes.base, 0, sizes.base, sizes.base]}
                  mt={sizes.base}
                  borderWidth={1}
                  radius={sizes.radius}
                  borderColor={colors.borderGray}>
                  <TextInput
                    placeholder="Đến số"
                    onChangeText={handleChange('toNumber')}
                    onBlur={handleBlur('toNumber')}
                    value={values.toNumber}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                  />
                </Div>
              </Div>

              <TouchableOpacity onPress={handleSubmit}>
                <Div
                  width={'100%'}
                  blue
                  padding={sizes.base}
                  radius={sizes.radius}
                  center
                  middle
                  mt={sizes.base * 2}>
                  <Text header white semibold>
                    Thêm
                  </Text>
                </Div>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </Div>
    </Container>
  );
};
