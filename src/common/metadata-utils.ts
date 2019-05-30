export class MetadataUtils {

  // Describe packageXml <=> metadata folder correspondance
  static describeMetadataTypes() {

    // folder is the corresponding folder in metadatas folder 
    // nameSuffixList are the files and/or folder names , built from the name of the package.xml item ( in <members> )

    const metadataTypesDescription = {
      // Metadatas to use for copy
      'AccountRelationshipShareRule': { folder: 'accountRelationshipShareRules', nameSuffixList: ['.accountRelationshipShareRule'], sfdxNameSuffixList: ['.accountRelationshipShareRule'] },
      'ActionLinkGroupTemplate': { folder: 'actionLinkGroupTemplates', nameSuffixList: ['.actionLinkGroupTemplate'], sfdxNameSuffixList: ['.actionLinkGroupTemplate'] },
      'AnalyticSnapshot': { folder: 'analyticSnapshots', nameSuffixList: ['.analyticsnapshot'], sfdxNameSuffixList: ['.analyticsnapshot'] },
      'AnimationRule': { folder: 'animationRules', nameSuffixList: ['.animationRule'], sfdxNameSuffixList: ['.animationRule'] },
      'ApexClass': { folder: 'classes', nameSuffixList: ['.cls', '.cls-meta.xml'], sfdxNameSuffixList: ['.cls', '-meta.xml'] },
      'ApexPage': { folder: 'pages', nameSuffixList: ['.page', '.page-meta.xml'], sfdxNameSuffixList: ['.page', '-meta.xml'] },
      'ApexComponent': { folder: 'components', nameSuffixList: ['.component', '.component-meta.xml'], sfdxNameSuffixList: ['.component', '.component-meta.xml'] },
      'ApexTestSuite': { folder: 'testSuites', nameSuffixList: ['.testSuite'], sfdxNameSuffixList: ['.testSuite'] },
      'ApexTrigger': { folder: 'triggers', nameSuffixList: ['.trigger', '.trigger-meta.xml'], sfdxNameSuffixList: ['.trigger', '-meta.xml'] },
      'AppMenu': { folder: 'appMenus', nameSuffixList: ['.appMenu'], sfdxNameSuffixList: ['.appMenu'] },
      'ApprovalProcess': { folder: 'approvalProcesses', nameSuffixList: ['.approvalProcess'], sfdxNameSuffixList: ['.approvalProcess'] },
      'AssignmentRules': { folder: 'assignmentRules', nameSuffixList: ['.assignmentRules'], sfdxNameSuffixList: ['-meta.xml'] },
      'Audience': { folder: 'audience', nameSuffixList: ['.audience'], sfdxNameSuffixList: ['.audience'] },
      'AuraDefinitionBundle': { folder: 'aura', nameSuffixList: [''], sfdxNameSuffixList: [''] },
      'AuthProvider': { folder: 'authproviders', nameSuffixList: ['.authprovider'], sfdxNameSuffixList: ['.authprovider'] },
      'AutoResponseRules': { folder: 'autoResponseRules', nameSuffixList: ['.autoResponseRules'], sfdxNameSuffixList: ['.autoResponseRules'] },
      'Bot': { folder: 'bot', nameSuffixList: ['.bot'], sfdxNameSuffixList: ['.bot'] },
      'BrandingSet': { folder: 'brandingSets', nameSuffixList: ['.brandingSet'], sfdxNameSuffixList: ['.brandingSet'] },
      'CallCenter': { folder: 'callCenters', nameSuffixList: ['.callCenter', '.callCenter-meta.xml'], sfdxNameSuffixList: ['.callCenter', '.callCenter-meta.xml'] },
      'CampaignInfluenceModel': { folder: 'campaignInfluenceModels', nameSuffixList: ['.campaignInfluenceModel'], sfdxNameSuffixList: ['.campaignInfluenceModel'] },
      'CaseSubjectParticle': { folder: 'CaseSubjectParticles', nameSuffixList: ['.CaseSubjectParticle'], sfdxNameSuffixList: ['.CaseSubjectParticle'] },
      'Certificate': { folder: 'certs', nameSuffixList: ['.crt'], sfdxNameSuffixList: ['.crt'] },
      'ChatterExtension': { folder: 'chatterExtensions', nameSuffixList: ['.chatterExtension'], sfdxNameSuffixList: ['.chatterExtension'] },
      'CleanDataService': { folder: 'cleanDataServices', nameSuffixList: ['.cleanDataService'], sfdxNameSuffixList: ['.cleanDataService'] },
      'CMSConnectSource': { folder: 'cmsConnectSource', nameSuffixList: ['.cmsConnectSource'], sfdxNameSuffixList: ['.cmsConnectSource'] },
      'Zones': { folder: 'communities', nameSuffixList: ['.community'], sfdxNameSuffixList: ['.community'] },
      'CommunityTemplateDefinition': { folder: 'communityTemplateDefinitions', nameSuffixList: ['.communityTemplateDefinition'], sfdxNameSuffixList: ['.communityTemplateDefinition'] },
      'CommunityThemeDefinition': { folder: 'communityThemeDefinitions', nameSuffixList: ['.communityThemeDefinition'], sfdxNameSuffixList: ['.communityThemeDefinition'] },
      'ConnectedApp': { folder: 'connectedApps', nameSuffixList: ['.connectedApp'], sfdxNameSuffixList: ['.connectedApp'] },
      'ContentAsset': { folder: 'contentassets', nameSuffixList: ['.asset', '.asset-meta.xml'], sfdxNameSuffixList: ['.asset', '.asset-meta.xml'] },
      'CorsWhitelistOrigin': { folder: 'corswhitelistorigins', nameSuffixList: ['.corswhitelistorigin'], sfdxNameSuffixList: ['.corswhitelistorigin'] },
      'CspTrustedSite': { folder: 'cspTrustedSites', nameSuffixList: ['.cspTrustedSite'], sfdxNameSuffixList: ['.cspTrustedSite'] },
      'CustomApplication': { folder: 'applications', nameSuffixList: ['.app'], sfdxNameSuffixList: ['.app-meta.xml'] },
      'CustomApplicationComponent': { folder: 'customApplicationComponents', nameSuffixList: ['.customApplicationComponent'], sfdxNameSuffixList: ['.customApplicationComponent'] },
      'CustomFeedFilter': { folder: 'feedFilters', nameSuffixList: ['.feedFilter'], sfdxNameSuffixList: ['.feedFilter'] },
      'CustomHelpMenuSection': { folder: 'customHelpMenuSections', nameSuffixList: ['.customHelpMenuSection'], sfdxNameSuffixList: ['.customHelpMenuSection'] },
      'CustomLabels': { folder: 'labels', nameSuffixList: ['.labels'], sfdxNameSuffixList: ['.labels'] },
      'CustomNotificationType': { folder: 'notificationtypes', nameSuffixList: ['.notiftype'], sfdxNameSuffixList: ['.notiftype'] },
      'CustomObject': { folder: 'objects', nameSuffixList: ['.object'], sfdxNameSuffixList: ['.object'] },
      'CustomObjectTranslation': { folder: 'objectTranslations', nameSuffixList: ['.objectTranslation'], sfdxNameSuffixList: ['.objectTranslation'] },
      'CustomPageWebLink': { folder: 'weblinks', nameSuffixList: ['.weblink'], sfdxNameSuffixList: ['.weblink'] },
      'CustomPermission': { folder: 'customPermissions', nameSuffixList: ['.customPermission'], sfdxNameSuffixList: ['.customPermission'] },
      'CustomMetadata': { folder: 'customMetadata', nameSuffixList: ['.md'], sfdxNameSuffixList: ['.md-meta.xml'] },
      'CustomSite': { folder: 'sites', nameSuffixList: ['.site'], sfdxNameSuffixList: ['.site-meta.xml'] },
      'CustomTab': { folder: 'tabs', nameSuffixList: ['.tab'], sfdxNameSuffixList: ['.tab-meta.xml'] },
      'Dashboard': { folder: 'dashboards', nameSuffixList: ['.dashboard', '-meta.xml'], sfdxNameSuffixList: ['.dashboard', '-meta.xml'] },      
      'DataCategoryGroup': { folder: 'datacategorygroups', nameSuffixList: ['.datacategorygroup'], sfdxNameSuffixList: ['.datacategorygroup'] },
      'DelegateGroup': { folder: 'delegateGroups', nameSuffixList: ['.delegateGroup'], sfdxNameSuffixList: ['.delegateGroup'] },
      'Document': { folder: 'documents', nameSuffixList: ['', '-meta.xml'], sfdxNameSuffixList: ['.documentFolder-meta.xml'] },
      'DuplicateRule': { folder: 'duplicateRules', nameSuffixList: ['.duplicateRule'], sfdxNameSuffixList: ['.duplicateRule'] },
      'EclairGeoData': { folder: 'eclair', nameSuffixList: ['.geodata'], sfdxNameSuffixList: ['.geodata'] },
      'EmailServicesFunction': { folder: 'emailservices', nameSuffixList: ['.xml'], sfdxNameSuffixList: ['.xml'] },
      'EmailTemplate': { folder: 'email', nameSuffixList: ['.email', '.email-meta.xml', '-meta.xml'], sfdxNameSuffixList: [] },
      'EmbeddedServiceBranding': { folder: 'EmbeddedServiceBranding', nameSuffixList: ['.EmbeddedServiceBranding'], sfdxNameSuffixList: ['.EmbeddedServiceBranding'] },
      'EmbeddedServiceConfig': { folder: 'EmbeddedServiceConfig', nameSuffixList: ['.EmbeddedServiceConfig'], sfdxNameSuffixList: ['.EmbeddedServiceConfig'] },
      'EmbeddedServiceFieldService': { folder: 'EmbeddedServiceFieldService', nameSuffixList: ['.EmbeddedServiceFieldService'], sfdxNameSuffixList: ['.EmbeddedServiceFieldService'] },
      'EmbeddedServiceFlowConfig': { folder: 'EmbeddedServiceFlowConfig', nameSuffixList: ['.EmbeddedServiceFlowConfig'], sfdxNameSuffixList: ['.EmbeddedServiceFlowConfig'] },
      'EmbeddedServiceLiveAgent': { folder: 'EmbeddedServiceLiveAgent', nameSuffixList: ['.EmbeddedServiceLiveAgent'], sfdxNameSuffixList: ['.EmbeddedServiceLiveAgent'] },
      'EntitlementProcess': { folder: 'entitlementProcesses', nameSuffixList: ['.entitlementProcess'], sfdxNameSuffixList: ['.entitlementProcess'] },
      'EntitlementTemplate': { folder: 'entitlementTemplates', nameSuffixList: ['.entitlementTemplate'], sfdxNameSuffixList: ['.entitlementTemplate'] },
      'EscalationRules': { folder: 'escalationRules', nameSuffixList: ['.escalationRules'], sfdxNameSuffixList: ['.escalationRules-meta.xml'] },
      'EventDelivery': { folder: 'eventDeliveries', nameSuffixList: ['.delivery'], sfdxNameSuffixList: ['.delivery'] },
      'EventSubscription': { folder: 'eventSubscriptions', nameSuffixList: ['.subscription'], sfdxNameSuffixList: ['.subscription'] },
      'ExternalDataSource': { folder: 'ExternalDataSource', nameSuffixList: ['.dataSource'], sfdxNameSuffixList: ['.dataSource'] },
      'ExternalServiceRegistration': { folder: 'externalServiceRegistrations', nameSuffixList: ['.externalServiceRegistration'], sfdxNameSuffixList: ['.externalServiceRegistration'] },
      'FlexiPage': { folder: 'flexipages', nameSuffixList: ['.flexipage'], sfdxNameSuffixList: ['.flexipage-meta.xml'] },
      'FlowDefinition': { folder: 'flowDefinitions', nameSuffixList: ['.flowDefinition'], sfdxNameSuffixList: ['.flowDefinition'] },
      'Flow': { folder: 'flows', nameSuffixList: ['.flow'], sfdxNameSuffixList: ['.flow'] },
      'GlobalValueSet': { folder: 'globalValueSets', nameSuffixList: ['.globalValueSet'], sfdxNameSuffixList: ['.globalValueSet-meta.xml'] },
      'GlobalValueSetTranslation': { folder: 'globalValueSetTranslations', nameSuffixList: ['.globalValueSetTranslation'], sfdxNameSuffixList: ['.globalValueSetTranslation-meta.xml'] },
      'Group': { folder: 'groups', nameSuffixList: ['.group'], sfdxNameSuffixList: ['.group'] },
      'HomePageLayout': { folder: 'homePageLayouts', nameSuffixList: ['.homePageLayout'], sfdxNameSuffixList: ['.homePageLayout-meta.xml'] },
      'HomePageComponent': { folder: 'homePageComponents', nameSuffixList: ['.homePageComponent'], sfdxNameSuffixList: ['.homePageComponent-meta.xml'] },
      'Layout': { folder: 'layouts', nameSuffixList: ['.layout'], sfdxNameSuffixList: ['.layout-meta.xml'] },
      'Letterhead': { folder: 'letterhead', nameSuffixList: ['.letter'], sfdxNameSuffixList: ['.letter'] },
      'LightningComponentBundle': { folder: 'lwc', nameSuffixList: [''], sfdxNameSuffixList: [''] },
      'LightningExperienceTheme': { folder: 'lightningExperienceThemes', nameSuffixList: ['.lightningExperienceTheme'], sfdxNameSuffixList: ['.lightningExperienceTheme'] },
      'LiveChatAgentConfig': { folder: 'liveChatAgentConfigs', nameSuffixList: ['.liveChatAgentConfig'], sfdxNameSuffixList: ['.liveChatAgentConfig'] },
      'LiveChatButton': { folder: 'liveChatButtons', nameSuffixList: ['.liveChatButton'], sfdxNameSuffixList: ['.liveChatButton'] },
      'LiveChatDeployment': { folder: 'liveChatDeployments', nameSuffixList: ['.liveChatDeployment'], sfdxNameSuffixList: ['.liveChatDeployment'] },
      'LiveChatSensitiveDataRule': { folder: 'liveChatSensitiveDataRule', nameSuffixList: ['.liveChatSensitiveDataRule'], sfdxNameSuffixList: ['.liveChatSensitiveDataRule'] },
      'ManagedTopics': { folder: 'managedTopics', nameSuffixList: ['.managedTopics'], sfdxNameSuffixList: ['.managedTopics'] },
      'MatchingRule': { folder: 'matchingRules', nameSuffixList: ['.matchingRule'], sfdxNameSuffixList: ['.matchingRule'] },
      'MilestoneType': { folder: 'milestoneTypes', nameSuffixList: ['.milestoneType'], sfdxNameSuffixList: ['.milestoneType'] },
      'NamedCredential': { folder: 'namedCredentials', nameSuffixList: ['.namedCredential'], sfdxNameSuffixList: ['.namedCredential-meta.xml'] },
      'Network': { folder: 'networks', nameSuffixList: ['.network'], sfdxNameSuffixList: ['.network-meta.xml'] },
      'PathAssistant': { folder: 'pathAssistants', nameSuffixList: ['.pathAssistant'], sfdxNameSuffixList: ['.pathAssistant'] },
      'PermissionSet': { folder: 'permissionsets', nameSuffixList: ['.permissionset'], sfdxNameSuffixList: ['.permissionset-meta.xml'] },
      'PlatformCachePartition': { folder: 'cachePartitions', nameSuffixList: ['.cachePartition'], sfdxNameSuffixList: ['.cachePartition-meta.xml'] },
      'PlatformEventChannel': { folder: 'platformEventChannels', nameSuffixList: ['.platformEventChannel'], sfdxNameSuffixList: ['.platformEventChannel'] },
      'Profile': { folder: 'profiles', nameSuffixList: ['.profile'], sfdxNameSuffixList: ['.profile-meta.xml'] },
      'QuickAction': { folder: 'quickActions', nameSuffixList: ['.quickAction'], sfdxNameSuffixList: ['.quickAction-meta.xml'] },
      'Queue': { folder: 'queues', nameSuffixList: ['.queue'], sfdxNameSuffixList: ['.queue'] },
      'RemoteSiteSetting': { folder: 'remoteSiteSettings', nameSuffixList: ['.remoteSite'], sfdxNameSuffixList: ['.remoteSite-meta.xml'] },
      'Report': { folder: 'reports', nameSuffixList: ['', '.report', '-meta.xml'], sfdxNameSuffixList: ['.reportFolder-meta.xml'] },
      'ReportType': { folder: 'reportTypes', nameSuffixList: ['.reportType'], sfdxNameSuffixList: ['.reportType'] },
      'Role': { folder: 'roles', nameSuffixList: ['.role'], sfdxNameSuffixList: ['.role-meta.xml'] },
      'Settings': { folder: 'settings', nameSuffixList: ['.settings'], sfdxNameSuffixList: ['.settings-meta.xml'] },
      'SiteDotCom': { folder: 'siteDotComSites', nameSuffixList: ['.site', '.site-meta.xml'], sfdxNameSuffixList: ['.site', '.site-meta.xml'] },
      'StandardValueSet': { folder: 'standardValueSets', nameSuffixList: ['.standardValueSet-meta.xml', '.standardValueSet'], sfdxNameSuffixList: ['.standardValueSet-meta.xml', '.standardValueSet'] },
      'SharingRules': { folder: 'sharingRules', nameSuffixList: ['.sharingRules'], sfdxNameSuffixList: ['.sharingRules-meta.xml', '.sharingRules'] },
      'StandardValueSetTranslation': { folder: 'standardValueSetTranslations', nameSuffixList: ['.standardValueSetTranslation'], sfdxNameSuffixList: ['.standardValueSetTranslation-meta.xml'] },
      'StaticResource': { folder: 'staticresources', nameSuffixList: ['.resource', '.resource-meta.xml'], sfdxNameSuffixList: ['.resource-meta.xml', '.json', '.txt', '.bin', '.js', '.mp3', '.gif'] },
      'Translations': { folder: 'translations', nameSuffixList: ['.translation'] },
      'Workflow': { folder: 'workflows', nameSuffixList: ['.workflow'], sfdxNameSuffixList: ['.workflow'] },

      // Metadatas to use for building objects folder ( SObjects )
      // 'BusinessProcess': { sobjectRelated: true },
      // 'CompactLayout': { sobjectRelated: true },
      // 'CustomField': { sobjectRelated: true },
      // 'CustomObject': { sobjectRelated: true },
      // 'ListView': { sobjectRelated: true },
      // 'RecordType': { sobjectRelated: true },
      // 'WebLink': { sobjectRelated: true },

      // Special case: Translations, used for object copy and for filtering 
      // 'Translations': { translationRelated: true, folder: 'translations', nameSuffixList: ['.translation'], sfdxNameSuffixList: ['.translation-meta.xml'] },

    }
    return metadataTypesDescription
  }

  // Describe .object file <=> package.xml formats
  static describeObjectProperties() {

    const objectFilteringProperties = [
      // {
      //   objectXmlPropName: 'businessProcesses', packageXmlPropName: 'BusinessProcess', nameProperty: 'fullName', translationNameProperty: 'name',
      //   sfdxNameSuffixList: ['.businessProcess-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'compactLayouts', packageXmlPropName: 'CompactLayout', nameProperty: 'fullName', translationNameProperty: 'layout',
      //   sfdxNameSuffixList: ['.compactLayout-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'fields', packageXmlPropName: 'CustomField', nameProperty: 'fullName', translationNameProperty: 'name',
      //   sfdxNameSuffixList: ['.field-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'listViews', packageXmlPropName: 'ListView', nameProperty: 'fullName', translationNameProperty: 'name',
      //   sfdxNameSuffixList: ['.listView-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'layouts', packageXmlPropName: 'Layout', nameProperty: 'fullName', translationNameProperty: 'layout',
      //   sfdxNameSuffixList: ['.layout-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'recordTypes', packageXmlPropName: 'RecordType', nameProperty: 'fullName', translationNameProperty: 'name',
      //   sfdxNameSuffixList: ['.recordType-meta.xml']
      // },
      // {
      //   objectXmlPropName: 'webLinks', packageXmlPropName: 'WebLink', nameProperty: 'fullName', translationNameProperty: 'name',
      //   sfdxNameSuffixList: ['.webLink-meta.xml']
      // }
    ]
    return objectFilteringProperties
  }

}

module.exports = MetadataUtils