/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  createApiFactory,
  createPlugin,
  discoveryApiRef,
  identityApiRef,
} from '@backstage/core-plugin-api';
import { ProductionDependencytrackApi, dependencytrackApiRef } from './api';

import { rootRouteRef } from './routes';

/**
 * @public
 */
export const dependencytrackPlugin = createPlugin({
  id: 'dependency-track',
  apis: [
    createApiFactory({
      api: dependencytrackApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        identityApi: identityApiRef,
      },
      factory: ({ discoveryApi, identityApi }) =>
        new ProductionDependencytrackApi(discoveryApi, identityApi),
    }),
  ],
  routes: {
    root: rootRouteRef,
  },
});
