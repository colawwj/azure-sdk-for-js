/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AadAuthenticationParameters,
  AddressSpace,
  ApplicationGateway,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewayBackendAddress,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayCustomError,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayHeaderConfiguration,
  ApplicationGatewayHttpListener,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayPathRule,
  ApplicationGatewayPrivateEndpointConnection,
  ApplicationGatewayPrivateLinkConfiguration,
  ApplicationGatewayPrivateLinkIpConfiguration,
  ApplicationGatewayPrivateLinkResource,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRewriteRule,
  ApplicationGatewayRewriteRuleActionSet,
  ApplicationGatewayRewriteRuleCondition,
  ApplicationGatewayRewriteRuleSet,
  ApplicationGatewaySku,
  ApplicationGatewaySslCertificate,
  ApplicationGatewaySslPolicy,
  ApplicationGatewaySslPredefinedPolicy,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewayUrlConfiguration,
  ApplicationGatewayUrlPathMap,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationRule,
  ApplicationSecurityGroup,
  AzureFirewall,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallFqdnTag,
  AzureFirewallIPConfiguration,
  AzureFirewallIpGroups,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNatRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallPublicIPAddress,
  AzureFirewallRCAction,
  AzureFirewallSku,
  BackendAddressPool,
  BaseResource,
  BastionHost,
  BastionHostIPConfiguration,
  BGPCommunity,
  BgpConnection,
  BgpServiceCommunity,
  BgpSettings,
  BreakOutCategoryPolicies,
  CloudError,
  ConnectionMonitorDestination,
  ConnectionMonitorEndpoint,
  ConnectionMonitorEndpointFilter,
  ConnectionMonitorEndpointFilterItem,
  ConnectionMonitorHttpConfiguration,
  ConnectionMonitorIcmpConfiguration,
  ConnectionMonitorOutput,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionMonitorSuccessThreshold,
  ConnectionMonitorTcpConfiguration,
  ConnectionMonitorTestConfiguration,
  ConnectionMonitorTestGroup,
  ConnectionMonitorWorkspaceSettings,
  ConnectionSharedKey,
  Container,
  ContainerNetworkInterface,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterfaceIpConfiguration,
  CustomDnsConfigPropertiesFormat,
  DdosCustomPolicy,
  DdosProtectionPlan,
  DdosSettings,
  Delegation,
  DeviceProperties,
  DhcpOptions,
  DnsSettings,
  EndpointServiceResult,
  ExpressRouteCircuit,
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitPeeringId,
  ExpressRouteCircuitReference,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitStats,
  ExpressRouteConnection,
  ExpressRouteConnectionId,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  ExpressRouteLink,
  ExpressRouteLinkMacSecConfig,
  ExpressRoutePort,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  FirewallPolicy,
  FirewallPolicyCertificateAuthority,
  FirewallPolicyFilterRuleCollection,
  FirewallPolicyFilterRuleCollectionAction,
  FirewallPolicyNatRuleCollection,
  FirewallPolicyNatRuleCollectionAction,
  FirewallPolicyRule,
  FirewallPolicyRuleApplicationProtocol,
  FirewallPolicyRuleCollection,
  FirewallPolicyRuleCollectionGroup,
  FirewallPolicyThreatIntelWhitelist,
  FirewallPolicyTransportSecurity,
  FirewallPolicyTrustedRootCertificate,
  FlowLog,
  FlowLogFormatParameters,
  FrontendIPConfiguration,
  HTTPHeader,
  HubIPAddresses,
  HubIpConfiguration,
  HubPublicIPAddresses,
  HubRoute,
  HubRouteTable,
  HubVirtualNetworkConnection,
  InboundNatPool,
  InboundNatRule,
  IpAllocation,
  IPConfiguration,
  IPConfigurationBgpPeeringAddress,
  IPConfigurationProfile,
  IpGroup,
  IpsecPolicy,
  IpTag,
  Ipv6CircuitConnectionConfig,
  Ipv6ExpressRouteCircuitPeeringConfig,
  LoadBalancer,
  LoadBalancerBackendAddress,
  LoadBalancerSku,
  LoadBalancingRule,
  LocalNetworkGateway,
  ManagedRuleGroupOverride,
  ManagedRuleOverride,
  ManagedRulesDefinition,
  ManagedRuleSet,
  ManagedServiceIdentity,
  ManagedServiceIdentityUserAssignedIdentitiesValue,
  MatchCondition,
  MatchVariable,
  NatGateway,
  NatGatewaySku,
  NatRule,
  NetworkIntentPolicy,
  NetworkInterface,
  NetworkInterfaceDnsSettings,
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties,
  NetworkInterfaceTapConfiguration,
  NetworkProfile,
  NetworkRule,
  NetworkSecurityGroup,
  NetworkVirtualAppliance,
  NetworkVirtualApplianceListResult,
  NetworkVirtualApplianceSku,
  NetworkVirtualApplianceSkuInstances,
  NetworkWatcher,
  Office365PolicyProperties,
  OutboundRule,
  OwaspCrsExclusionEntry,
  P2SConnectionConfiguration,
  P2SVpnGateway,
  PatchRouteFilter,
  PatchRouteFilterRule,
  PeerExpressRouteCircuitConnection,
  PolicySettings,
  PrivateDnsZoneConfig,
  PrivateDnsZoneGroup,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkService,
  PrivateLinkServiceConnection,
  PrivateLinkServiceConnectionState,
  PrivateLinkServiceIpConfiguration,
  PrivateLinkServicePropertiesAutoApproval,
  PrivateLinkServicePropertiesVisibility,
  Probe,
  PropagatedRouteTable,
  ProtocolCustomSettingsFormat,
  PublicIPAddress,
  PublicIPAddressDnsSettings,
  PublicIPAddressSku,
  PublicIPPrefix,
  PublicIPPrefixSku,
  RadiusServer,
  RecordSet,
  ReferencedPublicIpAddress,
  Resource,
  ResourceNavigationLink,
  ResourceSet,
  RetentionPolicyParameters,
  Route,
  RouteFilter,
  RouteFilterRule,
  RouteTable,
  RoutingConfiguration,
  SecurityPartnerProvider,
  SecurityRule,
  ServiceAssociationLink,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPropertiesFormat,
  StaticRoute,
  Subnet,
  SubResource,
  TagsObject,
  TrafficAnalyticsConfigurationProperties,
  TrafficAnalyticsProperties,
  TrafficSelectorPolicy,
  TunnelConnectionHealth,
  VirtualApplianceNicProperties,
  VirtualApplianceSite,
  VirtualApplianceSkuProperties,
  VirtualHub,
  VirtualHubId,
  VirtualHubRoute,
  VirtualHubRouteTable,
  VirtualHubRouteTableV2,
  VirtualHubRouteV2,
  VirtualNetwork,
  VirtualNetworkBgpCommunities,
  VirtualNetworkConnectionGatewayReference,
  VirtualNetworkGateway,
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkGatewayIPConfiguration,
  VirtualNetworkGatewaySku,
  VirtualNetworkPeering,
  VirtualNetworkTap,
  VirtualRouter,
  VirtualRouterPeering,
  VirtualWAN,
  VM,
  VnetRoute,
  VpnClientConfiguration,
  VpnClientConnectionHealth,
  VpnClientRevokedCertificate,
  VpnClientRootCertificate,
  VpnConnection,
  VpnGateway,
  VpnGatewayIpConfiguration,
  VpnLinkBgpSettings,
  VpnLinkProviderProperties,
  VpnServerConfigRadiusClientRootCertificate,
  VpnServerConfigRadiusServerRootCertificate,
  VpnServerConfiguration,
  VpnServerConfigVpnClientRevokedCertificate,
  VpnServerConfigVpnClientRootCertificate,
  VpnSite,
  VpnSiteLink,
  VpnSiteLinkConnection,
  WebApplicationFirewallCustomRule,
  WebApplicationFirewallPolicy
} from "../models/mappers";
