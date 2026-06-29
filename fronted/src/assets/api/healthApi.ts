import { useGet } from "../hooks/useGet";
import type { HealthStatus } from "../interfaces/HealthStatus";


const HEALTH_ENDPOINT="http://localhost:8080/health"


export function useHealth() {
    return useGet<HealthStatus>(HEALTH_ENDPOINT);
}