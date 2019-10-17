# Titanium Movie List demo

## How to build and run it yourself

You need to have [Node.js](http://nodejs.org) react-native-cli installed. Moreover you need to have [Xcode 6](https://developer.apple.com/xcode/downloads/) and [Android SDK](http://developer.android.com/sdk/index.html#Other).

Complete the following steps to build and run the app:

1. Download and install [Xcode 10 or higher](https://developer.apple.com/xcode/downloads/)
2. Download and install the [Android SDK](http://developer.android.com/sdk/index.html#Other)
3. Install the react-native-cli with:

```
  npm install -g react-native-cli
```

4. Clone this repository:

```
git clone https://github.com/rewdt/liferithm-assignment.git
```

## if you get an error saying debug.keystore not found

```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

5.  Run the server

```

react-native start

```

then in a new terminal run simultaneously

# for android run

```

react-native run-android

```

# for ios run

```

react-native run-ios

```

```

```
