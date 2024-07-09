import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, focused, name, activeBgColor }) => {
  return (
    <View
      style={{
        backgroundColor: focused ? activeBgColor : "transparent",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        padding: 8,
        rowGap: 20,
        width: 100,
        paddingHorizontal: 10,
        borderRadius: 20,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: color,
          width: 24,
          height: 24,
        }}
      />
      <Text
        style={{
          color: color,
          fontSize: 12,
        }}
        className={`${focused ? "font-lblack" : "font-lregular"}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = ({}) => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          //   tabBarActiveBackgroundColor: "#BBF246",
          //   tabBarActiveTintColor: "#192126",
          //   tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle: {
            backgroundColor: "#192126",
            borderRadius: 50,
            height: 84,
            margin: "auto",
            marginBottom: 10,
            width: "90%",
          },
          // tabBarIconStyle: {},
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={focused ? "#192126" : "#FFFFFF"}
                focused={focused}
                name="Home"
                icon={icons.home}
                activeBgColor="#BBF246"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={focused ? "#192126" : "#FFFFFF"}
                focused={focused}
                name="Explore"
                icon={icons.explore}
                activeBgColor="#BBF246"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
