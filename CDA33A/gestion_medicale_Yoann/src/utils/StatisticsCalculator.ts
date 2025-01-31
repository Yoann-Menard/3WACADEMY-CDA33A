// notes / ressources :
// principe SOLID applique  :

// https://dev.to/wafa_bergaoui/applying-solid-principles-in-javascript-and-typescript-framework-2d1d

import { MedicalDataCollection } from '../collections/MedicalDataCollection';
import { MedicalData } from '../models/MedicalData';
import { Medication } from '../models/Medication';
import { Treatment } from '../models/Treatment';

export class StatisticsCalculator {
	static totalItems<T extends MedicalData>(
		collection: MedicalDataCollection<T>
	): number {
		return collection.search(() => true).length;
	}

	static mostPrescribedMedication(
		treatments: MedicalDataCollection<Treatment>
	): Medication | undefined {
		const medicationCounts = new Map<Medication, number>();
		treatments
			.search(() => true)
			.forEach((treatment) => {
				treatment.medications.forEach((medication) => {
					medicationCounts.set(
						medication,
						(medicationCounts.get(medication) || 0) + 1
					);
				});
			});
		return Array.from(medicationCounts.entries()).sort(
			(a, b) => b[1] - a[1]
		)[0]?.[0];
	}
}
