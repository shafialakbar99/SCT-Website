import {
  sctPurposeData,
  sctPillarsData,
  sctSpusProjectData,
  sctStrategyData,
  sctWhyJoinUsData,
  sctResourcesData,
  PillarItem,
  SpusProjectData,
  StrategyData,
  WhyJoinUsData,
  ResourceCategory
} from '../../data/sctContent';

export async function getPurposeData() {
  return sctPurposeData;
}

export async function getPillarsData(): Promise<PillarItem[]> {
  return sctPillarsData;
}

export async function getPillarBySlug(slug: string): Promise<PillarItem | undefined> {
  return sctPillarsData.find(p => p.slug === slug || `pillar-${p.pillarNumber}` === slug);
}

export async function getSpusProjectData(): Promise<SpusProjectData> {
  return sctSpusProjectData;
}

export async function getStrategyData(): Promise<StrategyData> {
  return sctStrategyData;
}

export async function getWhyJoinUsData(): Promise<WhyJoinUsData> {
  return sctWhyJoinUsData;
}

export async function getResourcesData(): Promise<ResourceCategory[]> {
  return sctResourcesData;
}
