import { UserRepository } from "../../infra/repositories/user.repository";

import { User } from "../../domain/entities/user.entity";

const repository = new UserRepository();

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendNewStatuses() {
    const statusToIntegrate = await repository.statusToIntegrate();

    for (let s of statusToIntegrate) {
        await integrateNewStatus(s);
    }
}

async function integrateNewStatus(user: User) {
    console.log(`Integrando status ${user.status} do usuário ${user.email} no CRM...`);

    repository.updateIntegrateWithCrm(user.id, false);
}

(async () => {
    while (true) {
        await sendNewStatuses();
        await sleep(1000 * 60 * 10);
    }
})();