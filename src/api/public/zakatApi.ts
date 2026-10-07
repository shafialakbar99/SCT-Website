export interface ZakatCalculationInput {
  cashInHandAndBank: number;
  goldValueBDT: number;
  silverValueBDT: number;
  businessInventoryBDT: number;
  investmentsBDT: number;
  debtsAndLiabilitiesBDT: number;
}

export interface ZakatCalculationResult {
  totalAssetsBDT: number;
  netZakatatableBDT: number;
  nisabThresholdBDT: number;
  isEligibleForZakat: boolean;
  zakatDueBDT: number;
}

// Current Nisab threshold in Bangladesh approx 85,000 BDT based on silver value
const NISAB_THRESHOLD_BDT = 85000;

export async function calculateZakat(input: ZakatCalculationInput): Promise<ZakatCalculationResult> {
  await new Promise(res => setTimeout(res, 100));

  const totalAssets = 
    (input.cashInHandAndBank || 0) +
    (input.goldValueBDT || 0) +
    (input.silverValueBDT || 0) +
    (input.businessInventoryBDT || 0) +
    (input.investmentsBDT || 0);

  const netZakatatable = Math.max(0, totalAssets - (input.debtsAndLiabilitiesBDT || 0));
  const isEligibleForZakat = netZakatatable >= NISAB_THRESHOLD_BDT;
  const zakatDue = isEligibleForZakat ? Math.round(netZakatatable * 0.025) : 0;

  return {
    totalAssetsBDT: totalAssets,
    netZakatatableBDT: netZakatatable,
    nisabThresholdBDT: NISAB_THRESHOLD_BDT,
    isEligibleForZakat,
    zakatDueBDT: zakatDue
  };
}
