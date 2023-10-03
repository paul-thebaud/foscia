import logSymbols from '@/utilities/output/logSymbols';

export default function cancel(message?: string): never {
  console.info(`${logSymbols.info} ${message ?? 'Operation cancelled.'}`);
  process.exit(0);
}
