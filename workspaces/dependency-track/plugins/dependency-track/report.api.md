## API Report File for "@backstage-community/plugin-dependency-track"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { IdentityApi } from '@backstage/core-plugin-api';
import { InfoCardVariants } from '@backstage/core-components';
import { Options } from '@material-table/core';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export type Analyis = {
  isSuppressed: boolean;
};

// @public (undocumented)
export enum ANALYZER_IDENTITY {
  // (undocumented)
  INTERNAL_ANALYZER = 0,
  // (undocumented)
  NONE = 4,
  // (undocumented)
  NPM_AUDIT_ANALYZER = 2,
  // (undocumented)
  OSSINDEX_ANALYZER = 1,
  // (undocumented)
  VULNDB_ANALYZER = 3,
}

// @public (undocumented)
export type Attribution = {
  analyzerIdentity: ANALYZER_IDENTITY;
  attributedOn: number;
  alternateIdentifier: string;
  referenceUrl: string;
};

// @public (undocumented)
export enum CLASSIFIER {
  // (undocumented)
  APPLICATION = 0,
  // (undocumented)
  CONTAINER = 3,
  // (undocumented)
  DEVICE = 5,
  // (undocumented)
  FILE = 7,
  // (undocumented)
  FIRMWARE = 6,
  // (undocumented)
  FRAMEWORK = 1,
  // (undocumented)
  LIBRARY = 2,
  // (undocumented)
  OPERATING_SYSTEM = 4,
}

// @public (undocumented)
export type Component = {
  author?: string;
  publisher?: string;
  group?: string;
  classifier?: string;
  uuid: string;
  name: string;
  version: string;
  purl: string;
  project: string;
};

// @public (undocumented)
export type cwe = {
  cweId: number;
  name: string;
};

// @public
export interface DependencytrackApi {
  // (undocumented)
  fetchFindings(entity: Entity): Promise<Finding[]>;
  // (undocumented)
  fetchMetrics(entity: Entity): Promise<ProjectMetrics>;
  // (undocumented)
  fetchProject(entity: Entity): Promise<DependencytrackProject>;
}

// @public (undocumented)
export const dependencytrackApiRef: ApiRef<DependencytrackApi>;

// @public (undocumented)
export type DependencytrackPageProps = {
  tableOptions?: Options<never>;
};

// @public (undocumented)
const dependencytrackPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;
export { dependencytrackPlugin };
export { dependencytrackPlugin as plugin };

// @public (undocumented)
export type DependencytrackProject = {
  author: string;
  publisher: string;
  group: string;
  name: string;
  description: string;
  version: string;
  classifier: CLASSIFIER;
  cpe: string;
  swidTagId: string;
  directDependencies: string;
  uuid: string;
  lastBomImport: string;
  lastBomImportFormat: string;
  lastInheritedRiskScore: number;
  active: boolean;
  metrics: ProjectMetrics;
  findings: Finding[];
};

// @public (undocumented)
export const DependencytrackSummaryCard: ({
  entity,
  variant,
  tableOptions,
}: {
  entity: Entity;
  variant?: InfoCardVariants | undefined;
  tableOptions: Options<{}>;
}) => React_2.JSX.Element;

// @public (undocumented)
export const EntityDependencytrackContent: (
  props: DependencytrackPageProps,
) => React_2.JSX.Element;

// @public (undocumented)
export const EntityDependencytrackFindingCard: ({
  tableOptions,
}: DependencytrackPageProps) => React_2.JSX.Element;

// @public (undocumented)
export const EntityDependencytrackSummaryCard: ({
  tableOptions,
}: DependencytrackPageProps) => React_2.JSX.Element;

// @public (undocumented)
export type Finding = {
  component: Component;
  vulnerability: Vulnerability;
  analysis: Analyis;
  attribution: Attribution;
  matrix: string;
};

// @public (undocumented)
export const isDependencytrackAvailable: (entity: Entity) => boolean;

// @public (undocumented)
export const metrictypes: readonly [
  'critical',
  'high',
  'medium',
  'low',
  'unassigned',
  'vulnerabilities',
  'vulnerableComponents',
  'components',
  'suppressed',
  'findingsTotal',
  'findingsAudited',
  'findingsUnaudited',
  'inheritedRiskScore',
  'firstOccurrence',
  'lastOccurrence',
];

// @public (undocumented)
export class ProductionDependencytrackApi implements DependencytrackApi {
  constructor(
    discoveryApi: DiscoveryApi,
    identityApi?: IdentityApi | undefined,
  );
  // (undocumented)
  fetchFindings(entity: Entity): Promise<Finding[]>;
  // (undocumented)
  fetchMetrics(entity: Entity): Promise<ProjectMetrics>;
  // (undocumented)
  fetchProject(entity: Entity): Promise<DependencytrackProject>;
}

// @public (undocumented)
export type ProjectMetrics = {
  [k in (typeof metrictypes)[number]]: number;
};

// @public (undocumented)
export enum SEVERITY {
  // (undocumented)
  CRITICAL = 0,
  // (undocumented)
  HIGH = 1,
  // (undocumented)
  INFO = 4,
  // (undocumented)
  LOW = 3,
  // (undocumented)
  MEDIUM = 2,
  // (undocumented)
  UNASSIGNED = 5,
}

// @public (undocumented)
export type Vulnerability = {
  uuid: string;
  source: string;
  vulnId: string;
  title?: string;
  severity: SEVERITY;
  severityRank: number;
  epssScore: number;
  epssPercentile: number;
  cweId: number;
  cweName: string;
  cwes: cwe[];
  aliases: string[];
  description: string;
  recommendation: string | null;
  cvssV2BaseScore?: number;
  cvssV2ImpactSubScore?: number;
  cvssV2ExploitabilitySubScore?: number;
  cvssV2Vector?: string;
  cvssV3BaseScore?: number;
  cvssV3ImpactSubScore?: number;
  cvssV3ExploitabilitySubScore?: number;
  cvssV3Vector?: string;
};

// (No @packageDocumentation comment for this package)
```
