import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";


  import DATA from "../../src/data/Data.js";
  const { width } = Dimensions.get("window");
  
  const ITEM_WIDTH = width / 2 - 10 * 3;
  
  const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: 10 * 2 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 10 * 4.5,
                    height: 10 * 4.5,
                    borderRadius: 10 * 3,
                    marginRight: 10,
                  }}
                  source={require("../../assets/restaurant/avatar.jpg")}
                />
                <Text
                  style={{
                    fontSize: 10 * 1.7,
                    fontWeight: "800",
                    color:'rgb(70,70,70)',
                  }}
                >
                  Erikaasav
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={{ marginRight: 10 }}>
                  <Ionicons
                    name="notifications-outline"
                    size={35}
                    color={'rgb(70,70,70)'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="menu"
                    size={35}
                    color={'rgb(70,70,70)'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "60%", marginTop: 20 }}>
              <Text style={{ fontSize: 30, fontWeight: "700" }}>
                What would you like to order?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: 'rgb(240,240,240)',
                marginVertical: 30,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Ionicons name="search" color={'rgb(120,120,120)'} size={27} />
              <TextInput
                placeholder="Want to .."
                placeholderTextColor={'rgb(120,120,120)'}
                style={{
                  color:'rgb(120,120,120)',
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
            </View>
            <ScrollView horizontal>
              {DATA.map((category, index) => (
                <TouchableOpacity
                  style={{ marginRight: 30 }}
                  key={index}
                  onPress={() => setActiveCategory(index)}
                >
                  <Text
                    style={[
                      {
                        fontSize: 17,
                        fontWeight: "600",
                        color:'rgb(120,120,120)',
                      },
                      activeCategory === index && {
                        color: 'rgb(70,70,70)',
                        fontWeight: "700",
                        fontSize: 10 * 1.8,
                      },
                    ]}
                  >
                    {category.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginVertical: 10 * 2,
              }}
            >
              {DATA[activeCategory].recipes.map((item) => (
                <TouchableOpacity
                  style={{ width: ITEM_WIDTH, marginBottom: 10 * 2 }}
                  key={item.id}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: ITEM_WIDTH + 10 * 3,
                      borderRadius: 10 * 2,
                    }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontSize: 10 * 2,
                      fontWeight: "700",
                      marginTop: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10 * 1.5,
                      color: 'rgb(120,120,120)',
                      marginVertical: 10 / 2,
                    }}
                  >
                    Today discount {item.discount}
                  </Text>
                  <Text style={{ fontSize: 10 * 2, fontWeight: "700" }}>
                    $ {item.price}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});