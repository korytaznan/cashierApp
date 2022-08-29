import { Container, Div, Divider, Text, Touch } from '@components';
import { DEVICE, SCREEN_NAME } from '@const';
import { colors, sizes } from '@theme';
import { navigate } from '@utils';
import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Revenue: React.FC = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isStartDate, setIsStartDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onShowDatePicker = (_isStartDate: boolean) => {
    setIsStartDate(_isStartDate);
    setOpenDatePicker(true);
  };
  const onConfirmDatePicker = (date: Date) => {
    isStartDate ? setStartDate(date) : setEndDate(date);
    setOpenDatePicker(false);
  };
  const onPressSearch = () => {
    navigate(SCREEN_NAME.REVENUE_BY_DATE, {
      startDate,
      endDate,
    });
  };
  return (
    <Container isHeader title="Doanh thu" isDrawer isBack>
      <Div padding={sizes.base * 2}>
        <Text semibold header>
          Từ ngày
        </Text>
        <Div
          width={DEVICE.SCREEN_WIDTH - sizes.base * 4}
          height={sizes.base * 5}
          radius={sizes.radius}
          borderWidth={1}
          mt={sizes.base}
          borderColor={colors.borderGray}>
          <Touch onPress={() => onShowDatePicker(true)}>
            <Div row flex={1}>
              <Div flex={1} middle pl={sizes.base}>
                <Text medium>{moment(startDate).format('DD/MM/YYYY')}</Text>
              </Div>
              <Div row lightGray center pr={sizes.base}>
                <Divider vertical mr={sizes.base} />
                <Icon name="calendar-today" size={sizes.base * 3} color={colors.gray} />
              </Div>
            </Div>
          </Touch>
        </Div>
        <Div mt={sizes.base * 2}>
          <Text semibold header>
            Đến ngày
          </Text>
        </Div>
        <Div
          width={DEVICE.SCREEN_WIDTH - sizes.base * 4}
          height={sizes.base * 5}
          radius={sizes.radius}
          borderWidth={1}
          mt={sizes.base}
          borderColor={colors.borderGray}>
          <Touch onPress={() => onShowDatePicker(false)}>
            <Div row flex={1}>
              <Div flex={1} middle pl={sizes.base}>
                <Text medium>{moment(endDate).format('DD/MM/YYYY')}</Text>
              </Div>
              <Div row lightGray center pr={sizes.base}>
                <Divider vertical mr={sizes.base} />
                <Icon name="calendar-today" size={sizes.base * 3} color={colors.gray} />
              </Div>
            </Div>
          </Touch>
        </Div>
        <Div
          width={DEVICE.SCREEN_WIDTH - sizes.base * 4}
          height={sizes.base * 5}
          radius={sizes.radius}
          mt={sizes.base * 3}
          blue>
          <Touch onPress={onPressSearch}>
            <Div center middle flex={1}>
              <Text white semibold header>
                Tìm kiếm
              </Text>
            </Div>
          </Touch>
        </Div>
      </Div>
      <DatePicker
        modal
        mode="date"
        title={null}
        open={openDatePicker}
        date={startDate}
        onConfirm={onConfirmDatePicker}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
    </Container>
  );
};
