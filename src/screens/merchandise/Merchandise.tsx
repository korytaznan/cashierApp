import { Container, Div, Divider, Text, Touch } from '@components';
import { Merchandise as MerchandiseItem, useGetMerchandiseQuery } from '@graphql';
import { colors, sizes } from '@theme';
import React from 'react';
import { FlatList } from 'react-native';
import { formatMoney, navigate } from '@utils';
import { BOTTOM_SPACE, SCREEN_NAME } from '@const';
import { RootStackParamList } from '@navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Merchandise: React.FC = () => {
  const { data, refetch } = useGetMerchandiseQuery();
  const mapMerchandiseType = {
    merchandise: 'Hàng hoá',
    finished: 'Thành phẩm',
    materials: 'Nguyên vật liệu',
  };
  const renderItem = (item: MerchandiseItem | null, index: number) => {
    return (
      <Div
        flex={1}
        // height={sizes.base * 14}
        mt={index === 0 ? sizes.base * 2 : 0}
        borderWidth={1}
        borderColor={colors.borderGray}
        radius={sizes.radius}
        overflow="hidden"
        mb={sizes.base * 2}>
        <Touch activeOpacity={0.7}>
          <Div padding={sizes.base} right green>
            <Text bold header white>
              {item?.merchandiseCode}
            </Text>
          </Div>
          <Divider />
          <Div flex={1} padding={sizes.base} white>
            <Text title blue>
              Tên:{' '}
              <Text title blue semibold>
                {item?.merchandiseName}
              </Text>
            </Text>
            <Div row mt={sizes.base / 2} mb={sizes.base / 2}>
              <Div flex={1}>
                <Text>
                  {'Nhóm: '}
                  <Text semibold>{`${item?.group}`}</Text>
                </Text>
              </Div>
              <Div>
                <Text>
                  {'DVT: '}
                  <Text semibold>{`${item?.unit}`}</Text>
                </Text>
              </Div>
            </Div>
            <Div flex={1} row>
              <Div flex={1}>
                <Text semibold>
                  {
                    //@ts-ignore
                    mapMerchandiseType[item?.type ?? 'finished']
                  }
                </Text>
              </Div>
              <Text>
                {'Giá: '}
                <Text pink semibold>
                  {formatMoney(item?.price ?? 0)}
                </Text>
              </Text>
            </Div>
          </Div>
        </Touch>
      </Div>
    );
  };
  return (
    <Container title="Hàng hoá" isHeader isBack pb={0} lightGray>
      <Div flex={1} pl={sizes.base * 2} pr={sizes.base * 2}>
        <FlatList
          data={data?.getMerchandise ?? []}
          bounces={false}
          keyExtractor={(item) => item?.id ?? ''}
          renderItem={({ item, index }) => renderItem(item, index)}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </Div>
      <Div
        flex={0.06}
        padding={[sizes.base * 2, sizes.base * 2, BOTTOM_SPACE, sizes.base * 2]}
        white
        radius={sizes.radius * 4}
        shadow>
        <Touch
          onPress={() => navigate(SCREEN_NAME.ADD_MERCHANDISE, { refetch })}
          activeOpacity={0.7}>
          <Div flex={1} blue radius={sizes.radius} center middle>
            <Text white bold header>
              Thêm
            </Text>
          </Div>
        </Touch>
      </Div>
    </Container>
  );
};
