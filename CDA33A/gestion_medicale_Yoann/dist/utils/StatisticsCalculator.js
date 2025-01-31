"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsCalculator = void 0;
class StatisticsCalculator {
    static totalItems(collection) {
        return collection.search(() => true).length;
    }
    static mostPrescribedMedication(treatments) {
        var _a;
        const medicationCounts = new Map();
        treatments
            .search(() => true)
            .forEach((treatment) => {
            treatment.medications.forEach((medication) => {
                medicationCounts.set(medication, (medicationCounts.get(medication) || 0) + 1);
            });
        });
        return (_a = Array.from(medicationCounts.entries()).sort((a, b) => b[1] - a[1])[0]) === null || _a === void 0 ? void 0 : _a[0];
    }
}
exports.StatisticsCalculator = StatisticsCalculator;
