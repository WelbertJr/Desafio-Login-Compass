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

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.SuccessPage;
import com.reactapp.core.models.successTitleDescriptionModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    SuccessPage.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/success-page")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SuccessPageImpl
    implements SuccessPage
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image successLogo;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image successImage;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<successTitleDescriptionModel> successTexts;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("successLogo")
    public com.adobe.cq.wcm.core.components.models.Image getSuccessLogo() {
        return successLogo;
    }

    @Override
    @JsonProperty("successImage")
    public com.adobe.cq.wcm.core.components.models.Image getSuccessImage() {
        return successImage;
    }

    @Override
    public List<successTitleDescriptionModel> getSuccessTexts() {
        return successTexts != null ? Collections.unmodifiableList(successTexts) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
