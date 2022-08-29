import React, { useEffect, useState } from 'react';
import { Div, Text, Container, Touch, AppLoading } from '@components';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { useLoginMutation } from '@graphql';
import { Formik } from 'formik';
import { colors, sizes } from '@theme';
import * as yup from 'yup';
import { loginAction } from '@store/actions';
import { useDispatch } from 'react-redux';
import { DEVICE } from '@const';
import { fonts } from '@assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getItem, multiGet, multiSet } from '@utils';

const { SCREEN_HEIGHT } = DEVICE;

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Vui lòng nhập tên đăng nhập'),
  stallCode: yup.string().required('Vui lòng nhập mã gian hàng'),
  password: yup
    .string()
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Vui lòng nhập mật khẩu'),
});

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { loading }] = useLoginMutation({
    onCompleted(data) {
      if (data.login.token?.length) {
        saveInfoLogin();
        dispatch(loginAction(data.login.token ?? ''));
      } else {
        Alert.alert(data.login.message);
      }
    },
    onError(error) {
      Alert.alert(error.message);
    },
  });

  const [isSave, setIsSave] = useState(false);
  const [variablesLogin, setVariablesLogin] = useState({
    username: '',
    password: '',
    stallCode: '',
  });
  const saveInfoLogin = async () => {
    const _variablesLogin = JSON.stringify(variablesLogin);
    await multiSet([
      ['isSaveInfoLogin', 'true'],
      ['variablesLogin', _variablesLogin],
    ]);
  };

  const getInfoLogin = async () => {
    const _multiGetInfo = await multiGet(['variablesLogin', 'isSaveInfoLogin']);
    _multiGetInfo?.map((value) => {
      if (value[0] === 'variablesLogin') {
        setVariablesLogin(JSON.parse(value[1] || ''));
      } else {
        const _isSave = value[1];
        if (_isSave === 'true') {
          setIsSave(true);
        } else {
          setIsSave(false);
        }
      }
    });
  };
  const onSubmitLogin = (variables: { username: string; password: string; stallCode: string }) => {
    setVariablesLogin(variables);
    login({ variables });
  };

  useEffect(() => {
    getInfoLogin();
  }, []);

  return (
    <Container pb={0}>
      <Div flex={1} padding={sizes.base * 2} blue>
        <Text h1 bold center white>
          Đăng nhập
        </Text>
        <Div mt={sizes.base * 2} flex={1}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={variablesLogin}
            validateOnBlur
            enableReinitialize
            onSubmit={onSubmitLogin}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
              <Div height={SCREEN_HEIGHT / 2} white padding={sizes.base} radius={sizes.radius}>
                <Div mt={sizes.base * 2}>
                  <Text blue header semibold>
                    Mã gian hàng
                  </Text>
                  <Div
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    pl={sizes.base}
                    height={sizes.base * 5}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="stallCode"
                      onChangeText={handleChange('stallCode')}
                      onBlur={handleBlur('stallCode')}
                      value={values.stallCode}
                      returnKeyType="next"
                      autoCapitalize="characters"
                      style={styles.textInput}
                      allowFontScaling={false}
                      placeholderTextColor={colors.borderGray}
                    />
                  </Div>
                  <Div mt={sizes.base / 2}>
                    <Text caption italic pink medium>
                      {errors.stallCode && errors.stallCode}
                    </Text>
                  </Div>
                </Div>
                <Div>
                  <Text blue header semibold>
                    Tên đăng nhập
                  </Text>
                  <Div
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    pl={sizes.base}
                    height={sizes.base * 5}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="username"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      returnKeyType="next"
                      autoCapitalize="none"
                      style={styles.textInput}
                      allowFontScaling={false}
                      placeholderTextColor={colors.borderGray}
                    />
                  </Div>
                  <Div mt={sizes.base / 2}>
                    <Text caption italic pink medium>
                      {errors.username && errors.username}
                    </Text>
                  </Div>
                </Div>
                <Div>
                  <Text blue header semibold>
                    Mật khẩu
                  </Text>
                  <Div
                    mt={sizes.base}
                    borderWidth={1}
                    radius={sizes.radius}
                    pl={sizes.base}
                    height={sizes.base * 5}
                    borderColor={colors.borderGray}>
                    <TextInput
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                      returnKeyType="done"
                      onSubmitEditing={handleSubmit}
                      style={styles.textInput}
                      allowFontScaling={false}
                      placeholderTextColor={colors.borderGray}
                    />
                  </Div>
                  <Div mt={sizes.base / 2}>
                    <Text caption italic pink medium>
                      {errors.password && errors.password}
                    </Text>
                  </Div>
                </Div>
                <Div row center middle>
                  <Div width={sizes.base * 3} height={sizes.base * 3} mr={sizes.base}>
                    <Touch onPress={() => setIsSave(!isSave)}>
                      {isSave ? (
                        <Icon
                          name="check-circle-outline"
                          size={sizes.base * 3}
                          color={colors.blue}
                        />
                      ) : (
                        <Icon
                          name="radio-button-unchecked"
                          size={sizes.base * 3}
                          color={colors.gray}
                        />
                      )}
                    </Touch>
                  </Div>
                  <Text>Lưu thông tin đăng nhập</Text>
                </Div>
                <Div height={sizes.base * 5} mt={sizes.base * 2}>
                  <Touch onPress={handleSubmit} disabled={!isValid}>
                    <Div blue padding={sizes.base} radius={sizes.radius} center middle flex={1}>
                      <Text header white semibold>
                        Đăng nhập
                      </Text>
                    </Div>
                  </Touch>
                </Div>
              </Div>
            )}
          </Formik>
        </Div>
      </Div>
      {loading && <AppLoading />}
    </Container>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
});
