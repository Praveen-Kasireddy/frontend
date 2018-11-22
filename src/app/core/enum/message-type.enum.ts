export enum MessageType {
    INGESTION_STARTED = ('ingestion-started' as any) as MessageType,
    INGESTION_FINISHED = ('ingestion-finished' as any) as MessageType,
    INGESTION_FINISHED_WITH_ERROR = ('ingestion-finished-with-error' as any) as MessageType,
    LOADING_STARTED = ('loading-started' as any) as MessageType,
    LOADING_FINISHED = ('loading-finished' as any) as MessageType,
    LOADING_FINISHED_WITH_ERROR = ('loading-finished-with-error' as any) as MessageType
}
