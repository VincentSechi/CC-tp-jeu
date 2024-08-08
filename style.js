import { Platform, StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,     
        flexDirection: 'column',
        justifyContent: "center",
        gap:"20px",
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight},
        })
    },
    scoreContainer:{
        marginBottom: "100px",
        flexDirection: "column",
        alignItems:"center",
        gap:"20px"
    },
    startButton:{
        backgroundColor:"purple",
        borderRadius:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        height:200,
        width:200,
    },
    startingNumber:{
        fontSize: "22px",
        fontWeight: "bold",
    },
    startButtontext:{
        color:"white",
        fontSize: '30px',
        padding:"20px",
    },
    greater:{
        backgroundColor: "green",
        width: 150,
        height: 80,
        borderRadius: "20px",        
        justifyContent: 'center',
        alignItems: 'center',

    },
    lower:{
        backgroundColor: "red",
        width: 150,
        height: 80,
        borderRadius: "20px",        
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText:{
        fontSize: "20px",
        fontWeight: "semibold"
    },
    secret:{
        fontSize: "20px",
        color: "crimson",
        fontWeight: "bold",
    },
    base:{
        fontSize: "20px",
        color: "blue",
        fontWeight: "bold",
    },
    success:{
        color:"green"
    }, 
    fail:{
        color:"red"
    },
    retryButton:{
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 50
    },
    retryButtonText:{
        color:"white",
    }
})