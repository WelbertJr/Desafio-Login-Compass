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

package com.reactapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.LoginPage;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    LoginPage.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/login-page")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginPageImpl
    implements LoginPage
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String loginTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String loginParagraph;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image loginLogo;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image loginImage;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String loginButtonColor;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("loginTitle")
    public String getLoginTitle() {
        return loginTitle;
    }

    @Override
    @JsonProperty("loginParagraph")
    public String getLoginParagraph() {
        return loginParagraph;
    }

    @Override
    @JsonProperty("loginLogo")
    public com.adobe.cq.wcm.core.components.models.Image getLoginLogo() {
        return loginLogo;
    }

    @Override
    @JsonProperty("loginImage")
    public com.adobe.cq.wcm.core.components.models.Image getLoginImage() {
        return loginImage;
    }

    @Override
    @JsonProperty("loginButtonColor")
    public String getLoginButtonColor() {
        return loginButtonColor;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
