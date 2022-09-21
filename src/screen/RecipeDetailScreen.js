import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  const { height } = Dimensions.get("window");
  import { Ionicons } from "@expo/vector-icons";

  
  const RecipeDetailScreen = ({ recipe }) => {
    return (
      <>
        <ScrollView>
          <View>
            <ImageBackground
              style={{
                padding: 20,
                height: height / 2.5,
                padding: 20,
                paddingTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              source={recipe.image}
            >
              <TouchableOpacity
                style={{
                  height:45,
                  width:45,
                  backgroundColor: '#fff',
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                }}
              >
              <Ionicons
                  name="arrow-back"
                  size={25}
                  color={'rgb(120,120,120)`'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height:45,
                  width:45,
                  backgroundColor:  '#fff',
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                }}
              >
                <Ionicons name="share" size={25} color={'rgb(120,120,120)`'} />
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                padding: 20,
                paddingTop: 30,
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor:  '#fff',
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 30,
                  alignItems: "center",
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize:30,
                      color:  '#000',
                      fontWeight: "700",
                    }}
                  >
                    {recipe.name}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal:30,
                    backgroundColor: 'rgb(250,230,50)',
                    flexDirection: "row",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="star"
                    color={ '#000'}
                    size={17}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 5,
                      color: '#000',
                    }}
                  >
                    {recipe.rating}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal:20,
                    backgroundColor: 'rgb(240,240,240)',
                    flexDirection: "row",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="time"
                    color={'rgb(120,120,120)'}
                    size={17}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft:5,
                      color: 'rgb(120,120,120)',
                    }}
                  >
                    {recipe.time}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: 'rgb(240,240,240)',
                    flexDirection: "row",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="bicycle"
                    color={'rgb(120,120,120)'}
                    size={17}
                  />
                  <Text
                    style={{
                      fontSize:16,
                      fontWeight: "600",
                      marginLeft: 5,
                      color:'rgb(120,120,120)',
                    }}
                  >
                    {recipe.del_time}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal:20,
                    backgroundColor: 'rgb(240,240,240)',
                    flexDirection: "row",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="restaurant"
                    color={'rgb(120,120,120)'}
                    size={17}
                  />
                  <Text
                    style={{
                      fontSize:16,
                      fontWeight: "600",
                      marginLeft:5,
                      color:'rgb(120,120,120)',
                    }}
                  >
                    {recipe.cooking_time}
                  </Text>
                </View>
              </View>
              <View style={{ marginVertical: 30 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: 'rgb(70,70,70)',
                  }}
                >
                  Ingredients
                </Text>
                {recipe.ingredients.map((ingredient) => (
                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    key={ingredient.id}
                  >
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'rgb(240,240,240)',
                        borderRadius: 10,
                      }}
                    />
                    <Text
                      style={{
                        fontSize:17,
                        fontWeight: "600",
                        color:'rgb(120,120,120)',
                        marginLeft: 10,
                      }}
                    >
                      {ingredient.title}
                    </Text>
                  </View>
                ))}
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color:'rgb(70,70,70)',
                  marginBottom: 10,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize:17,
                  fontWeight: "500",
                  color: 'rgb(120,120,120)',
                }}
              >
                {recipe.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <SafeAreaView>
          <View style={{ padding:20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                padding: 10 * 2,
                backgroundColor: '#000',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize:20,
                  color: '#fff',
                  fontWeight: "700",
                }}
              >
                Choose this for
              </Text>
              <Text
                style={{
                  fontSize:20,
                  color: 'rgb(250,230,50)',
                  fontWeight: "700",
                  marginLeft:5,
                }}
              >
                $ {recipe.price}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  };
  
  export default RecipeDetailScreen;
  
  const styles = StyleSheet.create({});