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

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.ErrorPage;
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
    ErrorPage.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/error-page")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ErrorPageImpl
    implements ErrorPage
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long errorTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorParagraph;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorButtonColor;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("errorTitle")
    public Long getErrorTitle() {
        return errorTitle;
    }

    @Override
    @JsonProperty("errorParagraph")
    public String getErrorParagraph() {
        return errorParagraph;
    }

    @Override
    @JsonProperty("errorButtonColor")
    public String getErrorButtonColor() {
        return errorButtonColor;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
