import LiveStatusOverview from './LiveStatusOverview';
import TradeFlowSubtab from './TradeFlowSubtab';
import AccountOverviewSubtab from './AccountOverviewSubtab';
import OrderQueueSubtab from './OrderQueueSubtab';
import SystemHealthSubtab from './SystemHealthSubtab';
import FeedDiagnosticsSubtab from './FeedDiagnosticsSubtab';
import ExecutionLatencySubtab from './ExecutionLatencySubtab';
import NetworkMonitorSubtab from './NetworkMonitorSubtab';
import ExposureSubtab from './ExposureSubtab';
import EquitySubtab from './EquitySubtab';
import MarginSubtab from './MarginSubtab';
import CDSSSubtab from './CDSSSubtab';
import AuditSubtab from './AuditSubtab';
import ReportsSubtab from './ReportsSubtab';
import SettingsSubtab from './SettingsSubtab';
import MetricsLabSubtab from './MetricsLabSubtab';
import RefineryFilterEngineSubtab from './RefineryFilterEngineSubtab';
import FeedWatchlistSubtab from './FeedWatchlistSubtab';
import InstitutionalFlowMapSubtab from './InstitutionalFlowMapSubtab';
import DiagnosticsSubtab from './DiagnosticsSubtab';
import BuilderSubtab from './BuilderSubtab';
import BacktestSubtab from './BacktestSubtab';
import OptimizerSubtab from './OptimizerSubtab';
import ExecutionClusterSubtab from './ExecutionClusterSubtab';
import SLLogicSubtab from './SLLogicSubtab';
import PerformanceSubtab from './PerformanceSubtab';
import DailySubtab from './DailySubtab';
import WeeklySubtab from './WeeklySubtab';
import BreakdownSubtab from './BreakdownSubtab';
import ChartsSubtab from './ChartsSubtab';
import RulesSubtab from './RulesSubtab';
import ViolationsSubtab from './ViolationsSubtab';
import ReviewSubtab from './ReviewSubtab';
import SystemSubtab from './SystemSubtab';
import AlertsSubtab from './AlertsSubtab';
import ThemesSubtab from './ThemesSubtab';
import IntegrationsSubtab from './IntegrationsSubtab';

import SyncMirrorSettingsSubtab from './SyncMirrorSettingsSubtab';
import BrokerSyncSubtab from './BrokerSyncSubtab';
import DecisionTrailSubtab from './DecisionTrailSubtab';
import EscalationLogSubtab from './EscalationLogSubtab';
import LatencyMonitorSubtab from './LatencyMonitorSubtab';
import LiveTraceSubtab from './LiveTraceSubtab';
import MonthlySummarySubtab from './MonthlySummarySubtab';
import PacketInspectorSubtab from './PacketInspectorSubtab';
import YearlyBreakdownSubtab from './YearlyBreakdownSubtab';


export const cockpitTabsRegistry = {
  "Overview (Landing)": LiveStatusOverview,
  "Trade Flow": TradeFlowSubtab,
  "Account Overview": AccountOverviewSubtab,
  "Order Queue": OrderQueueSubtab,
  "System Health": SystemHealthSubtab,
  "Feed Diagnostics": FeedDiagnosticsSubtab,
  "Execution Latency": ExecutionLatencySubtab,
  "Network Monitor": NetworkMonitorSubtab,
  "Exposure": ExposureSubtab,
  "Equity": EquitySubtab,
  "Margin": MarginSubtab,
  "CDSS": CDSSSubtab,
  "Audit": AuditSubtab,
  "Reports": ReportsSubtab,
  "Settings": SettingsSubtab,
  "Metrics Lab": MetricsLabSubtab,
  "Refinery / Filter Engine": RefineryFilterEngineSubtab,
  "Feed Watchlist": FeedWatchlistSubtab,
  "Institutional Flow Map": InstitutionalFlowMapSubtab,
  "Diagnostics": DiagnosticsSubtab,
  "Builder": BuilderSubtab,
  "Backtest": BacktestSubtab,
  "Optimizer": OptimizerSubtab,
  "Execution Cluster": ExecutionClusterSubtab,
  "SL Logic": SLLogicSubtab,
  "Performance": PerformanceSubtab,
  "Daily": DailySubtab,
  "Weekly": WeeklySubtab,
  "Breakdown": BreakdownSubtab,
  "Charts": ChartsSubtab,
  "Rules": RulesSubtab,
  "Violations": ViolationsSubtab,
  "Review": ReviewSubtab,
  "System": SystemSubtab,
  "Alerts": AlertsSubtab,
  "Themes": ThemesSubtab,
  "Integrations": IntegrationsSubtab,

  "Sync Mirror Settings": SyncMirrorSettingsSubtab,
  "Broker Sync": BrokerSyncSubtab,
  "Decision Trail": DecisionTrailSubtab,
  "Escalation Log": EscalationLogSubtab,
  "Latency Monitor": LatencyMonitorSubtab,
  "Live Trace": LiveTraceSubtab,
  "Monthly Summary": MonthlySummarySubtab,
  "Packet Inspector": PacketInspectorSubtab,
  "Yearly Breakdown": YearlyBreakdownSubtab,
};
