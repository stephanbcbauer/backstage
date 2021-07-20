/*
 * Copyright 2021 The Backstage Authors
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
  AnalyticsApi,
  AnalyticsDomainValues,
  AnalyticsEventContext,
  AnalyticsTracker,
  Observable,
  DomainDecoratedAnalyticsEvent,
} from '@backstage/core-plugin-api';
import { PublishSubject } from '../../../lib/subjects';

/**
 * Base implementation for the AnalyticsApi that forwards extension-aware
 * events to consumers.
 */
export class AnalyticsApiForwarder implements AnalyticsApi {
  private readonly subject = new PublishSubject<DomainDecoratedAnalyticsEvent>();

  getTrackerForDomain(domain: AnalyticsDomainValues): AnalyticsTracker {
    const subject = this.subject;
    return {
      captureEvent: (
        verb: string,
        noun: string,
        value?: number,
        context: AnalyticsEventContext = {},
      ) => {
        subject.next({
          domain,
          verb,
          noun,
          value,
          context,
        });
      },
    };
  }

  event$(): Observable<DomainDecoratedAnalyticsEvent> {
    return this.subject;
  }
}
