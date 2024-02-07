import { View, StyleSheet } from 'react-native';

function Contact() {
    return(
        <View className="contact">
        <a href="https://github.com/pablovicho/connect4" target="_blank" rel="noreferrer">
          <img style={[]} src={"github.png"} alt="github"
            className="logo"
            // style={{ height: "45px" }}
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/pablovicho/" target="_blank" rel="noreferrer">
          <img className="logo" alt="linkedin" src="linkedin.png"></img>
        </a>
      </View>
    )
}

const styles = StyleSheet.create({});

export default Contact