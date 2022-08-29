import React from 'react';
import { Container, Div, Text, Touch, RadioButton } from '@components';
import { colors, sizes } from '@theme';
import { Formik } from 'formik';
import { Alert, StyleSheet, TextInput } from 'react-native';
import {
  CreateMerchandiseMutationVariables,
  MerchandiseGroup,
  Scalars,
  UnitMerchandise,
  useCreateMerchandiseMutation,
  useGetMerchandiseGroupQuery,
  useGetUnitMerchandiseQuery,
} from '@graphql';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { goBack, navigate } from '@utils';
import { SCREEN_NAME } from '@const';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';

export const AddMerchandise: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ADD_MERCHANDISE'>
> = ({ route }) => {
  const [createMerchandise] = useCreateMerchandiseMutation({
    onCompleted(data) {
      if (data.createMerchandise.success) {
        route.params?.refetch && route.params?.refetch();
        goBack();
      }
    },
    onError(error) {
      Alert.alert(error.message);
    },
  });

  const { data: dataUnit, refetch: refetchUnit } = useGetUnitMerchandiseQuery();
  const { data: dataGroup, refetch: refetchGroup } = useGetMerchandiseGroupQuery();

  const onPressCreate = (variables: CreateMerchandiseMutationVariables) => {
    const _variables: CreateMerchandiseMutationVariables = {
      ...variables,
      price: Number(variables.price),
    };
    createMerchandise({ variables: _variables });
  };

  return (
    <Container isHeader title="Thêm hàng hoá" isRightClose>
      <Div padding={sizes.base * 2} flex={1}>
        <Formik
          initialValues={{
            merchandiseCode: '',
            merchandiseName: '',
            description: '',
            group: '',
            type: 'finished',
            unit: '',
            price: 0,
          }}
          validateOnBlur
          onSubmit={onPressCreate}>
          {({ handleChange, handleBlur, handleSubmit, values, setValues }) => {
            return (
              <Div flex={1}>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Mã hàng
                  </Text>
                  <Div
                    padding={[sizes.base, 0, sizes.base, sizes.base]}
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="Mã hàng"
                      onChangeText={handleChange('merchandiseCode')}
                      onBlur={handleBlur('merchandiseCode')}
                      value={values.merchandiseCode}
                      returnKeyType="next"
                    />
                  </Div>
                </Div>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Tên hàng
                  </Text>
                  <Div
                    padding={[sizes.base, 0, sizes.base, sizes.base]}
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="Tên hàng"
                      onChangeText={handleChange('merchandiseName')}
                      onBlur={handleBlur('merchandiseName')}
                      value={values.merchandiseName}
                      returnKeyType="next"
                    />
                  </Div>
                </Div>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Nhóm hàng
                  </Text>
                  <Div row mt={sizes.base} space="between">
                    <Div
                      width={'88%'}
                      borderWidth={1}
                      overflow="hidden"
                      radius={sizes.radius}
                      borderColor={colors.borderGray}>
                      <SelectDropdown
                        data={dataGroup?.getMerchandiseGroup ?? []}
                        onSelect={(item: MerchandiseGroup) =>
                          setValues({
                            ...values,
                            group: item?.merchandiseGroupName ?? '',
                          })
                        }
                        buttonTextAfterSelection={(selectedItem) => {
                          return selectedItem.merchandiseGroupName;
                        }}
                        rowTextForSelection={(item) => {
                          return item.merchandiseGroupName;
                        }}
                        renderCustomizedRowChild={(item: MerchandiseGroup) => {
                          return <Text>{item?.merchandiseGroupName ?? ''}</Text>;
                        }}
                        renderCustomizedButtonChild={(item: MerchandiseGroup) => {
                          return <Text>{item?.merchandiseGroupName ?? 'Chọn nhóm hàng'}</Text>;
                        }}
                        search
                        buttonStyle={styles.dropdown}
                        renderDropdownIcon={() => {
                          return (
                            <Icon
                              name="arrow-drop-down"
                              size={sizes.base * 3}
                              color={colors.gray}
                            />
                          );
                        }}
                        dropdownOverlayColor={colors.blackOpacity}
                        renderSearchInputRightIcon={() => {
                          return <Icon name="search" size={sizes.base * 2} color={colors.gray} />;
                        }}
                      />
                    </Div>
                    <Div width={sizes.base * 4} height={sizes.base * 4} blue radius={sizes.radius}>
                      <Touch
                        activeOpacity={0.7}
                        onPress={() =>
                          navigate(SCREEN_NAME.ADD_MERCHANDISE_GROUP, { refetchGroup })
                        }>
                        <Div center middle flex={1}>
                          <Icon name="add" size={sizes.base * 3} color={colors.white} />
                        </Div>
                      </Touch>
                    </Div>
                  </Div>
                </Div>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Đơn vị tính
                  </Text>
                  <Div row mt={sizes.base} space="between">
                    <Div
                      width={'88%'}
                      borderWidth={1}
                      overflow="hidden"
                      radius={sizes.radius}
                      borderColor={colors.borderGray}>
                      <SelectDropdown
                        data={dataUnit?.getUnitMerchandise ?? []}
                        onSelect={(item: UnitMerchandise) =>
                          setValues({
                            ...values,
                            unit: item?.unitName ?? '',
                          })
                        }
                        buttonTextAfterSelection={(selectedItem: UnitMerchandise) => {
                          return selectedItem?.unitName ?? '';
                        }}
                        rowTextForSelection={(item: UnitMerchandise) => {
                          return item?.unitName ?? '';
                        }}
                        renderCustomizedRowChild={(item: UnitMerchandise) => {
                          return <Text>{item?.unitName ?? ''}</Text>;
                        }}
                        renderCustomizedButtonChild={(item: UnitMerchandise) => {
                          return <Text>{item?.unitName ?? 'Chọn đơn vị tính'}</Text>;
                        }}
                        search
                        buttonStyle={styles.dropdown}
                        renderDropdownIcon={() => {
                          return (
                            <Icon
                              name="arrow-drop-down"
                              size={sizes.base * 3}
                              color={colors.gray}
                            />
                          );
                        }}
                        dropdownOverlayColor={colors.blackOpacity}
                        renderSearchInputRightIcon={() => {
                          return <Icon name="search" size={sizes.base * 2} color={colors.gray} />;
                        }}
                      />
                    </Div>
                    <Div width={sizes.base * 4} height={sizes.base * 4} blue radius={sizes.radius}>
                      <Touch
                        activeOpacity={0.7}
                        onPress={() => navigate(SCREEN_NAME.ADD_UNIT_MERCHANDISE, { refetchUnit })}>
                        <Div center middle flex={1}>
                          <Icon name="add" size={sizes.base * 3} color={colors.white} />
                        </Div>
                      </Touch>
                    </Div>
                  </Div>
                </Div>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Giá
                  </Text>
                  <Div
                    padding={[sizes.base, 0, sizes.base, sizes.base]}
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="Giá"
                      onChangeText={handleChange('price')}
                      onBlur={handleBlur('price')}
                      value={values.price?.toString()}
                      returnKeyType="next"
                      clearTextOnFocus
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
                      value={values.description ?? ''}
                      returnKeyType="done"
                      onSubmitEditing={handleSubmit}
                      multiline
                    />
                  </Div>
                </Div>
                <Div pt={sizes.base * 2} wrap="wrap" flex={0.3}>
                  <RadioButton
                    row
                    data={[
                      { key: 'merchandise', name: 'Hàng hoá' },
                      { key: 'finished', name: 'Thành phẩm' },
                      { key: 'materials', name: 'Nguyên vật liệu' },
                    ]}
                    //@ts-ignore
                    onSelect={(selected: { key: Scalars['TypeMerchandise']; name: string }) =>
                      setValues({
                        ...values,
                        type: selected.key,
                      })
                    }
                    selected={values.type}
                  />
                </Div>
                <Touch onPress={handleSubmit}>
                  <Div
                    padding={sizes.base}
                    blue
                    radius={sizes.radius}
                    center
                    middle
                    mt={sizes.base}>
                    <Text header white semibold>
                      Thêm
                    </Text>
                  </Div>
                </Touch>
              </Div>
            );
          }}
        </Formik>
      </Div>
    </Container>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    borderWidth: 0,
    borderRadius: sizes.radius,
    height: sizes.base * 4,
    backgroundColor: colors.white,
  },
});
