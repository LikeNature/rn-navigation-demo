import {StackNavigationProp } from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer'
export type Drawer = {
  Root : undefined
}

export type TabList = {
  HomeTab : undefined,
  SubTab : undefined
}

export type MainList = {
  HomeScreen: undefined;
  CartScreen : undefined;
  ProfileScreen : { idx : any};
  LoginScreen : {idx : any} | any
  ItemScreen: {idx : any} | any
};

export type SubList= {
  ItemScreen: {idx : any} | any
  CartScreen : undefined,
  HomeScreen : undefined
};

export interface RootParam < RouteName extends keyof Drawer > {
  navigation : DrawerNavigationProp<Drawer, RouteName>
  route : DrawerNavigationProp<Drawer, RouteName>
}

export interface MainParamList<RouteName extends keyof MainList> {
  navigation : StackNavigationProp<MainList, RouteName>
  route : RouteProp<MainList, RouteName>
}

export interface SubParamList<RouteName extends keyof SubList> {
  navigation : StackNavigationProp<SubList, RouteName>
  route : RouteProp<SubList, RouteName>
}

export interface RootList<RouteName extends keyof TabList> {
  navigation : BottomTabNavigationProp<TabList, RouteName>
  route : BottomTabNavigationProp<TabList, RouteName>

}