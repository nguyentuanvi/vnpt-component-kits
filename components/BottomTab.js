import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StyleSheet, View ,Text} from 'react-native';
// import { Colors, Spacing, Text } from '../..';

import React from 'react';
// import radius from '../../radius';
const Tab = createBottomTabNavigator();

const Navigator = ({
    features,
    defaultTabPress = undefined,
    initialRouteName,
    initialParams,
    tabBarOptions,
}) => {
    const TabScreens = features.map((feature, index) => {
        const {
            name,
            code,
            icon,
            iconActive,
            iconInactive,
            iconLabel,
            component,
            tabName,
            iconActiveTintColor = '#2B2B2B',
            styleLabelActive = {
                color: iconActiveTintColor ? iconActiveTintColor : '#2B2B2B',
                fontSize: 12,
            },
            styleLabelInactive = {
                color: '#aeb5ba',
                fontSize: 12,
            },
            styleIconLabel = {
                width: 24,
                height: 14,
                resizeMode: 'contain',
                position: 'absolute',
                top: -3,
                left: 10,
            },
            onTabPress,
            notificationNumber,
            notificationDot,
        } = feature;
        const label = tabName ? Localization.getLocalize(tabName) : name;
        return (
            <Tab.Screen
                key={code}
                name={code}
                component={component}
                initialParams={initialParams}
                listeners={{
                    tabPress: () => {
                        if (typeof defaultTabPress == 'function') {
                            defaultTabPress(feature, index);
                        } else if (typeof onTabPress == 'function') {
                            onTabPress(feature, index);
                        }
                    },
                }}
                tabStyle={{backgroundColor:'red'}}
                options={{
                    // tabBarLabel: (props) => {
                    //     const styleLabel = props.focused
                    //         ? styleLabelActive
                    //         : styleLabelInactive;
                    //     return (
                    //         <Text
                    //             weight={props.focused ? 'bold' : 'medium'}
                    //             style={styleLabel}>
                    //             {label}
                    //         </Text>
                    //     );
                    // },
                    tabBarIcon: (props) => {
                        const source = props.focused
                            ? { uri: iconActive || icon }
                            : { uri: iconInactive || icon };
                        const iconStyle = props.focused
                            ? { tintColor: iconActiveTintColor }
                            : { tintColor: '#aeb5ba' };
                        const formatNumber =
                            notificationNumber > 99
                                ? '99+'
                                : notificationNumber;
                        return (
                            <View >
                                <Image
                                    source={source}
                                    style={[iconStyle, styles.icon]}
                                />
                                {!!iconLabel ? (
                                    <Image
                                        source={{ uri: iconLabel }}
                                        style={styleIconLabel}
                                    />
                                ) : null}
                                {notificationNumber && notificationNumber > 0 && (
                                    <View style={styles.notification}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 12,
                                            }}>
                                            {formatNumber}
                                        </Text>
                                    </View>
                                )}
                                {notificationDot && (
                                    <View style={styles.notificationDot}></View>
                                )}
                            </View>
                        );
                    },
                }}
            />
        );
    });

    return (
        <Tab.Navigator
            initialRouteName={initialRouteName}
            backBehavior={'none'}
            tabBarOptions={{
                backBehavior: 'none',
                keyboardHidesTabBar: Platform.OS === 'android',
                tabStyle: {
                    paddingVertical: 6,
                    // borderTopWidth: 0.2,
                    // borderTopColor: 'black',
                    // backgroundColor:'blue',
                },
                ...tabBarOptions,
            }}>
            {TabScreens}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        paddingBottom: 5,
    },
    notification: {
        maxWidth: 25,
        minWidth: 25,
        height: 16,
        paddingHorizontal: 3,
        backgroundColor: 'red',
        borderRadius: 5,
        position: 'absolute',
        left: '20%',
        top: -4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationDot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        backgroundColor: 'red',
        position: 'absolute',
        right: -2,
        top: -2,
    },
});

export default Navigator;
