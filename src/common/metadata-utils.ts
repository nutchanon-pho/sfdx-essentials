export class MetadataUtils {

  // Describe packageXml <=> metadata folder correspondance
  static describeMetadataTypes() {

    // folder is the corresponding folder in metadatas folder 
    // nameSuffixList are the files and/or folder names , built from the name of the package.xml item ( in <members> )

    const metadataTypesDescription = {
      // Metadatas to use for copy
      'ApexClass': { folder: 'classes', nameSuffixList: ['.cls', '.cls-meta.xml'], sfdxNameSuffixList: ['.cls', '-meta.xml'] },
      'AssignmentRules': { folder: 'assignmentRules', nameSuffixList: ['.assignmentRules'], sfdxNameSuffixList: ['-meta.xml'] },
      'ApexComponent': { folder: 'components', nameSuffixList: ['.component', '.component-meta.xml'], sfdxNameSuffixList: ['.component', '.component-meta.xml'] },
      'ApexPage': { folder: 'pages', nameSuffixList: ['.page', '.page-meta.xml'], sfdxNameSuffixList: ['.page', '-meta.xml'] },
      'ApprovalProcess': { folder: 'approvalProcesses', nameSuffixList: ['.approvalProcess'], sfdxNameSuffixList: ['.approvalProcess'] },
      'ApexTrigger': { folder: 'triggers', nameSuffixList: ['.trigger', '.trigger-meta.xml'], sfdxNameSuffixList: ['.trigger', '-meta.xml'] },
      'AuraDefinitionBundle': { folder: 'aura', nameSuffixList: [''], sfdxNameSuffixList: [''] },
      'ContentAsset': { folder: 'contentassets', nameSuffixList: ['.asset', '.asset-meta.xml'], sfdxNameSuffixList: ['.asset', '.asset-meta.xml'] },
      'CallCenter': { folder: 'callCenters', nameSuffixList: ['.callCenter', '.callCenter-meta.xml'], sfdxNameSuffixList: ['.callCenter', '.callCenter-meta.xml'] },
      'CustomApplication': { folder: 'applications', nameSuffixList: ['.app'], sfdxNameSuffixList: ['.app-meta.xml'] },
      'CustomLabels': { folder: 'labels', nameSuffixList: ['.labels'], sfdxNameSuffixList: ['.labels'] },
      'CustomMetadata': { folder: 'customMetadata', nameSuffixList: ['.md'], sfdxNameSuffixList: ['.md-meta.xml'] },
      'CustomSite': { folder: 'sites', nameSuffixList: ['.site'], sfdxNameSuffixList: ['.site-meta.xml'] },
      'CustomObjectTranslation': { folder: 'objectTranslations', nameSuffixList: ['.objectTranslation'], sfdxNameSuffixList: ['.objectTranslation'] },
      'CustomTab': { folder: 'tabs', nameSuffixList: ['.tab'], sfdxNameSuffixList: ['.tab-meta.xml'] },
      'CustomObject': { folder: 'objects', nameSuffixList: ['.object'], sfdxNameSuffixList: ['.object'] },
      'Document': { folder: 'documents', nameSuffixList: ['', '-meta.xml'], sfdxNameSuffixList: ['.documentFolder-meta.xml'] },
      'Dashboard': { folder: 'dashboards', nameSuffixList: ['.dashboard', '-meta.xml'], sfdxNameSuffixList: ['.dashboard', '-meta.xml'] },
      'EmailTemplate': { folder: 'email', nameSuffixList: ['.email', '.email-meta.xml', '-meta.xml'], sfdxNameSuffixList: [] },
      'EntitlementProcess': { folder: 'entitlementProcesses', nameSuffixList: ['.entitlementProcess'], sfdxNameSuffixList: ['.entitlementProcess'] },
      'EscalationRules': { folder: 'escalationRules', nameSuffixList: ['.escalationRules'], sfdxNameSuffixList: ['.escalationRules-meta.xml'] },
      'FlexiPage': { folder: 'flexipages', nameSuffixList: ['.flexipage'], sfdxNameSuffixList: ['.flexipage-meta.xml'] },
      'FlowDefinition': { folder: 'flowDefinitions', nameSuffixList: ['.flowDefinition'], sfdxNameSuffixList: ['.flowDefinition'] },
      'Flow': { folder: 'flows', nameSuffixList: ['.flow'], sfdxNameSuffixList: ['.flow'] },
      'GlobalValueSet': { folder: 'globalValueSets', nameSuffixList: ['.globalValueSet'], sfdxNameSuffixList: ['.globalValueSet-meta.xml'] },
      'GlobalValueSetTranslation': { folder: 'globalValueSetTranslations', nameSuffixList: ['.globalValueSetTranslation'], sfdxNameSuffixList: ['.globalValueSetTranslation-meta.xml'] },
      'Group': { folder: 'groups', nameSuffixList: ['.group'], sfdxNameSuffixList: ['.group'] },
      'HomePageLayout': { folder: 'homePageLayouts', nameSuffixList: ['.homePageLayout'], sfdxNameSuffixList: ['.homePageLayout-meta.xml'] },
      'HomePageComponent': { folder: 'homePageComponents', nameSuffixList: ['.homePageComponent'], sfdxNameSuffixList: ['.homePageComponent-meta.xml'] },
      'Layout': { folder: 'layouts', nameSuffixList: ['.layout'], sfdxNameSuffixList: ['.layout-meta.xml'] },
      'MilestoneType': { folder: 'milestoneTypes', nameSuffixList: ['.milestoneType'], sfdxNameSuffixList: ['.milestoneType'] },
      'NamedCredential': { folder: 'namedCredentials', nameSuffixList: ['.namedCredential'], sfdxNameSuffixList: ['.namedCredential-meta.xml'] },
      'Network': { folder: 'networks', nameSuffixList: ['.network'], sfdxNameSuffixList: ['.network-meta.xml'] },
      'PermissionSet': { folder: 'permissionsets', nameSuffixList: ['.permissionset'], sfdxNameSuffixList: ['.permissionset-meta.xml'] },
      'PlatformCachePartition': { folder: 'cachePartitions', nameSuffixList: ['.cachePartition'], sfdxNameSuffixList: ['.cachePartition-meta.xml'] },
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
      // 'StandardValueSetTranslation': { folder: 'standardValueSetTranslations', nameSuffixList: ['.standardValueSetTranslation'], sfdxNameSuffixList: ['.standardValueSetTranslation-meta.xml'] },
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