import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'CCVAULT',
  logo: 'data:image/png;base64,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',
  Apis: {
    [Api.Enable]: SupportLevel.Supported,
    [Api.IsEnabled]: SupportLevel.Supported,
    [Api.ApiVersion]: SupportLevel.Supported,
    [Api.Name]: SupportLevel.Supported,
    [Api.Icon]: SupportLevel.Supported,
    [Api.GetNetworkId]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Supported,
    [Api.GetBalance]: SupportLevel.Supported,
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUnusedAddresses]: SupportLevel.Supported,
    [Api.GetChangeAddress]: SupportLevel.Supported,
    [Api.GetRewardAddress]: SupportLevel.Supported,
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.OnAccountChange]: SupportLevel.Unsupported,
    [Api.OnNetworkChange]: SupportLevel.Unsupported
  }
}