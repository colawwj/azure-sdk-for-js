/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        readOnly: true,
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BotProperties: msRest.CompositeMapper = {
  serializedName: "BotProperties",
  type: {
    name: "Composite",
    className: "BotProperties",
    modelProperties: {
      displayName: {
        required: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      iconUrl: {
        serializedName: "iconUrl",
        type: {
          name: "String"
        }
      },
      endpoint: {
        required: true,
        serializedName: "endpoint",
        type: {
          name: "String"
        }
      },
      endpointVersion: {
        readOnly: true,
        serializedName: "endpointVersion",
        type: {
          name: "String"
        }
      },
      msaAppId: {
        required: true,
        serializedName: "msaAppId",
        type: {
          name: "String"
        }
      },
      configuredChannels: {
        readOnly: true,
        serializedName: "configuredChannels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      enabledChannels: {
        readOnly: true,
        serializedName: "enabledChannels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      developerAppInsightKey: {
        serializedName: "developerAppInsightKey",
        type: {
          name: "String"
        }
      },
      developerAppInsightsApiKey: {
        serializedName: "developerAppInsightsApiKey",
        type: {
          name: "String"
        }
      },
      developerAppInsightsApplicationId: {
        serializedName: "developerAppInsightsApplicationId",
        type: {
          name: "String"
        }
      },
      luisAppIds: {
        serializedName: "luisAppIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      luisKey: {
        serializedName: "luisKey",
        type: {
          name: "String"
        }
      },
      isCmekEnabled: {
        serializedName: "isCmekEnabled",
        type: {
          name: "Boolean"
        }
      },
      cmekKeyVaultUrl: {
        serializedName: "cmekKeyVaultUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Bot: msRest.CompositeMapper = {
  serializedName: "Bot",
  type: {
    name: "Composite",
    className: "Bot",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "BotProperties"
        }
      }
    }
  }
};

export const Channel: msRest.CompositeMapper = {
  serializedName: "Channel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "channelName",
      clientName: "channelName"
    },
    uberParent: "Channel",
    className: "Channel",
    modelProperties: {
      channelName: {
        required: true,
        serializedName: "channelName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BotChannel: msRest.CompositeMapper = {
  serializedName: "BotChannel",
  type: {
    name: "Composite",
    className: "BotChannel",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Channel"
        }
      }
    }
  }
};

export const AlexaChannelProperties: msRest.CompositeMapper = {
  serializedName: "AlexaChannelProperties",
  type: {
    name: "Composite",
    className: "AlexaChannelProperties",
    modelProperties: {
      alexaSkillId: {
        required: true,
        serializedName: "alexaSkillId",
        type: {
          name: "String"
        }
      },
      urlFragment: {
        readOnly: true,
        serializedName: "urlFragment",
        type: {
          name: "String"
        }
      },
      serviceEndpointUri: {
        readOnly: true,
        serializedName: "serviceEndpointUri",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AlexaChannel: msRest.CompositeMapper = {
  serializedName: "AlexaChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "AlexaChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AlexaChannelProperties"
        }
      }
    }
  }
};

export const FacebookPage: msRest.CompositeMapper = {
  serializedName: "FacebookPage",
  type: {
    name: "Composite",
    className: "FacebookPage",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      accessToken: {
        serializedName: "accessToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FacebookChannelProperties: msRest.CompositeMapper = {
  serializedName: "FacebookChannelProperties",
  type: {
    name: "Composite",
    className: "FacebookChannelProperties",
    modelProperties: {
      verifyToken: {
        readOnly: true,
        serializedName: "verifyToken",
        type: {
          name: "String"
        }
      },
      pages: {
        serializedName: "pages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FacebookPage"
            }
          }
        }
      },
      appId: {
        required: true,
        serializedName: "appId",
        type: {
          name: "String"
        }
      },
      appSecret: {
        serializedName: "appSecret",
        type: {
          name: "String"
        }
      },
      callbackUrl: {
        readOnly: true,
        serializedName: "callbackUrl",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const FacebookChannel: msRest.CompositeMapper = {
  serializedName: "FacebookChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "FacebookChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "FacebookChannelProperties"
        }
      }
    }
  }
};

export const EmailChannelProperties: msRest.CompositeMapper = {
  serializedName: "EmailChannelProperties",
  type: {
    name: "Composite",
    className: "EmailChannelProperties",
    modelProperties: {
      emailAddress: {
        required: true,
        serializedName: "emailAddress",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EmailChannel: msRest.CompositeMapper = {
  serializedName: "EmailChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "EmailChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "EmailChannelProperties"
        }
      }
    }
  }
};

export const MsTeamsChannelProperties: msRest.CompositeMapper = {
  serializedName: "MsTeamsChannelProperties",
  type: {
    name: "Composite",
    className: "MsTeamsChannelProperties",
    modelProperties: {
      enableCalling: {
        serializedName: "enableCalling",
        type: {
          name: "Boolean"
        }
      },
      callingWebHook: {
        serializedName: "callingWebHook",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MsTeamsChannel: msRest.CompositeMapper = {
  serializedName: "MsTeamsChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "MsTeamsChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MsTeamsChannelProperties"
        }
      }
    }
  }
};

export const SkypeChannelProperties: msRest.CompositeMapper = {
  serializedName: "SkypeChannelProperties",
  type: {
    name: "Composite",
    className: "SkypeChannelProperties",
    modelProperties: {
      enableMessaging: {
        serializedName: "enableMessaging",
        type: {
          name: "Boolean"
        }
      },
      enableMediaCards: {
        serializedName: "enableMediaCards",
        type: {
          name: "Boolean"
        }
      },
      enableVideo: {
        serializedName: "enableVideo",
        type: {
          name: "Boolean"
        }
      },
      enableCalling: {
        serializedName: "enableCalling",
        type: {
          name: "Boolean"
        }
      },
      enableScreenSharing: {
        serializedName: "enableScreenSharing",
        type: {
          name: "Boolean"
        }
      },
      enableGroups: {
        serializedName: "enableGroups",
        type: {
          name: "Boolean"
        }
      },
      groupsMode: {
        serializedName: "groupsMode",
        type: {
          name: "String"
        }
      },
      callingWebHook: {
        serializedName: "callingWebHook",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SkypeChannel: msRest.CompositeMapper = {
  serializedName: "SkypeChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "SkypeChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SkypeChannelProperties"
        }
      }
    }
  }
};

export const KikChannelProperties: msRest.CompositeMapper = {
  serializedName: "KikChannelProperties",
  type: {
    name: "Composite",
    className: "KikChannelProperties",
    modelProperties: {
      userName: {
        required: true,
        serializedName: "userName",
        type: {
          name: "String"
        }
      },
      apiKey: {
        serializedName: "apiKey",
        type: {
          name: "String"
        }
      },
      isValidated: {
        serializedName: "isValidated",
        type: {
          name: "Boolean"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KikChannel: msRest.CompositeMapper = {
  serializedName: "KikChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "KikChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "KikChannelProperties"
        }
      }
    }
  }
};

export const WebChatSite: msRest.CompositeMapper = {
  serializedName: "WebChatSite",
  type: {
    name: "Composite",
    className: "WebChatSite",
    modelProperties: {
      siteId: {
        readOnly: true,
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      siteName: {
        required: true,
        serializedName: "siteName",
        type: {
          name: "String"
        }
      },
      key: {
        readOnly: true,
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      key2: {
        readOnly: true,
        serializedName: "key2",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      },
      enablePreview: {
        required: true,
        serializedName: "enablePreview",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const WebChatChannelProperties: msRest.CompositeMapper = {
  serializedName: "WebChatChannelProperties",
  type: {
    name: "Composite",
    className: "WebChatChannelProperties",
    modelProperties: {
      webChatEmbedCode: {
        readOnly: true,
        serializedName: "webChatEmbedCode",
        type: {
          name: "String"
        }
      },
      sites: {
        serializedName: "sites",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WebChatSite"
            }
          }
        }
      }
    }
  }
};

export const WebChatChannel: msRest.CompositeMapper = {
  serializedName: "WebChatChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "WebChatChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "WebChatChannelProperties"
        }
      }
    }
  }
};

export const DirectLineSite: msRest.CompositeMapper = {
  serializedName: "DirectLineSite",
  type: {
    name: "Composite",
    className: "DirectLineSite",
    modelProperties: {
      siteId: {
        readOnly: true,
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      siteName: {
        required: true,
        serializedName: "siteName",
        type: {
          name: "String"
        }
      },
      key: {
        readOnly: true,
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      key2: {
        readOnly: true,
        serializedName: "key2",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      },
      isV1Enabled: {
        required: true,
        serializedName: "isV1Enabled",
        type: {
          name: "Boolean"
        }
      },
      isV3Enabled: {
        required: true,
        serializedName: "isV3Enabled",
        type: {
          name: "Boolean"
        }
      },
      isSecureSiteEnabled: {
        serializedName: "isSecureSiteEnabled",
        type: {
          name: "Boolean"
        }
      },
      trustedOrigins: {
        serializedName: "trustedOrigins",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DirectLineChannelProperties: msRest.CompositeMapper = {
  serializedName: "DirectLineChannelProperties",
  type: {
    name: "Composite",
    className: "DirectLineChannelProperties",
    modelProperties: {
      sites: {
        serializedName: "sites",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DirectLineSite"
            }
          }
        }
      }
    }
  }
};

export const DirectLineChannel: msRest.CompositeMapper = {
  serializedName: "DirectLineChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "DirectLineChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DirectLineChannelProperties"
        }
      }
    }
  }
};

export const TelegramChannelProperties: msRest.CompositeMapper = {
  serializedName: "TelegramChannelProperties",
  type: {
    name: "Composite",
    className: "TelegramChannelProperties",
    modelProperties: {
      accessToken: {
        serializedName: "accessToken",
        type: {
          name: "String"
        }
      },
      isValidated: {
        serializedName: "isValidated",
        type: {
          name: "Boolean"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const TelegramChannel: msRest.CompositeMapper = {
  serializedName: "TelegramChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "TelegramChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TelegramChannelProperties"
        }
      }
    }
  }
};

export const SmsChannelProperties: msRest.CompositeMapper = {
  serializedName: "SmsChannelProperties",
  type: {
    name: "Composite",
    className: "SmsChannelProperties",
    modelProperties: {
      phone: {
        required: true,
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      accountSID: {
        required: true,
        serializedName: "accountSID",
        type: {
          name: "String"
        }
      },
      authToken: {
        serializedName: "authToken",
        type: {
          name: "String"
        }
      },
      isValidated: {
        serializedName: "isValidated",
        type: {
          name: "Boolean"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SmsChannel: msRest.CompositeMapper = {
  serializedName: "SmsChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "SmsChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SmsChannelProperties"
        }
      }
    }
  }
};

export const SlackChannelProperties: msRest.CompositeMapper = {
  serializedName: "SlackChannelProperties",
  type: {
    name: "Composite",
    className: "SlackChannelProperties",
    modelProperties: {
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      clientSecret: {
        serializedName: "clientSecret",
        type: {
          name: "String"
        }
      },
      verificationToken: {
        serializedName: "verificationToken",
        type: {
          name: "String"
        }
      },
      landingPageUrl: {
        serializedName: "landingPageUrl",
        type: {
          name: "String"
        }
      },
      redirectAction: {
        readOnly: true,
        serializedName: "redirectAction",
        type: {
          name: "String"
        }
      },
      lastSubmissionId: {
        readOnly: true,
        serializedName: "lastSubmissionId",
        type: {
          name: "String"
        }
      },
      registerBeforeOAuthFlow: {
        readOnly: true,
        serializedName: "registerBeforeOAuthFlow",
        type: {
          name: "Boolean"
        }
      },
      isValidated: {
        readOnly: true,
        serializedName: "isValidated",
        type: {
          name: "Boolean"
        }
      },
      signingSecret: {
        serializedName: "signingSecret",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        required: true,
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SlackChannel: msRest.CompositeMapper = {
  serializedName: "SlackChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "SlackChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SlackChannelProperties"
        }
      }
    }
  }
};

export const LineRegistration: msRest.CompositeMapper = {
  serializedName: "LineRegistration",
  type: {
    name: "Composite",
    className: "LineRegistration",
    modelProperties: {
      generatedId: {
        readOnly: true,
        serializedName: "generatedId",
        type: {
          name: "String"
        }
      },
      channelSecret: {
        serializedName: "channelSecret",
        type: {
          name: "String"
        }
      },
      channelAccessToken: {
        serializedName: "channelAccessToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LineChannelProperties: msRest.CompositeMapper = {
  serializedName: "LineChannelProperties",
  type: {
    name: "Composite",
    className: "LineChannelProperties",
    modelProperties: {
      lineRegistrations: {
        required: true,
        serializedName: "lineRegistrations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LineRegistration"
            }
          }
        }
      },
      callbackUrl: {
        readOnly: true,
        serializedName: "callbackUrl",
        type: {
          name: "String"
        }
      },
      isValidated: {
        readOnly: true,
        serializedName: "isValidated",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const LineChannel: msRest.CompositeMapper = {
  serializedName: "LineChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "LineChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LineChannelProperties"
        }
      }
    }
  }
};

export const DirectLineSpeechChannelProperties: msRest.CompositeMapper = {
  serializedName: "DirectLineSpeechChannelProperties",
  type: {
    name: "Composite",
    className: "DirectLineSpeechChannelProperties",
    modelProperties: {
      cognitiveServicesSubscriptionId: {
        required: true,
        serializedName: "cognitiveServicesSubscriptionId",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        serializedName: "isEnabled",
        type: {
          name: "Boolean"
        }
      },
      customVoiceDeploymentId: {
        serializedName: "customVoiceDeploymentId",
        type: {
          name: "String"
        }
      },
      customSpeechModelId: {
        serializedName: "customSpeechModelId",
        type: {
          name: "String"
        }
      },
      isDefaultBotForCogSvcAccount: {
        serializedName: "isDefaultBotForCogSvcAccount",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DirectLineSpeechChannel: msRest.CompositeMapper = {
  serializedName: "DirectLineSpeechChannel",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Channel.type.polymorphicDiscriminator,
    uberParent: "Channel",
    className: "DirectLineSpeechChannel",
    modelProperties: {
      ...Channel.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DirectLineSpeechChannelProperties"
        }
      }
    }
  }
};

export const SiteInfo: msRest.CompositeMapper = {
  serializedName: "SiteInfo",
  type: {
    name: "Composite",
    className: "SiteInfo",
    modelProperties: {
      siteName: {
        required: true,
        serializedName: "siteName",
        type: {
          name: "String"
        }
      },
      key: {
        required: true,
        serializedName: "key",
        type: {
          name: "Enum",
          allowedValues: [
            "key1",
            "key2"
          ]
        }
      }
    }
  }
};

export const ConnectionItemName: msRest.CompositeMapper = {
  serializedName: "ConnectionItemName",
  type: {
    name: "Composite",
    className: "ConnectionItemName",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectionSettingParameter: msRest.CompositeMapper = {
  serializedName: "ConnectionSettingParameter",
  type: {
    name: "Composite",
    className: "ConnectionSettingParameter",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectionSettingProperties: msRest.CompositeMapper = {
  serializedName: "ConnectionSettingProperties",
  type: {
    name: "Composite",
    className: "ConnectionSettingProperties",
    modelProperties: {
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      settingId: {
        readOnly: true,
        serializedName: "settingId",
        type: {
          name: "String"
        }
      },
      clientSecret: {
        serializedName: "clientSecret",
        type: {
          name: "String"
        }
      },
      scopes: {
        serializedName: "scopes",
        type: {
          name: "String"
        }
      },
      serviceProviderId: {
        serializedName: "serviceProviderId",
        type: {
          name: "String"
        }
      },
      serviceProviderDisplayName: {
        serializedName: "serviceProviderDisplayName",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectionSettingParameter"
            }
          }
        }
      }
    }
  }
};

export const ConnectionSetting: msRest.CompositeMapper = {
  serializedName: "ConnectionSetting",
  type: {
    name: "Composite",
    className: "ConnectionSetting",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ConnectionSettingProperties"
        }
      }
    }
  }
};

export const ServiceProviderParameter: msRest.CompositeMapper = {
  serializedName: "ServiceProviderParameter",
  type: {
    name: "Composite",
    className: "ServiceProviderParameter",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      helpUrl: {
        readOnly: true,
        serializedName: "helpUrl",
        type: {
          name: "String"
        }
      },
      default: {
        readOnly: true,
        serializedName: "default",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceProviderProperties: msRest.CompositeMapper = {
  serializedName: "ServiceProviderProperties",
  type: {
    name: "Composite",
    className: "ServiceProviderProperties",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      serviceProviderName: {
        readOnly: true,
        serializedName: "serviceProviderName",
        type: {
          name: "String"
        }
      },
      devPortalUrl: {
        readOnly: true,
        serializedName: "devPortalUrl",
        type: {
          name: "String"
        }
      },
      iconUrl: {
        readOnly: true,
        serializedName: "iconUrl",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceProviderParameter"
            }
          }
        }
      }
    }
  }
};

export const ServiceProvider: msRest.CompositeMapper = {
  serializedName: "ServiceProvider",
  type: {
    name: "Composite",
    className: "ServiceProvider",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ServiceProviderProperties"
        }
      }
    }
  }
};

export const ServiceProviderResponseList: msRest.CompositeMapper = {
  serializedName: "ServiceProviderResponseList",
  type: {
    name: "Composite",
    className: "ServiceProviderResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceProvider"
            }
          }
        }
      }
    }
  }
};

export const ErrorBody: msRest.CompositeMapper = {
  serializedName: "ErrorBody",
  type: {
    name: "Composite",
    className: "ErrorBody",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorBody"
        }
      }
    }
  }
};

export const OperationDisplayInfo: msRest.CompositeMapper = {
  serializedName: "OperationDisplayInfo",
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntity: msRest.CompositeMapper = {
  serializedName: "OperationEntity",
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const CheckNameAvailabilityRequestBody: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityRequestBody",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequestBody",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResponseBody: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResponseBody",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponseBody",
    modelProperties: {
      valid: {
        serializedName: "valid",
        type: {
          name: "Boolean"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BotResponseList: msRest.CompositeMapper = {
  serializedName: "BotResponseList",
  type: {
    name: "Composite",
    className: "BotResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Bot"
            }
          }
        }
      }
    }
  }
};

export const ChannelResponseList: msRest.CompositeMapper = {
  serializedName: "ChannelResponseList",
  type: {
    name: "Composite",
    className: "ChannelResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BotChannel"
            }
          }
        }
      }
    }
  }
};

export const OperationEntityListResult: msRest.CompositeMapper = {
  serializedName: "OperationEntityListResult",
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};

export const ConnectionSettingResponseList: msRest.CompositeMapper = {
  serializedName: "ConnectionSettingResponseList",
  type: {
    name: "Composite",
    className: "ConnectionSettingResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectionSetting"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'Channel' : Channel,
  'Channel.AlexaChannel' : AlexaChannel,
  'Channel.FacebookChannel' : FacebookChannel,
  'Channel.EmailChannel' : EmailChannel,
  'Channel.MsTeamsChannel' : MsTeamsChannel,
  'Channel.SkypeChannel' : SkypeChannel,
  'Channel.KikChannel' : KikChannel,
  'Channel.WebChatChannel' : WebChatChannel,
  'Channel.DirectLineChannel' : DirectLineChannel,
  'Channel.TelegramChannel' : TelegramChannel,
  'Channel.SmsChannel' : SmsChannel,
  'Channel.SlackChannel' : SlackChannel,
  'Channel.LineChannel' : LineChannel,
  'Channel.DirectLineSpeechChannel' : DirectLineSpeechChannel

};
