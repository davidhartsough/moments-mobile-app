import React, { useState } from "react";
import { useHistory } from "react-router-native";
import { BottomNavigation } from "react-native-paper";
import { Calendar, People, Places, Activities } from "./tabs";

const renderScene = BottomNavigation.SceneMap({
  moments: Calendar,
  people: People,
  places: Places,
  activities: Activities
});

const routes = [
  {
    key: "moments",
    title: "Moments",
    icon: "calendar"
  },
  {
    key: "people",
    title: "People",
    icon: "account-multiple"
  },
  {
    key: "places",
    title: "Places",
    icon: "map-marker"
  },
  {
    key: "activities",
    title: "Activities",
    icon: "tag"
  }
];

export default function TabView() {
  const history = useHistory();
  const [index, setIndex] = useState(Number(history.location.hash.charAt(1)));
  const handleIndexChange = index => {
    history.location.hash = `#${index}`;
    setIndex(index);
  };
  return (
    <BottomNavigation
      navigationState={{
        index,
        routes
      }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  );
}
