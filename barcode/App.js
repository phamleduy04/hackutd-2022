import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";
// import List from './List.jsx'

const dataRes = {
  "GCTU4H9X584U2MKY": {
    items: [
        {
            "UPC": 1010100,
            "Name": "REDBULL",
            "Price": 10,
            "Quantity": 1
        },
        {
            "UPC": 102353456,
            "Name": "Donuts",
            "Price": 5,
            "Quantity": 10
        },
        {
            "UPC": 10900356,
            "Name": "Coffee",
            "Price": 15.14,
            "Quantity": 5
        }
    ]
  },
  "221941775017900445": {
    items: [
        {
            "UPC": 1231234,
            "Name": "Coke",
            "Price": 1.99,
            "Quantity": 1
        },
        {
            "UPC": 123719542,
            "Name": "Chips",
            "Price": 2.99,
            "Quantity": 5
        }
    ],

  }
}

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      const recieptData = dataRes[data];
      if (!recieptData) return alert('No data found for this barcode');
      recieptData.items.map(obj => {
        alert(`Item: ${obj.Name}. Price: $${obj.Price}. Qty: ${obj.Quantity}`);
        // <List id={Math.random()} name={obj.Name} price={obj.Price} qty={obj.Quantity}/>
      })
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  return (
    <View style={styles.container}>
      {!scanned && (
      <BarCodeScanner
        id="scanner"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />)}
      
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
