// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const payments_processTool: Tool = {
  definition: {
    name: 'payments_process',
    description: 'Process payment through optimal gateway',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[payment-gateway] payments_process executed');
      return ok('payments_process', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'payments_process',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const payments_list_gatewaysTool: Tool = {
  definition: {
    name: 'payments_list_gateways',
    description: 'List configured gateways with health status',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[payment-gateway] payments_list_gateways executed');
      return ok('payments_list_gateways', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'payments_list_gateways',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const payments_get_transactionTool: Tool = {
  definition: {
    name: 'payments_get_transaction',
    description: 'Get transaction details and status',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[payment-gateway] payments_get_transaction executed');
      return ok('payments_get_transaction', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'payments_get_transaction',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const payments_refundTool: Tool = {
  definition: {
    name: 'payments_refund',
    description: 'Process refund through original gateway',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[payment-gateway] payments_refund executed');
      return ok('payments_refund', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'payments_refund',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-payment-gateway] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-payment-gateway] Unloading...');
}
export const tools: Tool[] = [
  payments_processTool,
  payments_list_gatewaysTool,
  payments_get_transactionTool,
  payments_refundTool,
];
