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
import com.reactapp.core.models.successTitleDescriptionModel;
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
    successTitleDescriptionModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class successTitleDescriptionModelImpl
    implements successTitleDescriptionModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String successTitleMultifield;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String successColorTitleMultifield;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean checkboxMultifield;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String successDescriptionMultifield;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("successTitleMultifield")
    public String getSuccessTitleMultifield() {
        return successTitleMultifield;
    }

    @Override
    @JsonProperty("successColorTitleMultifield")
    public String getSuccessColorTitleMultifield() {
        return successColorTitleMultifield;
    }

    @Override
    @JsonProperty("checkboxMultifield")
    public Boolean getCheckboxMultifield() {
        return checkboxMultifield;
    }

    @Override
    @JsonProperty("successDescriptionMultifield")
    public String getSuccessDescriptionMultifield() {
        return successDescriptionMultifield;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
