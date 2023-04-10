/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code LoginPage} Sling Model used for the {@code reactapp/components/login-page} component.
 * 
 */
@ConsumerType
public interface LoginPage
    extends ComponentExporter
{


    @JsonProperty("loginTitle")
    String getLoginTitle();

    @JsonProperty("loginParagraph")
    String getLoginParagraph();

    @JsonProperty("loginLogo")
    com.adobe.cq.wcm.core.components.models.Image getLoginLogo();

    @JsonProperty("loginImage")
    com.adobe.cq.wcm.core.components.models.Image getLoginImage();

    @JsonProperty("loginButtonColor")
    String getLoginButtonColor();

}
