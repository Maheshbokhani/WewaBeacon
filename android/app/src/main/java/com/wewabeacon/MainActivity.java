package com.wewabeacon;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "WewaBeacon";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()){
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Bundle initialProperties = new Bundle();
                initialProperties.putString("value","Im the first var");
                return super.getLaunchOptions();
            }
        };
    }
}
