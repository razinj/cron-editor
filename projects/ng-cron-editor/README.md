# ng-cron-editor

This package is intended to generate Quartz based cron expressions, and it's based on this [unmaintained]('https://github.com/claudiuconstantin/cron-editor) which the logic is not updated for a while (aslo the package uses a bootstrap style), what I offer is an optimized lightweight version of that package with zero styling dependency.

## Documentation

Install the package `npm i ng-cron-editor`

In your typescript :
```typescript
  public cronExpression = '0 0/1 * 1/1 * ? *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    defaultTime: '10:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: false,
    removeSeconds: false,
    removeYears: false,

    // By default the width is 900px (optional property)
    customWidth: '1200px'
  };
```

In your template :

```html
<ng-cron-editor [(cron)]="cronExpression" [disabled]="isCronDisabled" [(options)]="cronOptions"></ng-cron-editor>
<p>
  Result cron expression : <b><code>{{cronExpression}}</code></b>
</p>
```
