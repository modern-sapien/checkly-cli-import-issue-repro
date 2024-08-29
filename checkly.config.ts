import { defineConfig } from 'checkly';
import { AlertEscalationBuilder, RetryStrategyBuilder } from 'checkly/constructs';
import { defaults } from './tests/bank-defaults';

/**
 * See https://www.checklyhq.com/docs/cli/project-structure/
 */
const config = defineConfig({
  /* A human friendly name for your project */
  projectName: `${defaults.bank}`,
  /** A logical ID that needs to be unique across your Checkly account,
   * See https://www.checklyhq.com/docs/cli/constructs/ to learn more about logical IDs.
   */
  logicalId: 'bank-a',
  /* An optional URL to your Git repo to be shown in your test sessions and resource activity log */
  /* repoUrl: 'https://github.com/checkly/checkly-cli', */
  /* Sets default values for Checks */
  checks: {
    /* A default for how often your Check should run in minutes */
    frequency: 10,
    /* Checkly data centers to run your Checks as monitors */
    locations: ['us-east-1', 'eu-west-1'],
    /* An optional array of tags to organize your Checks */
    tags: ['mac'],
    /** The Checkly Runtime identifier, determining npm packages and the Node.js version available at runtime.
     * See https://www.checklyhq.com/docs/cli/npm-packages/
     */
    runtimeId: '2024.02',
    /* Failed check runs will be retried before triggering alerts */
    retryStrategy: RetryStrategyBuilder.fixedStrategy({
      baseBackoffSeconds: 60,
      maxRetries: 4,
      sameRegion: true,
    }),
    /* All checks will have this alert escalation policy defined */
    alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1),
    /* A glob pattern that matches the Checks inside your repo, see https://www.checklyhq.com/docs/cli/using-check-test-match/ */
    checkMatch: '**/__checks__/**/*.check.ts',
    /* Global configuration option for Playwright-powered checks. See https://docs/browser-checks/playwright-test/#global-configuration */
    browserChecks: {
      testMatch: '**/tests/**/*.spec.ts',
      tags: ['import issue']
    },
    // multiStepChecks: {
    //   testMatch: '**/tests/multi/*.spec.ts',
    // },
  },
  cli: {
    /* The default datacenter location to use when running npx checkly test */
    runLocation: 'eu-west-1',
    // privateRunLocation: 'some-prv-location-name'
    /* An array of default reporters to use when a reporter is not specified with the "--reporter" flag */
    reporters: ['list'],
  },
});

export default config;
