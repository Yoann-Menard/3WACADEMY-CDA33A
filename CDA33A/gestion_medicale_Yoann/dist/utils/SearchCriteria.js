"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCriteria = void 0;
class SearchCriteria {
    static byMedecin(medecin) {
        return (item) => item.medecin === medecin;
    }
    static bySeverity(severity) {
        return (item) => item.severity === severity;
    }
}
exports.SearchCriteria = SearchCriteria;
