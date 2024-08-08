import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { fetchUsers } from "./api/api";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { UserDetail } from "./components/UserDetail";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const nextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevUser = () => {
    setIsImageLoading(true);

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      if (fetchedUsers) {
        setUsers(fetchedUsers);
      } else {
        setUsers(null);
      }
    };
    getUsers();
  }, []);

  if (users === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Network Error</Text>
      </View>
    );
  }

  if (users.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const user = users[currentIndex];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgb(231, 188, 145)", "rgb(255, 237, 216)"]}
        style={styles.background}
      />
      <View style={styles.imageContainer}>
        {isImageLoading && (
          <Image
            source={require("../assets/stock_avatar.png")}
            style={[styles.image, { zIndex: 2, position: "absolute" }]}
          />
        )}
        <Image
          style={styles.image}
          source={user.avatar}
          cachePolicy={"memory-disk"}
          contentFit="contain"
          onLoadStart={() => setIsImageLoading(true)}
          onLoad={() => setIsImageLoading(false)}
        />
      </View>
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.fields}>
        <UserDetail label="ID" value={user.id} />
        <UserDetail label="UID" value={user.uid} />
        <UserDetail label="Password" value={user.password} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ flex: 1, marginRight: 5, flexDirection: "row" }}>
            <UserDetail label="First Name" value={user.first_name} />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <UserDetail label="Last Name" value={user.last_name} />
          </View>
        </View>

        <UserDetail label="Email" value={user.email} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={prevUser}
          disabled={currentIndex == 0}
        >
          <Text style={styles.buttonText}>Previous User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={nextUser}
          disabled={currentIndex == users.length}
        >
          <Text style={styles.buttonText} disabled={currentIndex == 79}>
            Next User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 25,
    backgroundColor: "rgb(244, 223, 200)",
  },
  imageContainer: {
    shadowColor: "rgb(88, 49, 1)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  background: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  error: {
    fontSize: 40,
    fontWeight: "bold",
  },
  fields: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    zIndex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "rgb(88, 49, 1)",
    borderWidth: 2,
    marginBottom: 10,
    backgroundColor: "rgb(255, 237, 216)",
  },
  username: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
    color: "rgb(88, 49, 1)",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "rgb(96, 56, 8)",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(248, 249, 250)",
  },
});
