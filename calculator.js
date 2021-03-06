// ATC medicines
const medicines = [
    {
        "atc_level": "A",
        "atc_description": "ALIMENTARY TRACT AND METABOLISM"
    },
    {
        "atc_level": "A00",
        "atc_description": "ALIMENTARY TRACT AND METABOLISM"
    },
    {
        "atc_level": "A01",
        "atc_description": "STOMATOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "A01A",
        "atc_description": "STOMATOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "A01AA",
        "atc_description": "Caries prophylactic agents"
    },
    {
        "atc_level": "A01AA01",
        "atc_description": "sodium fluoride"
    },
    {
        "atc_level": "A01AA02",
        "atc_description": "sodium monofluorophosphate"
    },
    {
        "atc_level": "A01AA03",
        "atc_description": "olaflur"
    },
    {
        "atc_level": "A01AA04",
        "atc_description": "stannous fluoride"
    },
    {
        "atc_level": "A01AA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A01AA51",
        "atc_description": "sodium fluoride, combinations"
    },
    {
        "atc_level": "A01AB",
        "atc_description": "Antiinfectives and antiseptics for local oral treatment"
    },
    {
        "atc_level": "A01AB02",
        "atc_description": "hydrogen peroxide"
    },
    {
        "atc_level": "A01AB03",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "A01AB04",
        "atc_description": "amphotericin B"
    },
    {
        "atc_level": "A01AB05",
        "atc_description": "polynoxylin"
    },
    {
        "atc_level": "A01AB06",
        "atc_description": "domiphen"
    },
    {
        "atc_level": "A01AB07",
        "atc_description": "oxyquinoline"
    },
    {
        "atc_level": "A01AB08",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "A01AB09",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "A01AB10",
        "atc_description": "natamycin"
    },
    {
        "atc_level": "A01AB11",
        "atc_description": "various"
    },
    {
        "atc_level": "A01AB12",
        "atc_description": "hexetidine"
    },
    {
        "atc_level": "A01AB13",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "A01AB14",
        "atc_description": "benzoxonium chloride"
    },
    {
        "atc_level": "A01AB15",
        "atc_description": "tibezonium iodide"
    },
    {
        "atc_level": "A01AB16",
        "atc_description": "mepartricin"
    },
    {
        "atc_level": "A01AB17",
        "atc_description": "metronidazole"
    },
    {
        "atc_level": "A01AB18",
        "atc_description": "clotrimazole"
    },
    {
        "atc_level": "A01AB19",
        "atc_description": "sodium perborate"
    },
    {
        "atc_level": "A01AB21",
        "atc_description": "chlortetracycline"
    },
    {
        "atc_level": "A01AB22",
        "atc_description": "doxycycline"
    },
    {
        "atc_level": "A01AB23",
        "atc_description": "minocycline"
    },
    {
        "atc_level": "A01AC",
        "atc_description": "Corticosteroids for local oral treatment"
    },
    {
        "atc_level": "A01AC01",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "A01AC02",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "A01AC03",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "A01AC54",
        "atc_description": "prednisolone, combinations"
    },
    {
        "atc_level": "A01AD",
        "atc_description": "Other agents for local oral treatment"
    },
    {
        "atc_level": "A01AD01",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "A01AD02",
        "atc_description": "benzydamine"
    },
    {
        "atc_level": "A01AD05",
        "atc_description": "acetylsalicylic acid"
    },
    {
        "atc_level": "A01AD06",
        "atc_description": "adrenalone"
    },
    {
        "atc_level": "A01AD07",
        "atc_description": "amlexanox"
    },
    {
        "atc_level": "A01AD08",
        "atc_description": "becaplermin"
    },
    {
        "atc_level": "A01AD11",
        "atc_description": "various"
    },
    {
        "atc_level": "A02",
        "atc_description": "DRUGS FOR ACID RELATED DISORDERS"
    },
    {
        "atc_level": "A02A",
        "atc_description": "ANTACIDS"
    },
    {
        "atc_level": "A02AA",
        "atc_description": "Magnesium compounds"
    },
    {
        "atc_level": "A02AA01",
        "atc_description": "magnesium carbonate"
    },
    {
        "atc_level": "A02AA02",
        "atc_description": "magnesium oxide"
    },
    {
        "atc_level": "A02AA03",
        "atc_description": "magnesium peroxide"
    },
    {
        "atc_level": "A02AA04",
        "atc_description": "magnesium hydroxide"
    },
    {
        "atc_level": "A02AA05",
        "atc_description": "magnesium silicate"
    },
    {
        "atc_level": "A02AA10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A02AB",
        "atc_description": "Aluminium compounds"
    },
    {
        "atc_level": "A02AB01",
        "atc_description": "aluminium hydroxide"
    },
    {
        "atc_level": "A02AB02",
        "atc_description": "algeldrate"
    },
    {
        "atc_level": "A02AB03",
        "atc_description": "aluminium phosphate"
    },
    {
        "atc_level": "A02AB04",
        "atc_description": "dihydroxialumini sodium carbonate"
    },
    {
        "atc_level": "A02AB05",
        "atc_description": "aluminium acetoacetate"
    },
    {
        "atc_level": "A02AB06",
        "atc_description": "aloglutamol"
    },
    {
        "atc_level": "A02AB07",
        "atc_description": "aluminium glycinate"
    },
    {
        "atc_level": "A02AB10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A02AC",
        "atc_description": "Calcium compounds"
    },
    {
        "atc_level": "A02AC01",
        "atc_description": "calcium carbonate"
    },
    {
        "atc_level": "A02AC02",
        "atc_description": "calcium silicate"
    },
    {
        "atc_level": "A02AC10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A02AD",
        "atc_description": "Combinations and complexes of aluminium, calcium and magnesium compounds"
    },
    {
        "atc_level": "A02AD01",
        "atc_description": "ordinary salt combinations"
    },
    {
        "atc_level": "A02AD02",
        "atc_description": "magaldrate"
    },
    {
        "atc_level": "A02AD03",
        "atc_description": "almagate"
    },
    {
        "atc_level": "A02AD04",
        "atc_description": "hydrotalcite"
    },
    {
        "atc_level": "A02AD05",
        "atc_description": "almasilate"
    },
    {
        "atc_level": "A02AF",
        "atc_description": "Antacids with antiflatulents"
    },
    {
        "atc_level": "A02AF01",
        "atc_description": "magaldrate and antiflatulents"
    },
    {
        "atc_level": "A02AF02",
        "atc_description": "ordinary salt combinations and antiflatulents"
    },
    {
        "atc_level": "A02AG",
        "atc_description": "Antacids with antispasmodics"
    },
    {
        "atc_level": "A02AH",
        "atc_description": "Antacids with sodium bicarbonate"
    },
    {
        "atc_level": "A02AX",
        "atc_description": "Antacids, other combinations"
    },
    {
        "atc_level": "A02B",
        "atc_description": "DRUGS FOR PEPTIC ULCER AND GASTRO-OESOPHAGEAL REFLUX DISEASE (GORD)"
    },
    {
        "atc_level": "A02BA",
        "atc_description": "H2-receptor antagonists"
    },
    {
        "atc_level": "A02BA01",
        "atc_description": "cimetidine"
    },
    {
        "atc_level": "A02BA02",
        "atc_description": "ranitidine"
    },
    {
        "atc_level": "A02BA03",
        "atc_description": "famotidine"
    },
    {
        "atc_level": "A02BA04",
        "atc_description": "nizatidine"
    },
    {
        "atc_level": "A02BA05",
        "atc_description": "niperotidine"
    },
    {
        "atc_level": "A02BA06",
        "atc_description": "roxatidine"
    },
    {
        "atc_level": "A02BA07",
        "atc_description": "ranitidine bismuth citrate"
    },
    {
        "atc_level": "A02BA08",
        "atc_description": "lafutidine"
    },
    {
        "atc_level": "A02BA51",
        "atc_description": "cimetidine, combinations"
    },
    {
        "atc_level": "A02BA53",
        "atc_description": "famotidine, combinations"
    },
    {
        "atc_level": "A02BB",
        "atc_description": "Prostaglandins"
    },
    {
        "atc_level": "A02BB01",
        "atc_description": "misoprostol"
    },
    {
        "atc_level": "A02BB02",
        "atc_description": "enprostil"
    },
    {
        "atc_level": "A02BC",
        "atc_description": "Proton pump inhibitors"
    },
    {
        "atc_level": "A02BC01",
        "atc_description": "omeprazole"
    },
    {
        "atc_level": "A02BC02",
        "atc_description": "pantoprazole"
    },
    {
        "atc_level": "A02BC03",
        "atc_description": "lansoprazole"
    },
    {
        "atc_level": "A02BC04",
        "atc_description": "rabeprazole"
    },
    {
        "atc_level": "A02BC05",
        "atc_description": "esomeprazole"
    },
    {
        "atc_level": "A02BC06",
        "atc_description": "dexlansoprazole"
    },
    {
        "atc_level": "A02BC07",
        "atc_description": "dexrabeprazole"
    },
    {
        "atc_level": "A02BC08",
        "atc_description": "vonoprazan"
    },
    {
        "atc_level": "A02BC09",
        "atc_description": "tegoprazan"
    },
    {
        "atc_level": "A02BC53",
        "atc_description": "lansoprazole, combinations"
    },
    {
        "atc_level": "A02BC54",
        "atc_description": "rabeprazole, combinations"
    },
    {
        "atc_level": "A02BD",
        "atc_description": "Combinations for eradication of Helicobacter pylori"
    },
    {
        "atc_level": "A02BD01",
        "atc_description": "omeprazole, amoxicillin and metronidazole"
    },
    {
        "atc_level": "A02BD02",
        "atc_description": "lansoprazole, tetracycline and metronidazole"
    },
    {
        "atc_level": "A02BD03",
        "atc_description": "lansoprazole, amoxicillin and metronidazole"
    },
    {
        "atc_level": "A02BD04",
        "atc_description": "pantoprazole, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD05",
        "atc_description": "omeprazole, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD06",
        "atc_description": "esomeprazole, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD07",
        "atc_description": "lansoprazole, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD08",
        "atc_description": "bismuth subcitrate, tetracycline and metronidazole"
    },
    {
        "atc_level": "A02BD09",
        "atc_description": "lansoprazole, clarithromycin and tinidazole"
    },
    {
        "atc_level": "A02BD10",
        "atc_description": "lansoprazole, amoxicillin and levofloxacin"
    },
    {
        "atc_level": "A02BD11",
        "atc_description": "pantoprazole, amoxicillin, clarithromycin and metronidazole"
    },
    {
        "atc_level": "A02BD12",
        "atc_description": "rabeprazole, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD13",
        "atc_description": "rabeprazole, amoxicillin and metronidazole"
    },
    {
        "atc_level": "A02BD14",
        "atc_description": "vonoprazan, amoxicillin and clarithromycin"
    },
    {
        "atc_level": "A02BD15",
        "atc_description": "vonoprazan, amoxicillin and metronidazole"
    },
    {
        "atc_level": "A02BD16",
        "atc_description": "omeprazole, amoxicillin and rifabutin"
    },
    {
        "atc_level": "A02BX",
        "atc_description": "Other drugs for peptic ulcer and gastro-oesophageal reflux disease (GORD)"
    },
    {
        "atc_level": "A02BX01",
        "atc_description": "carbenoxolone"
    },
    {
        "atc_level": "A02BX02",
        "atc_description": "sucralfate"
    },
    {
        "atc_level": "A02BX03",
        "atc_description": "pirenzepine"
    },
    {
        "atc_level": "A02BX04",
        "atc_description": "methiosulfonium chloride"
    },
    {
        "atc_level": "A02BX05",
        "atc_description": "bismuth subcitrate"
    },
    {
        "atc_level": "A02BX06",
        "atc_description": "proglumide"
    },
    {
        "atc_level": "A02BX07",
        "atc_description": "gefarnate"
    },
    {
        "atc_level": "A02BX08",
        "atc_description": "sulglicotide"
    },
    {
        "atc_level": "A02BX09",
        "atc_description": "acetoxolone"
    },
    {
        "atc_level": "A02BX10",
        "atc_description": "zolimidine"
    },
    {
        "atc_level": "A02BX11",
        "atc_description": "troxipide"
    },
    {
        "atc_level": "A02BX12",
        "atc_description": "bismuth subnitrate"
    },
    {
        "atc_level": "A02BX13",
        "atc_description": "alginic acid"
    },
    {
        "atc_level": "A02BX14",
        "atc_description": "rebamipide"
    },
    {
        "atc_level": "A02BX51",
        "atc_description": "carbenoxolone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "A02BX71",
        "atc_description": "carbenoxolone, combinations with psycholeptics"
    },
    {
        "atc_level": "A02BX77",
        "atc_description": "gefarnate, combinations with psycholeptics"
    },
    {
        "atc_level": "A02D",
        "atc_description": "Antiflatulents"
    },
    {
        "atc_level": "A02DA",
        "atc_description": "Antiflatulents"
    },
    {
        "atc_level": "A02DA01",
        "atc_description": "Silicones"
    },
    {
        "atc_level": "A02E",
        "atc_description": "Antiregurgitants"
    },
    {
        "atc_level": "A02EA",
        "atc_description": "Antiregurgitants"
    },
    {
        "atc_level": "A02EA01",
        "atc_description": "Alginic acid"
    },
    {
        "atc_level": "A02X",
        "atc_description": "OTHER DRUGS FOR ACID RELATED DISORDERS"
    },
    {
        "atc_level": "A03",
        "atc_description": "DRUGS FOR FUNCTIONAL GASTROINTESTINAL DISORDERS"
    },
    {
        "atc_level": "A03A",
        "atc_description": "DRUGS FOR FUNCTIONAL GASTROINTESTINAL DISORDERS"
    },
    {
        "atc_level": "A03AA",
        "atc_description": "Synthetic anticholinergics, esters with tertiary amino group"
    },
    {
        "atc_level": "A03AA01",
        "atc_description": "oxyphencyclimine"
    },
    {
        "atc_level": "A03AA03",
        "atc_description": "camylofin"
    },
    {
        "atc_level": "A03AA04",
        "atc_description": "mebeverine"
    },
    {
        "atc_level": "A03AA05",
        "atc_description": "trimebutine"
    },
    {
        "atc_level": "A03AA06",
        "atc_description": "rociverine"
    },
    {
        "atc_level": "A03AA07",
        "atc_description": "dicycloverine"
    },
    {
        "atc_level": "A03AA08",
        "atc_description": "dihexyverine"
    },
    {
        "atc_level": "A03AA09",
        "atc_description": "difemerine"
    },
    {
        "atc_level": "A03AA30",
        "atc_description": "piperidolate"
    },
    {
        "atc_level": "A03AB",
        "atc_description": "Synthetic anticholinergics, quaternary ammonium compounds"
    },
    {
        "atc_level": "A03AB01",
        "atc_description": "benzilone"
    },
    {
        "atc_level": "A03AB02",
        "atc_description": "glycopyrronium bromide"
    },
    {
        "atc_level": "A03AB03",
        "atc_description": "oxyphenonium"
    },
    {
        "atc_level": "A03AB04",
        "atc_description": "penthienate"
    },
    {
        "atc_level": "A03AB05",
        "atc_description": "propantheline"
    },
    {
        "atc_level": "A03AB06",
        "atc_description": "otilonium bromide"
    },
    {
        "atc_level": "A03AB07",
        "atc_description": "methantheline"
    },
    {
        "atc_level": "A03AB08",
        "atc_description": "tridihexethyl"
    },
    {
        "atc_level": "A03AB09",
        "atc_description": "isopropamide"
    },
    {
        "atc_level": "A03AB10",
        "atc_description": "hexocyclium"
    },
    {
        "atc_level": "A03AB11",
        "atc_description": "poldine"
    },
    {
        "atc_level": "A03AB12",
        "atc_description": "mepenzolate"
    },
    {
        "atc_level": "A03AB13",
        "atc_description": "bevonium"
    },
    {
        "atc_level": "A03AB14",
        "atc_description": "pipenzolate"
    },
    {
        "atc_level": "A03AB15",
        "atc_description": "diphemanil"
    },
    {
        "atc_level": "A03AB16",
        "atc_description": "(2-benzhydryloxyethyl)diethyl-methylammonium iodide"
    },
    {
        "atc_level": "A03AB17",
        "atc_description": "tiemonium iodide"
    },
    {
        "atc_level": "A03AB18",
        "atc_description": "prifinium bromide"
    },
    {
        "atc_level": "A03AB19",
        "atc_description": "timepidium bromide"
    },
    {
        "atc_level": "A03AB20",
        "atc_description": "Trospium"
    },
    {
        "atc_level": "A03AB21",
        "atc_description": "fenpiverinium"
    },
    {
        "atc_level": "A03AB53",
        "atc_description": "oxyphenonium, combinations"
    },
    {
        "atc_level": "A03AC",
        "atc_description": "Synthetic antispasmodics, amides with tertiary amines"
    },
    {
        "atc_level": "A03AC02",
        "atc_description": "dimethylaminopropionylphenothiazine"
    },
    {
        "atc_level": "A03AC04",
        "atc_description": "nicofetamide"
    },
    {
        "atc_level": "A03AC05",
        "atc_description": "tiropramide"
    },
    {
        "atc_level": "A03AD",
        "atc_description": "Papaverine and derivatives"
    },
    {
        "atc_level": "A03AD01",
        "atc_description": "papaverine"
    },
    {
        "atc_level": "A03AD02",
        "atc_description": "drotaverine"
    },
    {
        "atc_level": "A03AD30",
        "atc_description": "moxaverine"
    },
    {
        "atc_level": "A03AD51",
        "atc_description": "Papaverine, combinations"
    },
    {
        "atc_level": "A03AE",
        "atc_description": "Serotonin receptor antagonists"
    },
    {
        "atc_level": "A03AE01",
        "atc_description": "alosetron"
    },
    {
        "atc_level": "A03AE02",
        "atc_description": "tegaserod"
    },
    {
        "atc_level": "A03AE03",
        "atc_description": "cilansetron"
    },
    {
        "atc_level": "A03AE04",
        "atc_description": "prucalopride"
    },
    {
        "atc_level": "A03AX",
        "atc_description": "Other drugs for functional gastrointestinal disorders"
    },
    {
        "atc_level": "A03AX01",
        "atc_description": "fenpiprane"
    },
    {
        "atc_level": "A03AX02",
        "atc_description": "diisopromine"
    },
    {
        "atc_level": "A03AX03",
        "atc_description": "chlorbenzoxamine"
    },
    {
        "atc_level": "A03AX04",
        "atc_description": "pinaverium"
    },
    {
        "atc_level": "A03AX05",
        "atc_description": "fenoverine"
    },
    {
        "atc_level": "A03AX06",
        "atc_description": "idanpramine"
    },
    {
        "atc_level": "A03AX07",
        "atc_description": "proxazole"
    },
    {
        "atc_level": "A03AX08",
        "atc_description": "alverine"
    },
    {
        "atc_level": "A03AX09",
        "atc_description": "trepibutone"
    },
    {
        "atc_level": "A03AX10",
        "atc_description": "isometheptene"
    },
    {
        "atc_level": "A03AX11",
        "atc_description": "caroverine"
    },
    {
        "atc_level": "A03AX12",
        "atc_description": "phloroglucinol"
    },
    {
        "atc_level": "A03AX13",
        "atc_description": "silicones"
    },
    {
        "atc_level": "A03AX14",
        "atc_description": "valethamate"
    },
    {
        "atc_level": "A03AX15",
        "atc_description": "menthae piperitae aetheroleum"
    },
    {
        "atc_level": "A03AX30",
        "atc_description": "trimethyldiphenylpropylamine"
    },
    {
        "atc_level": "A03AX58",
        "atc_description": "alverine, combinations"
    },
    {
        "atc_level": "A03B",
        "atc_description": "BELLADONNA AND DERIVATIVES, PLAIN"
    },
    {
        "atc_level": "A03BA",
        "atc_description": "Belladonna alkaloids, tertiary amines"
    },
    {
        "atc_level": "A03BA01",
        "atc_description": "atropine"
    },
    {
        "atc_level": "A03BA03",
        "atc_description": "hyoscyamine"
    },
    {
        "atc_level": "A03BA04",
        "atc_description": "belladonna total alkaloids"
    },
    {
        "atc_level": "A03BB",
        "atc_description": "Belladonna alkaloids, semisynthetic, quaternary ammonium compounds"
    },
    {
        "atc_level": "A03BB01",
        "atc_description": "butylscopolamine"
    },
    {
        "atc_level": "A03BB02",
        "atc_description": "methylatropine"
    },
    {
        "atc_level": "A03BB03",
        "atc_description": "methylscopolamine"
    },
    {
        "atc_level": "A03BB04",
        "atc_description": "fentonium"
    },
    {
        "atc_level": "A03BB05",
        "atc_description": "cimetropium bromide"
    },
    {
        "atc_level": "A03BB06",
        "atc_description": "homatropine methylbromide"
    },
    {
        "atc_level": "A03C",
        "atc_description": "ANTISPASMODICS IN COMBINATION WITH PSYCHOLEPTICS"
    },
    {
        "atc_level": "A03CA",
        "atc_description": "Synthetic anticholinergic agents in combination with psycholeptics"
    },
    {
        "atc_level": "A03CA01",
        "atc_description": "isopropamide and psycholeptics"
    },
    {
        "atc_level": "A03CA02",
        "atc_description": "clidinium and psycholeptics"
    },
    {
        "atc_level": "A03CA03",
        "atc_description": "oxyphencyclimine and psycholeptics"
    },
    {
        "atc_level": "A03CA04",
        "atc_description": "otilonium bromide and psycholeptics"
    },
    {
        "atc_level": "A03CA05",
        "atc_description": "glycopyrronium bromide and psycholeptics"
    },
    {
        "atc_level": "A03CA06",
        "atc_description": "bevonium and psycholeptics"
    },
    {
        "atc_level": "A03CA07",
        "atc_description": "ambutonium and psycholeptics"
    },
    {
        "atc_level": "A03CA08",
        "atc_description": "diphemanil and psycholeptics"
    },
    {
        "atc_level": "A03CA09",
        "atc_description": "pipenzolate and psycholeptics"
    },
    {
        "atc_level": "A03CA30",
        "atc_description": "emepronium and psycholeptics"
    },
    {
        "atc_level": "A03CA34",
        "atc_description": "propantheline and psycholeptics"
    },
    {
        "atc_level": "A03CB",
        "atc_description": "Belladonna and derivatives in combination with psycholeptics"
    },
    {
        "atc_level": "A03CB01",
        "atc_description": "methylscopolamine and psycholeptics"
    },
    {
        "atc_level": "A03CB02",
        "atc_description": "belladonna total alkaloids and psycholeptics"
    },
    {
        "atc_level": "A03CB03",
        "atc_description": "atropine and psycholeptics"
    },
    {
        "atc_level": "A03CB04",
        "atc_description": "homatropine methylbromide and psycholeptics"
    },
    {
        "atc_level": "A03CB31",
        "atc_description": "hyoscyamine and psycholeptics"
    },
    {
        "atc_level": "A03CC",
        "atc_description": "Other antispasmodics in combination with psycholeptics"
    },
    {
        "atc_level": "A03D",
        "atc_description": "ANTISPASMODICS IN COMBINATION WITH ANALGESICS"
    },
    {
        "atc_level": "A03DA",
        "atc_description": "Synthetic anticholinergic agents in combination with analgesics"
    },
    {
        "atc_level": "A03DA01",
        "atc_description": "tropenzilone and analgesics"
    },
    {
        "atc_level": "A03DA02",
        "atc_description": "pitofenone and analgesics"
    },
    {
        "atc_level": "A03DA03",
        "atc_description": "bevonium and analgesics"
    },
    {
        "atc_level": "A03DA04",
        "atc_description": "ciclonium and analgesics"
    },
    {
        "atc_level": "A03DA05",
        "atc_description": "camylofin and analgesics"
    },
    {
        "atc_level": "A03DA06",
        "atc_description": "trospium and analgesics"
    },
    {
        "atc_level": "A03DA07",
        "atc_description": "tiemonium iodide and analgesics"
    },
    {
        "atc_level": "A03DB",
        "atc_description": "Belladonna and derivatives in combination with analgesics"
    },
    {
        "atc_level": "A03DB04",
        "atc_description": "butylscopolamine and analgesics"
    },
    {
        "atc_level": "A03DC",
        "atc_description": "Other antispasmodics in combination with analgesics"
    },
    {
        "atc_level": "A03E",
        "atc_description": "ANTISPASMODICS AND ANTICHOLINERGICS IN COMBINATION WITH OTHER DRUGS"
    },
    {
        "atc_level": "A03EA",
        "atc_description": "Antispasmodics, psycholeptics and analgesics in combination"
    },
    {
        "atc_level": "A03ED",
        "atc_description": "Antispasmodics in combination with other drugs"
    },
    {
        "atc_level": "A03F",
        "atc_description": "PROPULSIVES"
    },
    {
        "atc_level": "A03FA",
        "atc_description": "Propulsives"
    },
    {
        "atc_level": "A03FA01",
        "atc_description": "metoclopramide"
    },
    {
        "atc_level": "A03FA02",
        "atc_description": "cisapride"
    },
    {
        "atc_level": "A03FA03",
        "atc_description": "domperidone"
    },
    {
        "atc_level": "A03FA04",
        "atc_description": "bromopride"
    },
    {
        "atc_level": "A03FA05",
        "atc_description": "alizapride"
    },
    {
        "atc_level": "A03FA06",
        "atc_description": "clebopride"
    },
    {
        "atc_level": "A03FA07",
        "atc_description": "itopride"
    },
    {
        "atc_level": "A03FA08",
        "atc_description": "cinitapride"
    },
    {
        "atc_level": "A03FA09",
        "atc_description": "mosapride"
    },
    {
        "atc_level": "A04",
        "atc_description": "ANTIEMETICS AND ANTINAUSEANTS"
    },
    {
        "atc_level": "A04A",
        "atc_description": "ANTIEMETICS AND ANTINAUSEANTS"
    },
    {
        "atc_level": "A04AA",
        "atc_description": "Serotonin (5HT3) antagonists"
    },
    {
        "atc_level": "A04AA01",
        "atc_description": "ondansetron"
    },
    {
        "atc_level": "A04AA02",
        "atc_description": "granisetron"
    },
    {
        "atc_level": "A04AA03",
        "atc_description": "tropisetron"
    },
    {
        "atc_level": "A04AA04",
        "atc_description": "dolasetron"
    },
    {
        "atc_level": "A04AA05",
        "atc_description": "palonosetron"
    },
    {
        "atc_level": "A04AA55",
        "atc_description": "palonosetron, combinations"
    },
    {
        "atc_level": "A04AD",
        "atc_description": "Other antiemetics"
    },
    {
        "atc_level": "A04AD01",
        "atc_description": "scopolamine"
    },
    {
        "atc_level": "A04AD02",
        "atc_description": "cerium oxalate"
    },
    {
        "atc_level": "A04AD04",
        "atc_description": "chlorobutanol"
    },
    {
        "atc_level": "A04AD05",
        "atc_description": "metopimazine"
    },
    {
        "atc_level": "A04AD08",
        "atc_description": "Ondansetron"
    },
    {
        "atc_level": "A04AD09",
        "atc_description": "Granisetron"
    },
    {
        "atc_level": "A04AD10",
        "atc_description": "dronabinol"
    },
    {
        "atc_level": "A04AD11",
        "atc_description": "nabilone"
    },
    {
        "atc_level": "A04AD12",
        "atc_description": "aprepitant"
    },
    {
        "atc_level": "A04AD13",
        "atc_description": "casopitant"
    },
    {
        "atc_level": "A04AD14",
        "atc_description": "rolapitant"
    },
    {
        "atc_level": "A04AD51",
        "atc_description": "scopolamine, combinations"
    },
    {
        "atc_level": "A04AD54",
        "atc_description": "chlorobutanol, combinations"
    },
    {
        "atc_level": "A05",
        "atc_description": "BILE AND LIVER THERAPY"
    },
    {
        "atc_level": "A05A",
        "atc_description": "BILE THERAPY"
    },
    {
        "atc_level": "A05AA",
        "atc_description": "Bile acids and derivatives"
    },
    {
        "atc_level": "A05AA01",
        "atc_description": "chenodeoxycholic acid"
    },
    {
        "atc_level": "A05AA02",
        "atc_description": "ursodeoxycholic acid"
    },
    {
        "atc_level": "A05AA03",
        "atc_description": "cholic acid"
    },
    {
        "atc_level": "A05AA04",
        "atc_description": "obeticholic acid"
    },
    {
        "atc_level": "A05AB",
        "atc_description": "Preparations for biliary tract therapy"
    },
    {
        "atc_level": "A05AB01",
        "atc_description": "nicotinyl methylamide"
    },
    {
        "atc_level": "A05AX",
        "atc_description": "Other drugs for bile therapy"
    },
    {
        "atc_level": "A05AX01",
        "atc_description": "piprozolin"
    },
    {
        "atc_level": "A05AX02",
        "atc_description": "hymecromone"
    },
    {
        "atc_level": "A05AX03",
        "atc_description": "cyclobutyrol"
    },
    {
        "atc_level": "A05AX04",
        "atc_description": "maralixibat chloride"
    },
    {
        "atc_level": "A05AX05",
        "atc_description": "odevixibat"
    },
    {
        "atc_level": "A05B",
        "atc_description": "LIVER THERAPY, LIPOTROPICS"
    },
    {
        "atc_level": "A05BA",
        "atc_description": "Liver therapy"
    },
    {
        "atc_level": "A05BA01",
        "atc_description": "arginine glutamate"
    },
    {
        "atc_level": "A05BA02",
        "atc_description": "Tioctic acid"
    },
    {
        "atc_level": "A05BA03",
        "atc_description": "silymarin"
    },
    {
        "atc_level": "A05BA04",
        "atc_description": "citiolone"
    },
    {
        "atc_level": "A05BA05",
        "atc_description": "epomediol"
    },
    {
        "atc_level": "A05BA06",
        "atc_description": "ornithine oxoglurate"
    },
    {
        "atc_level": "A05BA07",
        "atc_description": "tidiacic arginine"
    },
    {
        "atc_level": "A05BA08",
        "atc_description": "glycyrrhizic acid"
    },
    {
        "atc_level": "A05BA09",
        "atc_description": "metadoxine"
    },
    {
        "atc_level": "A05C",
        "atc_description": "DRUGS FOR BILE THERAPY AND LIPOTROPICS IN COMBINATION"
    },
    {
        "atc_level": "A06",
        "atc_description": "DRUGS FOR CONSTIPATION"
    },
    {
        "atc_level": "A06A",
        "atc_description": "DRUGS FOR CONSTIPATION"
    },
    {
        "atc_level": "A06AA",
        "atc_description": "Softeners, emollients"
    },
    {
        "atc_level": "A06AA01",
        "atc_description": "liquid paraffin"
    },
    {
        "atc_level": "A06AA02",
        "atc_description": "docusate sodium"
    },
    {
        "atc_level": "A06AA51",
        "atc_description": "liquid paraffin, combinations"
    },
    {
        "atc_level": "A06AB",
        "atc_description": "Contact laxatives"
    },
    {
        "atc_level": "A06AB01",
        "atc_description": "oxyphenisatine"
    },
    {
        "atc_level": "A06AB02",
        "atc_description": "bisacodyl"
    },
    {
        "atc_level": "A06AB03",
        "atc_description": "dantron"
    },
    {
        "atc_level": "A06AB04",
        "atc_description": "phenolphthalein"
    },
    {
        "atc_level": "A06AB05",
        "atc_description": "castor oil"
    },
    {
        "atc_level": "A06AB06",
        "atc_description": "senna glycosides"
    },
    {
        "atc_level": "A06AB07",
        "atc_description": "cascara"
    },
    {
        "atc_level": "A06AB08",
        "atc_description": "sodium picosulfate"
    },
    {
        "atc_level": "A06AB09",
        "atc_description": "bisoxatin"
    },
    {
        "atc_level": "A06AB20",
        "atc_description": "contact laxatives in combination"
    },
    {
        "atc_level": "A06AB30",
        "atc_description": "contact laxatives in combination with belladonna alkaloids"
    },
    {
        "atc_level": "A06AB52",
        "atc_description": "bisacodyl, combinations"
    },
    {
        "atc_level": "A06AB53",
        "atc_description": "dantron, combinations"
    },
    {
        "atc_level": "A06AB56",
        "atc_description": "senna glycosides, combinations"
    },
    {
        "atc_level": "A06AB57",
        "atc_description": "cascara, combinations"
    },
    {
        "atc_level": "A06AB58",
        "atc_description": "sodium picosulfate, combinations"
    },
    {
        "atc_level": "A06AC",
        "atc_description": "Bulk-forming laxatives"
    },
    {
        "atc_level": "A06AC01",
        "atc_description": "ispaghula (psylla seeds)"
    },
    {
        "atc_level": "A06AC02",
        "atc_description": "ethulose"
    },
    {
        "atc_level": "A06AC03",
        "atc_description": "sterculia"
    },
    {
        "atc_level": "A06AC05",
        "atc_description": "linseed"
    },
    {
        "atc_level": "A06AC06",
        "atc_description": "methylcellulose"
    },
    {
        "atc_level": "A06AC07",
        "atc_description": "triticum (wheat fibre)"
    },
    {
        "atc_level": "A06AC08",
        "atc_description": "polycarbophil calcium"
    },
    {
        "atc_level": "A06AC51",
        "atc_description": "ispaghula, combinations"
    },
    {
        "atc_level": "A06AC53",
        "atc_description": "sterculia, combinations"
    },
    {
        "atc_level": "A06AC55",
        "atc_description": "linseed, combinations"
    },
    {
        "atc_level": "A06AD",
        "atc_description": "Osmotically acting laxatives"
    },
    {
        "atc_level": "A06AD01",
        "atc_description": "magnesium carbonate"
    },
    {
        "atc_level": "A06AD02",
        "atc_description": "magnesium oxide"
    },
    {
        "atc_level": "A06AD03",
        "atc_description": "magnesium peroxide"
    },
    {
        "atc_level": "A06AD04",
        "atc_description": "magnesium sulfate"
    },
    {
        "atc_level": "A06AD10",
        "atc_description": "mineral salts in combination"
    },
    {
        "atc_level": "A06AD11",
        "atc_description": "lactulose"
    },
    {
        "atc_level": "A06AD12",
        "atc_description": "lactitol"
    },
    {
        "atc_level": "A06AD13",
        "atc_description": "sodium sulfate"
    },
    {
        "atc_level": "A06AD14",
        "atc_description": "pentaerithrityl"
    },
    {
        "atc_level": "A06AD15",
        "atc_description": "macrogol"
    },
    {
        "atc_level": "A06AD16",
        "atc_description": "mannitol"
    },
    {
        "atc_level": "A06AD17",
        "atc_description": "sodium phosphate"
    },
    {
        "atc_level": "A06AD18",
        "atc_description": "sorbitol"
    },
    {
        "atc_level": "A06AD19",
        "atc_description": "magnesium citrate"
    },
    {
        "atc_level": "A06AD21",
        "atc_description": "sodium tartrate"
    },
    {
        "atc_level": "A06AD61",
        "atc_description": "lactulose, combinations"
    },
    {
        "atc_level": "A06AD65",
        "atc_description": "macrogol, combinations"
    },
    {
        "atc_level": "A06AG",
        "atc_description": "Enemas"
    },
    {
        "atc_level": "A06AG01",
        "atc_description": "sodium phosphate"
    },
    {
        "atc_level": "A06AG02",
        "atc_description": "bisacodyl"
    },
    {
        "atc_level": "A06AG03",
        "atc_description": "dantron, incl. combinations"
    },
    {
        "atc_level": "A06AG04",
        "atc_description": "glycerol"
    },
    {
        "atc_level": "A06AG06",
        "atc_description": "oil"
    },
    {
        "atc_level": "A06AG07",
        "atc_description": "sorbitol"
    },
    {
        "atc_level": "A06AG10",
        "atc_description": "docusate sodium, incl. combinations"
    },
    {
        "atc_level": "A06AG11",
        "atc_description": "sodium lauryl sulfoacetate, incl. combinations"
    },
    {
        "atc_level": "A06AG20",
        "atc_description": "citric acid + lauryl sulfoacetate sodium + sorbitol"
    },
    {
        "atc_level": "A06AH",
        "atc_description": "Peripheral opioid receptor antagonists"
    },
    {
        "atc_level": "A06AH01",
        "atc_description": "methylnaltrexone bromide"
    },
    {
        "atc_level": "A06AH02",
        "atc_description": "alvimopan"
    },
    {
        "atc_level": "A06AH03",
        "atc_description": "naloxegol"
    },
    {
        "atc_level": "A06AH04",
        "atc_description": "naloxone"
    },
    {
        "atc_level": "A06AH05",
        "atc_description": "naldemedine"
    },
    {
        "atc_level": "A06AX",
        "atc_description": "Other drugs for constipation"
    },
    {
        "atc_level": "A06AX01",
        "atc_description": "glycerol"
    },
    {
        "atc_level": "A06AX02",
        "atc_description": "carbon dioxide producing drugs"
    },
    {
        "atc_level": "A06AX03",
        "atc_description": "lubiprostone"
    },
    {
        "atc_level": "A06AX04",
        "atc_description": "linaclotide"
    },
    {
        "atc_level": "A06AX05",
        "atc_description": "prucalopride"
    },
    {
        "atc_level": "A06AX06",
        "atc_description": "tegaserod"
    },
    {
        "atc_level": "A06AX07",
        "atc_description": "plecanatide"
    },
    {
        "atc_level": "A06AX08",
        "atc_description": "tenapanor"
    },
    {
        "atc_level": "A07",
        "atc_description": "ANTIDIARRHEALS, INTESTINAL ANTIINFLAMMATORY/ANTIINFECTIVE AGENTS"
    },
    {
        "atc_level": "A07A",
        "atc_description": "INTESTINAL ANTIINFECTIVES"
    },
    {
        "atc_level": "A07AA",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "A07AA01",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "A07AA02",
        "atc_description": "nystatin"
    },
    {
        "atc_level": "A07AA03",
        "atc_description": "natamycin"
    },
    {
        "atc_level": "A07AA04",
        "atc_description": "streptomycin"
    },
    {
        "atc_level": "A07AA05",
        "atc_description": "polymyxin B"
    },
    {
        "atc_level": "A07AA06",
        "atc_description": "paromomycin"
    },
    {
        "atc_level": "A07AA07",
        "atc_description": "amphotericin B"
    },
    {
        "atc_level": "A07AA08",
        "atc_description": "kanamycin"
    },
    {
        "atc_level": "A07AA09",
        "atc_description": "vancomycin"
    },
    {
        "atc_level": "A07AA10",
        "atc_description": "colistin"
    },
    {
        "atc_level": "A07AA11",
        "atc_description": "rifaximin"
    },
    {
        "atc_level": "A07AA12",
        "atc_description": "fidaxomicin"
    },
    {
        "atc_level": "A07AA13",
        "atc_description": "rifamycin"
    },
    {
        "atc_level": "A07AA51",
        "atc_description": "neomycin, combinations"
    },
    {
        "atc_level": "A07AA54",
        "atc_description": "streptomycin, combinations"
    },
    {
        "atc_level": "A07AB",
        "atc_description": "Sulfonamides"
    },
    {
        "atc_level": "A07AB02",
        "atc_description": "phthalylsulfathiazole"
    },
    {
        "atc_level": "A07AB03",
        "atc_description": "sulfaguanidine"
    },
    {
        "atc_level": "A07AB04",
        "atc_description": "succinylsulfathiazole"
    },
    {
        "atc_level": "A07AC",
        "atc_description": "Imidazole derivatives"
    },
    {
        "atc_level": "A07AC01",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "A07AX",
        "atc_description": "Other intestinal antiinfectives"
    },
    {
        "atc_level": "A07AX01",
        "atc_description": "broxyquinoline"
    },
    {
        "atc_level": "A07AX02",
        "atc_description": "acetarsol"
    },
    {
        "atc_level": "A07AX03",
        "atc_description": "nifuroxazide"
    },
    {
        "atc_level": "A07AX04",
        "atc_description": "nifurzide"
    },
    {
        "atc_level": "A07B",
        "atc_description": "INTESTINAL ADSORBENTS"
    },
    {
        "atc_level": "A07BA",
        "atc_description": "Charcoal preparations"
    },
    {
        "atc_level": "A07BA01",
        "atc_description": "medicinal charcoal"
    },
    {
        "atc_level": "A07BA51",
        "atc_description": "medicinal charcoal, combinations"
    },
    {
        "atc_level": "A07BB",
        "atc_description": "Bismuth preparations"
    },
    {
        "atc_level": "A07BC",
        "atc_description": "Other intestinal adsorbents"
    },
    {
        "atc_level": "A07BC01",
        "atc_description": "pectin"
    },
    {
        "atc_level": "A07BC02",
        "atc_description": "kaolin"
    },
    {
        "atc_level": "A07BC03",
        "atc_description": "crospovidone"
    },
    {
        "atc_level": "A07BC04",
        "atc_description": "attapulgite"
    },
    {
        "atc_level": "A07BC05",
        "atc_description": "diosmectite"
    },
    {
        "atc_level": "A07BC30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A07BC54",
        "atc_description": "attapulgite, combinations"
    },
    {
        "atc_level": "A07C",
        "atc_description": "ELECTROLYTES WITH CARBOHYDRATES"
    },
    {
        "atc_level": "A07CA",
        "atc_description": "Oral rehydration salt formulations"
    },
    {
        "atc_level": "A07D",
        "atc_description": "ANTIPROPULSIVES"
    },
    {
        "atc_level": "A07DA",
        "atc_description": "Antipropulsives"
    },
    {
        "atc_level": "A07DA01",
        "atc_description": "diphenoxylate"
    },
    {
        "atc_level": "A07DA02",
        "atc_description": "opium"
    },
    {
        "atc_level": "A07DA03",
        "atc_description": "loperamide"
    },
    {
        "atc_level": "A07DA04",
        "atc_description": "difenoxin"
    },
    {
        "atc_level": "A07DA05",
        "atc_description": "loperamide oxide"
    },
    {
        "atc_level": "A07DA06",
        "atc_description": "eluxadoline"
    },
    {
        "atc_level": "A07DA52",
        "atc_description": "morphine, combinations"
    },
    {
        "atc_level": "A07DA53",
        "atc_description": "loperamide, combinations"
    },
    {
        "atc_level": "A07E",
        "atc_description": "INTESTINAL ANTIINFLAMMATORY AGENTS"
    },
    {
        "atc_level": "A07EA",
        "atc_description": "Corticosteroids acting locally"
    },
    {
        "atc_level": "A07EA01",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "A07EA02",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "A07EA03",
        "atc_description": "prednisone"
    },
    {
        "atc_level": "A07EA04",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "A07EA05",
        "atc_description": "tixocortol"
    },
    {
        "atc_level": "A07EA06",
        "atc_description": "budesonide"
    },
    {
        "atc_level": "A07EA07",
        "atc_description": "beclometasone"
    },
    {
        "atc_level": "A07EB",
        "atc_description": "Antiallergic agents, excl. corticosteroids"
    },
    {
        "atc_level": "A07EB01",
        "atc_description": "cromoglicic acid"
    },
    {
        "atc_level": "A07EC",
        "atc_description": "Aminosalicylic acid and similar agents"
    },
    {
        "atc_level": "A07EC01",
        "atc_description": "sulfasalazine"
    },
    {
        "atc_level": "A07EC02",
        "atc_description": "mesalazine"
    },
    {
        "atc_level": "A07EC03",
        "atc_description": "olsalazine"
    },
    {
        "atc_level": "A07EC04",
        "atc_description": "balsalazide"
    },
    {
        "atc_level": "A07F",
        "atc_description": "ANTIDIARRHEAL MICROORGANISMS"
    },
    {
        "atc_level": "A07FA",
        "atc_description": "Antidiarrheal microorganisms"
    },
    {
        "atc_level": "A07FA01",
        "atc_description": "lactic acid producing organisms"
    },
    {
        "atc_level": "A07FA02",
        "atc_description": "saccharomyces boulardii"
    },
    {
        "atc_level": "A07FA51",
        "atc_description": "lactic acid producing organisms, combinations"
    },
    {
        "atc_level": "A07X",
        "atc_description": "OTHER ANTIDIARRHEALS"
    },
    {
        "atc_level": "A07XA",
        "atc_description": "Other antidiarrheals"
    },
    {
        "atc_level": "A07XA01",
        "atc_description": "albumin tannate"
    },
    {
        "atc_level": "A07XA02",
        "atc_description": "ceratonia"
    },
    {
        "atc_level": "A07XA03",
        "atc_description": "calcium compounds"
    },
    {
        "atc_level": "A07XA04",
        "atc_description": "racecadotril"
    },
    {
        "atc_level": "A07XA06",
        "atc_description": "crofelemer"
    },
    {
        "atc_level": "A07XA51",
        "atc_description": "albumin tannate, combinations"
    },
    {
        "atc_level": "A08",
        "atc_description": "ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS"
    },
    {
        "atc_level": "A08A",
        "atc_description": "ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS"
    },
    {
        "atc_level": "A08AA",
        "atc_description": "Centrally acting antiobesity products"
    },
    {
        "atc_level": "A08AA01",
        "atc_description": "phentermine"
    },
    {
        "atc_level": "A08AA02",
        "atc_description": "fenfluramine"
    },
    {
        "atc_level": "A08AA03",
        "atc_description": "amfepramone"
    },
    {
        "atc_level": "A08AA04",
        "atc_description": "dexfenfluramine"
    },
    {
        "atc_level": "A08AA05",
        "atc_description": "mazindol"
    },
    {
        "atc_level": "A08AA06",
        "atc_description": "etilamfetamine"
    },
    {
        "atc_level": "A08AA07",
        "atc_description": "cathine"
    },
    {
        "atc_level": "A08AA08",
        "atc_description": "clobenzorex"
    },
    {
        "atc_level": "A08AA09",
        "atc_description": "mefenorex"
    },
    {
        "atc_level": "A08AA10",
        "atc_description": "sibutramine"
    },
    {
        "atc_level": "A08AA11",
        "atc_description": "lorcaserin"
    },
    {
        "atc_level": "A08AA12",
        "atc_description": "setmelanotide"
    },
    {
        "atc_level": "A08AA56",
        "atc_description": "ephedrine, combinations"
    },
    {
        "atc_level": "A08AA62",
        "atc_description": "bupropion and naltrexone"
    },
    {
        "atc_level": "A08AB",
        "atc_description": "Peripherally acting antiobesity products"
    },
    {
        "atc_level": "A08AB01",
        "atc_description": "orlistat"
    },
    {
        "atc_level": "A08AX",
        "atc_description": "Other antiobesity drugs"
    },
    {
        "atc_level": "A08AX01",
        "atc_description": "rimonabant"
    },
    {
        "atc_level": "A09",
        "atc_description": "DIGESTIVES, INCL. ENZYMES"
    },
    {
        "atc_level": "A09A",
        "atc_description": "DIGESTIVES, INCL. ENZYMES"
    },
    {
        "atc_level": "A09AA",
        "atc_description": "Enzyme preparations"
    },
    {
        "atc_level": "A09AA01",
        "atc_description": "diastase"
    },
    {
        "atc_level": "A09AA02",
        "atc_description": "multienzymes (lipase, protease etc.)"
    },
    {
        "atc_level": "A09AA03",
        "atc_description": "pepsin"
    },
    {
        "atc_level": "A09AA04",
        "atc_description": "tilactase"
    },
    {
        "atc_level": "A09AB",
        "atc_description": "Acid preparations"
    },
    {
        "atc_level": "A09AB01",
        "atc_description": "glutamic acid hydrochloride"
    },
    {
        "atc_level": "A09AB02",
        "atc_description": "betaine hydrochloride"
    },
    {
        "atc_level": "A09AB03",
        "atc_description": "hydrochloric acid"
    },
    {
        "atc_level": "A09AB04",
        "atc_description": "citric acid"
    },
    {
        "atc_level": "A09AC",
        "atc_description": "Enzyme and acid preparations, combinations"
    },
    {
        "atc_level": "A09AC01",
        "atc_description": "pepsin and acid preparations"
    },
    {
        "atc_level": "A09AC02",
        "atc_description": "multienzymes and acid preparations"
    },
    {
        "atc_level": "A10",
        "atc_description": "DRUGS USED IN DIABETES"
    },
    {
        "atc_level": "A10A",
        "atc_description": "INSULINS AND ANALOGUES"
    },
    {
        "atc_level": "A10AA",
        "atc_description": "Insulins"
    },
    {
        "atc_level": "A10AA01",
        "atc_description": "Insulins, fast-acting"
    },
    {
        "atc_level": "A10AA02",
        "atc_description": "Insulins, intermediate-acting"
    },
    {
        "atc_level": "A10AA03",
        "atc_description": "Insulins, intermediate-acting, rapid onset of effect"
    },
    {
        "atc_level": "A10AA04",
        "atc_description": "Insulins, long-acting"
    },
    {
        "atc_level": "A10AB",
        "atc_description": "Insulins and analogues for injection, fast-acting"
    },
    {
        "atc_level": "A10AB01",
        "atc_description": "insulin (human)"
    },
    {
        "atc_level": "A10AB02",
        "atc_description": "insulin (beef)"
    },
    {
        "atc_level": "A10AB03",
        "atc_description": "insulin (pork)"
    },
    {
        "atc_level": "A10AB04",
        "atc_description": "insulin lispro"
    },
    {
        "atc_level": "A10AB05",
        "atc_description": "insulin aspart"
    },
    {
        "atc_level": "A10AB06",
        "atc_description": "insulin glulisine"
    },
    {
        "atc_level": "A10AB30",
        "atc_description": "insulins and analogues for injection, fast-acting, combinations"
    },
    {
        "atc_level": "A10AC",
        "atc_description": "Insulins and analogues for injection, intermediate-acting"
    },
    {
        "atc_level": "A10AC01",
        "atc_description": "insulin (human)"
    },
    {
        "atc_level": "A10AC02",
        "atc_description": "insulin (beef)"
    },
    {
        "atc_level": "A10AC03",
        "atc_description": "insulin (pork)"
    },
    {
        "atc_level": "A10AC04",
        "atc_description": "insulin lispro"
    },
    {
        "atc_level": "A10AC30",
        "atc_description": "insulins and analogues for injection, intermediate-acting, combinations"
    },
    {
        "atc_level": "A10AD",
        "atc_description": "Insulins and analogues for injection, intermediate- or long-acting combined with fast-acting"
    },
    {
        "atc_level": "A10AD01",
        "atc_description": "insulin (human)"
    },
    {
        "atc_level": "A10AD02",
        "atc_description": "insulin (beef)"
    },
    {
        "atc_level": "A10AD03",
        "atc_description": "insulin (pork)"
    },
    {
        "atc_level": "A10AD04",
        "atc_description": "insulin lispro"
    },
    {
        "atc_level": "A10AD05",
        "atc_description": "insulin aspart"
    },
    {
        "atc_level": "A10AD06",
        "atc_description": "insulin degludec and insulin aspart"
    },
    {
        "atc_level": "A10AD30",
        "atc_description": "insulins and analogues for injection, intermediate- or long-acting combined with fast-acting, combinations"
    },
    {
        "atc_level": "A10AE",
        "atc_description": "Insulins and analogues for injection, long-acting"
    },
    {
        "atc_level": "A10AE01",
        "atc_description": "insulin (human)"
    },
    {
        "atc_level": "A10AE02",
        "atc_description": "insulin (beef)"
    },
    {
        "atc_level": "A10AE03",
        "atc_description": "insulin (pork)"
    },
    {
        "atc_level": "A10AE04",
        "atc_description": "insulin glargine"
    },
    {
        "atc_level": "A10AE05",
        "atc_description": "insulin detemir"
    },
    {
        "atc_level": "A10AE06",
        "atc_description": "insulin degludec"
    },
    {
        "atc_level": "A10AE30",
        "atc_description": "insulins and analogues for injection, long-acting, combinations"
    },
    {
        "atc_level": "A10AE54",
        "atc_description": "insulin glargine and lixisenatide"
    },
    {
        "atc_level": "A10AE56",
        "atc_description": "insulin degludec and liraglutide"
    },
    {
        "atc_level": "A10AF",
        "atc_description": "Insulins and analogues for inhalation"
    },
    {
        "atc_level": "A10AF01",
        "atc_description": "insulin (human)"
    },
    {
        "atc_level": "A10B",
        "atc_description": "BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS"
    },
    {
        "atc_level": "A10BA",
        "atc_description": "Biguanides"
    },
    {
        "atc_level": "A10BA01",
        "atc_description": "phenformin"
    },
    {
        "atc_level": "A10BA02",
        "atc_description": "metformin"
    },
    {
        "atc_level": "A10BA03",
        "atc_description": "buformin"
    },
    {
        "atc_level": "A10BB",
        "atc_description": "Sulfonylureas"
    },
    {
        "atc_level": "A10BB01",
        "atc_description": "glibenclamide"
    },
    {
        "atc_level": "A10BB02",
        "atc_description": "chlorpropamide"
    },
    {
        "atc_level": "A10BB03",
        "atc_description": "tolbutamide"
    },
    {
        "atc_level": "A10BB04",
        "atc_description": "glibornuride"
    },
    {
        "atc_level": "A10BB05",
        "atc_description": "tolazamide"
    },
    {
        "atc_level": "A10BB06",
        "atc_description": "carbutamide"
    },
    {
        "atc_level": "A10BB07",
        "atc_description": "glipizide"
    },
    {
        "atc_level": "A10BB08",
        "atc_description": "gliquidone"
    },
    {
        "atc_level": "A10BB09",
        "atc_description": "gliclazide"
    },
    {
        "atc_level": "A10BB10",
        "atc_description": "metahexamide"
    },
    {
        "atc_level": "A10BB11",
        "atc_description": "glisoxepide"
    },
    {
        "atc_level": "A10BB12",
        "atc_description": "glimepiride"
    },
    {
        "atc_level": "A10BB31",
        "atc_description": "acetohexamide"
    },
    {
        "atc_level": "A10BC",
        "atc_description": "Sulfonamides (heterocyclic)"
    },
    {
        "atc_level": "A10BC01",
        "atc_description": "glymidine"
    },
    {
        "atc_level": "A10BD",
        "atc_description": "Combinations of oral blood glucose lowering drugs"
    },
    {
        "atc_level": "A10BD01",
        "atc_description": "phenformin and sulfonylureas"
    },
    {
        "atc_level": "A10BD02",
        "atc_description": "metformin and sulfonylureas"
    },
    {
        "atc_level": "A10BD03",
        "atc_description": "metformin and rosiglitazone"
    },
    {
        "atc_level": "A10BD04",
        "atc_description": "glimepiride and rosiglitazone"
    },
    {
        "atc_level": "A10BD05",
        "atc_description": "metformin and pioglitazone"
    },
    {
        "atc_level": "A10BD06",
        "atc_description": "glimepiride and pioglitazone"
    },
    {
        "atc_level": "A10BD07",
        "atc_description": "metformin and sitagliptin"
    },
    {
        "atc_level": "A10BD08",
        "atc_description": "metformin and vildagliptin"
    },
    {
        "atc_level": "A10BD09",
        "atc_description": "pioglitazone and alogliptin"
    },
    {
        "atc_level": "A10BD10",
        "atc_description": "metformin and saxagliptin"
    },
    {
        "atc_level": "A10BD11",
        "atc_description": "metformin and linagliptin"
    },
    {
        "atc_level": "A10BD12",
        "atc_description": "pioglitazone and sitagliptin"
    },
    {
        "atc_level": "A10BD13",
        "atc_description": "metformin and alogliptin"
    },
    {
        "atc_level": "A10BD14",
        "atc_description": "metformin and repaglinide"
    },
    {
        "atc_level": "A10BD15",
        "atc_description": "metformin and dapagliflozin"
    },
    {
        "atc_level": "A10BD16",
        "atc_description": "metformin and canagliflozin"
    },
    {
        "atc_level": "A10BD17",
        "atc_description": "metformin and acarbose"
    },
    {
        "atc_level": "A10BD18",
        "atc_description": "metformin and gemigliptin"
    },
    {
        "atc_level": "A10BD19",
        "atc_description": "linagliptin and empagliflozin"
    },
    {
        "atc_level": "A10BD20",
        "atc_description": "metformin and empagliflozin"
    },
    {
        "atc_level": "A10BD21",
        "atc_description": "saxagliptin and dapagliflozin"
    },
    {
        "atc_level": "A10BD22",
        "atc_description": "metformin and evogliptin"
    },
    {
        "atc_level": "A10BD23",
        "atc_description": "metformin and ertugliflozin"
    },
    {
        "atc_level": "A10BD24",
        "atc_description": "sitagliptin and ertugliflozin"
    },
    {
        "atc_level": "A10BD25",
        "atc_description": "metformin, saxagliptin and dapagliflozin"
    },
    {
        "atc_level": "A10BD26",
        "atc_description": "metformin and lobeglitazone"
    },
    {
        "atc_level": "A10BD27",
        "atc_description": "metformin, linagliptin and empagliflozin"
    },
    {
        "atc_level": "A10BE",
        "atc_description": "Aldose reductase inhibitors"
    },
    {
        "atc_level": "A10BE01",
        "atc_description": "Tolrestat"
    },
    {
        "atc_level": "A10BF",
        "atc_description": "Alpha glucosidase inhibitors"
    },
    {
        "atc_level": "A10BF01",
        "atc_description": "acarbose"
    },
    {
        "atc_level": "A10BF02",
        "atc_description": "miglitol"
    },
    {
        "atc_level": "A10BF03",
        "atc_description": "voglibose"
    },
    {
        "atc_level": "A10BG",
        "atc_description": "Thiazolidinediones"
    },
    {
        "atc_level": "A10BG01",
        "atc_description": "troglitazone"
    },
    {
        "atc_level": "A10BG02",
        "atc_description": "rosiglitazone"
    },
    {
        "atc_level": "A10BG03",
        "atc_description": "pioglitazone"
    },
    {
        "atc_level": "A10BG04",
        "atc_description": "lobeglitazone"
    },
    {
        "atc_level": "A10BH",
        "atc_description": "Dipeptidyl peptidase 4 (DPP-4) inhibitors"
    },
    {
        "atc_level": "A10BH01",
        "atc_description": "sitagliptin"
    },
    {
        "atc_level": "A10BH02",
        "atc_description": "vildagliptin"
    },
    {
        "atc_level": "A10BH03",
        "atc_description": "saxagliptin"
    },
    {
        "atc_level": "A10BH04",
        "atc_description": "alogliptin"
    },
    {
        "atc_level": "A10BH05",
        "atc_description": "linagliptin"
    },
    {
        "atc_level": "A10BH06",
        "atc_description": "gemigliptin"
    },
    {
        "atc_level": "A10BH07",
        "atc_description": "evogliptin"
    },
    {
        "atc_level": "A10BH08",
        "atc_description": "teneligliptin"
    },
    {
        "atc_level": "A10BH51",
        "atc_description": "sitagliptin and simvastatin"
    },
    {
        "atc_level": "A10BH52",
        "atc_description": "gemigliptin and rosuvastatin"
    },
    {
        "atc_level": "A10BJ",
        "atc_description": "Glucagon-like peptide-1 (GLP-1) analogues"
    },
    {
        "atc_level": "A10BJ01",
        "atc_description": "exenatide"
    },
    {
        "atc_level": "A10BJ02",
        "atc_description": "liraglutide"
    },
    {
        "atc_level": "A10BJ03",
        "atc_description": "lixisenatide"
    },
    {
        "atc_level": "A10BJ04",
        "atc_description": "albiglutide"
    },
    {
        "atc_level": "A10BJ05",
        "atc_description": "dulaglutide"
    },
    {
        "atc_level": "A10BJ06",
        "atc_description": "semaglutide"
    },
    {
        "atc_level": "A10BJ07",
        "atc_description": "beinaglutide"
    },
    {
        "atc_level": "A10BK",
        "atc_description": "Sodium-glucose co-transporter 2 (SGLT2) inhibitors"
    },
    {
        "atc_level": "A10BK01",
        "atc_description": "dapagliflozin"
    },
    {
        "atc_level": "A10BK02",
        "atc_description": "canagliflozin"
    },
    {
        "atc_level": "A10BK03",
        "atc_description": "empagliflozin"
    },
    {
        "atc_level": "A10BK04",
        "atc_description": "ertugliflozin"
    },
    {
        "atc_level": "A10BK05",
        "atc_description": "ipragliflozin"
    },
    {
        "atc_level": "A10BK06",
        "atc_description": "sotagliflozin"
    },
    {
        "atc_level": "A10BK07",
        "atc_description": "luseogliflozin"
    },
    {
        "atc_level": "A10BX",
        "atc_description": "Other blood glucose lowering drugs, excl. insulins"
    },
    {
        "atc_level": "A10BX01",
        "atc_description": "guar gum"
    },
    {
        "atc_level": "A10BX02",
        "atc_description": "repaglinide"
    },
    {
        "atc_level": "A10BX03",
        "atc_description": "nateglinide"
    },
    {
        "atc_level": "A10BX04",
        "atc_description": "exenatide"
    },
    {
        "atc_level": "A10BX05",
        "atc_description": "pramlintide"
    },
    {
        "atc_level": "A10BX06",
        "atc_description": "benfluorex"
    },
    {
        "atc_level": "A10BX07",
        "atc_description": "liraglutide"
    },
    {
        "atc_level": "A10BX08",
        "atc_description": "mitiglinide"
    },
    {
        "atc_level": "A10BX09",
        "atc_description": "dapagliflozin"
    },
    {
        "atc_level": "A10BX10",
        "atc_description": "lixisenatide"
    },
    {
        "atc_level": "A10BX11",
        "atc_description": "canagliflozin"
    },
    {
        "atc_level": "A10BX12",
        "atc_description": "empagliflozin"
    },
    {
        "atc_level": "A10BX13",
        "atc_description": "albiglutide"
    },
    {
        "atc_level": "A10BX14",
        "atc_description": "dulaglutide"
    },
    {
        "atc_level": "A10BX15",
        "atc_description": "imeglimin"
    },
    {
        "atc_level": "A10X",
        "atc_description": "OTHER DRUGS USED IN DIABETES"
    },
    {
        "atc_level": "A10XA",
        "atc_description": "Aldose reductase inhibitors"
    },
    {
        "atc_level": "A10XA01",
        "atc_description": "tolrestat"
    },
    {
        "atc_level": "A11",
        "atc_description": "VITAMINS"
    },
    {
        "atc_level": "A11A",
        "atc_description": "MULTIVITAMINS, COMBINATIONS"
    },
    {
        "atc_level": "A11AA",
        "atc_description": "Multivitamins with minerals"
    },
    {
        "atc_level": "A11AA01",
        "atc_description": "multivitamins and iron"
    },
    {
        "atc_level": "A11AA02",
        "atc_description": "multivitamins and calcium"
    },
    {
        "atc_level": "A11AA03",
        "atc_description": "multivitamins and other minerals, incl. combinations"
    },
    {
        "atc_level": "A11AA04",
        "atc_description": "multivitamins and trace elements"
    },
    {
        "atc_level": "A11AB",
        "atc_description": "Multivitamins, other combinations"
    },
    {
        "atc_level": "A11B",
        "atc_description": "MULTIVITAMINS, PLAIN"
    },
    {
        "atc_level": "A11BA",
        "atc_description": "Multivitamins, plain"
    },
    {
        "atc_level": "A11C",
        "atc_description": "VITAMIN A AND D, INCL. COMBINATIONS OF THE TWO"
    },
    {
        "atc_level": "A11CA",
        "atc_description": "Vitamin A, plain"
    },
    {
        "atc_level": "A11CA01",
        "atc_description": "retinol (vit A)"
    },
    {
        "atc_level": "A11CA02",
        "atc_description": "betacarotene"
    },
    {
        "atc_level": "A11CB",
        "atc_description": "Vitamin A and D in combination"
    },
    {
        "atc_level": "A11CC",
        "atc_description": "Vitamin D and analogues"
    },
    {
        "atc_level": "A11CC01",
        "atc_description": "ergocalciferol"
    },
    {
        "atc_level": "A11CC02",
        "atc_description": "dihydrotachysterol"
    },
    {
        "atc_level": "A11CC03",
        "atc_description": "alfacalcidol"
    },
    {
        "atc_level": "A11CC04",
        "atc_description": "calcitriol"
    },
    {
        "atc_level": "A11CC05",
        "atc_description": "colecalciferol"
    },
    {
        "atc_level": "A11CC06",
        "atc_description": "calcifediol"
    },
    {
        "atc_level": "A11CC07",
        "atc_description": "Paricalcitol"
    },
    {
        "atc_level": "A11CC20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "A11CC55",
        "atc_description": "colecalciferol, combinations"
    },
    {
        "atc_level": "A11D",
        "atc_description": "VITAMIN B1, PLAIN AND IN COMBINATION WITH VITAMIN B6 AND B12"
    },
    {
        "atc_level": "A11DA",
        "atc_description": "Vitamin B1, plain"
    },
    {
        "atc_level": "A11DA01",
        "atc_description": "thiamine (vit B1)"
    },
    {
        "atc_level": "A11DA02",
        "atc_description": "sulbutiamine"
    },
    {
        "atc_level": "A11DA03",
        "atc_description": "benfotiamine"
    },
    {
        "atc_level": "A11DB",
        "atc_description": "Vitamin B1 in combination with vitamin B6 and/or vitamin B12"
    },
    {
        "atc_level": "A11E",
        "atc_description": "VITAMIN B-COMPLEX, INCL. COMBINATIONS"
    },
    {
        "atc_level": "A11EA",
        "atc_description": "Vitamin B-complex, plain"
    },
    {
        "atc_level": "A11EB",
        "atc_description": "Vitamin B-complex with vitamin C"
    },
    {
        "atc_level": "A11EC",
        "atc_description": "Vitamin B-complex with minerals"
    },
    {
        "atc_level": "A11ED",
        "atc_description": "Vitamin B-complex with anabolic steroids"
    },
    {
        "atc_level": "A11EX",
        "atc_description": "Vitamin B-complex, other combinations"
    },
    {
        "atc_level": "A11G",
        "atc_description": "ASCORBIC ACID (VITAMIN C), INCL. COMBINATIONS"
    },
    {
        "atc_level": "A11GA",
        "atc_description": "Ascorbic acid (vitamin C), plain"
    },
    {
        "atc_level": "A11GA01",
        "atc_description": "ascorbic acid (vit C)"
    },
    {
        "atc_level": "A11GB",
        "atc_description": "Ascorbic acid (vitamin C), combinations"
    },
    {
        "atc_level": "A11GB01",
        "atc_description": "ascorbic acid (vit C) and calcium"
    },
    {
        "atc_level": "A11H",
        "atc_description": "OTHER PLAIN VITAMIN PREPARATIONS"
    },
    {
        "atc_level": "A11HA",
        "atc_description": "Other plain vitamin preparations"
    },
    {
        "atc_level": "A11HA01",
        "atc_description": "nicotinamide"
    },
    {
        "atc_level": "A11HA02",
        "atc_description": "pyridoxine (vit B6)"
    },
    {
        "atc_level": "A11HA03",
        "atc_description": "tocopherol (vit E)"
    },
    {
        "atc_level": "A11HA04",
        "atc_description": "riboflavin (vit B2)"
    },
    {
        "atc_level": "A11HA05",
        "atc_description": "biotin"
    },
    {
        "atc_level": "A11HA06",
        "atc_description": "pyridoxal phosphate"
    },
    {
        "atc_level": "A11HA07",
        "atc_description": "inositol"
    },
    {
        "atc_level": "A11HA08",
        "atc_description": "tocofersolan"
    },
    {
        "atc_level": "A11HA30",
        "atc_description": "dexpanthenol"
    },
    {
        "atc_level": "A11HA31",
        "atc_description": "calcium pantothenate"
    },
    {
        "atc_level": "A11HA32",
        "atc_description": "pantethine"
    },
    {
        "atc_level": "A11J",
        "atc_description": "OTHER VITAMIN PRODUCTS, COMBINATIONS"
    },
    {
        "atc_level": "A11JA",
        "atc_description": "Combinations of vitamins"
    },
    {
        "atc_level": "A11JB",
        "atc_description": "Vitamins with minerals"
    },
    {
        "atc_level": "A11JC",
        "atc_description": "Vitamins, other combinations"
    },
    {
        "atc_level": "A11JD",
        "atc_description": "VITAMINS AND HERBALS WITH/WITHOUT MINERALS"
    },
    {
        "atc_level": "A11JE",
        "atc_description": "VITAMINS AND HOMEOPATHICS WITH/WITHOUT MINERALS"
    },
    {
        "atc_level": "A12",
        "atc_description": "MINERAL SUPPLEMENTS"
    },
    {
        "atc_level": "A12A",
        "atc_description": "CALCIUM"
    },
    {
        "atc_level": "A12AA",
        "atc_description": "Calcium"
    },
    {
        "atc_level": "A12AA01",
        "atc_description": "calcium phosphate"
    },
    {
        "atc_level": "A12AA02",
        "atc_description": "calcium glubionate"
    },
    {
        "atc_level": "A12AA03",
        "atc_description": "calcium gluconate"
    },
    {
        "atc_level": "A12AA04",
        "atc_description": "calcium carbonate"
    },
    {
        "atc_level": "A12AA05",
        "atc_description": "calcium lactate"
    },
    {
        "atc_level": "A12AA06",
        "atc_description": "calcium lactate gluconate"
    },
    {
        "atc_level": "A12AA07",
        "atc_description": "calcium chloride"
    },
    {
        "atc_level": "A12AA08",
        "atc_description": "calcium glycerylphosphate"
    },
    {
        "atc_level": "A12AA09",
        "atc_description": "calcium citrate lysine complex"
    },
    {
        "atc_level": "A12AA10",
        "atc_description": "calcium glucoheptonate"
    },
    {
        "atc_level": "A12AA11",
        "atc_description": "calcium pangamate"
    },
    {
        "atc_level": "A12AA12",
        "atc_description": "calcium acetate anhydrous"
    },
    {
        "atc_level": "A12AA13",
        "atc_description": "calcium citrate"
    },
    {
        "atc_level": "A12AA20",
        "atc_description": "calcium (different salts in combination)"
    },
    {
        "atc_level": "A12AA30",
        "atc_description": "calcium laevulate"
    },
    {
        "atc_level": "A12AX",
        "atc_description": "Calcium, combinations with vitamin D and/or other drugs"
    },
    {
        "atc_level": "A12B",
        "atc_description": "POTASSIUM"
    },
    {
        "atc_level": "A12BA",
        "atc_description": "Potassium"
    },
    {
        "atc_level": "A12BA01",
        "atc_description": "potassium chloride"
    },
    {
        "atc_level": "A12BA02",
        "atc_description": "potassium citrate"
    },
    {
        "atc_level": "A12BA03",
        "atc_description": "potassium hydrogentartrate"
    },
    {
        "atc_level": "A12BA04",
        "atc_description": "potassium hydrogencarbonate"
    },
    {
        "atc_level": "A12BA05",
        "atc_description": "potassium gluconate"
    },
    {
        "atc_level": "A12BA30",
        "atc_description": "potassium (different salts in combination)"
    },
    {
        "atc_level": "A12BA51",
        "atc_description": "potassium chloride, combinations"
    },
    {
        "atc_level": "A12C",
        "atc_description": "OTHER MINERAL SUPPLEMENTS"
    },
    {
        "atc_level": "A12CA",
        "atc_description": "Sodium"
    },
    {
        "atc_level": "A12CA01",
        "atc_description": "sodium chloride"
    },
    {
        "atc_level": "A12CA02",
        "atc_description": "sodium sulfate"
    },
    {
        "atc_level": "A12CB",
        "atc_description": "Zinc"
    },
    {
        "atc_level": "A12CB01",
        "atc_description": "zinc sulfate"
    },
    {
        "atc_level": "A12CB02",
        "atc_description": "zinc gluconate"
    },
    {
        "atc_level": "A12CB03",
        "atc_description": "zinc protein complex"
    },
    {
        "atc_level": "A12CC",
        "atc_description": "Magnesium"
    },
    {
        "atc_level": "A12CC01",
        "atc_description": "magnesium chloride"
    },
    {
        "atc_level": "A12CC02",
        "atc_description": "magnesium sulfate"
    },
    {
        "atc_level": "A12CC03",
        "atc_description": "magnesium gluconate"
    },
    {
        "atc_level": "A12CC04",
        "atc_description": "magnesium citrate"
    },
    {
        "atc_level": "A12CC05",
        "atc_description": "magnesium aspartate"
    },
    {
        "atc_level": "A12CC06",
        "atc_description": "magnesium lactate"
    },
    {
        "atc_level": "A12CC07",
        "atc_description": "magnesium levulinate"
    },
    {
        "atc_level": "A12CC08",
        "atc_description": "magnesium pidolate"
    },
    {
        "atc_level": "A12CC09",
        "atc_description": "magnesium orotate"
    },
    {
        "atc_level": "A12CC10",
        "atc_description": "magnesium oxide"
    },
    {
        "atc_level": "A12CC30",
        "atc_description": "magnesium (different salts in combination)"
    },
    {
        "atc_level": "A12CD",
        "atc_description": "Fluoride"
    },
    {
        "atc_level": "A12CD01",
        "atc_description": "sodium fluoride"
    },
    {
        "atc_level": "A12CD02",
        "atc_description": "sodium monofluorophosphate"
    },
    {
        "atc_level": "A12CD51",
        "atc_description": "fluoride, combinations"
    },
    {
        "atc_level": "A12CE",
        "atc_description": "Selenium"
    },
    {
        "atc_level": "A12CE01",
        "atc_description": "sodium selenate"
    },
    {
        "atc_level": "A12CE02",
        "atc_description": "sodium selenite"
    },
    {
        "atc_level": "A12CX",
        "atc_description": "Other mineral products"
    },
    {
        "atc_level": "A12CZ",
        "atc_description": "COMBINATIONS OF OTHER MINERAL SUPPLEMENTS"
    },
    {
        "atc_level": "A13",
        "atc_description": "TONICS"
    },
    {
        "atc_level": "A13A",
        "atc_description": "TONICS"
    },
    {
        "atc_level": "A14",
        "atc_description": "ANABOLIC AGENTS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "A14A",
        "atc_description": "ANABOLIC STEROIDS"
    },
    {
        "atc_level": "A14AA",
        "atc_description": "Androstan derivatives"
    },
    {
        "atc_level": "A14AA01",
        "atc_description": "androstanolone"
    },
    {
        "atc_level": "A14AA02",
        "atc_description": "stanozolol"
    },
    {
        "atc_level": "A14AA03",
        "atc_description": "metandienone"
    },
    {
        "atc_level": "A14AA04",
        "atc_description": "metenolone"
    },
    {
        "atc_level": "A14AA05",
        "atc_description": "oxymetholone"
    },
    {
        "atc_level": "A14AA06",
        "atc_description": "quinbolone"
    },
    {
        "atc_level": "A14AA07",
        "atc_description": "prasterone"
    },
    {
        "atc_level": "A14AA08",
        "atc_description": "oxandrolone"
    },
    {
        "atc_level": "A14AA09",
        "atc_description": "norethandrolone"
    },
    {
        "atc_level": "A14AB",
        "atc_description": "Estren derivatives"
    },
    {
        "atc_level": "A14AB01",
        "atc_description": "nandrolone"
    },
    {
        "atc_level": "A14AB02",
        "atc_description": "ethylestrenol"
    },
    {
        "atc_level": "A14AB03",
        "atc_description": "oxabolone cipionate"
    },
    {
        "atc_level": "A14B",
        "atc_description": "OTHER ANABOLIC AGENTS"
    },
    {
        "atc_level": "A15",
        "atc_description": "APPETITE STIMULANTS"
    },
    {
        "atc_level": "A16",
        "atc_description": "OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS"
    },
    {
        "atc_level": "A16A",
        "atc_description": "OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS"
    },
    {
        "atc_level": "A16AA",
        "atc_description": "Amino acids and derivatives"
    },
    {
        "atc_level": "A16AA01",
        "atc_description": "levocarnitine"
    },
    {
        "atc_level": "A16AA02",
        "atc_description": "ademetionine"
    },
    {
        "atc_level": "A16AA03",
        "atc_description": "glutamine"
    },
    {
        "atc_level": "A16AA04",
        "atc_description": "mercaptamine"
    },
    {
        "atc_level": "A16AA05",
        "atc_description": "carglumic acid"
    },
    {
        "atc_level": "A16AA06",
        "atc_description": "betaine"
    },
    {
        "atc_level": "A16AA07",
        "atc_description": "metreleptin"
    },
    {
        "atc_level": "A16AB",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "A16AB01",
        "atc_description": "alglucerase"
    },
    {
        "atc_level": "A16AB02",
        "atc_description": "imiglucerase"
    },
    {
        "atc_level": "A16AB03",
        "atc_description": "agalsidase alfa"
    },
    {
        "atc_level": "A16AB04",
        "atc_description": "agalsidase beta"
    },
    {
        "atc_level": "A16AB05",
        "atc_description": "laronidase"
    },
    {
        "atc_level": "A16AB06",
        "atc_description": "sacrosidase"
    },
    {
        "atc_level": "A16AB07",
        "atc_description": "alglucosidase alfa"
    },
    {
        "atc_level": "A16AB08",
        "atc_description": "galsulfase"
    },
    {
        "atc_level": "A16AB09",
        "atc_description": "idursulfase"
    },
    {
        "atc_level": "A16AB10",
        "atc_description": "velaglucerase alfa"
    },
    {
        "atc_level": "A16AB11",
        "atc_description": "taliglucerase alfa"
    },
    {
        "atc_level": "A16AB12",
        "atc_description": "elosulfase alfa"
    },
    {
        "atc_level": "A16AB13",
        "atc_description": "asfotase alfa"
    },
    {
        "atc_level": "A16AB14",
        "atc_description": "sebelipase alfa"
    },
    {
        "atc_level": "A16AB15",
        "atc_description": "velmanase alfa"
    },
    {
        "atc_level": "A16AB16",
        "atc_description": "idursulfase beta"
    },
    {
        "atc_level": "A16AB17",
        "atc_description": "cerliponase alfa"
    },
    {
        "atc_level": "A16AB18",
        "atc_description": "vestronidase alfa"
    },
    {
        "atc_level": "A16AB19",
        "atc_description": "pegvaliase"
    },
    {
        "atc_level": "A16AB20",
        "atc_description": "pegunigalsidase alfa"
    },
    {
        "atc_level": "A16AB21",
        "atc_description": "atidarsagene autotemcel"
    },
    {
        "atc_level": "A16AB22",
        "atc_description": "avalglucosidase alfa"
    },
    {
        "atc_level": "A16AX",
        "atc_description": "Various alimentary tract and metabolism products"
    },
    {
        "atc_level": "A16AX01",
        "atc_description": "thioctic acid"
    },
    {
        "atc_level": "A16AX02",
        "atc_description": "anethole trithione"
    },
    {
        "atc_level": "A16AX03",
        "atc_description": "sodium phenylbutyrate"
    },
    {
        "atc_level": "A16AX04",
        "atc_description": "nitisinone"
    },
    {
        "atc_level": "A16AX05",
        "atc_description": "zinc acetate"
    },
    {
        "atc_level": "A16AX06",
        "atc_description": "miglustat"
    },
    {
        "atc_level": "A16AX07",
        "atc_description": "sapropterin"
    },
    {
        "atc_level": "A16AX08",
        "atc_description": "teduglutide"
    },
    {
        "atc_level": "A16AX09",
        "atc_description": "glycerol phenylbutyrate"
    },
    {
        "atc_level": "A16AX10",
        "atc_description": "eliglustat"
    },
    {
        "atc_level": "A16AX11",
        "atc_description": "sodium benzoate"
    },
    {
        "atc_level": "A16AX12",
        "atc_description": "trientine"
    },
    {
        "atc_level": "A16AX13",
        "atc_description": "uridine triacetate"
    },
    {
        "atc_level": "A16AX14",
        "atc_description": "migalastat"
    },
    {
        "atc_level": "A16AX15",
        "atc_description": "telotristat"
    },
    {
        "atc_level": "A16AX16",
        "atc_description": "givosiran"
    },
    {
        "atc_level": "A16AX17",
        "atc_description": "triheptanoin"
    },
    {
        "atc_level": "A16AX18",
        "atc_description": "lumasiran"
    },
    {
        "atc_level": "A16AX19",
        "atc_description": "fosdenopterin"
    },
    {
        "atc_level": "A16AX20",
        "atc_description": "lonafarnib"
    },
    {
        "atc_level": "A16AX30",
        "atc_description": "sodium benzoate and sodium phenylacetate"
    },
    {
        "atc_level": "B",
        "atc_description": "BLOOD AND BLOOD FORMING ORGANS"
    },
    {
        "atc_level": "B00",
        "atc_description": "BLOOD AND BLOOD FORMING ORGANS"
    },
    {
        "atc_level": "B01",
        "atc_description": "ANTITHROMBOTIC AGENTS"
    },
    {
        "atc_level": "B01A",
        "atc_description": "ANTITHROMBOTIC AGENTS"
    },
    {
        "atc_level": "B01AA",
        "atc_description": "Vitamin K antagonists"
    },
    {
        "atc_level": "B01AA01",
        "atc_description": "dicoumarol"
    },
    {
        "atc_level": "B01AA02",
        "atc_description": "phenindione"
    },
    {
        "atc_level": "B01AA03",
        "atc_description": "warfarin"
    },
    {
        "atc_level": "B01AA04",
        "atc_description": "phenprocoumon"
    },
    {
        "atc_level": "B01AA07",
        "atc_description": "acenocoumarol"
    },
    {
        "atc_level": "B01AA08",
        "atc_description": "ethyl biscoumacetate"
    },
    {
        "atc_level": "B01AA09",
        "atc_description": "clorindione"
    },
    {
        "atc_level": "B01AA10",
        "atc_description": "diphenadione"
    },
    {
        "atc_level": "B01AA11",
        "atc_description": "tioclomarol"
    },
    {
        "atc_level": "B01AA12",
        "atc_description": "fluindione"
    },
    {
        "atc_level": "B01AB",
        "atc_description": "Heparin group"
    },
    {
        "atc_level": "B01AB01",
        "atc_description": "heparin"
    },
    {
        "atc_level": "B01AB02",
        "atc_description": "antithrombin III"
    },
    {
        "atc_level": "B01AB03",
        "atc_description": "Heparin, low molecular weight"
    },
    {
        "atc_level": "B01AB04",
        "atc_description": "dalteparin"
    },
    {
        "atc_level": "B01AB05",
        "atc_description": "enoxaparin"
    },
    {
        "atc_level": "B01AB06",
        "atc_description": "nadroparin"
    },
    {
        "atc_level": "B01AB07",
        "atc_description": "parnaparin"
    },
    {
        "atc_level": "B01AB08",
        "atc_description": "reviparin"
    },
    {
        "atc_level": "B01AB09",
        "atc_description": "danaparoid"
    },
    {
        "atc_level": "B01AB10",
        "atc_description": "tinzaparin"
    },
    {
        "atc_level": "B01AB11",
        "atc_description": "sulodexide"
    },
    {
        "atc_level": "B01AB12",
        "atc_description": "bemiparin"
    },
    {
        "atc_level": "B01AB51",
        "atc_description": "heparin, combinations"
    },
    {
        "atc_level": "B01AC",
        "atc_description": "Platelet aggregation inhibitors excl. heparin"
    },
    {
        "atc_level": "B01AC01",
        "atc_description": "ditazole"
    },
    {
        "atc_level": "B01AC02",
        "atc_description": "cloricromen"
    },
    {
        "atc_level": "B01AC03",
        "atc_description": "picotamide"
    },
    {
        "atc_level": "B01AC04",
        "atc_description": "clopidogrel"
    },
    {
        "atc_level": "B01AC05",
        "atc_description": "ticlopidine"
    },
    {
        "atc_level": "B01AC06",
        "atc_description": "acetylsalicylic acid"
    },
    {
        "atc_level": "B01AC07",
        "atc_description": "dipyridamole"
    },
    {
        "atc_level": "B01AC08",
        "atc_description": "carbasalate calcium"
    },
    {
        "atc_level": "B01AC09",
        "atc_description": "epoprostenol"
    },
    {
        "atc_level": "B01AC10",
        "atc_description": "indobufen"
    },
    {
        "atc_level": "B01AC11",
        "atc_description": "iloprost"
    },
    {
        "atc_level": "B01AC13",
        "atc_description": "abciximab"
    },
    {
        "atc_level": "B01AC14",
        "atc_description": "Anagrelide"
    },
    {
        "atc_level": "B01AC15",
        "atc_description": "aloxiprin"
    },
    {
        "atc_level": "B01AC16",
        "atc_description": "eptifibatide"
    },
    {
        "atc_level": "B01AC17",
        "atc_description": "tirofiban"
    },
    {
        "atc_level": "B01AC18",
        "atc_description": "triflusal"
    },
    {
        "atc_level": "B01AC19",
        "atc_description": "beraprost"
    },
    {
        "atc_level": "B01AC21",
        "atc_description": "treprostinil"
    },
    {
        "atc_level": "B01AC22",
        "atc_description": "prasugrel"
    },
    {
        "atc_level": "B01AC23",
        "atc_description": "cilostazol"
    },
    {
        "atc_level": "B01AC24",
        "atc_description": "ticagrelor"
    },
    {
        "atc_level": "B01AC25",
        "atc_description": "cangrelor"
    },
    {
        "atc_level": "B01AC26",
        "atc_description": "vorapaxar"
    },
    {
        "atc_level": "B01AC27",
        "atc_description": "selexipag"
    },
    {
        "atc_level": "B01AC30",
        "atc_description": "clopidogrel + aspirin"
    },
    {
        "atc_level": "B01AC30",
        "atc_description": "dipyridamole + aspirin"
    },
    {
        "atc_level": "B01AC56",
        "atc_description": "acetylsalicylic acid, combinations with proton pump inhibitors"
    },
    {
        "atc_level": "B01AD",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "B01AD01",
        "atc_description": "streptokinase"
    },
    {
        "atc_level": "B01AD02",
        "atc_description": "alteplase"
    },
    {
        "atc_level": "B01AD03",
        "atc_description": "anistreplase"
    },
    {
        "atc_level": "B01AD04",
        "atc_description": "urokinase"
    },
    {
        "atc_level": "B01AD05",
        "atc_description": "fibrinolysin"
    },
    {
        "atc_level": "B01AD06",
        "atc_description": "brinase"
    },
    {
        "atc_level": "B01AD07",
        "atc_description": "reteplase"
    },
    {
        "atc_level": "B01AD08",
        "atc_description": "saruplase"
    },
    {
        "atc_level": "B01AD09",
        "atc_description": "ancrod"
    },
    {
        "atc_level": "B01AD10",
        "atc_description": "drotrecogin alfa (activated)"
    },
    {
        "atc_level": "B01AD11",
        "atc_description": "tenecteplase"
    },
    {
        "atc_level": "B01AD12",
        "atc_description": "protein C"
    },
    {
        "atc_level": "B01AE",
        "atc_description": "Direct thrombin inhibitors"
    },
    {
        "atc_level": "B01AE01",
        "atc_description": "desirudin"
    },
    {
        "atc_level": "B01AE02",
        "atc_description": "lepirudin"
    },
    {
        "atc_level": "B01AE03",
        "atc_description": "argatroban"
    },
    {
        "atc_level": "B01AE04",
        "atc_description": "melagatran"
    },
    {
        "atc_level": "B01AE05",
        "atc_description": "ximelagatran"
    },
    {
        "atc_level": "B01AE06",
        "atc_description": "bivalirudin"
    },
    {
        "atc_level": "B01AE07",
        "atc_description": "dabigatran etexilate"
    },
    {
        "atc_level": "B01AF",
        "atc_description": "Direct factor Xa inhibitors"
    },
    {
        "atc_level": "B01AF01",
        "atc_description": "rivaroxaban"
    },
    {
        "atc_level": "B01AF02",
        "atc_description": "apixaban"
    },
    {
        "atc_level": "B01AF03",
        "atc_description": "edoxaban"
    },
    {
        "atc_level": "B01AF04",
        "atc_description": "betrixaban"
    },
    {
        "atc_level": "B01AX",
        "atc_description": "Other antithrombotic agents"
    },
    {
        "atc_level": "B01AX01",
        "atc_description": "defibrotide"
    },
    {
        "atc_level": "B01AX02",
        "atc_description": "Desirudin"
    },
    {
        "atc_level": "B01AX03",
        "atc_description": "Lepirudin"
    },
    {
        "atc_level": "B01AX04",
        "atc_description": "dermatan sulfate"
    },
    {
        "atc_level": "B01AX05",
        "atc_description": "fondaparinux"
    },
    {
        "atc_level": "B01AX06",
        "atc_description": "rivaroxaban"
    },
    {
        "atc_level": "B01AX07",
        "atc_description": "caplacizumab"
    },
    {
        "atc_level": "B02",
        "atc_description": "ANTIHEMORRHAGICS"
    },
    {
        "atc_level": "B02A",
        "atc_description": "ANTIFIBRINOLYTICS"
    },
    {
        "atc_level": "B02AA",
        "atc_description": "Amino acids"
    },
    {
        "atc_level": "B02AA01",
        "atc_description": "aminocaproic acid"
    },
    {
        "atc_level": "B02AA02",
        "atc_description": "tranexamic acid"
    },
    {
        "atc_level": "B02AA03",
        "atc_description": "aminomethylbenzoic acid"
    },
    {
        "atc_level": "B02AB",
        "atc_description": "Proteinase inhibitors"
    },
    {
        "atc_level": "B02AB01",
        "atc_description": "aprotinin"
    },
    {
        "atc_level": "B02AB02",
        "atc_description": "alfa1 antitrypsin"
    },
    {
        "atc_level": "B02AB03",
        "atc_description": "c1-inhibitor"
    },
    {
        "atc_level": "B02AB04",
        "atc_description": "camostat"
    },
    {
        "atc_level": "B02AB05",
        "atc_description": "ulinastatin"
    },
    {
        "atc_level": "B02B",
        "atc_description": "VITAMIN K AND OTHER HEMOSTATICS"
    },
    {
        "atc_level": "B02BA",
        "atc_description": "Vitamin K"
    },
    {
        "atc_level": "B02BA01",
        "atc_description": "phytomenadione"
    },
    {
        "atc_level": "B02BA02",
        "atc_description": "menadione"
    },
    {
        "atc_level": "B02BB",
        "atc_description": "Fibrinogen"
    },
    {
        "atc_level": "B02BB01",
        "atc_description": "fibrinogen, human"
    },
    {
        "atc_level": "B02BC",
        "atc_description": "Local hemostatics"
    },
    {
        "atc_level": "B02BC01",
        "atc_description": "absorbable gelatin sponge"
    },
    {
        "atc_level": "B02BC02",
        "atc_description": "oxidized cellulose"
    },
    {
        "atc_level": "B02BC03",
        "atc_description": "tetragalacturonic acid hydroxymethylester"
    },
    {
        "atc_level": "B02BC05",
        "atc_description": "adrenalone"
    },
    {
        "atc_level": "B02BC06",
        "atc_description": "thrombin"
    },
    {
        "atc_level": "B02BC07",
        "atc_description": "collagen"
    },
    {
        "atc_level": "B02BC08",
        "atc_description": "calcium alginate"
    },
    {
        "atc_level": "B02BC09",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "B02BC10",
        "atc_description": "fibrinogen, human"
    },
    {
        "atc_level": "B02BC30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "B02BD",
        "atc_description": "Blood coagulation factors"
    },
    {
        "atc_level": "B02BD01",
        "atc_description": "coagulation factor IX, II, VII and X in combination"
    },
    {
        "atc_level": "B02BD02",
        "atc_description": "coagulation factor VIII"
    },
    {
        "atc_level": "B02BD03",
        "atc_description": "factor VIII inhibitor bypassing activity"
    },
    {
        "atc_level": "B02BD04",
        "atc_description": "coagulation factor IX"
    },
    {
        "atc_level": "B02BD05",
        "atc_description": "coagulation factor VII"
    },
    {
        "atc_level": "B02BD06",
        "atc_description": "von Willebrand factor and coagulation factor VIII in combination"
    },
    {
        "atc_level": "B02BD07",
        "atc_description": "coagulation factor XIII"
    },
    {
        "atc_level": "B02BD08",
        "atc_description": "coagulation factor VIIa"
    },
    {
        "atc_level": "B02BD09",
        "atc_description": "nonacog alfa"
    },
    {
        "atc_level": "B02BD10",
        "atc_description": "von Willebrand factor"
    },
    {
        "atc_level": "B02BD11",
        "atc_description": "catridecacog"
    },
    {
        "atc_level": "B02BD12",
        "atc_description": "trenonacog alfa"
    },
    {
        "atc_level": "B02BD13",
        "atc_description": "coagulation factor X"
    },
    {
        "atc_level": "B02BD14",
        "atc_description": "susoctocog alfa"
    },
    {
        "atc_level": "B02BD30",
        "atc_description": "thrombin"
    },
    {
        "atc_level": "B02BX",
        "atc_description": "Other systemic hemostatics"
    },
    {
        "atc_level": "B02BX01",
        "atc_description": "etamsylate"
    },
    {
        "atc_level": "B02BX02",
        "atc_description": "carbazochrome"
    },
    {
        "atc_level": "B02BX03",
        "atc_description": "batroxobin"
    },
    {
        "atc_level": "B02BX04",
        "atc_description": "romiplostim"
    },
    {
        "atc_level": "B02BX05",
        "atc_description": "eltrombopag"
    },
    {
        "atc_level": "B02BX06",
        "atc_description": "emicizumab"
    },
    {
        "atc_level": "B02BX07",
        "atc_description": "lusutrombopag"
    },
    {
        "atc_level": "B02BX08",
        "atc_description": "avatrombopag"
    },
    {
        "atc_level": "B02BX09",
        "atc_description": "fostamatinib"
    },
    {
        "atc_level": "B03",
        "atc_description": "ANTIANEMIC PREPARATIONS"
    },
    {
        "atc_level": "B03A",
        "atc_description": "IRON PREPARATIONS"
    },
    {
        "atc_level": "B03AA",
        "atc_description": "Iron bivalent, oral preparations"
    },
    {
        "atc_level": "B03AA01",
        "atc_description": "ferrous glycine sulfate"
    },
    {
        "atc_level": "B03AA02",
        "atc_description": "ferrous fumarate"
    },
    {
        "atc_level": "B03AA03",
        "atc_description": "ferrous gluconate"
    },
    {
        "atc_level": "B03AA04",
        "atc_description": "ferrous carbonate"
    },
    {
        "atc_level": "B03AA05",
        "atc_description": "ferrous chloride"
    },
    {
        "atc_level": "B03AA06",
        "atc_description": "ferrous succinate"
    },
    {
        "atc_level": "B03AA07",
        "atc_description": "ferrous sulfate"
    },
    {
        "atc_level": "B03AA08",
        "atc_description": "ferrous tartrate"
    },
    {
        "atc_level": "B03AA09",
        "atc_description": "ferrous aspartate"
    },
    {
        "atc_level": "B03AA10",
        "atc_description": "ferrous ascorbate"
    },
    {
        "atc_level": "B03AA11",
        "atc_description": "ferrous iodine"
    },
    {
        "atc_level": "B03AA12",
        "atc_description": "ferrous sodium citrate"
    },
    {
        "atc_level": "B03AB",
        "atc_description": "Iron trivalent, oral preparations"
    },
    {
        "atc_level": "B03AB01",
        "atc_description": "ferric sodium citrate"
    },
    {
        "atc_level": "B03AB02",
        "atc_description": "saccharated iron oxide"
    },
    {
        "atc_level": "B03AB03",
        "atc_description": "sodium feredetate"
    },
    {
        "atc_level": "B03AB04",
        "atc_description": "ferric hydroxide"
    },
    {
        "atc_level": "B03AB05",
        "atc_description": "ferric oxide polymaltose complexes"
    },
    {
        "atc_level": "B03AB06",
        "atc_description": "ferric citrate"
    },
    {
        "atc_level": "B03AB07",
        "atc_description": "chondroitin sulfate-iron complex"
    },
    {
        "atc_level": "B03AB08",
        "atc_description": "ferric acetyl transferrin"
    },
    {
        "atc_level": "B03AB09",
        "atc_description": "ferric proteinsuccinylate"
    },
    {
        "atc_level": "B03AB10",
        "atc_description": "ferric maltol"
    },
    {
        "atc_level": "B03AC",
        "atc_description": "Iron, parenteral preparations"
    },
    {
        "atc_level": "B03AC01",
        "atc_description": "ferric oxide polymaltose complexes"
    },
    {
        "atc_level": "B03AC02",
        "atc_description": "saccharated iron oxide"
    },
    {
        "atc_level": "B03AC03",
        "atc_description": "iron-sorbitol-citric acid complex"
    },
    {
        "atc_level": "B03AC04",
        "atc_description": "Ferric oxide polymaltose complex"
    },
    {
        "atc_level": "B03AC05",
        "atc_description": "ferric sorbitol gluconic acid complex"
    },
    {
        "atc_level": "B03AC06",
        "atc_description": "ferric oxide dextran complexes"
    },
    {
        "atc_level": "B03AC07",
        "atc_description": "ferric sodium gluconate complex"
    },
    {
        "atc_level": "B03AD",
        "atc_description": "Iron in combination with folic acid"
    },
    {
        "atc_level": "B03AD01",
        "atc_description": "ferrous amino acid complex"
    },
    {
        "atc_level": "B03AD02",
        "atc_description": "ferrous fumarate"
    },
    {
        "atc_level": "B03AD03",
        "atc_description": "ferrous sulfate"
    },
    {
        "atc_level": "B03AD04",
        "atc_description": "ferric oxide polymaltose complexes"
    },
    {
        "atc_level": "B03AD05",
        "atc_description": "ferrous gluconate"
    },
    {
        "atc_level": "B03AE",
        "atc_description": "Iron in other combinations"
    },
    {
        "atc_level": "B03AE01",
        "atc_description": "iron, vitamin B12 and folic acid"
    },
    {
        "atc_level": "B03AE02",
        "atc_description": "iron, multivitamins and folic acid"
    },
    {
        "atc_level": "B03AE03",
        "atc_description": "iron and multivitamins"
    },
    {
        "atc_level": "B03AE04",
        "atc_description": "iron, multivitamins and minerals"
    },
    {
        "atc_level": "B03AE10",
        "atc_description": "various combinations"
    },
    {
        "atc_level": "B03B",
        "atc_description": "VITAMIN B12 AND FOLIC ACID"
    },
    {
        "atc_level": "B03BA",
        "atc_description": "Vitamin B12 (cyanocobalamin and analogues)"
    },
    {
        "atc_level": "B03BA01",
        "atc_description": "cyanocobalamin"
    },
    {
        "atc_level": "B03BA02",
        "atc_description": "cyanocobalamin tannin complex"
    },
    {
        "atc_level": "B03BA03",
        "atc_description": "hydroxocobalamin"
    },
    {
        "atc_level": "B03BA04",
        "atc_description": "cobamamide"
    },
    {
        "atc_level": "B03BA05",
        "atc_description": "mecobalamin"
    },
    {
        "atc_level": "B03BA51",
        "atc_description": "cyanocobalamin, combinations"
    },
    {
        "atc_level": "B03BA53",
        "atc_description": "hydroxocobalamin, combinations"
    },
    {
        "atc_level": "B03BB",
        "atc_description": "Folic acid and derivatives"
    },
    {
        "atc_level": "B03BB01",
        "atc_description": "folic acid"
    },
    {
        "atc_level": "B03BB51",
        "atc_description": "folic acid, combinations"
    },
    {
        "atc_level": "B03X",
        "atc_description": "OTHER ANTIANEMIC PREPARATIONS"
    },
    {
        "atc_level": "B03XA",
        "atc_description": "Other antianemic preparations"
    },
    {
        "atc_level": "B03XA01",
        "atc_description": "erythropoietin"
    },
    {
        "atc_level": "B03XA02",
        "atc_description": "darbepoetin alfa"
    },
    {
        "atc_level": "B03XA03",
        "atc_description": "methoxy polyethylene glycol-epoetin beta"
    },
    {
        "atc_level": "B03XA04",
        "atc_description": "peginesatide"
    },
    {
        "atc_level": "B03XA05",
        "atc_description": "roxadustat"
    },
    {
        "atc_level": "B03XA06",
        "atc_description": "luspatercept"
    },
    {
        "atc_level": "B03XA07",
        "atc_description": "daprodustat"
    },
    {
        "atc_level": "B03XA08",
        "atc_description": "vadadustat"
    },
    {
        "atc_level": "B04",
        "atc_description": "Serumlipidreducing agents"
    },
    {
        "atc_level": "B04A",
        "atc_description": "Cholesterol and triglyceride reducers"
    },
    {
        "atc_level": "B04AA",
        "atc_description": "HMG COA REDUCTASE INHIBITORS"
    },
    {
        "atc_level": "B04AB",
        "atc_description": "HMG CoA reductase inhibitors"
    },
    {
        "atc_level": "B04AB01",
        "atc_description": "Simvastatin"
    },
    {
        "atc_level": "B04AB02",
        "atc_description": "Lovastatin"
    },
    {
        "atc_level": "B04AB03",
        "atc_description": "Pravastatin"
    },
    {
        "atc_level": "B04AB04",
        "atc_description": "Fluvastatin"
    },
    {
        "atc_level": "B04AC",
        "atc_description": "Fibrates"
    },
    {
        "atc_level": "B04AC01",
        "atc_description": "Clofibrate"
    },
    {
        "atc_level": "B04AC02",
        "atc_description": "Bezafibrate"
    },
    {
        "atc_level": "B04AC03",
        "atc_description": "Aluminium clofibrate"
    },
    {
        "atc_level": "B04AC04",
        "atc_description": "Gemfibrozil"
    },
    {
        "atc_level": "B04AC05",
        "atc_description": "Fenofibrate"
    },
    {
        "atc_level": "B04AC06",
        "atc_description": "Simfibrate"
    },
    {
        "atc_level": "B04AC07",
        "atc_description": "Ronifibrate"
    },
    {
        "atc_level": "B04AC08",
        "atc_description": "Ciprofibrate"
    },
    {
        "atc_level": "B04AC09",
        "atc_description": "Etofibrate"
    },
    {
        "atc_level": "B04AC10",
        "atc_description": "Clofibride"
    },
    {
        "atc_level": "B04AD",
        "atc_description": "Bile acid sequestrants"
    },
    {
        "atc_level": "B04AD01",
        "atc_description": "Colestyramine"
    },
    {
        "atc_level": "B04AD02",
        "atc_description": "Colestipol"
    },
    {
        "atc_level": "B04AD03",
        "atc_description": "Detaxtran"
    },
    {
        "atc_level": "B04AE",
        "atc_description": "Nicotinic acid and derivatives"
    },
    {
        "atc_level": "B04AE01",
        "atc_description": "Niceritrol"
    },
    {
        "atc_level": "B04AE02",
        "atc_description": "Nicotinic acid"
    },
    {
        "atc_level": "B04AE03",
        "atc_description": "Nicofuranose"
    },
    {
        "atc_level": "B04AE04",
        "atc_description": "Aluminium nicotinate"
    },
    {
        "atc_level": "B04AE05",
        "atc_description": "Nicotinyl alcohol (pyridylcarbinol)"
    },
    {
        "atc_level": "B04AX",
        "atc_description": "Other cholesterol and triglyceride reducers"
    },
    {
        "atc_level": "B04AX01",
        "atc_description": "Dextrothyroxine"
    },
    {
        "atc_level": "B04AX02",
        "atc_description": "Probucol"
    },
    {
        "atc_level": "B04AX03",
        "atc_description": "Acipimox"
    },
    {
        "atc_level": "B04AX04",
        "atc_description": "Sulodexide"
    },
    {
        "atc_level": "B04AX06",
        "atc_description": "Tiadenol"
    },
    {
        "atc_level": "B04AX07",
        "atc_description": "Benfluorex"
    },
    {
        "atc_level": "B04AX08",
        "atc_description": "Meglutol"
    },
    {
        "atc_level": "B04AX09",
        "atc_description": "Omega-3-triglycerides"
    },
    {
        "atc_level": "B05",
        "atc_description": "BLOOD SUBSTITUTES AND PERFUSION SOLUTIONS"
    },
    {
        "atc_level": "B05A",
        "atc_description": "BLOOD AND RELATED PRODUCTS"
    },
    {
        "atc_level": "B05AA",
        "atc_description": "Blood substitutes and plasma protein fractions"
    },
    {
        "atc_level": "B05AA01",
        "atc_description": "albumin"
    },
    {
        "atc_level": "B05AA02",
        "atc_description": "other plasma protein fractions"
    },
    {
        "atc_level": "B05AA03",
        "atc_description": "fluorocarbon blood substitutes"
    },
    {
        "atc_level": "B05AA05",
        "atc_description": "dextran"
    },
    {
        "atc_level": "B05AA06",
        "atc_description": "gelatin agents"
    },
    {
        "atc_level": "B05AA07",
        "atc_description": "hydroxyethylstarch"
    },
    {
        "atc_level": "B05AA08",
        "atc_description": "hemoglobin crosfumaril"
    },
    {
        "atc_level": "B05AA09",
        "atc_description": "hemoglobin raffimer"
    },
    {
        "atc_level": "B05AA10",
        "atc_description": "hemoglobin glutamer (bovine)"
    },
    {
        "atc_level": "B05AX",
        "atc_description": "Other blood products"
    },
    {
        "atc_level": "B05AX01",
        "atc_description": "erythrocytes"
    },
    {
        "atc_level": "B05AX02",
        "atc_description": "thrombocytes"
    },
    {
        "atc_level": "B05AX03",
        "atc_description": "blood plasma"
    },
    {
        "atc_level": "B05AX04",
        "atc_description": "stem cells from umbilical cord blood"
    },
    {
        "atc_level": "B05B",
        "atc_description": "I.V. SOLUTIONS"
    },
    {
        "atc_level": "B05BA",
        "atc_description": "Solutions for parenteral nutrition"
    },
    {
        "atc_level": "B05BA01",
        "atc_description": "amino acids"
    },
    {
        "atc_level": "B05BA02",
        "atc_description": "fat emulsions"
    },
    {
        "atc_level": "B05BA03",
        "atc_description": "carbohydrates"
    },
    {
        "atc_level": "B05BA04",
        "atc_description": "protein hydrolysates"
    },
    {
        "atc_level": "B05BA10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "B05BB",
        "atc_description": "Solutions affecting the electrolyte balance"
    },
    {
        "atc_level": "B05BB01",
        "atc_description": "electrolytes"
    },
    {
        "atc_level": "B05BB02",
        "atc_description": "electrolytes with carbohydrates"
    },
    {
        "atc_level": "B05BB03",
        "atc_description": "trometamol"
    },
    {
        "atc_level": "B05BB04",
        "atc_description": "electrolytes in combination with other drugs"
    },
    {
        "atc_level": "B05BC",
        "atc_description": "Solutions producing osmotic diuresis"
    },
    {
        "atc_level": "B05BC01",
        "atc_description": "mannitol"
    },
    {
        "atc_level": "B05BC02",
        "atc_description": "carbamide"
    },
    {
        "atc_level": "B05C",
        "atc_description": "IRRIGATING SOLUTIONS"
    },
    {
        "atc_level": "B05CA",
        "atc_description": "Antiinfectives"
    },
    {
        "atc_level": "B05CA01",
        "atc_description": "cetylpyridinium"
    },
    {
        "atc_level": "B05CA02",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "B05CA03",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "B05CA04",
        "atc_description": "sulfamethizole"
    },
    {
        "atc_level": "B05CA05",
        "atc_description": "taurolidine"
    },
    {
        "atc_level": "B05CA06",
        "atc_description": "mandelic acid"
    },
    {
        "atc_level": "B05CA07",
        "atc_description": "noxytiolin"
    },
    {
        "atc_level": "B05CA08",
        "atc_description": "ethacridine lactate"
    },
    {
        "atc_level": "B05CA09",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "B05CA10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "B05CB",
        "atc_description": "Salt solutions"
    },
    {
        "atc_level": "B05CB01",
        "atc_description": "sodium chloride"
    },
    {
        "atc_level": "B05CB02",
        "atc_description": "sodium citrate"
    },
    {
        "atc_level": "B05CB03",
        "atc_description": "magnesium citrate"
    },
    {
        "atc_level": "B05CB04",
        "atc_description": "sodium bicarbonate"
    },
    {
        "atc_level": "B05CB10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "B05CX",
        "atc_description": "Other irrigating solutions"
    },
    {
        "atc_level": "B05CX01",
        "atc_description": "glucose"
    },
    {
        "atc_level": "B05CX02",
        "atc_description": "sorbitol"
    },
    {
        "atc_level": "B05CX03",
        "atc_description": "glycine"
    },
    {
        "atc_level": "B05CX04",
        "atc_description": "mannitol"
    },
    {
        "atc_level": "B05CX10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "B05D",
        "atc_description": "PERITONEAL DIALYTICS"
    },
    {
        "atc_level": "B05DA",
        "atc_description": "Isotonic solutions"
    },
    {
        "atc_level": "B05DB",
        "atc_description": "Hypertonic solutions"
    },
    {
        "atc_level": "B05X",
        "atc_description": "I.V. SOLUTION ADDITIVES"
    },
    {
        "atc_level": "B05XA",
        "atc_description": "Electrolyte solutions"
    },
    {
        "atc_level": "B05XA01",
        "atc_description": "potassium chloride"
    },
    {
        "atc_level": "B05XA02",
        "atc_description": "sodium bicarbonate"
    },
    {
        "atc_level": "B05XA03",
        "atc_description": "sodium chloride"
    },
    {
        "atc_level": "B05XA04",
        "atc_description": "ammonium chloride"
    },
    {
        "atc_level": "B05XA05",
        "atc_description": "magnesium sulfate"
    },
    {
        "atc_level": "B05XA06",
        "atc_description": "potassium phosphate, incl. combinations with other potassium salts"
    },
    {
        "atc_level": "B05XA07",
        "atc_description": "calcium chloride"
    },
    {
        "atc_level": "B05XA08",
        "atc_description": "sodium acetate"
    },
    {
        "atc_level": "B05XA09",
        "atc_description": "sodium phosphate"
    },
    {
        "atc_level": "B05XA10",
        "atc_description": "magnesium phosphate"
    },
    {
        "atc_level": "B05XA11",
        "atc_description": "magnesium chloride"
    },
    {
        "atc_level": "B05XA12",
        "atc_description": "zinc chloride"
    },
    {
        "atc_level": "B05XA13",
        "atc_description": "hydrochloric acid"
    },
    {
        "atc_level": "B05XA14",
        "atc_description": "sodium glycerophosphate"
    },
    {
        "atc_level": "B05XA15",
        "atc_description": "potassium lactate"
    },
    {
        "atc_level": "B05XA16",
        "atc_description": "cardioplegia solutions"
    },
    {
        "atc_level": "B05XA17",
        "atc_description": "potassium acetate"
    },
    {
        "atc_level": "B05XA18",
        "atc_description": "zinc sulfate"
    },
    {
        "atc_level": "B05XA30",
        "atc_description": "combinations of electrolytes"
    },
    {
        "atc_level": "B05XA31",
        "atc_description": "electrolytes in combination with other drugs"
    },
    {
        "atc_level": "B05XB",
        "atc_description": "Amino acids"
    },
    {
        "atc_level": "B05XB01",
        "atc_description": "arginine hydrochloride"
    },
    {
        "atc_level": "B05XB02",
        "atc_description": "alanyl glutamine"
    },
    {
        "atc_level": "B05XB03",
        "atc_description": "lysine"
    },
    {
        "atc_level": "B05XC",
        "atc_description": "Vitamins"
    },
    {
        "atc_level": "B05XX",
        "atc_description": "Other i.v. solution additives"
    },
    {
        "atc_level": "B05XX02",
        "atc_description": "trometamol"
    },
    {
        "atc_level": "B05Z",
        "atc_description": "HEMODIALYTICS AND HEMOFILTRATES"
    },
    {
        "atc_level": "B05ZA",
        "atc_description": "Hemodialytics, concentrates"
    },
    {
        "atc_level": "B05ZB",
        "atc_description": "Hemofiltrates"
    },
    {
        "atc_level": "B06",
        "atc_description": "OTHER HEMATOLOGICAL AGENTS"
    },
    {
        "atc_level": "B06A",
        "atc_description": "OTHER HEMATOLOGICAL AGENTS"
    },
    {
        "atc_level": "B06AA",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "B06AA02",
        "atc_description": "fibrinolysin and desoxyribonuclease"
    },
    {
        "atc_level": "B06AA03",
        "atc_description": "hyaluronidase"
    },
    {
        "atc_level": "B06AA04",
        "atc_description": "chymotrypsin"
    },
    {
        "atc_level": "B06AA07",
        "atc_description": "trypsin"
    },
    {
        "atc_level": "B06AA10",
        "atc_description": "desoxyribonuclease"
    },
    {
        "atc_level": "B06AA11",
        "atc_description": "bromelains"
    },
    {
        "atc_level": "B06AA55",
        "atc_description": "streptokinase, combinations"
    },
    {
        "atc_level": "B06AB",
        "atc_description": "Heme products"
    },
    {
        "atc_level": "B06AB01",
        "atc_description": "hemin"
    },
    {
        "atc_level": "B06AC",
        "atc_description": "Drugs used in hereditary angioedema"
    },
    {
        "atc_level": "B06AC01",
        "atc_description": "c1-inhibitor, plasma derived"
    },
    {
        "atc_level": "B06AC02",
        "atc_description": "icatibant"
    },
    {
        "atc_level": "B06AC03",
        "atc_description": "ecallantide"
    },
    {
        "atc_level": "B06AC04",
        "atc_description": "conestat alfa"
    },
    {
        "atc_level": "B06AC05",
        "atc_description": "lanadelumab"
    },
    {
        "atc_level": "B06AC06",
        "atc_description": "berotralstat"
    },
    {
        "atc_level": "B06AX",
        "atc_description": "Other hematological agents"
    },
    {
        "atc_level": "B06AX01",
        "atc_description": "crizanlizumab"
    },
    {
        "atc_level": "B06AX02",
        "atc_description": "betibeglogene autotemcel"
    },
    {
        "atc_level": "B06AX03",
        "atc_description": "voxelotor"
    },
    {
        "atc_level": "C",
        "atc_description": "CARDIOVASCULAR SYSTEM"
    },
    {
        "atc_level": "C00",
        "atc_description": "CARDIOVASCULAR SYSTEM"
    },
    {
        "atc_level": "C01",
        "atc_description": "CARDIAC THERAPY"
    },
    {
        "atc_level": "C01A",
        "atc_description": "CARDIAC GLYCOSIDES"
    },
    {
        "atc_level": "C01AA",
        "atc_description": "Digitalis glycosides"
    },
    {
        "atc_level": "C01AA01",
        "atc_description": "acetyldigitoxin"
    },
    {
        "atc_level": "C01AA02",
        "atc_description": "acetyldigoxin"
    },
    {
        "atc_level": "C01AA03",
        "atc_description": "digitalis leaves"
    },
    {
        "atc_level": "C01AA04",
        "atc_description": "digitoxin"
    },
    {
        "atc_level": "C01AA05",
        "atc_description": "digoxin"
    },
    {
        "atc_level": "C01AA06",
        "atc_description": "lanatoside C"
    },
    {
        "atc_level": "C01AA07",
        "atc_description": "deslanoside"
    },
    {
        "atc_level": "C01AA08",
        "atc_description": "metildigoxin"
    },
    {
        "atc_level": "C01AA09",
        "atc_description": "gitoformate"
    },
    {
        "atc_level": "C01AA52",
        "atc_description": "acetyldigoxin, combinations"
    },
    {
        "atc_level": "C01AB",
        "atc_description": "Scilla glycosides"
    },
    {
        "atc_level": "C01AB01",
        "atc_description": "proscillaridin"
    },
    {
        "atc_level": "C01AB51",
        "atc_description": "proscillaridin, combinations"
    },
    {
        "atc_level": "C01AC",
        "atc_description": "Strophanthus glycosides"
    },
    {
        "atc_level": "C01AC01",
        "atc_description": "g-strophanthin"
    },
    {
        "atc_level": "C01AC03",
        "atc_description": "cymarin"
    },
    {
        "atc_level": "C01AX",
        "atc_description": "Other cardiac glycosides"
    },
    {
        "atc_level": "C01AX02",
        "atc_description": "peruvoside"
    },
    {
        "atc_level": "C01B",
        "atc_description": "ANTIARRHYTHMICS, CLASS I AND III"
    },
    {
        "atc_level": "C01BA",
        "atc_description": "Antiarrhythmics, class Ia"
    },
    {
        "atc_level": "C01BA01",
        "atc_description": "quinidine"
    },
    {
        "atc_level": "C01BA02",
        "atc_description": "procainamide"
    },
    {
        "atc_level": "C01BA03",
        "atc_description": "disopyramide"
    },
    {
        "atc_level": "C01BA04",
        "atc_description": "sparteine"
    },
    {
        "atc_level": "C01BA05",
        "atc_description": "ajmaline"
    },
    {
        "atc_level": "C01BA08",
        "atc_description": "prajmaline"
    },
    {
        "atc_level": "C01BA12",
        "atc_description": "lorajmine"
    },
    {
        "atc_level": "C01BA13",
        "atc_description": "hydroquinidine"
    },
    {
        "atc_level": "C01BA51",
        "atc_description": "quinidine, combinations excl. psycholeptics"
    },
    {
        "atc_level": "C01BA71",
        "atc_description": "quinidine, combinations with psycholeptics"
    },
    {
        "atc_level": "C01BB",
        "atc_description": "Antiarrhythmics, class Ib"
    },
    {
        "atc_level": "C01BB01",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "C01BB02",
        "atc_description": "mexiletine"
    },
    {
        "atc_level": "C01BB03",
        "atc_description": "tocainide"
    },
    {
        "atc_level": "C01BB04",
        "atc_description": "aprindine"
    },
    {
        "atc_level": "C01BC",
        "atc_description": "Antiarrhythmics, class Ic"
    },
    {
        "atc_level": "C01BC03",
        "atc_description": "propafenone"
    },
    {
        "atc_level": "C01BC04",
        "atc_description": "flecainide"
    },
    {
        "atc_level": "C01BC07",
        "atc_description": "lorcainide"
    },
    {
        "atc_level": "C01BC08",
        "atc_description": "encainide"
    },
    {
        "atc_level": "C01BC09",
        "atc_description": "ethacizine"
    },
    {
        "atc_level": "C01BD",
        "atc_description": "Antiarrhythmics, class III"
    },
    {
        "atc_level": "C01BD01",
        "atc_description": "amiodarone"
    },
    {
        "atc_level": "C01BD02",
        "atc_description": "bretylium tosilate"
    },
    {
        "atc_level": "C01BD03",
        "atc_description": "bunaftine"
    },
    {
        "atc_level": "C01BD04",
        "atc_description": "dofetilide"
    },
    {
        "atc_level": "C01BD05",
        "atc_description": "ibutilide"
    },
    {
        "atc_level": "C01BD06",
        "atc_description": "tedisamil"
    },
    {
        "atc_level": "C01BD07",
        "atc_description": "dronedarone"
    },
    {
        "atc_level": "C01BG",
        "atc_description": "Other antiarrhythmics, class I and III"
    },
    {
        "atc_level": "C01BG01",
        "atc_description": "moracizine"
    },
    {
        "atc_level": "C01BG07",
        "atc_description": "cibenzoline"
    },
    {
        "atc_level": "C01BG11",
        "atc_description": "vernakalant"
    },
    {
        "atc_level": "C01C",
        "atc_description": "CARDIAC STIMULANTS EXCL. CARDIAC GLYCOSIDES"
    },
    {
        "atc_level": "C01CA",
        "atc_description": "Adrenergic and dopaminergic agents"
    },
    {
        "atc_level": "C01CA01",
        "atc_description": "etilefrine"
    },
    {
        "atc_level": "C01CA02",
        "atc_description": "isoprenaline"
    },
    {
        "atc_level": "C01CA03",
        "atc_description": "norepinephrine"
    },
    {
        "atc_level": "C01CA04",
        "atc_description": "dopamine"
    },
    {
        "atc_level": "C01CA05",
        "atc_description": "norfenefrine"
    },
    {
        "atc_level": "C01CA06",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "C01CA07",
        "atc_description": "dobutamine"
    },
    {
        "atc_level": "C01CA08",
        "atc_description": "oxedrine"
    },
    {
        "atc_level": "C01CA09",
        "atc_description": "metaraminol"
    },
    {
        "atc_level": "C01CA10",
        "atc_description": "methoxamine"
    },
    {
        "atc_level": "C01CA11",
        "atc_description": "mephentermine"
    },
    {
        "atc_level": "C01CA12",
        "atc_description": "dimetofrine"
    },
    {
        "atc_level": "C01CA13",
        "atc_description": "prenalterol"
    },
    {
        "atc_level": "C01CA14",
        "atc_description": "dopexamine"
    },
    {
        "atc_level": "C01CA15",
        "atc_description": "gepefrine"
    },
    {
        "atc_level": "C01CA16",
        "atc_description": "ibopamine"
    },
    {
        "atc_level": "C01CA17",
        "atc_description": "midodrine"
    },
    {
        "atc_level": "C01CA18",
        "atc_description": "octopamine"
    },
    {
        "atc_level": "C01CA19",
        "atc_description": "fenoldopam"
    },
    {
        "atc_level": "C01CA21",
        "atc_description": "cafedrine"
    },
    {
        "atc_level": "C01CA22",
        "atc_description": "arbutamine"
    },
    {
        "atc_level": "C01CA23",
        "atc_description": "theodrenaline"
    },
    {
        "atc_level": "C01CA24",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "C01CA25",
        "atc_description": "amezinium metilsulfate"
    },
    {
        "atc_level": "C01CA26",
        "atc_description": "ephedrine"
    },
    {
        "atc_level": "C01CA27",
        "atc_description": "droxidopa"
    },
    {
        "atc_level": "C01CA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "C01CA51",
        "atc_description": "etilefrine, combinations"
    },
    {
        "atc_level": "C01CC",
        "atc_description": "Respiratory stimulants"
    },
    {
        "atc_level": "C01CC01",
        "atc_description": "Doxapram"
    },
    {
        "atc_level": "C01CC02",
        "atc_description": "Nikethamide"
    },
    {
        "atc_level": "C01CC03",
        "atc_description": "Pentetrazol"
    },
    {
        "atc_level": "C01CC04",
        "atc_description": "Etamivan"
    },
    {
        "atc_level": "C01CC05",
        "atc_description": "Bemegride"
    },
    {
        "atc_level": "C01CC06",
        "atc_description": "Prethcamide"
    },
    {
        "atc_level": "C01CC07",
        "atc_description": "Almitrine"
    },
    {
        "atc_level": "C01CC52",
        "atc_description": "Nikethamide, combinations"
    },
    {
        "atc_level": "C01CC53",
        "atc_description": "Pentetrazol, combinations"
    },
    {
        "atc_level": "C01CE",
        "atc_description": "Phosphodiesterase inhibitors"
    },
    {
        "atc_level": "C01CE01",
        "atc_description": "amrinone"
    },
    {
        "atc_level": "C01CE02",
        "atc_description": "milrinone"
    },
    {
        "atc_level": "C01CE03",
        "atc_description": "enoximone"
    },
    {
        "atc_level": "C01CE04",
        "atc_description": "bucladesine"
    },
    {
        "atc_level": "C01CX",
        "atc_description": "Other cardiac stimulants"
    },
    {
        "atc_level": "C01CX06",
        "atc_description": "angiotensinamide"
    },
    {
        "atc_level": "C01CX07",
        "atc_description": "xamoterol"
    },
    {
        "atc_level": "C01CX08",
        "atc_description": "levosimendan"
    },
    {
        "atc_level": "C01CX09",
        "atc_description": "angiotensin II"
    },
    {
        "atc_level": "C01D",
        "atc_description": "VASODILATORS USED IN CARDIAC DISEASES"
    },
    {
        "atc_level": "C01DA",
        "atc_description": "Organic nitrates"
    },
    {
        "atc_level": "C01DA02",
        "atc_description": "glyceryl trinitrate"
    },
    {
        "atc_level": "C01DA03",
        "atc_description": "Itramin tosilate"
    },
    {
        "atc_level": "C01DA04",
        "atc_description": "methylpropylpropanediol dinitrate"
    },
    {
        "atc_level": "C01DA05",
        "atc_description": "pentaerithrityl tetranitrate"
    },
    {
        "atc_level": "C01DA06",
        "atc_description": "Prenylamine"
    },
    {
        "atc_level": "C01DA07",
        "atc_description": "propatylnitrate"
    },
    {
        "atc_level": "C01DA08",
        "atc_description": "isosorbide dinitrate"
    },
    {
        "atc_level": "C01DA09",
        "atc_description": "trolnitrate"
    },
    {
        "atc_level": "C01DA11",
        "atc_description": "Oxyfedrine"
    },
    {
        "atc_level": "C01DA12",
        "atc_description": "Benziodarone"
    },
    {
        "atc_level": "C01DA13",
        "atc_description": "eritrityl tetranitrate"
    },
    {
        "atc_level": "C01DA14",
        "atc_description": "isosorbide mononitrate"
    },
    {
        "atc_level": "C01DA19",
        "atc_description": "Carbocromen"
    },
    {
        "atc_level": "C01DA20",
        "atc_description": "organic nitrates in combination"
    },
    {
        "atc_level": "C01DA22",
        "atc_description": "Hexobendine"
    },
    {
        "atc_level": "C01DA23",
        "atc_description": "Etafenone"
    },
    {
        "atc_level": "C01DA24",
        "atc_description": "Heptaminol"
    },
    {
        "atc_level": "C01DA25",
        "atc_description": "Imolamine"
    },
    {
        "atc_level": "C01DA27",
        "atc_description": "Dilazep"
    },
    {
        "atc_level": "C01DA32",
        "atc_description": "Trapidil"
    },
    {
        "atc_level": "C01DA34",
        "atc_description": "Molsidomine"
    },
    {
        "atc_level": "C01DA36",
        "atc_description": "Efloxate"
    },
    {
        "atc_level": "C01DA37",
        "atc_description": "Cinepazet"
    },
    {
        "atc_level": "C01DA38",
        "atc_description": "tenitramine"
    },
    {
        "atc_level": "C01DA51",
        "atc_description": "Dipyridamole, combinations"
    },
    {
        "atc_level": "C01DA52",
        "atc_description": "glyceryl trinitrate, combinations"
    },
    {
        "atc_level": "C01DA53",
        "atc_description": "Itramin tosilate, combinations"
    },
    {
        "atc_level": "C01DA54",
        "atc_description": "methylpropylpropanediol dinitrate, combinations"
    },
    {
        "atc_level": "C01DA55",
        "atc_description": "pentaerithrityl tetranitrate, combinations"
    },
    {
        "atc_level": "C01DA56",
        "atc_description": "Prenylamine, combinations"
    },
    {
        "atc_level": "C01DA57",
        "atc_description": "propatylnitrate, combinations"
    },
    {
        "atc_level": "C01DA58",
        "atc_description": "isosorbide dinitrate, combinations"
    },
    {
        "atc_level": "C01DA59",
        "atc_description": "trolnitrate, combinations"
    },
    {
        "atc_level": "C01DA61",
        "atc_description": "Oxyfedrine, combinations"
    },
    {
        "atc_level": "C01DA62",
        "atc_description": "Benziodarone, combinations"
    },
    {
        "atc_level": "C01DA63",
        "atc_description": "eritrityl tetranitrate, combinations"
    },
    {
        "atc_level": "C01DA70",
        "atc_description": "organic nitrates in combination with psycholeptics"
    },
    {
        "atc_level": "C01DB",
        "atc_description": "Quinolone vasodilators"
    },
    {
        "atc_level": "C01DB01",
        "atc_description": "flosequinan"
    },
    {
        "atc_level": "C01DX",
        "atc_description": "Other vasodilators used in cardiac diseases"
    },
    {
        "atc_level": "C01DX01",
        "atc_description": "itramin tosilate"
    },
    {
        "atc_level": "C01DX02",
        "atc_description": "prenylamine"
    },
    {
        "atc_level": "C01DX03",
        "atc_description": "oxyfedrine"
    },
    {
        "atc_level": "C01DX04",
        "atc_description": "benziodarone"
    },
    {
        "atc_level": "C01DX05",
        "atc_description": "carbocromen"
    },
    {
        "atc_level": "C01DX06",
        "atc_description": "hexobendine"
    },
    {
        "atc_level": "C01DX07",
        "atc_description": "etafenone"
    },
    {
        "atc_level": "C01DX08",
        "atc_description": "heptaminol"
    },
    {
        "atc_level": "C01DX09",
        "atc_description": "imolamine"
    },
    {
        "atc_level": "C01DX10",
        "atc_description": "dilazep"
    },
    {
        "atc_level": "C01DX11",
        "atc_description": "trapidil"
    },
    {
        "atc_level": "C01DX12",
        "atc_description": "molsidomine"
    },
    {
        "atc_level": "C01DX13",
        "atc_description": "efloxate"
    },
    {
        "atc_level": "C01DX14",
        "atc_description": "cinepazet"
    },
    {
        "atc_level": "C01DX15",
        "atc_description": "cloridarol"
    },
    {
        "atc_level": "C01DX16",
        "atc_description": "nicorandil"
    },
    {
        "atc_level": "C01DX17",
        "atc_description": "Trimetazidine"
    },
    {
        "atc_level": "C01DX18",
        "atc_description": "linsidomine"
    },
    {
        "atc_level": "C01DX19",
        "atc_description": "nesiritide"
    },
    {
        "atc_level": "C01DX21",
        "atc_description": "serelaxin"
    },
    {
        "atc_level": "C01DX22",
        "atc_description": "vericiguat"
    },
    {
        "atc_level": "C01DX51",
        "atc_description": "itramin tosilate, combinations"
    },
    {
        "atc_level": "C01DX52",
        "atc_description": "prenylamine, combinations"
    },
    {
        "atc_level": "C01DX53",
        "atc_description": "oxyfedrine, combinations"
    },
    {
        "atc_level": "C01DX54",
        "atc_description": "benziodarone, combinations"
    },
    {
        "atc_level": "C01E",
        "atc_description": "OTHER CARDIAC PREPARATIONS"
    },
    {
        "atc_level": "C01EA",
        "atc_description": "Prostaglandins"
    },
    {
        "atc_level": "C01EA01",
        "atc_description": "alprostadil"
    },
    {
        "atc_level": "C01EB",
        "atc_description": "Other cardiac preparations"
    },
    {
        "atc_level": "C01EB02",
        "atc_description": "camphora"
    },
    {
        "atc_level": "C01EB03",
        "atc_description": "indometacin"
    },
    {
        "atc_level": "C01EB04",
        "atc_description": "crataegus glycosides"
    },
    {
        "atc_level": "C01EB05",
        "atc_description": "creatinolfosfate"
    },
    {
        "atc_level": "C01EB06",
        "atc_description": "fosfocreatine"
    },
    {
        "atc_level": "C01EB07",
        "atc_description": "fructose 1,6-diphosphate"
    },
    {
        "atc_level": "C01EB08",
        "atc_description": "Levocarnitine"
    },
    {
        "atc_level": "C01EB09",
        "atc_description": "ubidecarenone"
    },
    {
        "atc_level": "C01EB10",
        "atc_description": "adenosine"
    },
    {
        "atc_level": "C01EB11",
        "atc_description": "tiracizine"
    },
    {
        "atc_level": "C01EB12",
        "atc_description": "Tedisamil"
    },
    {
        "atc_level": "C01EB13",
        "atc_description": "acadesine"
    },
    {
        "atc_level": "C01EB14",
        "atc_description": "Lanreotide"
    },
    {
        "atc_level": "C01EB15",
        "atc_description": "trimetazidine"
    },
    {
        "atc_level": "C01EB16",
        "atc_description": "ibuprofen"
    },
    {
        "atc_level": "C01EB17",
        "atc_description": "ivabradine"
    },
    {
        "atc_level": "C01EB18",
        "atc_description": "ranolazine"
    },
    {
        "atc_level": "C01EB19",
        "atc_description": "icatibant"
    },
    {
        "atc_level": "C01EB21",
        "atc_description": "regadenoson"
    },
    {
        "atc_level": "C01EB22",
        "atc_description": "meldonium"
    },
    {
        "atc_level": "C01EB23",
        "atc_description": "tiazotic acid"
    },
    {
        "atc_level": "C01EX",
        "atc_description": "Other cardiac combination products"
    },
    {
        "atc_level": "C02",
        "atc_description": "ANTIHYPERTENSIVES"
    },
    {
        "atc_level": "C02A",
        "atc_description": "ANTIADRENERGIC AGENTS, CENTRALLY ACTING"
    },
    {
        "atc_level": "C02AA",
        "atc_description": "Rauwolfia alkaloids"
    },
    {
        "atc_level": "C02AA01",
        "atc_description": "rescinnamine"
    },
    {
        "atc_level": "C02AA02",
        "atc_description": "reserpine"
    },
    {
        "atc_level": "C02AA03",
        "atc_description": "combinations of rauwolfia alkaloids"
    },
    {
        "atc_level": "C02AA04",
        "atc_description": "rauwolfia alkaloids, whole root"
    },
    {
        "atc_level": "C02AA05",
        "atc_description": "deserpidine"
    },
    {
        "atc_level": "C02AA06",
        "atc_description": "methoserpidine"
    },
    {
        "atc_level": "C02AA07",
        "atc_description": "bietaserpine"
    },
    {
        "atc_level": "C02AA52",
        "atc_description": "reserpine, combinations"
    },
    {
        "atc_level": "C02AA53",
        "atc_description": "combinations of rauwolfia alkoloids, combinations"
    },
    {
        "atc_level": "C02AA57",
        "atc_description": "bietaserpine, combinations"
    },
    {
        "atc_level": "C02AB",
        "atc_description": "Methyldopa"
    },
    {
        "atc_level": "C02AB01",
        "atc_description": "methyldopa (levorotatory)"
    },
    {
        "atc_level": "C02AB02",
        "atc_description": "methyldopa (racemic)"
    },
    {
        "atc_level": "C02AC",
        "atc_description": "Imidazoline receptor agonists"
    },
    {
        "atc_level": "C02AC01",
        "atc_description": "clonidine"
    },
    {
        "atc_level": "C02AC02",
        "atc_description": "guanfacine"
    },
    {
        "atc_level": "C02AC03",
        "atc_description": "Urapidil"
    },
    {
        "atc_level": "C02AC04",
        "atc_description": "tolonidine"
    },
    {
        "atc_level": "C02AC05",
        "atc_description": "moxonidine"
    },
    {
        "atc_level": "C02AC06",
        "atc_description": "rilmenidine"
    },
    {
        "atc_level": "C02B",
        "atc_description": "ANTIADRENERGIC AGENTS, GANGLION-BLOCKING"
    },
    {
        "atc_level": "C02BA",
        "atc_description": "Sulfonium derivatives"
    },
    {
        "atc_level": "C02BA01",
        "atc_description": "trimetaphan"
    },
    {
        "atc_level": "C02BB",
        "atc_description": "Secondary and tertiary amines"
    },
    {
        "atc_level": "C02BB01",
        "atc_description": "mecamylamine"
    },
    {
        "atc_level": "C02BC",
        "atc_description": "Bisquaternary ammonium compounds"
    },
    {
        "atc_level": "C02C",
        "atc_description": "ANTIADRENERGIC AGENTS, PERIPHERALLY ACTING"
    },
    {
        "atc_level": "C02CA",
        "atc_description": "Alpha-adrenoreceptor antagonists"
    },
    {
        "atc_level": "C02CA01",
        "atc_description": "prazosin"
    },
    {
        "atc_level": "C02CA02",
        "atc_description": "indoramin"
    },
    {
        "atc_level": "C02CA03",
        "atc_description": "trimazosin"
    },
    {
        "atc_level": "C02CA04",
        "atc_description": "doxazosin"
    },
    {
        "atc_level": "C02CA05",
        "atc_description": "Terazosin"
    },
    {
        "atc_level": "C02CA06",
        "atc_description": "urapidil"
    },
    {
        "atc_level": "C02CB",
        "atc_description": "Alpha- and beta- adrenoceptor blocking agents"
    },
    {
        "atc_level": "C02CB01",
        "atc_description": "Labetalol"
    },
    {
        "atc_level": "C02CC",
        "atc_description": "Guanidine derivatives"
    },
    {
        "atc_level": "C02CC01",
        "atc_description": "betanidine"
    },
    {
        "atc_level": "C02CC02",
        "atc_description": "guanethidine"
    },
    {
        "atc_level": "C02CC03",
        "atc_description": "guanoxan"
    },
    {
        "atc_level": "C02CC04",
        "atc_description": "debrisoquine"
    },
    {
        "atc_level": "C02CC05",
        "atc_description": "guanoclor"
    },
    {
        "atc_level": "C02CC06",
        "atc_description": "guanazodine"
    },
    {
        "atc_level": "C02CC07",
        "atc_description": "guanoxabenz"
    },
    {
        "atc_level": "C02D",
        "atc_description": "ARTERIOLAR SMOOTH MUSCLE, AGENTS ACTING ON"
    },
    {
        "atc_level": "C02DA",
        "atc_description": "Thiazide derivatives"
    },
    {
        "atc_level": "C02DA01",
        "atc_description": "diazoxide"
    },
    {
        "atc_level": "C02DB",
        "atc_description": "Hydrazinophthalazine derivatives"
    },
    {
        "atc_level": "C02DB01",
        "atc_description": "dihydralazine"
    },
    {
        "atc_level": "C02DB02",
        "atc_description": "hydralazine"
    },
    {
        "atc_level": "C02DB03",
        "atc_description": "endralazine"
    },
    {
        "atc_level": "C02DB04",
        "atc_description": "cadralazine"
    },
    {
        "atc_level": "C02DC",
        "atc_description": "Pyrimidine derivatives"
    },
    {
        "atc_level": "C02DC01",
        "atc_description": "minoxidil"
    },
    {
        "atc_level": "C02DD",
        "atc_description": "Nitroferricyanide derivatives"
    },
    {
        "atc_level": "C02DD01",
        "atc_description": "nitroprusside"
    },
    {
        "atc_level": "C02DE",
        "atc_description": "Calcium channel blockers"
    },
    {
        "atc_level": "C02DE01",
        "atc_description": "Verapamil"
    },
    {
        "atc_level": "C02DE02",
        "atc_description": "Nifedipine"
    },
    {
        "atc_level": "C02DE03",
        "atc_description": "Nimodipine"
    },
    {
        "atc_level": "C02DE04",
        "atc_description": "Diltiazem"
    },
    {
        "atc_level": "C02DE05",
        "atc_description": "Nitrendipine"
    },
    {
        "atc_level": "C02DE07",
        "atc_description": "Lidoflazine"
    },
    {
        "atc_level": "C02DE08",
        "atc_description": "Fendiline"
    },
    {
        "atc_level": "C02DE09",
        "atc_description": "Nicardipine"
    },
    {
        "atc_level": "C02DE10",
        "atc_description": "Felodipine"
    },
    {
        "atc_level": "C02DE11",
        "atc_description": "Bepridil"
    },
    {
        "atc_level": "C02DE12",
        "atc_description": "Amlodipine"
    },
    {
        "atc_level": "C02DE13",
        "atc_description": "Isradipine"
    },
    {
        "atc_level": "C02DE14",
        "atc_description": "Nisoldipine"
    },
    {
        "atc_level": "C02DE15",
        "atc_description": "Gallopamil"
    },
    {
        "atc_level": "C02DE16",
        "atc_description": "Lacidipine"
    },
    {
        "atc_level": "C02DE51",
        "atc_description": "Verapamil, combinations"
    },
    {
        "atc_level": "C02DE52",
        "atc_description": "Nifedipine, combinations"
    },
    {
        "atc_level": "C02DF",
        "atc_description": "NON-THIAZIDE SULPHONAMIDES"
    },
    {
        "atc_level": "C02DG",
        "atc_description": "Guanidine derivatives"
    },
    {
        "atc_level": "C02DG01",
        "atc_description": "pinacidil"
    },
    {
        "atc_level": "C02E",
        "atc_description": "Renin-angiotensin system, agents acting on"
    },
    {
        "atc_level": "C02EA",
        "atc_description": "Converting enzyme blockers"
    },
    {
        "atc_level": "C02EA01",
        "atc_description": "Captopril"
    },
    {
        "atc_level": "C02EA02",
        "atc_description": "Enalapril"
    },
    {
        "atc_level": "C02EA03",
        "atc_description": "Lisinopril"
    },
    {
        "atc_level": "C02EA04",
        "atc_description": "Perindopril"
    },
    {
        "atc_level": "C02EA05",
        "atc_description": "Ramipril"
    },
    {
        "atc_level": "C02EA06",
        "atc_description": "Quinapril"
    },
    {
        "atc_level": "C02EA07",
        "atc_description": "Benazepril"
    },
    {
        "atc_level": "C02EA08",
        "atc_description": "Cilazapril"
    },
    {
        "atc_level": "C02EA09",
        "atc_description": "Fosinopril"
    },
    {
        "atc_level": "C02EA10",
        "atc_description": "Trandolapril"
    },
    {
        "atc_level": "C02EA11",
        "atc_description": "Spirapril"
    },
    {
        "atc_level": "C02EA12",
        "atc_description": "Delapril"
    },
    {
        "atc_level": "C02EX",
        "atc_description": "Other agents acting on the renin-angiotensin system"
    },
    {
        "atc_level": "C02EX01",
        "atc_description": "Losartan"
    },
    {
        "atc_level": "C02EX02",
        "atc_description": "Remikeren"
    },
    {
        "atc_level": "C02K",
        "atc_description": "OTHER ANTIHYPERTENSIVES"
    },
    {
        "atc_level": "C02KA",
        "atc_description": "Alkaloids, excl. rauwolfia"
    },
    {
        "atc_level": "C02KA01",
        "atc_description": "veratrum"
    },
    {
        "atc_level": "C02KB",
        "atc_description": "Tyrosine hydroxylase inhibitors"
    },
    {
        "atc_level": "C02KB01",
        "atc_description": "metirosine"
    },
    {
        "atc_level": "C02KC",
        "atc_description": "MAO inhibitors"
    },
    {
        "atc_level": "C02KC01",
        "atc_description": "pargyline"
    },
    {
        "atc_level": "C02KD",
        "atc_description": "Serotonin antagonists"
    },
    {
        "atc_level": "C02KD01",
        "atc_description": "ketanserin"
    },
    {
        "atc_level": "C02KX",
        "atc_description": "Antihypertensives for pulmonary arterial hypertension"
    },
    {
        "atc_level": "C02KX01",
        "atc_description": "bosentan"
    },
    {
        "atc_level": "C02KX02",
        "atc_description": "ambrisentan"
    },
    {
        "atc_level": "C02KX03",
        "atc_description": "sitaxentan"
    },
    {
        "atc_level": "C02KX04",
        "atc_description": "macitentan"
    },
    {
        "atc_level": "C02KX05",
        "atc_description": "riociguat"
    },
    {
        "atc_level": "C02KX52",
        "atc_description": "ambrisentan and tadalafil"
    },
    {
        "atc_level": "C02L",
        "atc_description": "ANTIHYPERTENSIVES AND DIURETICS IN COMBINATION"
    },
    {
        "atc_level": "C02LA",
        "atc_description": "Rauwolfia alkaloids and diuretics in combination"
    },
    {
        "atc_level": "C02LA01",
        "atc_description": "reserpine and diuretics"
    },
    {
        "atc_level": "C02LA02",
        "atc_description": "rescinnamine and diuretics"
    },
    {
        "atc_level": "C02LA03",
        "atc_description": "deserpidine and diuretics"
    },
    {
        "atc_level": "C02LA04",
        "atc_description": "methoserpidine and diuretics"
    },
    {
        "atc_level": "C02LA07",
        "atc_description": "bietaserpine and diuretics"
    },
    {
        "atc_level": "C02LA08",
        "atc_description": "rauwolfia alkaloids, whole root and diuretics"
    },
    {
        "atc_level": "C02LA09",
        "atc_description": "syrosingopine and diuretics"
    },
    {
        "atc_level": "C02LA50",
        "atc_description": "combination of rauwolfia alkaloids and diuretics incl. other combinations"
    },
    {
        "atc_level": "C02LA51",
        "atc_description": "reserpine and diuretics, combinations with other drugs"
    },
    {
        "atc_level": "C02LA52",
        "atc_description": "rescinnamine and diuretics, combinations with other drugs"
    },
    {
        "atc_level": "C02LA71",
        "atc_description": "reserpine and diuretics, combinations with psycholeptics"
    },
    {
        "atc_level": "C02LB",
        "atc_description": "Methyldopa and diuretics in combination"
    },
    {
        "atc_level": "C02LB01",
        "atc_description": "methyldopa (levorotatory) and diuretics"
    },
    {
        "atc_level": "C02LC",
        "atc_description": "Imidazoline receptor agonists in combination with diuretics"
    },
    {
        "atc_level": "C02LC01",
        "atc_description": "clonidine and diuretics"
    },
    {
        "atc_level": "C02LC05",
        "atc_description": "moxonidine and diuretics"
    },
    {
        "atc_level": "C02LC51",
        "atc_description": "clonidine and diuretics, combinations with other drugs"
    },
    {
        "atc_level": "C02LD",
        "atc_description": "Alpha- and beta- adrenoceptor blocking agents and diuretics"
    },
    {
        "atc_level": "C02LD01",
        "atc_description": "Labetalol and diuretics"
    },
    {
        "atc_level": "C02LE",
        "atc_description": "Alpha-adrenoreceptor antagonists and diuretics"
    },
    {
        "atc_level": "C02LE01",
        "atc_description": "prazosin and diuretics"
    },
    {
        "atc_level": "C02LF",
        "atc_description": "Guanidine derivatives and diuretics"
    },
    {
        "atc_level": "C02LF01",
        "atc_description": "guanethidine and diuretics"
    },
    {
        "atc_level": "C02LG",
        "atc_description": "Hydrazinophthalazine derivatives and diuretics"
    },
    {
        "atc_level": "C02LG01",
        "atc_description": "dihydralazine and diuretics"
    },
    {
        "atc_level": "C02LG02",
        "atc_description": "hydralazine and diuretics"
    },
    {
        "atc_level": "C02LG03",
        "atc_description": "picodralazine and diuretics"
    },
    {
        "atc_level": "C02LG51",
        "atc_description": "dihydralazine and diuretics, combinations with other drugs"
    },
    {
        "atc_level": "C02LG73",
        "atc_description": "picodralazine and diuretics, combinations with psycholeptics"
    },
    {
        "atc_level": "C02LI",
        "atc_description": "Calcium channel blockers and diuretics"
    },
    {
        "atc_level": "C02LK",
        "atc_description": "Alkaloids, excl. rauwolfia, in combination with diuretics"
    },
    {
        "atc_level": "C02LK01",
        "atc_description": "veratrum and diuretics"
    },
    {
        "atc_level": "C02LL",
        "atc_description": "MAO inhibitors and diuretics"
    },
    {
        "atc_level": "C02LL01",
        "atc_description": "pargyline and diuretics"
    },
    {
        "atc_level": "C02LM",
        "atc_description": "Converting enzyme blockers and diuretics"
    },
    {
        "atc_level": "C02LM01",
        "atc_description": "Captopril and diuretics"
    },
    {
        "atc_level": "C02LM02",
        "atc_description": "Enalapril and diuretics"
    },
    {
        "atc_level": "C02LM03",
        "atc_description": "Lisinopril and diuretics"
    },
    {
        "atc_level": "C02LM05",
        "atc_description": "Ramipril and diuretics"
    },
    {
        "atc_level": "C02LM06",
        "atc_description": "Quinapril and diuretics"
    },
    {
        "atc_level": "C02LM07",
        "atc_description": "Benazepril and diuretics"
    },
    {
        "atc_level": "C02LM08",
        "atc_description": "Cilazapril and diuretics"
    },
    {
        "atc_level": "C02LM12",
        "atc_description": "Delapril and diuretics"
    },
    {
        "atc_level": "C02LN",
        "atc_description": "Serotonin antagonists and diuretics"
    },
    {
        "atc_level": "C02LX",
        "atc_description": "Other antihypertensives and diuretics"
    },
    {
        "atc_level": "C02LX01",
        "atc_description": "pinacidil and diuretics"
    },
    {
        "atc_level": "C02N",
        "atc_description": "COMBINATIONS OF ANTIHYPERTENSIVES IN ATC-GR. C02"
    },
    {
        "atc_level": "C03",
        "atc_description": "DIURETICS"
    },
    {
        "atc_level": "C03A",
        "atc_description": "LOW-CEILING DIURETICS, THIAZIDES"
    },
    {
        "atc_level": "C03AA",
        "atc_description": "Thiazides, plain"
    },
    {
        "atc_level": "C03AA01",
        "atc_description": "bendroflumethiazide"
    },
    {
        "atc_level": "C03AA02",
        "atc_description": "hydroflumethiazide"
    },
    {
        "atc_level": "C03AA03",
        "atc_description": "hydrochlorothiazide"
    },
    {
        "atc_level": "C03AA04",
        "atc_description": "chlorothiazide"
    },
    {
        "atc_level": "C03AA05",
        "atc_description": "polythiazide"
    },
    {
        "atc_level": "C03AA06",
        "atc_description": "trichlormethiazide"
    },
    {
        "atc_level": "C03AA07",
        "atc_description": "cyclopenthiazide"
    },
    {
        "atc_level": "C03AA08",
        "atc_description": "methyclothiazide"
    },
    {
        "atc_level": "C03AA09",
        "atc_description": "cyclothiazide"
    },
    {
        "atc_level": "C03AA13",
        "atc_description": "mebutizide"
    },
    {
        "atc_level": "C03AB",
        "atc_description": "Thiazides and potassium in combination"
    },
    {
        "atc_level": "C03AB01",
        "atc_description": "bendroflumethiazide and potassium"
    },
    {
        "atc_level": "C03AB02",
        "atc_description": "hydroflumethiazide and potassium"
    },
    {
        "atc_level": "C03AB03",
        "atc_description": "hydrochlorothiazide and potassium"
    },
    {
        "atc_level": "C03AB04",
        "atc_description": "chlorothiazide and potassium"
    },
    {
        "atc_level": "C03AB05",
        "atc_description": "polythiazide and potassium"
    },
    {
        "atc_level": "C03AB06",
        "atc_description": "trichlormethiazide and potassium"
    },
    {
        "atc_level": "C03AB07",
        "atc_description": "cyclopenthiazide and potassium"
    },
    {
        "atc_level": "C03AB08",
        "atc_description": "methyclothiazide and potassium"
    },
    {
        "atc_level": "C03AB09",
        "atc_description": "cyclothiazide and potassium"
    },
    {
        "atc_level": "C03AH",
        "atc_description": "Thiazides, combinations with psycholeptics and/or analgesics"
    },
    {
        "atc_level": "C03AH01",
        "atc_description": "chlorothiazide, combinations"
    },
    {
        "atc_level": "C03AH02",
        "atc_description": "hydroflumethiazide, combinations"
    },
    {
        "atc_level": "C03AX",
        "atc_description": "Thiazides, combinations with other drugs"
    },
    {
        "atc_level": "C03AX01",
        "atc_description": "hydrochlorothiazide, combinations"
    },
    {
        "atc_level": "C03B",
        "atc_description": "LOW-CEILING DIURETICS, EXCL. THIAZIDES"
    },
    {
        "atc_level": "C03BA",
        "atc_description": "Sulfonamides, plain"
    },
    {
        "atc_level": "C03BA02",
        "atc_description": "quinethazone"
    },
    {
        "atc_level": "C03BA03",
        "atc_description": "clopamide"
    },
    {
        "atc_level": "C03BA04",
        "atc_description": "chlortalidone"
    },
    {
        "atc_level": "C03BA05",
        "atc_description": "mefruside"
    },
    {
        "atc_level": "C03BA07",
        "atc_description": "clofenamide"
    },
    {
        "atc_level": "C03BA08",
        "atc_description": "metolazone"
    },
    {
        "atc_level": "C03BA09",
        "atc_description": "meticrane"
    },
    {
        "atc_level": "C03BA10",
        "atc_description": "xipamide"
    },
    {
        "atc_level": "C03BA11",
        "atc_description": "indapamide"
    },
    {
        "atc_level": "C03BA12",
        "atc_description": "clorexolone"
    },
    {
        "atc_level": "C03BA13",
        "atc_description": "fenquizone"
    },
    {
        "atc_level": "C03BA82",
        "atc_description": "clorexolone, combinations with psycholeptics"
    },
    {
        "atc_level": "C03BB",
        "atc_description": "Sulfonamides and potassium in combination"
    },
    {
        "atc_level": "C03BB02",
        "atc_description": "quinethazone and potassium"
    },
    {
        "atc_level": "C03BB03",
        "atc_description": "clopamide and potassium"
    },
    {
        "atc_level": "C03BB04",
        "atc_description": "chlortalidone and potassium"
    },
    {
        "atc_level": "C03BB05",
        "atc_description": "mefruside and potassium"
    },
    {
        "atc_level": "C03BB07",
        "atc_description": "clofenamide and potassium"
    },
    {
        "atc_level": "C03BC",
        "atc_description": "Mercurial diuretics"
    },
    {
        "atc_level": "C03BC01",
        "atc_description": "mersalyl"
    },
    {
        "atc_level": "C03BD",
        "atc_description": "Xanthine derivatives"
    },
    {
        "atc_level": "C03BD01",
        "atc_description": "theobromine"
    },
    {
        "atc_level": "C03BK",
        "atc_description": "Sulfonamides, combinations with other drugs"
    },
    {
        "atc_level": "C03BX",
        "atc_description": "Other low-ceiling diuretics"
    },
    {
        "atc_level": "C03BX03",
        "atc_description": "cicletanine"
    },
    {
        "atc_level": "C03C",
        "atc_description": "HIGH-CEILING DIURETICS"
    },
    {
        "atc_level": "C03CA",
        "atc_description": "Sulfonamides, plain"
    },
    {
        "atc_level": "C03CA01",
        "atc_description": "furosemide"
    },
    {
        "atc_level": "C03CA02",
        "atc_description": "bumetanide"
    },
    {
        "atc_level": "C03CA03",
        "atc_description": "piretanide"
    },
    {
        "atc_level": "C03CA04",
        "atc_description": "torasemide"
    },
    {
        "atc_level": "C03CB",
        "atc_description": "Sulfonamides and potassium in combination"
    },
    {
        "atc_level": "C03CB01",
        "atc_description": "furosemide and potassium"
    },
    {
        "atc_level": "C03CB02",
        "atc_description": "bumetanide and potassium"
    },
    {
        "atc_level": "C03CC",
        "atc_description": "Aryloxyacetic acid derivatives"
    },
    {
        "atc_level": "C03CC01",
        "atc_description": "etacrynic acid"
    },
    {
        "atc_level": "C03CC02",
        "atc_description": "tienilic acid"
    },
    {
        "atc_level": "C03CD",
        "atc_description": "Pyrazolone derivatives"
    },
    {
        "atc_level": "C03CD01",
        "atc_description": "muzolimine"
    },
    {
        "atc_level": "C03CX",
        "atc_description": "Other high-ceiling diuretics"
    },
    {
        "atc_level": "C03CX01",
        "atc_description": "etozolin"
    },
    {
        "atc_level": "C03D",
        "atc_description": "ALDOSTERONE ANTAGONISTS AND OTHER POTASSIUM-SPARING AGENTS"
    },
    {
        "atc_level": "C03DA",
        "atc_description": "Aldosterone antagonists"
    },
    {
        "atc_level": "C03DA01",
        "atc_description": "spironolactone"
    },
    {
        "atc_level": "C03DA02",
        "atc_description": "potassium canrenoate"
    },
    {
        "atc_level": "C03DA03",
        "atc_description": "canrenone"
    },
    {
        "atc_level": "C03DA04",
        "atc_description": "eplerenone"
    },
    {
        "atc_level": "C03DA05",
        "atc_description": "finerenone"
    },
    {
        "atc_level": "C03DB",
        "atc_description": "Other potassium-sparing agents"
    },
    {
        "atc_level": "C03DB01",
        "atc_description": "amiloride"
    },
    {
        "atc_level": "C03DB02",
        "atc_description": "triamterene"
    },
    {
        "atc_level": "C03E",
        "atc_description": "DIURETICS AND POTASSIUM-SPARING AGENTS IN COMBINATION"
    },
    {
        "atc_level": "C03EA",
        "atc_description": "Low-ceiling diuretics and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA01",
        "atc_description": "hydrochlorothiazide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA02",
        "atc_description": "trichlormethiazide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA03",
        "atc_description": "epitizide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA04",
        "atc_description": "altizide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA05",
        "atc_description": "mebutizide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA06",
        "atc_description": "chlortalidone and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA07",
        "atc_description": "cyclopenthiazide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA12",
        "atc_description": "metolazone and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA13",
        "atc_description": "bendroflumethiazide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EA14",
        "atc_description": "butizide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EB",
        "atc_description": "High-ceiling diuretics and potassium-sparing agents"
    },
    {
        "atc_level": "C03EB01",
        "atc_description": "furosemide and potassium-sparing agents"
    },
    {
        "atc_level": "C03EB02",
        "atc_description": "bumetanide and potassium-sparing agents"
    },
    {
        "atc_level": "C03X",
        "atc_description": "OTHER DIURETICS"
    },
    {
        "atc_level": "C03XA",
        "atc_description": "Vasopressin antagonists"
    },
    {
        "atc_level": "C03XA01",
        "atc_description": "tolvaptan"
    },
    {
        "atc_level": "C03XA02",
        "atc_description": "conivaptan"
    },
    {
        "atc_level": "C04",
        "atc_description": "PERIPHERAL VASODILATORS"
    },
    {
        "atc_level": "C04A",
        "atc_description": "PERIPHERAL VASODILATORS"
    },
    {
        "atc_level": "C04AA",
        "atc_description": "2-amino-1-phenylethanol derivatives"
    },
    {
        "atc_level": "C04AA01",
        "atc_description": "isoxsuprine"
    },
    {
        "atc_level": "C04AA02",
        "atc_description": "buphenine"
    },
    {
        "atc_level": "C04AA31",
        "atc_description": "bamethan"
    },
    {
        "atc_level": "C04AB",
        "atc_description": "Imidazoline derivatives"
    },
    {
        "atc_level": "C04AB01",
        "atc_description": "phentolamine"
    },
    {
        "atc_level": "C04AB02",
        "atc_description": "tolazoline"
    },
    {
        "atc_level": "C04AC",
        "atc_description": "Nicotinic acid and derivatives"
    },
    {
        "atc_level": "C04AC01",
        "atc_description": "nicotinic acid"
    },
    {
        "atc_level": "C04AC02",
        "atc_description": "nicotinyl alcohol (pyridylcarbinol)"
    },
    {
        "atc_level": "C04AC03",
        "atc_description": "inositol nicotinate"
    },
    {
        "atc_level": "C04AC07",
        "atc_description": "ciclonicate"
    },
    {
        "atc_level": "C04AD",
        "atc_description": "Purine derivatives"
    },
    {
        "atc_level": "C04AD01",
        "atc_description": "pentifylline"
    },
    {
        "atc_level": "C04AD02",
        "atc_description": "xantinol nicotinate"
    },
    {
        "atc_level": "C04AD03",
        "atc_description": "pentoxifylline"
    },
    {
        "atc_level": "C04AD04",
        "atc_description": "etofylline nicotinate"
    },
    {
        "atc_level": "C04AE",
        "atc_description": "Ergot alkaloids"
    },
    {
        "atc_level": "C04AE01",
        "atc_description": "ergoloid mesylates"
    },
    {
        "atc_level": "C04AE02",
        "atc_description": "nicergoline"
    },
    {
        "atc_level": "C04AE03",
        "atc_description": "Ergoloid"
    },
    {
        "atc_level": "C04AE04",
        "atc_description": "dihydroergocristine"
    },
    {
        "atc_level": "C04AE51",
        "atc_description": "ergoloid mesylates, combinations"
    },
    {
        "atc_level": "C04AE54",
        "atc_description": "dihydroergocristine, combinations"
    },
    {
        "atc_level": "C04AF",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "C04AF01",
        "atc_description": "kallidinogenase"
    },
    {
        "atc_level": "C04AX",
        "atc_description": "Other peripheral vasodilators"
    },
    {
        "atc_level": "C04AX01",
        "atc_description": "cyclandelate"
    },
    {
        "atc_level": "C04AX02",
        "atc_description": "phenoxybenzamine"
    },
    {
        "atc_level": "C04AX05",
        "atc_description": "Histamine"
    },
    {
        "atc_level": "C04AX06",
        "atc_description": "Betahistine"
    },
    {
        "atc_level": "C04AX07",
        "atc_description": "vincamine"
    },
    {
        "atc_level": "C04AX09",
        "atc_description": "Cinnarizine"
    },
    {
        "atc_level": "C04AX10",
        "atc_description": "moxisylyte"
    },
    {
        "atc_level": "C04AX11",
        "atc_description": "bencyclane"
    },
    {
        "atc_level": "C04AX13",
        "atc_description": "Piribedil"
    },
    {
        "atc_level": "C04AX17",
        "atc_description": "vinburnine"
    },
    {
        "atc_level": "C04AX19",
        "atc_description": "suloctidil"
    },
    {
        "atc_level": "C04AX20",
        "atc_description": "buflomedil"
    },
    {
        "atc_level": "C04AX21",
        "atc_description": "naftidrofuryl"
    },
    {
        "atc_level": "C04AX22",
        "atc_description": "Flunarizine"
    },
    {
        "atc_level": "C04AX23",
        "atc_description": "butalamine"
    },
    {
        "atc_level": "C04AX24",
        "atc_description": "visnadine"
    },
    {
        "atc_level": "C04AX26",
        "atc_description": "cetiedil"
    },
    {
        "atc_level": "C04AX27",
        "atc_description": "cinepazide"
    },
    {
        "atc_level": "C04AX28",
        "atc_description": "ifenprodil"
    },
    {
        "atc_level": "C04AX30",
        "atc_description": "azapetine"
    },
    {
        "atc_level": "C04AX31",
        "atc_description": "Trimetazidine"
    },
    {
        "atc_level": "C04AX32",
        "atc_description": "fasudil"
    },
    {
        "atc_level": "C05",
        "atc_description": "VASOPROTECTIVES"
    },
    {
        "atc_level": "C05A",
        "atc_description": "AGENTS FOR TREATMENT OF HEMORRHOIDS AND ANAL FISSURES FOR TOPICAL USE"
    },
    {
        "atc_level": "C05AA",
        "atc_description": "Corticosteroids"
    },
    {
        "atc_level": "C05AA01",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "C05AA04",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "C05AA05",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "C05AA06",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "C05AA08",
        "atc_description": "fluocortolone"
    },
    {
        "atc_level": "C05AA09",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "C05AA10",
        "atc_description": "fluocinolone acetonide"
    },
    {
        "atc_level": "C05AA11",
        "atc_description": "fluocinonide"
    },
    {
        "atc_level": "C05AA12",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "C05AB",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "C05AD",
        "atc_description": "Local anesthetics"
    },
    {
        "atc_level": "C05AD01",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "C05AD02",
        "atc_description": "tetracaine"
    },
    {
        "atc_level": "C05AD03",
        "atc_description": "benzocaine"
    },
    {
        "atc_level": "C05AD04",
        "atc_description": "cinchocaine"
    },
    {
        "atc_level": "C05AD05",
        "atc_description": "procaine"
    },
    {
        "atc_level": "C05AD06",
        "atc_description": "oxetacaine"
    },
    {
        "atc_level": "C05AD07",
        "atc_description": "pramocaine"
    },
    {
        "atc_level": "C05AE",
        "atc_description": "Muscle relaxants"
    },
    {
        "atc_level": "C05AE01",
        "atc_description": "glyceryl trinitrate"
    },
    {
        "atc_level": "C05AE02",
        "atc_description": "isosorbide dinitrate"
    },
    {
        "atc_level": "C05AE03",
        "atc_description": "diltiazem"
    },
    {
        "atc_level": "C05AX",
        "atc_description": "Other agents for treatment of hemorrhoids and anal fissures for topical use"
    },
    {
        "atc_level": "C05AX01",
        "atc_description": "aluminium preparations"
    },
    {
        "atc_level": "C05AX02",
        "atc_description": "bismuth preparations, combinations"
    },
    {
        "atc_level": "C05AX03",
        "atc_description": "other preparations, combinations"
    },
    {
        "atc_level": "C05AX04",
        "atc_description": "zinc preparations"
    },
    {
        "atc_level": "C05AX05",
        "atc_description": "tribenoside"
    },
    {
        "atc_level": "C05B",
        "atc_description": "ANTIVARICOSE THERAPY"
    },
    {
        "atc_level": "C05BA",
        "atc_description": "Heparins or heparinoids for topical use"
    },
    {
        "atc_level": "C05BA01",
        "atc_description": "organo-heparinoid"
    },
    {
        "atc_level": "C05BA02",
        "atc_description": "sodium apolate"
    },
    {
        "atc_level": "C05BA03",
        "atc_description": "heparin"
    },
    {
        "atc_level": "C05BA04",
        "atc_description": "pentosan polysulfate sodium"
    },
    {
        "atc_level": "C05BA51",
        "atc_description": "heparinoid, combinations"
    },
    {
        "atc_level": "C05BA53",
        "atc_description": "heparin, combinations"
    },
    {
        "atc_level": "C05BB",
        "atc_description": "Sclerosing agents for local injection"
    },
    {
        "atc_level": "C05BB01",
        "atc_description": "monoethanolamine oleate"
    },
    {
        "atc_level": "C05BB02",
        "atc_description": "polidocanol"
    },
    {
        "atc_level": "C05BB03",
        "atc_description": "invert sugar"
    },
    {
        "atc_level": "C05BB04",
        "atc_description": "sodium tetradecyl sulfate"
    },
    {
        "atc_level": "C05BB05",
        "atc_description": "phenol"
    },
    {
        "atc_level": "C05BB56",
        "atc_description": "glucose, combinations"
    },
    {
        "atc_level": "C05BX",
        "atc_description": "Other sclerosing agents"
    },
    {
        "atc_level": "C05BX01",
        "atc_description": "calcium dobesilate"
    },
    {
        "atc_level": "C05BX51",
        "atc_description": "calcium dobesilate, combinations"
    },
    {
        "atc_level": "C05C",
        "atc_description": "CAPILLARY STABILIZING AGENTS"
    },
    {
        "atc_level": "C05CA",
        "atc_description": "Bioflavonoids"
    },
    {
        "atc_level": "C05CA01",
        "atc_description": "rutoside"
    },
    {
        "atc_level": "C05CA02",
        "atc_description": "monoxerutin"
    },
    {
        "atc_level": "C05CA03",
        "atc_description": "diosmin"
    },
    {
        "atc_level": "C05CA04",
        "atc_description": "troxerutin"
    },
    {
        "atc_level": "C05CA05",
        "atc_description": "hidrosmin"
    },
    {
        "atc_level": "C05CA51",
        "atc_description": "rutoside, combinations"
    },
    {
        "atc_level": "C05CA53",
        "atc_description": "diosmin, combinations"
    },
    {
        "atc_level": "C05CA54",
        "atc_description": "troxerutin, combinations"
    },
    {
        "atc_level": "C05CX",
        "atc_description": "Other capillary stabilizing agents"
    },
    {
        "atc_level": "C05CX01",
        "atc_description": "tribenoside"
    },
    {
        "atc_level": "C05CX02",
        "atc_description": "naftazone"
    },
    {
        "atc_level": "C05CX03",
        "atc_description": "Hippocastani semen"
    },
    {
        "atc_level": "C07",
        "atc_description": "BETA BLOCKING AGENTS"
    },
    {
        "atc_level": "C07A",
        "atc_description": "BETA BLOCKING AGENTS"
    },
    {
        "atc_level": "C07AA",
        "atc_description": "Beta blocking agents, non-selective"
    },
    {
        "atc_level": "C07AA01",
        "atc_description": "alprenolol"
    },
    {
        "atc_level": "C07AA02",
        "atc_description": "oxprenolol"
    },
    {
        "atc_level": "C07AA03",
        "atc_description": "pindolol"
    },
    {
        "atc_level": "C07AA05",
        "atc_description": "propranolol"
    },
    {
        "atc_level": "C07AA06",
        "atc_description": "timolol"
    },
    {
        "atc_level": "C07AA07",
        "atc_description": "sotalol"
    },
    {
        "atc_level": "C07AA12",
        "atc_description": "nadolol"
    },
    {
        "atc_level": "C07AA14",
        "atc_description": "mepindolol"
    },
    {
        "atc_level": "C07AA15",
        "atc_description": "carteolol"
    },
    {
        "atc_level": "C07AA16",
        "atc_description": "tertatolol"
    },
    {
        "atc_level": "C07AA17",
        "atc_description": "bopindolol"
    },
    {
        "atc_level": "C07AA19",
        "atc_description": "bupranolol"
    },
    {
        "atc_level": "C07AA23",
        "atc_description": "penbutolol"
    },
    {
        "atc_level": "C07AA27",
        "atc_description": "cloranolol"
    },
    {
        "atc_level": "C07AA28",
        "atc_description": "Carvedilol"
    },
    {
        "atc_level": "C07AA57",
        "atc_description": "sotalol, combinations"
    },
    {
        "atc_level": "C07AB",
        "atc_description": "Beta blocking agents, selective"
    },
    {
        "atc_level": "C07AB01",
        "atc_description": "practolol"
    },
    {
        "atc_level": "C07AB02",
        "atc_description": "metoprolol"
    },
    {
        "atc_level": "C07AB03",
        "atc_description": "atenolol"
    },
    {
        "atc_level": "C07AB04",
        "atc_description": "acebutolol"
    },
    {
        "atc_level": "C07AB05",
        "atc_description": "betaxolol"
    },
    {
        "atc_level": "C07AB06",
        "atc_description": "bevantolol"
    },
    {
        "atc_level": "C07AB07",
        "atc_description": "bisoprolol"
    },
    {
        "atc_level": "C07AB08",
        "atc_description": "celiprolol"
    },
    {
        "atc_level": "C07AB09",
        "atc_description": "esmolol"
    },
    {
        "atc_level": "C07AB10",
        "atc_description": "epanolol"
    },
    {
        "atc_level": "C07AB11",
        "atc_description": "s-atenolol"
    },
    {
        "atc_level": "C07AB12",
        "atc_description": "nebivolol"
    },
    {
        "atc_level": "C07AB13",
        "atc_description": "talinolol"
    },
    {
        "atc_level": "C07AB14",
        "atc_description": "landiolol"
    },
    {
        "atc_level": "C07AB52",
        "atc_description": "metoprolol, combinations"
    },
    {
        "atc_level": "C07AB57",
        "atc_description": "bisoprolol, combinations"
    },
    {
        "atc_level": "C07AG",
        "atc_description": "Alpha and beta blocking agents"
    },
    {
        "atc_level": "C07AG01",
        "atc_description": "labetalol"
    },
    {
        "atc_level": "C07AG02",
        "atc_description": "carvedilol"
    },
    {
        "atc_level": "C07B",
        "atc_description": "BETA BLOCKING AGENTS AND THIAZIDES"
    },
    {
        "atc_level": "C07BA",
        "atc_description": "Beta blocking agents, non-selective, and thiazides"
    },
    {
        "atc_level": "C07BA02",
        "atc_description": "oxprenolol and thiazides"
    },
    {
        "atc_level": "C07BA03",
        "atc_description": "Pindolol and other diuretics"
    },
    {
        "atc_level": "C07BA05",
        "atc_description": "propranolol and thiazides"
    },
    {
        "atc_level": "C07BA06",
        "atc_description": "timolol and thiazides"
    },
    {
        "atc_level": "C07BA07",
        "atc_description": "sotalol and thiazides"
    },
    {
        "atc_level": "C07BA12",
        "atc_description": "nadolol and thiazides"
    },
    {
        "atc_level": "C07BA68",
        "atc_description": "metipranolol and thiazides, combinations"
    },
    {
        "atc_level": "C07BB",
        "atc_description": "Beta blocking agents, selective, and thiazides"
    },
    {
        "atc_level": "C07BB02",
        "atc_description": "metoprolol and thiazides"
    },
    {
        "atc_level": "C07BB03",
        "atc_description": "atenolol and thiazides"
    },
    {
        "atc_level": "C07BB04",
        "atc_description": "acebutolol and thiazides"
    },
    {
        "atc_level": "C07BB06",
        "atc_description": "bevantolol and thiazides"
    },
    {
        "atc_level": "C07BB07",
        "atc_description": "bisoprolol and thiazides"
    },
    {
        "atc_level": "C07BB12",
        "atc_description": "nebivolol and thiazides"
    },
    {
        "atc_level": "C07BB52",
        "atc_description": "metoprolol and thiazides, combinations"
    },
    {
        "atc_level": "C07BG",
        "atc_description": "Alpha and beta blocking agents and thiazides"
    },
    {
        "atc_level": "C07BG01",
        "atc_description": "labetalol and thiazides"
    },
    {
        "atc_level": "C07C",
        "atc_description": "BETA BLOCKING AGENTS AND OTHER DIURETICS"
    },
    {
        "atc_level": "C07CA",
        "atc_description": "Beta blocking agents, non-selective, and other diuretics"
    },
    {
        "atc_level": "C07CA02",
        "atc_description": "oxprenolol and other diuretics"
    },
    {
        "atc_level": "C07CA03",
        "atc_description": "pindolol and other diuretics"
    },
    {
        "atc_level": "C07CA17",
        "atc_description": "bopindolol and other diuretics"
    },
    {
        "atc_level": "C07CA23",
        "atc_description": "penbutolol and other diuretics"
    },
    {
        "atc_level": "C07CB",
        "atc_description": "Beta blocking agents, selective, and other diuretics"
    },
    {
        "atc_level": "C07CB02",
        "atc_description": "metoprolol and other diuretics"
    },
    {
        "atc_level": "C07CB03",
        "atc_description": "atenolol and other diuretics"
    },
    {
        "atc_level": "C07CB53",
        "atc_description": "atenolol and other diuretics, combinations"
    },
    {
        "atc_level": "C07CG",
        "atc_description": "Alpha and beta blocking agents and other diuretics"
    },
    {
        "atc_level": "C07CG01",
        "atc_description": "labetalol and other diuretics"
    },
    {
        "atc_level": "C07D",
        "atc_description": "BETA BLOCKING AGENTS, THIAZIDES AND OTHER DIURETICS"
    },
    {
        "atc_level": "C07DA",
        "atc_description": "Beta blocking agents, non-selective, thiazides and other diuretics"
    },
    {
        "atc_level": "C07DA06",
        "atc_description": "timolol, thiazides and other diuretics"
    },
    {
        "atc_level": "C07DB",
        "atc_description": "Beta blocking agents, selective, thiazides and other diuretics"
    },
    {
        "atc_level": "C07DB01",
        "atc_description": "atenolol, thiazides and other diuretics"
    },
    {
        "atc_level": "C07E",
        "atc_description": "BETA BLOCKING AGENTS AND VASODILATORS"
    },
    {
        "atc_level": "C07EA",
        "atc_description": "Beta blocking agents, non-selective, and vasodilators"
    },
    {
        "atc_level": "C07EB",
        "atc_description": "Beta blocking agents, selective, and vasodilators"
    },
    {
        "atc_level": "C07F",
        "atc_description": "BETA BLOCKING AGENTS, OTHER COMBINATIONS"
    },
    {
        "atc_level": "C07FA",
        "atc_description": "Beta blocking agents, non-selective, and other antihypertensives"
    },
    {
        "atc_level": "C07FA05",
        "atc_description": "propranolol and other antihypertensives"
    },
    {
        "atc_level": "C07FB",
        "atc_description": "Beta blocking agents and calcium channel blockers"
    },
    {
        "atc_level": "C07FB02",
        "atc_description": "metoprolol and felodipine"
    },
    {
        "atc_level": "C07FB03",
        "atc_description": "atenolol and nifedipine"
    },
    {
        "atc_level": "C07FB07",
        "atc_description": "bisoprolol and amlodipine"
    },
    {
        "atc_level": "C07FB12",
        "atc_description": "nebivolol and amlodipine"
    },
    {
        "atc_level": "C07FB13",
        "atc_description": "metoprolol and amlodipine"
    },
    {
        "atc_level": "C07FX",
        "atc_description": "Beta blocking agents, other combinations"
    },
    {
        "atc_level": "C07FX01",
        "atc_description": "propranolol and other combinations"
    },
    {
        "atc_level": "C07FX02",
        "atc_description": "sotalol and acetylsalicylic acid"
    },
    {
        "atc_level": "C07FX03",
        "atc_description": "metoprolol and acetylsalicylic acid"
    },
    {
        "atc_level": "C07FX04",
        "atc_description": "bisoprolol and acetylsalicylic acid"
    },
    {
        "atc_level": "C07FX05",
        "atc_description": "metoprolol and ivabradine"
    },
    {
        "atc_level": "C07FX06",
        "atc_description": "carvedilol and ivabradine"
    },
    {
        "atc_level": "C08",
        "atc_description": "CALCIUM CHANNEL BLOCKERS"
    },
    {
        "atc_level": "C08C",
        "atc_description": "SELECTIVE CALCIUM CHANNEL BLOCKERS WITH MAINLY VASCULAR EFFECTS"
    },
    {
        "atc_level": "C08CA",
        "atc_description": "Dihydropyridine derivatives"
    },
    {
        "atc_level": "C08CA01",
        "atc_description": "amlodipine"
    },
    {
        "atc_level": "C08CA02",
        "atc_description": "felodipine"
    },
    {
        "atc_level": "C08CA03",
        "atc_description": "isradipine"
    },
    {
        "atc_level": "C08CA04",
        "atc_description": "nicardipine"
    },
    {
        "atc_level": "C08CA05",
        "atc_description": "nifedipine"
    },
    {
        "atc_level": "C08CA06",
        "atc_description": "nimodipine"
    },
    {
        "atc_level": "C08CA07",
        "atc_description": "nisoldipine"
    },
    {
        "atc_level": "C08CA08",
        "atc_description": "nitrendipine"
    },
    {
        "atc_level": "C08CA09",
        "atc_description": "lacidipine"
    },
    {
        "atc_level": "C08CA10",
        "atc_description": "nilvadipine"
    },
    {
        "atc_level": "C08CA11",
        "atc_description": "manidipine"
    },
    {
        "atc_level": "C08CA12",
        "atc_description": "barnidipine"
    },
    {
        "atc_level": "C08CA13",
        "atc_description": "lercanidipine"
    },
    {
        "atc_level": "C08CA14",
        "atc_description": "cilnidipine"
    },
    {
        "atc_level": "C08CA15",
        "atc_description": "benidipine"
    },
    {
        "atc_level": "C08CA16",
        "atc_description": "clevidipine"
    },
    {
        "atc_level": "C08CA17",
        "atc_description": "levamlodipine"
    },
    {
        "atc_level": "C08CA51",
        "atc_description": "amlodipine and celecoxib"
    },
    {
        "atc_level": "C08CA55",
        "atc_description": "nifedipine, combinations"
    },
    {
        "atc_level": "C08CD",
        "atc_description": "Selective calcium channel blockers with direct cardiac effects"
    },
    {
        "atc_level": "C08CX",
        "atc_description": "Other selective calcium channel blockers with mainly vascular effects"
    },
    {
        "atc_level": "C08CX01",
        "atc_description": "mibefradil"
    },
    {
        "atc_level": "C08D",
        "atc_description": "SELECTIVE CALCIUM CHANNEL BLOCKERS WITH DIRECT CARDIAC EFFECTS"
    },
    {
        "atc_level": "C08DA",
        "atc_description": "Phenylalkylamine derivatives"
    },
    {
        "atc_level": "C08DA01",
        "atc_description": "verapamil"
    },
    {
        "atc_level": "C08DA02",
        "atc_description": "gallopamil"
    },
    {
        "atc_level": "C08DA51",
        "atc_description": "verapamil, combinations"
    },
    {
        "atc_level": "C08DB",
        "atc_description": "Benzothiazepine derivatives"
    },
    {
        "atc_level": "C08DB01",
        "atc_description": "diltiazem"
    },
    {
        "atc_level": "C08E",
        "atc_description": "NON-SELECTIVE CALCIUM CHANNEL BLOCKERS"
    },
    {
        "atc_level": "C08EA",
        "atc_description": "Phenylalkylamine derivatives"
    },
    {
        "atc_level": "C08EA01",
        "atc_description": "fendiline"
    },
    {
        "atc_level": "C08EA02",
        "atc_description": "bepridil"
    },
    {
        "atc_level": "C08EX",
        "atc_description": "Other non-selective calcium channel blockers"
    },
    {
        "atc_level": "C08EX01",
        "atc_description": "lidoflazine"
    },
    {
        "atc_level": "C08EX02",
        "atc_description": "perhexiline"
    },
    {
        "atc_level": "C08G",
        "atc_description": "CALCIUM CHANNEL BLOCKERS AND DIURETICS"
    },
    {
        "atc_level": "C08GA",
        "atc_description": "Calcium channel blockers and diuretics"
    },
    {
        "atc_level": "C08GA01",
        "atc_description": "nifedipine and diuretics"
    },
    {
        "atc_level": "C08GA02",
        "atc_description": "amlodipine and diuretics"
    },
    {
        "atc_level": "C09",
        "atc_description": "AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM"
    },
    {
        "atc_level": "C09A",
        "atc_description": "ACE INHIBITORS, PLAIN"
    },
    {
        "atc_level": "C09AA",
        "atc_description": "ACE inhibitors, plain"
    },
    {
        "atc_level": "C09AA01",
        "atc_description": "captopril"
    },
    {
        "atc_level": "C09AA02",
        "atc_description": "enalapril"
    },
    {
        "atc_level": "C09AA03",
        "atc_description": "lisinopril"
    },
    {
        "atc_level": "C09AA04",
        "atc_description": "perindopril"
    },
    {
        "atc_level": "C09AA05",
        "atc_description": "ramipril"
    },
    {
        "atc_level": "C09AA06",
        "atc_description": "quinapril"
    },
    {
        "atc_level": "C09AA07",
        "atc_description": "benazepril"
    },
    {
        "atc_level": "C09AA08",
        "atc_description": "cilazapril"
    },
    {
        "atc_level": "C09AA09",
        "atc_description": "fosinopril"
    },
    {
        "atc_level": "C09AA10",
        "atc_description": "trandolapril"
    },
    {
        "atc_level": "C09AA11",
        "atc_description": "spirapril"
    },
    {
        "atc_level": "C09AA12",
        "atc_description": "delapril"
    },
    {
        "atc_level": "C09AA13",
        "atc_description": "moexipril"
    },
    {
        "atc_level": "C09AA14",
        "atc_description": "temocapril"
    },
    {
        "atc_level": "C09AA15",
        "atc_description": "zofenopril"
    },
    {
        "atc_level": "C09AA16",
        "atc_description": "imidapril"
    },
    {
        "atc_level": "C09B",
        "atc_description": "ACE INHIBITORS, COMBINATIONS"
    },
    {
        "atc_level": "C09BA",
        "atc_description": "ACE inhibitors and diuretics"
    },
    {
        "atc_level": "C09BA01",
        "atc_description": "captopril and diuretics"
    },
    {
        "atc_level": "C09BA02",
        "atc_description": "enalapril and diuretics"
    },
    {
        "atc_level": "C09BA03",
        "atc_description": "lisinopril and diuretics"
    },
    {
        "atc_level": "C09BA04",
        "atc_description": "perindopril and diuretics"
    },
    {
        "atc_level": "C09BA05",
        "atc_description": "ramipril and diuretics"
    },
    {
        "atc_level": "C09BA06",
        "atc_description": "quinapril and diuretics"
    },
    {
        "atc_level": "C09BA07",
        "atc_description": "benazepril and diuretics"
    },
    {
        "atc_level": "C09BA08",
        "atc_description": "cilazapril and diuretics"
    },
    {
        "atc_level": "C09BA09",
        "atc_description": "fosinopril and diuretics"
    },
    {
        "atc_level": "C09BA12",
        "atc_description": "delapril and diuretics"
    },
    {
        "atc_level": "C09BA13",
        "atc_description": "moexipril and diuretics"
    },
    {
        "atc_level": "C09BA15",
        "atc_description": "zofenopril and diuretics"
    },
    {
        "atc_level": "C09BB",
        "atc_description": "ACE inhibitors and calcium channel blockers"
    },
    {
        "atc_level": "C09BB02",
        "atc_description": "enalapril and lercanidipine"
    },
    {
        "atc_level": "C09BB03",
        "atc_description": "lisinopril and amlodipine"
    },
    {
        "atc_level": "C09BB04",
        "atc_description": "perindopril and amlodipine"
    },
    {
        "atc_level": "C09BB05",
        "atc_description": "ramipril and felodipine"
    },
    {
        "atc_level": "C09BB06",
        "atc_description": "enalapril and nitrendipine"
    },
    {
        "atc_level": "C09BB07",
        "atc_description": "ramipril and amlodipine"
    },
    {
        "atc_level": "C09BB10",
        "atc_description": "trandolapril and verapamil"
    },
    {
        "atc_level": "C09BB12",
        "atc_description": "delapril and manidipine"
    },
    {
        "atc_level": "C09BX",
        "atc_description": "ACE inhibitors, other combinations"
    },
    {
        "atc_level": "C09BX01",
        "atc_description": "perindopril, amlodipine and indapamide"
    },
    {
        "atc_level": "C09BX02",
        "atc_description": "perindopril and bisoprolol"
    },
    {
        "atc_level": "C09BX03",
        "atc_description": "ramipril, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C09BX04",
        "atc_description": "perindopril, bisoprolol and amlodipine"
    },
    {
        "atc_level": "C09BX05",
        "atc_description": "ramipril and bisoprolol"
    },
    {
        "atc_level": "C09C",
        "atc_description": "ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), PLAIN"
    },
    {
        "atc_level": "C09CA",
        "atc_description": "Angiotensin II receptor blockers (ARBs), plain"
    },
    {
        "atc_level": "C09CA01",
        "atc_description": "losartan"
    },
    {
        "atc_level": "C09CA02",
        "atc_description": "eprosartan"
    },
    {
        "atc_level": "C09CA03",
        "atc_description": "valsartan"
    },
    {
        "atc_level": "C09CA04",
        "atc_description": "irbesartan"
    },
    {
        "atc_level": "C09CA05",
        "atc_description": "tasosartan"
    },
    {
        "atc_level": "C09CA06",
        "atc_description": "candesartan"
    },
    {
        "atc_level": "C09CA07",
        "atc_description": "telmisartan"
    },
    {
        "atc_level": "C09CA08",
        "atc_description": "olmesartan medoxomil"
    },
    {
        "atc_level": "C09CA09",
        "atc_description": "azilsartan medoxomil"
    },
    {
        "atc_level": "C09CA10",
        "atc_description": "fimasartan"
    },
    {
        "atc_level": "C09D",
        "atc_description": "ANGIOTENSIN II RECEPTOR BLOCKERS (ARBs), COMBINATIONS"
    },
    {
        "atc_level": "C09DA",
        "atc_description": "Angiotensin II receptor blockers (ARBs) and diuretics"
    },
    {
        "atc_level": "C09DA01",
        "atc_description": "losartan and diuretics"
    },
    {
        "atc_level": "C09DA02",
        "atc_description": "eprosartan and diuretics"
    },
    {
        "atc_level": "C09DA03",
        "atc_description": "valsartan and diuretics"
    },
    {
        "atc_level": "C09DA04",
        "atc_description": "irbesartan and diuretics"
    },
    {
        "atc_level": "C09DA06",
        "atc_description": "candesartan and diuretics"
    },
    {
        "atc_level": "C09DA07",
        "atc_description": "telmisartan and diuretics"
    },
    {
        "atc_level": "C09DA08",
        "atc_description": "olmesartan medoxomil and diuretics"
    },
    {
        "atc_level": "C09DA09",
        "atc_description": "azilsartan medoxomil and diuretics"
    },
    {
        "atc_level": "C09DA10",
        "atc_description": "fimasartan and diuretics"
    },
    {
        "atc_level": "C09DB",
        "atc_description": "Angiotensin II receptor blockers (ARBs) and calcium channel blockers"
    },
    {
        "atc_level": "C09DB01",
        "atc_description": "valsartan and amlodipine"
    },
    {
        "atc_level": "C09DB02",
        "atc_description": "olmesartan medoxomil and amlodipine"
    },
    {
        "atc_level": "C09DB04",
        "atc_description": "telmisartan and amlodipine"
    },
    {
        "atc_level": "C09DB05",
        "atc_description": "irbesartan and amlodipine"
    },
    {
        "atc_level": "C09DB06",
        "atc_description": "losartan and amlodipine"
    },
    {
        "atc_level": "C09DB07",
        "atc_description": "candesartan and amlodipine"
    },
    {
        "atc_level": "C09DB08",
        "atc_description": "valsartan and lercanidipine"
    },
    {
        "atc_level": "C09DB09",
        "atc_description": "fimasartan and amlodipine"
    },
    {
        "atc_level": "C09DX",
        "atc_description": "Angiotensin II receptor blockers (ARBs), other combinations"
    },
    {
        "atc_level": "C09DX01",
        "atc_description": "valsartan, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C09DX02",
        "atc_description": "valsartan and aliskiren"
    },
    {
        "atc_level": "C09DX03",
        "atc_description": "olmesartan medoxomil, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C09DX04",
        "atc_description": "valsartan and sacubitril"
    },
    {
        "atc_level": "C09DX05",
        "atc_description": "valsartan and nebivolol"
    },
    {
        "atc_level": "C09DX06",
        "atc_description": "candesartan, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C09DX07",
        "atc_description": "irbesartan, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C09X",
        "atc_description": "OTHER AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM"
    },
    {
        "atc_level": "C09XA",
        "atc_description": "Renin-inhibitors"
    },
    {
        "atc_level": "C09XA01",
        "atc_description": "remikiren"
    },
    {
        "atc_level": "C09XA02",
        "atc_description": "aliskiren"
    },
    {
        "atc_level": "C09XA52",
        "atc_description": "aliskiren and hydrochlorothiazide"
    },
    {
        "atc_level": "C09XA53",
        "atc_description": "aliskiren and amlodipine"
    },
    {
        "atc_level": "C09XA54",
        "atc_description": "aliskiren, amlodipine and hydrochlorothiazide"
    },
    {
        "atc_level": "C10",
        "atc_description": "LIPID MODIFYING AGENTS"
    },
    {
        "atc_level": "C10A",
        "atc_description": "LIPID MODIFYING AGENTS, PLAIN"
    },
    {
        "atc_level": "C10AA",
        "atc_description": "HMG CoA reductase inhibitors"
    },
    {
        "atc_level": "C10AA01",
        "atc_description": "simvastatin"
    },
    {
        "atc_level": "C10AA02",
        "atc_description": "lovastatin"
    },
    {
        "atc_level": "C10AA03",
        "atc_description": "pravastatin"
    },
    {
        "atc_level": "C10AA04",
        "atc_description": "fluvastatin"
    },
    {
        "atc_level": "C10AA05",
        "atc_description": "atorvastatin"
    },
    {
        "atc_level": "C10AA06",
        "atc_description": "cerivastatin"
    },
    {
        "atc_level": "C10AA07",
        "atc_description": "rosuvastatin"
    },
    {
        "atc_level": "C10AA08",
        "atc_description": "pitavastatin"
    },
    {
        "atc_level": "C10AA51",
        "atc_description": "Simvastatin, combination packages"
    },
    {
        "atc_level": "C10AA52",
        "atc_description": "Lovostatin, combinations"
    },
    {
        "atc_level": "C10AA53",
        "atc_description": "Pravastatin, combinations"
    },
    {
        "atc_level": "C10AA55",
        "atc_description": "Atorvastatin, combinations"
    },
    {
        "atc_level": "C10AB",
        "atc_description": "Fibrates"
    },
    {
        "atc_level": "C10AB01",
        "atc_description": "clofibrate"
    },
    {
        "atc_level": "C10AB02",
        "atc_description": "bezafibrate"
    },
    {
        "atc_level": "C10AB03",
        "atc_description": "aluminium clofibrate"
    },
    {
        "atc_level": "C10AB04",
        "atc_description": "gemfibrozil"
    },
    {
        "atc_level": "C10AB05",
        "atc_description": "fenofibrate"
    },
    {
        "atc_level": "C10AB06",
        "atc_description": "simfibrate"
    },
    {
        "atc_level": "C10AB07",
        "atc_description": "ronifibrate"
    },
    {
        "atc_level": "C10AB08",
        "atc_description": "ciprofibrate"
    },
    {
        "atc_level": "C10AB09",
        "atc_description": "etofibrate"
    },
    {
        "atc_level": "C10AB10",
        "atc_description": "clofibride"
    },
    {
        "atc_level": "C10AB11",
        "atc_description": "choline fenofibrate"
    },
    {
        "atc_level": "C10AC",
        "atc_description": "Bile acid sequestrants"
    },
    {
        "atc_level": "C10AC01",
        "atc_description": "colestyramine"
    },
    {
        "atc_level": "C10AC02",
        "atc_description": "colestipol"
    },
    {
        "atc_level": "C10AC03",
        "atc_description": "colextran"
    },
    {
        "atc_level": "C10AC04",
        "atc_description": "colesevelam"
    },
    {
        "atc_level": "C10AD",
        "atc_description": "Nicotinic acid and derivatives"
    },
    {
        "atc_level": "C10AD01",
        "atc_description": "niceritrol"
    },
    {
        "atc_level": "C10AD02",
        "atc_description": "nicotinic acid"
    },
    {
        "atc_level": "C10AD03",
        "atc_description": "nicofuranose"
    },
    {
        "atc_level": "C10AD04",
        "atc_description": "aluminium nicotinate"
    },
    {
        "atc_level": "C10AD05",
        "atc_description": "nicotinyl alcohol (pyridylcarbinol)"
    },
    {
        "atc_level": "C10AD06",
        "atc_description": "acipimox"
    },
    {
        "atc_level": "C10AD52",
        "atc_description": "nicotinic acid, combinations"
    },
    {
        "atc_level": "C10AX",
        "atc_description": "Other lipid modifying agents"
    },
    {
        "atc_level": "C10AX01",
        "atc_description": "dextrothyroxine"
    },
    {
        "atc_level": "C10AX02",
        "atc_description": "probucol"
    },
    {
        "atc_level": "C10AX03",
        "atc_description": "tiadenol"
    },
    {
        "atc_level": "C10AX04",
        "atc_description": "Benfluorex"
    },
    {
        "atc_level": "C10AX05",
        "atc_description": "meglutol"
    },
    {
        "atc_level": "C10AX06",
        "atc_description": "omega-3-triglycerides incl. other esters and acids"
    },
    {
        "atc_level": "C10AX07",
        "atc_description": "magnesium pyridoxal 5-phosphate glutamate"
    },
    {
        "atc_level": "C10AX08",
        "atc_description": "policosanol"
    },
    {
        "atc_level": "C10AX09",
        "atc_description": "ezetimibe"
    },
    {
        "atc_level": "C10AX10",
        "atc_description": "alipogene tiparvovec"
    },
    {
        "atc_level": "C10AX11",
        "atc_description": "mipomersen"
    },
    {
        "atc_level": "C10AX12",
        "atc_description": "lomitapide"
    },
    {
        "atc_level": "C10AX13",
        "atc_description": "evolocumab"
    },
    {
        "atc_level": "C10AX14",
        "atc_description": "alirocumab"
    },
    {
        "atc_level": "C10AX15",
        "atc_description": "bempedoic acid"
    },
    {
        "atc_level": "C10AX16",
        "atc_description": "inclisiran"
    },
    {
        "atc_level": "C10AX17",
        "atc_description": "evinacumab"
    },
    {
        "atc_level": "C10AX18",
        "atc_description": "volanesorsen"
    },
    {
        "atc_level": "C10B",
        "atc_description": "LIPID MODIFYING AGENTS, COMBINATIONS"
    },
    {
        "atc_level": "C10BA",
        "atc_description": "Combinations of various lipid modifying agents"
    },
    {
        "atc_level": "C10BA01",
        "atc_description": "lovastatin and nicotinic acid"
    },
    {
        "atc_level": "C10BA02",
        "atc_description": "simvastatin and ezetimibe"
    },
    {
        "atc_level": "C10BA03",
        "atc_description": "pravastatin and fenofibrate"
    },
    {
        "atc_level": "C10BA04",
        "atc_description": "simvastatin and fenofibrate"
    },
    {
        "atc_level": "C10BA05",
        "atc_description": "atorvastatin and ezetimibe"
    },
    {
        "atc_level": "C10BA06",
        "atc_description": "rosuvastatin and ezetimibe"
    },
    {
        "atc_level": "C10BA07",
        "atc_description": "rosuvastatin and omega-3 fatty acids"
    },
    {
        "atc_level": "C10BA08",
        "atc_description": "atorvastatin and omega-3 fatty acids"
    },
    {
        "atc_level": "C10BA09",
        "atc_description": "rosuvastatin and fenofibrate"
    },
    {
        "atc_level": "C10BA10",
        "atc_description": "bempedoic acid and ezetimibe"
    },
    {
        "atc_level": "C10BA11",
        "atc_description": "pravastatin and ezetimibe"
    },
    {
        "atc_level": "C10BA12",
        "atc_description": "pravastatin, ezetimibe and fenofibrate"
    },
    {
        "atc_level": "C10BX",
        "atc_description": "Lipid modifying agents in combination with other drugs"
    },
    {
        "atc_level": "C10BX01",
        "atc_description": "simvastatin and acetylsalicylic acid"
    },
    {
        "atc_level": "C10BX02",
        "atc_description": "pravastatin and acetylsalicylic acid"
    },
    {
        "atc_level": "C10BX03",
        "atc_description": "atorvastatin and amlodipine"
    },
    {
        "atc_level": "C10BX04",
        "atc_description": "simvastatin, acetylsalicylic acid and ramipril"
    },
    {
        "atc_level": "C10BX05",
        "atc_description": "rosuvastatin and acetylsalicylic acid"
    },
    {
        "atc_level": "C10BX06",
        "atc_description": "atorvastatin, acetylsalicylic acid and ramipril"
    },
    {
        "atc_level": "C10BX07",
        "atc_description": "rosuvastatin, amlodipine and lisinopril"
    },
    {
        "atc_level": "C10BX08",
        "atc_description": "atorvastatin and acetylsalicylic acid"
    },
    {
        "atc_level": "C10BX09",
        "atc_description": "rosuvastatin and amlodipine"
    },
    {
        "atc_level": "C10BX10",
        "atc_description": "rosuvastatin and valsartan"
    },
    {
        "atc_level": "C10BX11",
        "atc_description": "atorvastatin, amlodipine and perindopril"
    },
    {
        "atc_level": "C10BX12",
        "atc_description": "atorvastatin, acetylsalicylic acid and perindopril"
    },
    {
        "atc_level": "C10BX13",
        "atc_description": "rosuvastatin, perindopril and indapamide"
    },
    {
        "atc_level": "C10BX14",
        "atc_description": "rosuvastatin, amlodipine and perindopril"
    },
    {
        "atc_level": "C10BX15",
        "atc_description": "atorvastatin and perindopril"
    },
    {
        "atc_level": "C10BX16",
        "atc_description": "rosuvastatin and fimasartan"
    },
    {
        "atc_level": "C10BX17",
        "atc_description": "rosuvastatin and ramipril"
    },
    {
        "atc_level": "C10BX18",
        "atc_description": "atorvastatin, amlodipine and ramipril"
    },
    {
        "atc_level": "D",
        "atc_description": "DERMATOLOGICALS"
    },
    {
        "atc_level": "D00",
        "atc_description": "DERMATOLOGICALS"
    },
    {
        "atc_level": "D01",
        "atc_description": "ANTIFUNGALS FOR DERMATOLOGICAL USE"
    },
    {
        "atc_level": "D01A",
        "atc_description": "ANTIFUNGALS FOR TOPICAL USE"
    },
    {
        "atc_level": "D01AA",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "D01AA01",
        "atc_description": "nystatin"
    },
    {
        "atc_level": "D01AA02",
        "atc_description": "natamycin"
    },
    {
        "atc_level": "D01AA03",
        "atc_description": "hachimycin"
    },
    {
        "atc_level": "D01AA04",
        "atc_description": "pecilocin"
    },
    {
        "atc_level": "D01AA05",
        "atc_description": "Flucytosine"
    },
    {
        "atc_level": "D01AA06",
        "atc_description": "mepartricin"
    },
    {
        "atc_level": "D01AA07",
        "atc_description": "pyrrolnitrin"
    },
    {
        "atc_level": "D01AA08",
        "atc_description": "griseofulvin"
    },
    {
        "atc_level": "D01AA20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "D01AC",
        "atc_description": "Imidazole and triazole derivatives"
    },
    {
        "atc_level": "D01AC01",
        "atc_description": "clotrimazole"
    },
    {
        "atc_level": "D01AC02",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "D01AC03",
        "atc_description": "econazole"
    },
    {
        "atc_level": "D01AC04",
        "atc_description": "chlormidazole"
    },
    {
        "atc_level": "D01AC05",
        "atc_description": "isoconazole"
    },
    {
        "atc_level": "D01AC06",
        "atc_description": "tiabendazole"
    },
    {
        "atc_level": "D01AC07",
        "atc_description": "tioconazole"
    },
    {
        "atc_level": "D01AC08",
        "atc_description": "ketoconazole"
    },
    {
        "atc_level": "D01AC09",
        "atc_description": "sulconazole"
    },
    {
        "atc_level": "D01AC10",
        "atc_description": "bifonazole"
    },
    {
        "atc_level": "D01AC11",
        "atc_description": "oxiconazole"
    },
    {
        "atc_level": "D01AC12",
        "atc_description": "fenticonazole"
    },
    {
        "atc_level": "D01AC13",
        "atc_description": "omoconazole"
    },
    {
        "atc_level": "D01AC14",
        "atc_description": "sertaconazole"
    },
    {
        "atc_level": "D01AC15",
        "atc_description": "fluconazole"
    },
    {
        "atc_level": "D01AC16",
        "atc_description": "flutrimazole"
    },
    {
        "atc_level": "D01AC17",
        "atc_description": "eberconazole"
    },
    {
        "atc_level": "D01AC18",
        "atc_description": "luliconazole"
    },
    {
        "atc_level": "D01AC19",
        "atc_description": "efinaconazole"
    },
    {
        "atc_level": "D01AC20",
        "atc_description": "imidazoles/triazoles in combination with corticosteroids"
    },
    {
        "atc_level": "D01AC52",
        "atc_description": "miconazole, combinations"
    },
    {
        "atc_level": "D01AC60",
        "atc_description": "bifonazole, combinations"
    },
    {
        "atc_level": "D01AE",
        "atc_description": "Other antifungals for topical use"
    },
    {
        "atc_level": "D01AE01",
        "atc_description": "bromochlorosalicylanilide"
    },
    {
        "atc_level": "D01AE02",
        "atc_description": "methylrosaniline"
    },
    {
        "atc_level": "D01AE03",
        "atc_description": "tribromometacresol"
    },
    {
        "atc_level": "D01AE04",
        "atc_description": "undecylenic acid"
    },
    {
        "atc_level": "D01AE05",
        "atc_description": "polynoxylin"
    },
    {
        "atc_level": "D01AE06",
        "atc_description": "2-(4-chlorphenoxy)-ethanol"
    },
    {
        "atc_level": "D01AE07",
        "atc_description": "chlorphenesin"
    },
    {
        "atc_level": "D01AE08",
        "atc_description": "ticlatone"
    },
    {
        "atc_level": "D01AE09",
        "atc_description": "sulbentine"
    },
    {
        "atc_level": "D01AE10",
        "atc_description": "ethyl hydroxybenzoate"
    },
    {
        "atc_level": "D01AE11",
        "atc_description": "haloprogin"
    },
    {
        "atc_level": "D01AE12",
        "atc_description": "salicylic acid"
    },
    {
        "atc_level": "D01AE13",
        "atc_description": "selenium sulfide"
    },
    {
        "atc_level": "D01AE14",
        "atc_description": "ciclopirox"
    },
    {
        "atc_level": "D01AE15",
        "atc_description": "terbinafine"
    },
    {
        "atc_level": "D01AE16",
        "atc_description": "amorolfine"
    },
    {
        "atc_level": "D01AE17",
        "atc_description": "dimazole"
    },
    {
        "atc_level": "D01AE18",
        "atc_description": "tolnaftate"
    },
    {
        "atc_level": "D01AE19",
        "atc_description": "tolciclate"
    },
    {
        "atc_level": "D01AE20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "D01AE21",
        "atc_description": "flucytosine"
    },
    {
        "atc_level": "D01AE22",
        "atc_description": "naftifine"
    },
    {
        "atc_level": "D01AE23",
        "atc_description": "butenafine"
    },
    {
        "atc_level": "D01AE24",
        "atc_description": "tavaborole"
    },
    {
        "atc_level": "D01AE54",
        "atc_description": "undecylenic acid, combinations"
    },
    {
        "atc_level": "D01B",
        "atc_description": "ANTIFUNGALS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "D01BA",
        "atc_description": "Antifungals for systemic use"
    },
    {
        "atc_level": "D01BA01",
        "atc_description": "griseofulvin"
    },
    {
        "atc_level": "D01BA02",
        "atc_description": "terbinafine"
    },
    {
        "atc_level": "D01BA03",
        "atc_description": "fosravuconazole"
    },
    {
        "atc_level": "D02",
        "atc_description": "EMOLLIENTS AND PROTECTIVES"
    },
    {
        "atc_level": "D02A",
        "atc_description": "EMOLLIENTS AND PROTECTIVES"
    },
    {
        "atc_level": "D02AA",
        "atc_description": "Silicone products"
    },
    {
        "atc_level": "D02AB",
        "atc_description": "Zinc products"
    },
    {
        "atc_level": "D02AC",
        "atc_description": "Soft paraffin and fat products"
    },
    {
        "atc_level": "D02AD",
        "atc_description": "Liquid plasters"
    },
    {
        "atc_level": "D02AE",
        "atc_description": "Carbamide products"
    },
    {
        "atc_level": "D02AE01",
        "atc_description": "carbamide"
    },
    {
        "atc_level": "D02AE51",
        "atc_description": "carbamide, combinations"
    },
    {
        "atc_level": "D02AF",
        "atc_description": "Salicylic acid preparations"
    },
    {
        "atc_level": "D02AX",
        "atc_description": "Other emollients and protectives"
    },
    {
        "atc_level": "D02B",
        "atc_description": "PROTECTIVES AGAINST UV-RADIATION"
    },
    {
        "atc_level": "D02BA",
        "atc_description": "Protectives against UV-radiation for topical use"
    },
    {
        "atc_level": "D02BA01",
        "atc_description": "aminobenzoic acid"
    },
    {
        "atc_level": "D02BA02",
        "atc_description": "octinoxate"
    },
    {
        "atc_level": "D02BB",
        "atc_description": "Protectives against UV-radiation for systemic use"
    },
    {
        "atc_level": "D02BB01",
        "atc_description": "betacarotene"
    },
    {
        "atc_level": "D02BB02",
        "atc_description": "afamelanotide"
    },
    {
        "atc_level": "D03",
        "atc_description": "PREPARATIONS FOR TREATMENT OF WOUNDS AND ULCERS"
    },
    {
        "atc_level": "D03A",
        "atc_description": "CICATRIZANTS"
    },
    {
        "atc_level": "D03AA",
        "atc_description": "Cod-liver oil ointments"
    },
    {
        "atc_level": "D03AX",
        "atc_description": "Other cicatrizants"
    },
    {
        "atc_level": "D03AX01",
        "atc_description": "cadexomer iodine"
    },
    {
        "atc_level": "D03AX02",
        "atc_description": "dextranomer"
    },
    {
        "atc_level": "D03AX03",
        "atc_description": "dexpanthenol"
    },
    {
        "atc_level": "D03AX04",
        "atc_description": "calcium pantothenate"
    },
    {
        "atc_level": "D03AX05",
        "atc_description": "hyaluronic acid"
    },
    {
        "atc_level": "D03AX06",
        "atc_description": "becaplermin"
    },
    {
        "atc_level": "D03AX07",
        "atc_description": "Glyceryl trinitrate"
    },
    {
        "atc_level": "D03AX08",
        "atc_description": "Isosorbide dinitrate"
    },
    {
        "atc_level": "D03AX09",
        "atc_description": "crilanomer"
    },
    {
        "atc_level": "D03AX10",
        "atc_description": "enoxolone"
    },
    {
        "atc_level": "D03AX11",
        "atc_description": "sodium chlorite"
    },
    {
        "atc_level": "D03AX12",
        "atc_description": "trolamine"
    },
    {
        "atc_level": "D03AX13",
        "atc_description": "Betulae cortex"
    },
    {
        "atc_level": "D03AX14",
        "atc_description": "Centella asiatica herba"
    },
    {
        "atc_level": "D03AX15",
        "atc_description": "trafermin"
    },
    {
        "atc_level": "D03B",
        "atc_description": "ENZYMES"
    },
    {
        "atc_level": "D03BA",
        "atc_description": "Proteolytic enzymes"
    },
    {
        "atc_level": "D03BA01",
        "atc_description": "trypsin"
    },
    {
        "atc_level": "D03BA02",
        "atc_description": "collagenase"
    },
    {
        "atc_level": "D03BA03",
        "atc_description": "bromelains"
    },
    {
        "atc_level": "D03BA52",
        "atc_description": "collagenase, combinations"
    },
    {
        "atc_level": "D04",
        "atc_description": "ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC."
    },
    {
        "atc_level": "D04A",
        "atc_description": "ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC."
    },
    {
        "atc_level": "D04AA",
        "atc_description": "Antihistamines for topical use"
    },
    {
        "atc_level": "D04AA01",
        "atc_description": "thonzylamine"
    },
    {
        "atc_level": "D04AA02",
        "atc_description": "mepyramine"
    },
    {
        "atc_level": "D04AA03",
        "atc_description": "thenalidine"
    },
    {
        "atc_level": "D04AA04",
        "atc_description": "tripelennamine"
    },
    {
        "atc_level": "D04AA09",
        "atc_description": "chloropyramine"
    },
    {
        "atc_level": "D04AA10",
        "atc_description": "promethazine"
    },
    {
        "atc_level": "D04AA11",
        "atc_description": "Tolpropamine"
    },
    {
        "atc_level": "D04AA12",
        "atc_description": "tolpropamine"
    },
    {
        "atc_level": "D04AA13",
        "atc_description": "dimetindene"
    },
    {
        "atc_level": "D04AA14",
        "atc_description": "clemastine"
    },
    {
        "atc_level": "D04AA15",
        "atc_description": "bamipine"
    },
    {
        "atc_level": "D04AA16",
        "atc_description": "pheniramine"
    },
    {
        "atc_level": "D04AA22",
        "atc_description": "isothipendyl"
    },
    {
        "atc_level": "D04AA32",
        "atc_description": "diphenhydramine"
    },
    {
        "atc_level": "D04AA33",
        "atc_description": "diphenhydramine methylbromide"
    },
    {
        "atc_level": "D04AA34",
        "atc_description": "chlorphenoxamine"
    },
    {
        "atc_level": "D04AB",
        "atc_description": "Anesthetics for topical use"
    },
    {
        "atc_level": "D04AB01",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "D04AB02",
        "atc_description": "cinchocaine"
    },
    {
        "atc_level": "D04AB03",
        "atc_description": "oxybuprocaine"
    },
    {
        "atc_level": "D04AB04",
        "atc_description": "benzocaine"
    },
    {
        "atc_level": "D04AB05",
        "atc_description": "quinisocaine"
    },
    {
        "atc_level": "D04AB06",
        "atc_description": "tetracaine"
    },
    {
        "atc_level": "D04AB07",
        "atc_description": "pramocaine"
    },
    {
        "atc_level": "D04AX",
        "atc_description": "Other antipruritics"
    },
    {
        "atc_level": "D04AX01",
        "atc_description": "doxepin"
    },
    {
        "atc_level": "D05",
        "atc_description": "ANTIPSORIATICS"
    },
    {
        "atc_level": "D05A",
        "atc_description": "ANTIPSORIATICS FOR TOPICAL USE"
    },
    {
        "atc_level": "D05AA",
        "atc_description": "Tars"
    },
    {
        "atc_level": "D05AC",
        "atc_description": "Antracen derivatives"
    },
    {
        "atc_level": "D05AC01",
        "atc_description": "dithranol"
    },
    {
        "atc_level": "D05AC51",
        "atc_description": "dithranol, combinations"
    },
    {
        "atc_level": "D05AD",
        "atc_description": "Psoralens for topical use"
    },
    {
        "atc_level": "D05AD01",
        "atc_description": "trioxysalen"
    },
    {
        "atc_level": "D05AD02",
        "atc_description": "methoxsalen"
    },
    {
        "atc_level": "D05AX",
        "atc_description": "Other antipsoriatics for topical use"
    },
    {
        "atc_level": "D05AX01",
        "atc_description": "fumaric acid"
    },
    {
        "atc_level": "D05AX02",
        "atc_description": "calcipotriol"
    },
    {
        "atc_level": "D05AX03",
        "atc_description": "calcitriol"
    },
    {
        "atc_level": "D05AX04",
        "atc_description": "tacalcitol"
    },
    {
        "atc_level": "D05AX05",
        "atc_description": "tazarotene"
    },
    {
        "atc_level": "D05AX52",
        "atc_description": "calcipotriol, combinations"
    },
    {
        "atc_level": "D05AX55",
        "atc_description": "tazarotene and ulobetasol"
    },
    {
        "atc_level": "D05B",
        "atc_description": "ANTIPSORIATICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "D05BA",
        "atc_description": "Psoralens for systemic use"
    },
    {
        "atc_level": "D05BA01",
        "atc_description": "trioxysalen"
    },
    {
        "atc_level": "D05BA02",
        "atc_description": "methoxsalen"
    },
    {
        "atc_level": "D05BA03",
        "atc_description": "bergapten"
    },
    {
        "atc_level": "D05BB",
        "atc_description": "Retinoids for treatment of psoriasis"
    },
    {
        "atc_level": "D05BB01",
        "atc_description": "etretinate"
    },
    {
        "atc_level": "D05BB02",
        "atc_description": "acitretin"
    },
    {
        "atc_level": "D05BX",
        "atc_description": "Other antipsoriatics for systemic use"
    },
    {
        "atc_level": "D05BX51",
        "atc_description": "fumaric acid derivatives, combinations"
    },
    {
        "atc_level": "D06",
        "atc_description": "ANTIBIOTICS AND CHEMOTHERAPEUTICS FOR DERMATOLOGICAL USE"
    },
    {
        "atc_level": "D06A",
        "atc_description": "ANTIBIOTICS FOR TOPICAL USE"
    },
    {
        "atc_level": "D06AA",
        "atc_description": "Tetracycline and derivatives"
    },
    {
        "atc_level": "D06AA01",
        "atc_description": "demeclocycline"
    },
    {
        "atc_level": "D06AA02",
        "atc_description": "chlortetracycline"
    },
    {
        "atc_level": "D06AA03",
        "atc_description": "oxytetracycline"
    },
    {
        "atc_level": "D06AA04",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "D06AX",
        "atc_description": "Other antibiotics for topical use"
    },
    {
        "atc_level": "D06AX01",
        "atc_description": "fusidic acid"
    },
    {
        "atc_level": "D06AX02",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "D06AX04",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "D06AX05",
        "atc_description": "bacitracin"
    },
    {
        "atc_level": "D06AX07",
        "atc_description": "gentamicin"
    },
    {
        "atc_level": "D06AX08",
        "atc_description": "tyrothricin"
    },
    {
        "atc_level": "D06AX09",
        "atc_description": "mupirocin"
    },
    {
        "atc_level": "D06AX10",
        "atc_description": "virginiamycin"
    },
    {
        "atc_level": "D06AX11",
        "atc_description": "rifaximin"
    },
    {
        "atc_level": "D06AX12",
        "atc_description": "amikacin"
    },
    {
        "atc_level": "D06AX13",
        "atc_description": "retapamulin"
    },
    {
        "atc_level": "D06AX14",
        "atc_description": "ozenoxacin"
    },
    {
        "atc_level": "D06AX15",
        "atc_description": "rifamycin"
    },
    {
        "atc_level": "D06B",
        "atc_description": "CHEMOTHERAPEUTICS FOR TOPICAL USE"
    },
    {
        "atc_level": "D06BA",
        "atc_description": "Sulfonamides"
    },
    {
        "atc_level": "D06BA01",
        "atc_description": "silver sulfadiazine"
    },
    {
        "atc_level": "D06BA02",
        "atc_description": "sulfathiazole"
    },
    {
        "atc_level": "D06BA03",
        "atc_description": "mafenide"
    },
    {
        "atc_level": "D06BA04",
        "atc_description": "sulfamethizole"
    },
    {
        "atc_level": "D06BA05",
        "atc_description": "sulfanilamide"
    },
    {
        "atc_level": "D06BA06",
        "atc_description": "sulfamerazine"
    },
    {
        "atc_level": "D06BA51",
        "atc_description": "silver sulfadiazine, combinations"
    },
    {
        "atc_level": "D06BB",
        "atc_description": "Antivirals"
    },
    {
        "atc_level": "D06BB01",
        "atc_description": "idoxuridine"
    },
    {
        "atc_level": "D06BB02",
        "atc_description": "tromantadine"
    },
    {
        "atc_level": "D06BB03",
        "atc_description": "aciclovir"
    },
    {
        "atc_level": "D06BB04",
        "atc_description": "podophyllotoxin"
    },
    {
        "atc_level": "D06BB05",
        "atc_description": "inosine"
    },
    {
        "atc_level": "D06BB06",
        "atc_description": "penciclovir"
    },
    {
        "atc_level": "D06BB07",
        "atc_description": "lysozyme"
    },
    {
        "atc_level": "D06BB08",
        "atc_description": "ibacitabine"
    },
    {
        "atc_level": "D06BB09",
        "atc_description": "edoxudine"
    },
    {
        "atc_level": "D06BB10",
        "atc_description": "imiquimod"
    },
    {
        "atc_level": "D06BB11",
        "atc_description": "docosanol"
    },
    {
        "atc_level": "D06BB12",
        "atc_description": "sinecatechins"
    },
    {
        "atc_level": "D06BB53",
        "atc_description": "aciclovir, combinations"
    },
    {
        "atc_level": "D06BX",
        "atc_description": "Other chemotherapeutics"
    },
    {
        "atc_level": "D06BX01",
        "atc_description": "metronidazole"
    },
    {
        "atc_level": "D06BX02",
        "atc_description": "ingenol mebutate"
    },
    {
        "atc_level": "D06BX03",
        "atc_description": "tirbanibulin"
    },
    {
        "atc_level": "D06C",
        "atc_description": "ANTIBIOTICS AND CHEMOTHERAPEUTICS, COMBINATIONS"
    },
    {
        "atc_level": "D07",
        "atc_description": "CORTICOSTEROIDS, DERMATOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "D07A",
        "atc_description": "CORTICOSTEROIDS, PLAIN"
    },
    {
        "atc_level": "D07AA",
        "atc_description": "Corticosteroids, weak (group I)"
    },
    {
        "atc_level": "D07AA01",
        "atc_description": "methylprednisolone"
    },
    {
        "atc_level": "D07AA02",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "D07AA03",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "D07AB",
        "atc_description": "Corticosteroids, moderately potent (group II)"
    },
    {
        "atc_level": "D07AB01",
        "atc_description": "clobetasone"
    },
    {
        "atc_level": "D07AB02",
        "atc_description": "hydrocortisone butyrate"
    },
    {
        "atc_level": "D07AB03",
        "atc_description": "flumetasone"
    },
    {
        "atc_level": "D07AB04",
        "atc_description": "fluocortin"
    },
    {
        "atc_level": "D07AB05",
        "atc_description": "fluperolone"
    },
    {
        "atc_level": "D07AB06",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "D07AB07",
        "atc_description": "fluprednidene"
    },
    {
        "atc_level": "D07AB08",
        "atc_description": "desonide"
    },
    {
        "atc_level": "D07AB09",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "D07AB10",
        "atc_description": "alclometasone"
    },
    {
        "atc_level": "D07AB11",
        "atc_description": "hydrocortisone buteprate"
    },
    {
        "atc_level": "D07AB19",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "D07AB21",
        "atc_description": "clocortolone"
    },
    {
        "atc_level": "D07AB30",
        "atc_description": "combinations of corticosteroids"
    },
    {
        "atc_level": "D07AC",
        "atc_description": "Corticosteroids, potent (group III)"
    },
    {
        "atc_level": "D07AC01",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "D07AC02",
        "atc_description": "fluclorolone"
    },
    {
        "atc_level": "D07AC03",
        "atc_description": "desoximetasone"
    },
    {
        "atc_level": "D07AC04",
        "atc_description": "fluocinolone acetonide"
    },
    {
        "atc_level": "D07AC05",
        "atc_description": "fluocortolone"
    },
    {
        "atc_level": "D07AC06",
        "atc_description": "diflucortolone"
    },
    {
        "atc_level": "D07AC07",
        "atc_description": "fludroxycortide"
    },
    {
        "atc_level": "D07AC08",
        "atc_description": "fluocinonide"
    },
    {
        "atc_level": "D07AC09",
        "atc_description": "budesonide"
    },
    {
        "atc_level": "D07AC10",
        "atc_description": "diflorasone"
    },
    {
        "atc_level": "D07AC11",
        "atc_description": "amcinonide"
    },
    {
        "atc_level": "D07AC12",
        "atc_description": "halometasone"
    },
    {
        "atc_level": "D07AC13",
        "atc_description": "mometasone"
    },
    {
        "atc_level": "D07AC14",
        "atc_description": "methylprednisolone aceponate"
    },
    {
        "atc_level": "D07AC15",
        "atc_description": "beclometasone"
    },
    {
        "atc_level": "D07AC16",
        "atc_description": "hydrocortisone aceponate"
    },
    {
        "atc_level": "D07AC17",
        "atc_description": "fluticasone"
    },
    {
        "atc_level": "D07AC18",
        "atc_description": "prednicarbate"
    },
    {
        "atc_level": "D07AC19",
        "atc_description": "difluprednate"
    },
    {
        "atc_level": "D07AC21",
        "atc_description": "ulobetasol"
    },
    {
        "atc_level": "D07AD",
        "atc_description": "Corticosteroids, very potent (group IV)"
    },
    {
        "atc_level": "D07AD01",
        "atc_description": "clobetasol"
    },
    {
        "atc_level": "D07AD02",
        "atc_description": "halcinonide"
    },
    {
        "atc_level": "D07B",
        "atc_description": "CORTICOSTEROIDS, COMBINATIONS WITH ANTISEPTICS"
    },
    {
        "atc_level": "D07BA",
        "atc_description": "Corticosteroids, weak, combinations with antiseptics"
    },
    {
        "atc_level": "D07BA01",
        "atc_description": "prednisolone and antiseptics"
    },
    {
        "atc_level": "D07BA04",
        "atc_description": "hydrocortisone and antiseptics"
    },
    {
        "atc_level": "D07BB",
        "atc_description": "Corticosteroids, moderately potent, combinations with antiseptics"
    },
    {
        "atc_level": "D07BB01",
        "atc_description": "flumetasone and antiseptics"
    },
    {
        "atc_level": "D07BB02",
        "atc_description": "desonide and antiseptics"
    },
    {
        "atc_level": "D07BB03",
        "atc_description": "triamcinolone and antiseptics"
    },
    {
        "atc_level": "D07BB04",
        "atc_description": "hydrocortisone butyrate and antiseptics"
    },
    {
        "atc_level": "D07BC",
        "atc_description": "Corticosteroids, potent, combinations with antiseptics"
    },
    {
        "atc_level": "D07BC01",
        "atc_description": "betamethasone and antiseptics"
    },
    {
        "atc_level": "D07BC02",
        "atc_description": "fluocinolone acetonide and antiseptics"
    },
    {
        "atc_level": "D07BC03",
        "atc_description": "fluocortolone and antiseptics"
    },
    {
        "atc_level": "D07BC04",
        "atc_description": "diflucortolone and antiseptics"
    },
    {
        "atc_level": "D07BD",
        "atc_description": "Corticosteroids, very potent, combinations with antiseptics"
    },
    {
        "atc_level": "D07C",
        "atc_description": "CORTICOSTEROIDS, COMBINATIONS WITH ANTIBIOTICS"
    },
    {
        "atc_level": "D07CA",
        "atc_description": "Corticosteroids, weak, combinations with antibiotics"
    },
    {
        "atc_level": "D07CA01",
        "atc_description": "hydrocortisone and antibiotics"
    },
    {
        "atc_level": "D07CA02",
        "atc_description": "methylprednisolone and antibiotics"
    },
    {
        "atc_level": "D07CA03",
        "atc_description": "prednisolone and antibiotics"
    },
    {
        "atc_level": "D07CB",
        "atc_description": "Corticosteroids, moderately potent, combinations with antibiotics"
    },
    {
        "atc_level": "D07CB01",
        "atc_description": "triamcinolone and antibiotics"
    },
    {
        "atc_level": "D07CB02",
        "atc_description": "fluprednidene and antibiotics"
    },
    {
        "atc_level": "D07CB03",
        "atc_description": "fluorometholone and antibiotics"
    },
    {
        "atc_level": "D07CB04",
        "atc_description": "dexamethasone and antibiotics"
    },
    {
        "atc_level": "D07CB05",
        "atc_description": "flumetasone and antibiotics"
    },
    {
        "atc_level": "D07CC",
        "atc_description": "Corticosteroids, potent, combinations with antibiotics"
    },
    {
        "atc_level": "D07CC01",
        "atc_description": "betamethasone and antibiotics"
    },
    {
        "atc_level": "D07CC02",
        "atc_description": "fluocinolone acetonide and antibiotics"
    },
    {
        "atc_level": "D07CC03",
        "atc_description": "fludroxycortide and antibiotics"
    },
    {
        "atc_level": "D07CC04",
        "atc_description": "beclometasone and antibiotics"
    },
    {
        "atc_level": "D07CC05",
        "atc_description": "fluocinonide and antibiotics"
    },
    {
        "atc_level": "D07CC06",
        "atc_description": "fluocortolone and antibiotics"
    },
    {
        "atc_level": "D07CD",
        "atc_description": "Corticosteroids, very potent, combinations with antibiotics"
    },
    {
        "atc_level": "D07CD01",
        "atc_description": "clobetasol and antibiotics"
    },
    {
        "atc_level": "D07X",
        "atc_description": "CORTICOSTEROIDS, OTHER COMBINATIONS"
    },
    {
        "atc_level": "D07XA",
        "atc_description": "Corticosteroids, weak, other combinations"
    },
    {
        "atc_level": "D07XA01",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "D07XA02",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "D07XB",
        "atc_description": "Corticosteroids, moderately potent, other combinations"
    },
    {
        "atc_level": "D07XB01",
        "atc_description": "flumetasone"
    },
    {
        "atc_level": "D07XB02",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "D07XB03",
        "atc_description": "fluprednidene"
    },
    {
        "atc_level": "D07XB04",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "D07XB05",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "D07XB30",
        "atc_description": "combinations of corticosteroids"
    },
    {
        "atc_level": "D07XC",
        "atc_description": "Corticosteroids, potent, other combinations"
    },
    {
        "atc_level": "D07XC01",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "D07XC02",
        "atc_description": "desoximetasone"
    },
    {
        "atc_level": "D07XC03",
        "atc_description": "mometasone"
    },
    {
        "atc_level": "D07XC04",
        "atc_description": "diflucortolone"
    },
    {
        "atc_level": "D07XC05",
        "atc_description": "fluocortolone"
    },
    {
        "atc_level": "D07XD",
        "atc_description": "Corticosteroids, very potent, other combinations"
    },
    {
        "atc_level": "D08",
        "atc_description": "ANTISEPTICS AND DISINFECTANTS"
    },
    {
        "atc_level": "D08A",
        "atc_description": "ANTISEPTICS AND DISINFECTANTS"
    },
    {
        "atc_level": "D08AA",
        "atc_description": "Acridine derivatives"
    },
    {
        "atc_level": "D08AA01",
        "atc_description": "ethacridine lactate"
    },
    {
        "atc_level": "D08AA02",
        "atc_description": "aminoacridine"
    },
    {
        "atc_level": "D08AA03",
        "atc_description": "euflavine"
    },
    {
        "atc_level": "D08AB",
        "atc_description": "Aluminium agents"
    },
    {
        "atc_level": "D08AC",
        "atc_description": "Biguanides and amidines"
    },
    {
        "atc_level": "D08AC01",
        "atc_description": "dibrompropamidine"
    },
    {
        "atc_level": "D08AC02",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "D08AC03",
        "atc_description": "propamidine"
    },
    {
        "atc_level": "D08AC04",
        "atc_description": "hexamidine"
    },
    {
        "atc_level": "D08AC05",
        "atc_description": "polihexanide"
    },
    {
        "atc_level": "D08AC52",
        "atc_description": "chlorhexidine, combinations"
    },
    {
        "atc_level": "D08AD",
        "atc_description": "Boric acid products"
    },
    {
        "atc_level": "D08AE",
        "atc_description": "Phenol and derivatives"
    },
    {
        "atc_level": "D08AE01",
        "atc_description": "hexachlorophene"
    },
    {
        "atc_level": "D08AE02",
        "atc_description": "policresulen"
    },
    {
        "atc_level": "D08AE03",
        "atc_description": "phenol"
    },
    {
        "atc_level": "D08AE04",
        "atc_description": "triclosan"
    },
    {
        "atc_level": "D08AE05",
        "atc_description": "chloroxylenol"
    },
    {
        "atc_level": "D08AE06",
        "atc_description": "biphenylol"
    },
    {
        "atc_level": "D08AF",
        "atc_description": "Nitrofuran derivatives"
    },
    {
        "atc_level": "D08AF01",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "D08AG",
        "atc_description": "Iodine products"
    },
    {
        "atc_level": "D08AG01",
        "atc_description": "iodine/octylphenoxypolyglycolether"
    },
    {
        "atc_level": "D08AG02",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "D08AG03",
        "atc_description": "iodine"
    },
    {
        "atc_level": "D08AG04",
        "atc_description": "diiodohydroxypropane"
    },
    {
        "atc_level": "D08AG05",
        "atc_description": "Cadexomer iodine"
    },
    {
        "atc_level": "D08AH",
        "atc_description": "Quinoline derivatives"
    },
    {
        "atc_level": "D08AH01",
        "atc_description": "dequalinium"
    },
    {
        "atc_level": "D08AH02",
        "atc_description": "chlorquinaldol"
    },
    {
        "atc_level": "D08AH03",
        "atc_description": "oxyquinoline"
    },
    {
        "atc_level": "D08AH30",
        "atc_description": "clioquinol"
    },
    {
        "atc_level": "D08AJ",
        "atc_description": "Quaternary ammonium compounds"
    },
    {
        "atc_level": "D08AJ01",
        "atc_description": "benzalkonium"
    },
    {
        "atc_level": "D08AJ02",
        "atc_description": "cetrimonium"
    },
    {
        "atc_level": "D08AJ03",
        "atc_description": "cetylpyridinium"
    },
    {
        "atc_level": "D08AJ04",
        "atc_description": "cetrimide"
    },
    {
        "atc_level": "D08AJ05",
        "atc_description": "benzoxonium chloride"
    },
    {
        "atc_level": "D08AJ06",
        "atc_description": "didecyldimethylammonium chloride"
    },
    {
        "atc_level": "D08AJ08",
        "atc_description": "benzethonium chloride"
    },
    {
        "atc_level": "D08AJ10",
        "atc_description": "decamethoxine"
    },
    {
        "atc_level": "D08AJ57",
        "atc_description": "octenidine, combinations"
    },
    {
        "atc_level": "D08AJ58",
        "atc_description": "benzethonium chloride, combinations"
    },
    {
        "atc_level": "D08AJ59",
        "atc_description": "dodeclonium bromide, combinations"
    },
    {
        "atc_level": "D08AK",
        "atc_description": "Mercurial products"
    },
    {
        "atc_level": "D08AK01",
        "atc_description": "mercuric amidochloride"
    },
    {
        "atc_level": "D08AK02",
        "atc_description": "phenylmercuric borate"
    },
    {
        "atc_level": "D08AK03",
        "atc_description": "mercuric chloride"
    },
    {
        "atc_level": "D08AK04",
        "atc_description": "merbromin"
    },
    {
        "atc_level": "D08AK05",
        "atc_description": "mercury, metallic"
    },
    {
        "atc_level": "D08AK06",
        "atc_description": "thiomersal"
    },
    {
        "atc_level": "D08AK30",
        "atc_description": "mercuric iodide"
    },
    {
        "atc_level": "D08AL",
        "atc_description": "Silver compounds"
    },
    {
        "atc_level": "D08AL01",
        "atc_description": "silver nitrate"
    },
    {
        "atc_level": "D08AL30",
        "atc_description": "silver"
    },
    {
        "atc_level": "D08AX",
        "atc_description": "Other antiseptics and disinfectants"
    },
    {
        "atc_level": "D08AX01",
        "atc_description": "hydrogen peroxide"
    },
    {
        "atc_level": "D08AX02",
        "atc_description": "eosin"
    },
    {
        "atc_level": "D08AX03",
        "atc_description": "propanol"
    },
    {
        "atc_level": "D08AX04",
        "atc_description": "tosylchloramide sodium"
    },
    {
        "atc_level": "D08AX05",
        "atc_description": "isopropanol"
    },
    {
        "atc_level": "D08AX06",
        "atc_description": "potassium permanganate"
    },
    {
        "atc_level": "D08AX07",
        "atc_description": "sodium hypochlorite"
    },
    {
        "atc_level": "D08AX08",
        "atc_description": "ethanol"
    },
    {
        "atc_level": "D08AX53",
        "atc_description": "propanol, combinations"
    },
    {
        "atc_level": "D09",
        "atc_description": "MEDICATED DRESSINGS"
    },
    {
        "atc_level": "D09A",
        "atc_description": "MEDICATED DRESSINGS"
    },
    {
        "atc_level": "D09AA",
        "atc_description": "Medicated dressings with antiinfectives"
    },
    {
        "atc_level": "D09AA01",
        "atc_description": "framycetin"
    },
    {
        "atc_level": "D09AA02",
        "atc_description": "fusidic acid"
    },
    {
        "atc_level": "D09AA03",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "D09AA04",
        "atc_description": "phenylmercuric nitrate"
    },
    {
        "atc_level": "D09AA05",
        "atc_description": "benzododecinium"
    },
    {
        "atc_level": "D09AA06",
        "atc_description": "triclosan"
    },
    {
        "atc_level": "D09AA07",
        "atc_description": "cetylpyridinium"
    },
    {
        "atc_level": "D09AA08",
        "atc_description": "aluminium chlorohydrate"
    },
    {
        "atc_level": "D09AA09",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "D09AA10",
        "atc_description": "clioquinol"
    },
    {
        "atc_level": "D09AA11",
        "atc_description": "benzalkonium"
    },
    {
        "atc_level": "D09AA12",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "D09AA13",
        "atc_description": "iodoform"
    },
    {
        "atc_level": "D09AB",
        "atc_description": "Zinc bandages"
    },
    {
        "atc_level": "D09AB01",
        "atc_description": "zinc bandage without supplements"
    },
    {
        "atc_level": "D09AB02",
        "atc_description": "zinc bandage with supplements"
    },
    {
        "atc_level": "D09AX",
        "atc_description": "Soft paraffin dressings"
    },
    {
        "atc_level": "D10",
        "atc_description": "ANTI-ACNE PREPARATIONS"
    },
    {
        "atc_level": "D10A",
        "atc_description": "ANTI-ACNE PREPARATIONS FOR TOPICAL USE"
    },
    {
        "atc_level": "D10AA",
        "atc_description": "Corticosteroids, combinations for treatment of acne"
    },
    {
        "atc_level": "D10AA01",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "D10AA02",
        "atc_description": "methylprednisolone"
    },
    {
        "atc_level": "D10AA03",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "D10AB",
        "atc_description": "Preparations containing sulfur"
    },
    {
        "atc_level": "D10AB01",
        "atc_description": "bithionol"
    },
    {
        "atc_level": "D10AB02",
        "atc_description": "sulfur"
    },
    {
        "atc_level": "D10AB03",
        "atc_description": "tioxolone"
    },
    {
        "atc_level": "D10AB05",
        "atc_description": "mesulfen"
    },
    {
        "atc_level": "D10AD",
        "atc_description": "Retinoids for topical use in acne"
    },
    {
        "atc_level": "D10AD01",
        "atc_description": "tretinoin"
    },
    {
        "atc_level": "D10AD02",
        "atc_description": "retinol"
    },
    {
        "atc_level": "D10AD03",
        "atc_description": "adapalene"
    },
    {
        "atc_level": "D10AD04",
        "atc_description": "isotretinoin"
    },
    {
        "atc_level": "D10AD05",
        "atc_description": "motretinide"
    },
    {
        "atc_level": "D10AD06",
        "atc_description": "trifarotene"
    },
    {
        "atc_level": "D10AD51",
        "atc_description": "tretinoin, combinations"
    },
    {
        "atc_level": "D10AD53",
        "atc_description": "adapalene, combinations"
    },
    {
        "atc_level": "D10AD54",
        "atc_description": "isotretinoin, combinations"
    },
    {
        "atc_level": "D10AE",
        "atc_description": "Peroxides"
    },
    {
        "atc_level": "D10AE01",
        "atc_description": "benzoyl peroxide"
    },
    {
        "atc_level": "D10AE51",
        "atc_description": "benzoyl peroxide, combinations"
    },
    {
        "atc_level": "D10AF",
        "atc_description": "Antiinfectives for treatment of acne"
    },
    {
        "atc_level": "D10AF01",
        "atc_description": "clindamycin"
    },
    {
        "atc_level": "D10AF02",
        "atc_description": "erythromycin"
    },
    {
        "atc_level": "D10AF03",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "D10AF04",
        "atc_description": "meclocycline"
    },
    {
        "atc_level": "D10AF05",
        "atc_description": "nadifloxacin"
    },
    {
        "atc_level": "D10AF06",
        "atc_description": "sulfacetamide"
    },
    {
        "atc_level": "D10AF07",
        "atc_description": "minocycline"
    },
    {
        "atc_level": "D10AF51",
        "atc_description": "clindamycin, combinations"
    },
    {
        "atc_level": "D10AF52",
        "atc_description": "erythromycin, combinations"
    },
    {
        "atc_level": "D10AX",
        "atc_description": "Other anti-acne preparations for topical use"
    },
    {
        "atc_level": "D10AX01",
        "atc_description": "aluminium chloride"
    },
    {
        "atc_level": "D10AX02",
        "atc_description": "resorcinol"
    },
    {
        "atc_level": "D10AX03",
        "atc_description": "azelaic acid"
    },
    {
        "atc_level": "D10AX04",
        "atc_description": "aluminium oxide"
    },
    {
        "atc_level": "D10AX05",
        "atc_description": "dapsone"
    },
    {
        "atc_level": "D10AX06",
        "atc_description": "clascoterone"
    },
    {
        "atc_level": "D10AX30",
        "atc_description": "various combinations"
    },
    {
        "atc_level": "D10B",
        "atc_description": "ANTI-ACNE PREPARATIONS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "D10BA",
        "atc_description": "Retinoids for treatment of acne"
    },
    {
        "atc_level": "D10BA01",
        "atc_description": "isotretinoin"
    },
    {
        "atc_level": "D10BX",
        "atc_description": "Other anti-acne preparations for systemic use"
    },
    {
        "atc_level": "D10BX01",
        "atc_description": "ichtasol"
    },
    {
        "atc_level": "D11",
        "atc_description": "OTHER DERMATOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "D11A",
        "atc_description": "OTHER DERMATOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "D11AA",
        "atc_description": "Antihidrotics"
    },
    {
        "atc_level": "D11AA01",
        "atc_description": "glycopyrronium"
    },
    {
        "atc_level": "D11AC",
        "atc_description": "Medicated shampoos"
    },
    {
        "atc_level": "D11AC01",
        "atc_description": "cetrimide"
    },
    {
        "atc_level": "D11AC02",
        "atc_description": "cadmium compounds"
    },
    {
        "atc_level": "D11AC03",
        "atc_description": "selenium compounds"
    },
    {
        "atc_level": "D11AC06",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "D11AC08",
        "atc_description": "sulfur compounds"
    },
    {
        "atc_level": "D11AC09",
        "atc_description": "xenysalate"
    },
    {
        "atc_level": "D11AC30",
        "atc_description": "others"
    },
    {
        "atc_level": "D11AE",
        "atc_description": "Androgens for topical use"
    },
    {
        "atc_level": "D11AE01",
        "atc_description": "metandienone"
    },
    {
        "atc_level": "D11AF",
        "atc_description": "Wart and anti-corn preparations"
    },
    {
        "atc_level": "D11AH",
        "atc_description": "Agents for dermatitis, excluding corticosteroids"
    },
    {
        "atc_level": "D11AH01",
        "atc_description": "tacrolimus"
    },
    {
        "atc_level": "D11AH02",
        "atc_description": "pimecrolimus"
    },
    {
        "atc_level": "D11AH03",
        "atc_description": "cromoglicic acid"
    },
    {
        "atc_level": "D11AH04",
        "atc_description": "alitretinoin"
    },
    {
        "atc_level": "D11AH05",
        "atc_description": "dupilumab"
    },
    {
        "atc_level": "D11AH06",
        "atc_description": "crisaborole"
    },
    {
        "atc_level": "D11AH07",
        "atc_description": "tralokinumab"
    },
    {
        "atc_level": "D11AH08",
        "atc_description": "abrocitinib"
    },
    {
        "atc_level": "D11AX",
        "atc_description": "Other dermatologicals"
    },
    {
        "atc_level": "D11AX01",
        "atc_description": "minoxidil"
    },
    {
        "atc_level": "D11AX02",
        "atc_description": "gamolenic acid"
    },
    {
        "atc_level": "D11AX03",
        "atc_description": "calcium gluconate"
    },
    {
        "atc_level": "D11AX04",
        "atc_description": "lithium succinate"
    },
    {
        "atc_level": "D11AX05",
        "atc_description": "magnesium sulfate"
    },
    {
        "atc_level": "D11AX06",
        "atc_description": "mequinol"
    },
    {
        "atc_level": "D11AX08",
        "atc_description": "tiratricol"
    },
    {
        "atc_level": "D11AX09",
        "atc_description": "oxaceprol"
    },
    {
        "atc_level": "D11AX10",
        "atc_description": "finasteride"
    },
    {
        "atc_level": "D11AX11",
        "atc_description": "hydroquinone"
    },
    {
        "atc_level": "D11AX12",
        "atc_description": "pyrithione zinc"
    },
    {
        "atc_level": "D11AX13",
        "atc_description": "monobenzone"
    },
    {
        "atc_level": "D11AX14",
        "atc_description": "Tacrolimus"
    },
    {
        "atc_level": "D11AX15",
        "atc_description": "Pimecrolimus"
    },
    {
        "atc_level": "D11AX16",
        "atc_description": "eflornithine"
    },
    {
        "atc_level": "D11AX17",
        "atc_description": "Cromoglicic acid"
    },
    {
        "atc_level": "D11AX18",
        "atc_description": "diclofenac"
    },
    {
        "atc_level": "D11AX19",
        "atc_description": "alitretinoin"
    },
    {
        "atc_level": "D11AX21",
        "atc_description": "brimonidine"
    },
    {
        "atc_level": "D11AX22",
        "atc_description": "ivermectin"
    },
    {
        "atc_level": "D11AX23",
        "atc_description": "aminobenzoate potassium"
    },
    {
        "atc_level": "D11AX24",
        "atc_description": "deoxycholic acid"
    },
    {
        "atc_level": "D11AX25",
        "atc_description": "hydrogen peroxide"
    },
    {
        "atc_level": "D11AX26",
        "atc_description": "caffeine"
    },
    {
        "atc_level": "D11AX27",
        "atc_description": "oxymetazoline"
    },
    {
        "atc_level": "D11AX52",
        "atc_description": "gamolenic acid, combinations"
    },
    {
        "atc_level": "D11AX57",
        "atc_description": "collagen, combinations"
    },
    {
        "atc_level": "G",
        "atc_description": "GENITO URINARY SYSTEM AND SEX HORMONES"
    },
    {
        "atc_level": "G00",
        "atc_description": "GENITO URINARY SYSTEM AND SEX HORMONES"
    },
    {
        "atc_level": "G01",
        "atc_description": "GYNECOLOGICAL ANTIINFECTIVES AND ANTISEPTICS"
    },
    {
        "atc_level": "G01A",
        "atc_description": "ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS"
    },
    {
        "atc_level": "G01AA",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "G01AA01",
        "atc_description": "nystatin"
    },
    {
        "atc_level": "G01AA02",
        "atc_description": "natamycin"
    },
    {
        "atc_level": "G01AA03",
        "atc_description": "amphotericin B"
    },
    {
        "atc_level": "G01AA04",
        "atc_description": "candicidin"
    },
    {
        "atc_level": "G01AA05",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "G01AA06",
        "atc_description": "hachimycin"
    },
    {
        "atc_level": "G01AA07",
        "atc_description": "oxytetracycline"
    },
    {
        "atc_level": "G01AA08",
        "atc_description": "carfecillin"
    },
    {
        "atc_level": "G01AA09",
        "atc_description": "mepartricin"
    },
    {
        "atc_level": "G01AA10",
        "atc_description": "clindamycin"
    },
    {
        "atc_level": "G01AA11",
        "atc_description": "pentamycin"
    },
    {
        "atc_level": "G01AA51",
        "atc_description": "nystatin, combinations"
    },
    {
        "atc_level": "G01AB",
        "atc_description": "Arsenic compounds"
    },
    {
        "atc_level": "G01AB01",
        "atc_description": "acetarsol"
    },
    {
        "atc_level": "G01AC",
        "atc_description": "Quinoline derivatives"
    },
    {
        "atc_level": "G01AC01",
        "atc_description": "diiodohydroxyquinoline"
    },
    {
        "atc_level": "G01AC02",
        "atc_description": "clioquinol"
    },
    {
        "atc_level": "G01AC03",
        "atc_description": "chlorquinaldol"
    },
    {
        "atc_level": "G01AC05",
        "atc_description": "dequalinium"
    },
    {
        "atc_level": "G01AC06",
        "atc_description": "broxyquinoline"
    },
    {
        "atc_level": "G01AC30",
        "atc_description": "oxyquinoline"
    },
    {
        "atc_level": "G01AD",
        "atc_description": "Organic acids"
    },
    {
        "atc_level": "G01AD01",
        "atc_description": "lactic acid"
    },
    {
        "atc_level": "G01AD02",
        "atc_description": "acetic acid"
    },
    {
        "atc_level": "G01AD03",
        "atc_description": "ascorbic acid"
    },
    {
        "atc_level": "G01AE",
        "atc_description": "Sulfonamides"
    },
    {
        "atc_level": "G01AE01",
        "atc_description": "sulfatolamide"
    },
    {
        "atc_level": "G01AE10",
        "atc_description": "combinations of sulfonamides"
    },
    {
        "atc_level": "G01AF",
        "atc_description": "Imidazole derivatives"
    },
    {
        "atc_level": "G01AF01",
        "atc_description": "metronidazole"
    },
    {
        "atc_level": "G01AF02",
        "atc_description": "clotrimazole"
    },
    {
        "atc_level": "G01AF03",
        "atc_description": "Tinidazole"
    },
    {
        "atc_level": "G01AF04",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "G01AF05",
        "atc_description": "econazole"
    },
    {
        "atc_level": "G01AF06",
        "atc_description": "ornidazole"
    },
    {
        "atc_level": "G01AF07",
        "atc_description": "isoconazole"
    },
    {
        "atc_level": "G01AF08",
        "atc_description": "tioconazole"
    },
    {
        "atc_level": "G01AF10",
        "atc_description": "Nimorazole"
    },
    {
        "atc_level": "G01AF11",
        "atc_description": "ketoconazole"
    },
    {
        "atc_level": "G01AF12",
        "atc_description": "fenticonazole"
    },
    {
        "atc_level": "G01AF13",
        "atc_description": "azanidazole"
    },
    {
        "atc_level": "G01AF14",
        "atc_description": "propenidazole"
    },
    {
        "atc_level": "G01AF15",
        "atc_description": "butoconazole"
    },
    {
        "atc_level": "G01AF16",
        "atc_description": "omoconazole"
    },
    {
        "atc_level": "G01AF17",
        "atc_description": "oxiconazole"
    },
    {
        "atc_level": "G01AF18",
        "atc_description": "flutrimazole"
    },
    {
        "atc_level": "G01AF19",
        "atc_description": "sertaconazole"
    },
    {
        "atc_level": "G01AF20",
        "atc_description": "combinations of imidazole derivatives"
    },
    {
        "atc_level": "G01AF55",
        "atc_description": "econazole, combinations"
    },
    {
        "atc_level": "G01AG",
        "atc_description": "Triazole derivatives"
    },
    {
        "atc_level": "G01AG01",
        "atc_description": "Fluconazole"
    },
    {
        "atc_level": "G01AG02",
        "atc_description": "terconazole"
    },
    {
        "atc_level": "G01AX",
        "atc_description": "Other antiinfectives and antiseptics"
    },
    {
        "atc_level": "G01AX01",
        "atc_description": "clodantoin"
    },
    {
        "atc_level": "G01AX02",
        "atc_description": "inosine"
    },
    {
        "atc_level": "G01AX03",
        "atc_description": "policresulen"
    },
    {
        "atc_level": "G01AX05",
        "atc_description": "nifuratel"
    },
    {
        "atc_level": "G01AX06",
        "atc_description": "furazolidone"
    },
    {
        "atc_level": "G01AX09",
        "atc_description": "methylrosaniline"
    },
    {
        "atc_level": "G01AX11",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "G01AX12",
        "atc_description": "ciclopirox"
    },
    {
        "atc_level": "G01AX13",
        "atc_description": "protiofate"
    },
    {
        "atc_level": "G01AX14",
        "atc_description": "lactobacillus"
    },
    {
        "atc_level": "G01AX15",
        "atc_description": "copper usnate"
    },
    {
        "atc_level": "G01AX16",
        "atc_description": "hexetidine"
    },
    {
        "atc_level": "G01AX17",
        "atc_description": "dapivirine"
    },
    {
        "atc_level": "G01AX66",
        "atc_description": "octenidine, combinations"
    },
    {
        "atc_level": "G01B",
        "atc_description": "ANTIINFECTIVES/ANTISEPTICS IN COMBINATION WITH CORTICOSTEROIDS"
    },
    {
        "atc_level": "G01BA",
        "atc_description": "Antibiotics and corticosteroids"
    },
    {
        "atc_level": "G01BC",
        "atc_description": "Quinoline derivatives and corticosteroids"
    },
    {
        "atc_level": "G01BD",
        "atc_description": "Antiseptics and corticosteroids"
    },
    {
        "atc_level": "G01BE",
        "atc_description": "Sulfonamides and corticosteroids"
    },
    {
        "atc_level": "G01BF",
        "atc_description": "Imidazole derivatives and corticosteroids"
    },
    {
        "atc_level": "G02",
        "atc_description": "OTHER GYNECOLOGICALS"
    },
    {
        "atc_level": "G02A",
        "atc_description": "UTEROTONICS"
    },
    {
        "atc_level": "G02AB",
        "atc_description": "Ergot alkaloids"
    },
    {
        "atc_level": "G02AB01",
        "atc_description": "methylergometrine"
    },
    {
        "atc_level": "G02AB02",
        "atc_description": "ergot alkaloids"
    },
    {
        "atc_level": "G02AB03",
        "atc_description": "ergometrine"
    },
    {
        "atc_level": "G02AC",
        "atc_description": "Ergot alkaloids and oxytocin incl. analogues, in combination"
    },
    {
        "atc_level": "G02AC01",
        "atc_description": "methylergometrine and oxytocin"
    },
    {
        "atc_level": "G02AD",
        "atc_description": "Prostaglandins"
    },
    {
        "atc_level": "G02AD01",
        "atc_description": "dinoprost"
    },
    {
        "atc_level": "G02AD02",
        "atc_description": "dinoprostone"
    },
    {
        "atc_level": "G02AD03",
        "atc_description": "gemeprost"
    },
    {
        "atc_level": "G02AD04",
        "atc_description": "carboprost"
    },
    {
        "atc_level": "G02AD05",
        "atc_description": "sulprostone"
    },
    {
        "atc_level": "G02AD06",
        "atc_description": "misoprostol"
    },
    {
        "atc_level": "G02AX",
        "atc_description": "Other uterotonics"
    },
    {
        "atc_level": "G02B",
        "atc_description": "CONTRACEPTIVES FOR TOPICAL USE"
    },
    {
        "atc_level": "G02BA",
        "atc_description": "Intrauterine contraceptives"
    },
    {
        "atc_level": "G02BA01",
        "atc_description": "plastic IUD"
    },
    {
        "atc_level": "G02BA02",
        "atc_description": "plastic IUD with copper"
    },
    {
        "atc_level": "G02BA03",
        "atc_description": "plastic IUD with progestogen"
    },
    {
        "atc_level": "G02BB",
        "atc_description": "Intravaginal contraceptives"
    },
    {
        "atc_level": "G02BB01",
        "atc_description": "vaginal ring with progestogen and estrogen"
    },
    {
        "atc_level": "G02BB02",
        "atc_description": "vaginal ring with progestogen"
    },
    {
        "atc_level": "G02C",
        "atc_description": "OTHER GYNECOLOGICALS"
    },
    {
        "atc_level": "G02CA",
        "atc_description": "Sympathomimetics, labour repressants"
    },
    {
        "atc_level": "G02CA01",
        "atc_description": "ritodrine"
    },
    {
        "atc_level": "G02CA02",
        "atc_description": "buphenine"
    },
    {
        "atc_level": "G02CA03",
        "atc_description": "fenoterol"
    },
    {
        "atc_level": "G02CB",
        "atc_description": "Prolactine inhibitors"
    },
    {
        "atc_level": "G02CB01",
        "atc_description": "bromocriptine"
    },
    {
        "atc_level": "G02CB02",
        "atc_description": "lisuride"
    },
    {
        "atc_level": "G02CB03",
        "atc_description": "cabergoline"
    },
    {
        "atc_level": "G02CB04",
        "atc_description": "quinagolide"
    },
    {
        "atc_level": "G02CB05",
        "atc_description": "metergoline"
    },
    {
        "atc_level": "G02CB06",
        "atc_description": "terguride"
    },
    {
        "atc_level": "G02CC",
        "atc_description": "Antiinflammatory products for vaginal administration"
    },
    {
        "atc_level": "G02CC01",
        "atc_description": "ibuprofen"
    },
    {
        "atc_level": "G02CC02",
        "atc_description": "naproxen"
    },
    {
        "atc_level": "G02CC03",
        "atc_description": "benzydamine"
    },
    {
        "atc_level": "G02CC04",
        "atc_description": "flunoxaprofen"
    },
    {
        "atc_level": "G02CX",
        "atc_description": "Other gynecologicals"
    },
    {
        "atc_level": "G02CX01",
        "atc_description": "atosiban"
    },
    {
        "atc_level": "G02CX02",
        "atc_description": "flibanserin"
    },
    {
        "atc_level": "G02CX03",
        "atc_description": "Agni casti fructus"
    },
    {
        "atc_level": "G02CX04",
        "atc_description": "Cimicifugae rhizoma"
    },
    {
        "atc_level": "G02CX05",
        "atc_description": "bremelanotide"
    },
    {
        "atc_level": "G03",
        "atc_description": "SEX HORMONES AND MODULATORS OF THE GENITAL SYSTEM"
    },
    {
        "atc_level": "G03A",
        "atc_description": "HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE"
    },
    {
        "atc_level": "G03AA",
        "atc_description": "Progestogens and estrogens, fixed combinations"
    },
    {
        "atc_level": "G03AA01",
        "atc_description": "etynodiol and ethinylestradiol"
    },
    {
        "atc_level": "G03AA02",
        "atc_description": "quingestanol and ethinylestradiol"
    },
    {
        "atc_level": "G03AA03",
        "atc_description": "lynestrenol and ethinylestradiol"
    },
    {
        "atc_level": "G03AA04",
        "atc_description": "megestrol and ethinylestradiol"
    },
    {
        "atc_level": "G03AA05",
        "atc_description": "norethisterone and ethinylestradiol"
    },
    {
        "atc_level": "G03AA06",
        "atc_description": "norgestrel and ethinylestradiol"
    },
    {
        "atc_level": "G03AA07",
        "atc_description": "levonorgestrel and ethinylestradiol"
    },
    {
        "atc_level": "G03AA08",
        "atc_description": "medroxyprogesterone and ethinylestradiol"
    },
    {
        "atc_level": "G03AA09",
        "atc_description": "desogestrel and ethinylestradiol"
    },
    {
        "atc_level": "G03AA10",
        "atc_description": "gestodene and ethinylestradiol"
    },
    {
        "atc_level": "G03AA11",
        "atc_description": "norgestimate and ethinylestradiol"
    },
    {
        "atc_level": "G03AA12",
        "atc_description": "drospirenone and ethinylestradiol"
    },
    {
        "atc_level": "G03AA13",
        "atc_description": "norelgestromin and ethinylestradiol"
    },
    {
        "atc_level": "G03AA14",
        "atc_description": "nomegestrol and estradiol"
    },
    {
        "atc_level": "G03AA15",
        "atc_description": "chlormadinone and ethinylestradiol"
    },
    {
        "atc_level": "G03AA16",
        "atc_description": "dienogest and ethinylestradiol"
    },
    {
        "atc_level": "G03AA17",
        "atc_description": "medroxyprogesterone and estradiol"
    },
    {
        "atc_level": "G03AA18",
        "atc_description": "drospirenone and estetrol"
    },
    {
        "atc_level": "G03AB",
        "atc_description": "Progestogens and estrogens, sequential preparations"
    },
    {
        "atc_level": "G03AB01",
        "atc_description": "megestrol and ethinylestradiol"
    },
    {
        "atc_level": "G03AB02",
        "atc_description": "lynestrenol and ethinylestradiol"
    },
    {
        "atc_level": "G03AB03",
        "atc_description": "levonorgestrel and ethinylestradiol"
    },
    {
        "atc_level": "G03AB04",
        "atc_description": "norethisterone and ethinylestradiol"
    },
    {
        "atc_level": "G03AB05",
        "atc_description": "desogestrel and ethinylestradiol"
    },
    {
        "atc_level": "G03AB06",
        "atc_description": "gestodene and ethinylestradiol"
    },
    {
        "atc_level": "G03AB07",
        "atc_description": "chlormadinone and ethinylestradiol"
    },
    {
        "atc_level": "G03AB08",
        "atc_description": "dienogest and estradiol"
    },
    {
        "atc_level": "G03AB09",
        "atc_description": "norgestimate and ethinylestradiol"
    },
    {
        "atc_level": "G03AC",
        "atc_description": "Progestogens"
    },
    {
        "atc_level": "G03AC01",
        "atc_description": "norethisterone"
    },
    {
        "atc_level": "G03AC02",
        "atc_description": "lynestrenol"
    },
    {
        "atc_level": "G03AC03",
        "atc_description": "levonorgestrel"
    },
    {
        "atc_level": "G03AC04",
        "atc_description": "quingestanol"
    },
    {
        "atc_level": "G03AC05",
        "atc_description": "megestrol"
    },
    {
        "atc_level": "G03AC06",
        "atc_description": "medroxyprogesterone"
    },
    {
        "atc_level": "G03AC07",
        "atc_description": "norgestrienone"
    },
    {
        "atc_level": "G03AC08",
        "atc_description": "etonogestrel"
    },
    {
        "atc_level": "G03AC09",
        "atc_description": "desogestrel"
    },
    {
        "atc_level": "G03AC10",
        "atc_description": "drospirenone"
    },
    {
        "atc_level": "G03AD",
        "atc_description": "Emergency contraceptives"
    },
    {
        "atc_level": "G03AD01",
        "atc_description": "levonorgestrel"
    },
    {
        "atc_level": "G03AD02",
        "atc_description": "ulipristal"
    },
    {
        "atc_level": "G03B",
        "atc_description": "ANDROGENS"
    },
    {
        "atc_level": "G03BA",
        "atc_description": "3-oxoandrosten (4) derivatives"
    },
    {
        "atc_level": "G03BA01",
        "atc_description": "fluoxymesterone"
    },
    {
        "atc_level": "G03BA02",
        "atc_description": "methyltestosterone"
    },
    {
        "atc_level": "G03BA03",
        "atc_description": "testosterone"
    },
    {
        "atc_level": "G03BB",
        "atc_description": "5-androstanon (3) derivatives"
    },
    {
        "atc_level": "G03BB01",
        "atc_description": "mesterolone"
    },
    {
        "atc_level": "G03BB02",
        "atc_description": "androstanolone"
    },
    {
        "atc_level": "G03C",
        "atc_description": "ESTROGENS"
    },
    {
        "atc_level": "G03CA",
        "atc_description": "Natural and semisynthetic estrogens, plain"
    },
    {
        "atc_level": "G03CA01",
        "atc_description": "ethinylestradiol"
    },
    {
        "atc_level": "G03CA03",
        "atc_description": "estradiol"
    },
    {
        "atc_level": "G03CA04",
        "atc_description": "estriol"
    },
    {
        "atc_level": "G03CA06",
        "atc_description": "chlorotrianisene"
    },
    {
        "atc_level": "G03CA07",
        "atc_description": "estrone"
    },
    {
        "atc_level": "G03CA08",
        "atc_description": "Epimestrol"
    },
    {
        "atc_level": "G03CA09",
        "atc_description": "promestriene"
    },
    {
        "atc_level": "G03CA53",
        "atc_description": "estradiol, combinations"
    },
    {
        "atc_level": "G03CA57",
        "atc_description": "conjugated estrogens"
    },
    {
        "atc_level": "G03CB",
        "atc_description": "Synthetic estrogens, plain"
    },
    {
        "atc_level": "G03CB01",
        "atc_description": "dienestrol"
    },
    {
        "atc_level": "G03CB02",
        "atc_description": "diethylstilbestrol"
    },
    {
        "atc_level": "G03CB03",
        "atc_description": "methallenestril"
    },
    {
        "atc_level": "G03CB04",
        "atc_description": "moxestrol"
    },
    {
        "atc_level": "G03CC",
        "atc_description": "Estrogens, combinations with other drugs"
    },
    {
        "atc_level": "G03CC02",
        "atc_description": "dienestrol"
    },
    {
        "atc_level": "G03CC03",
        "atc_description": "methallenestril"
    },
    {
        "atc_level": "G03CC04",
        "atc_description": "estrone"
    },
    {
        "atc_level": "G03CC05",
        "atc_description": "diethylstilbestrol"
    },
    {
        "atc_level": "G03CC06",
        "atc_description": "estriol"
    },
    {
        "atc_level": "G03CC07",
        "atc_description": "conjugated estrogens and bazedoxifene"
    },
    {
        "atc_level": "G03CX",
        "atc_description": "Other estrogens"
    },
    {
        "atc_level": "G03CX01",
        "atc_description": "tibolone"
    },
    {
        "atc_level": "G03D",
        "atc_description": "PROGESTOGENS"
    },
    {
        "atc_level": "G03DA",
        "atc_description": "Pregnen (4) derivatives"
    },
    {
        "atc_level": "G03DA01",
        "atc_description": "gestonorone"
    },
    {
        "atc_level": "G03DA02",
        "atc_description": "medroxyprogesterone"
    },
    {
        "atc_level": "G03DA03",
        "atc_description": "hydroxyprogesterone"
    },
    {
        "atc_level": "G03DA04",
        "atc_description": "progesterone"
    },
    {
        "atc_level": "G03DA05",
        "atc_description": "Gestrinone"
    },
    {
        "atc_level": "G03DB",
        "atc_description": "Pregnadien derivatives"
    },
    {
        "atc_level": "G03DB01",
        "atc_description": "dydrogesterone"
    },
    {
        "atc_level": "G03DB02",
        "atc_description": "megestrol"
    },
    {
        "atc_level": "G03DB03",
        "atc_description": "medrogestone"
    },
    {
        "atc_level": "G03DB04",
        "atc_description": "nomegestrol"
    },
    {
        "atc_level": "G03DB05",
        "atc_description": "demegestone"
    },
    {
        "atc_level": "G03DB06",
        "atc_description": "chlormadinone"
    },
    {
        "atc_level": "G03DB07",
        "atc_description": "promegestone"
    },
    {
        "atc_level": "G03DB08",
        "atc_description": "dienogest"
    },
    {
        "atc_level": "G03DC",
        "atc_description": "Estren derivatives"
    },
    {
        "atc_level": "G03DC01",
        "atc_description": "allylestrenol"
    },
    {
        "atc_level": "G03DC02",
        "atc_description": "norethisterone"
    },
    {
        "atc_level": "G03DC03",
        "atc_description": "lynestrenol"
    },
    {
        "atc_level": "G03DC04",
        "atc_description": "ethisterone"
    },
    {
        "atc_level": "G03DC05",
        "atc_description": "Tibolone"
    },
    {
        "atc_level": "G03DC06",
        "atc_description": "etynodiol"
    },
    {
        "atc_level": "G03DC31",
        "atc_description": "methylestrenolone"
    },
    {
        "atc_level": "G03E",
        "atc_description": "ANDROGENS AND FEMALE SEX HORMONES IN COMBINATION"
    },
    {
        "atc_level": "G03EA",
        "atc_description": "Androgens and estrogens"
    },
    {
        "atc_level": "G03EA01",
        "atc_description": "methyltestosterone and estrogen"
    },
    {
        "atc_level": "G03EA02",
        "atc_description": "testosterone and estrogen"
    },
    {
        "atc_level": "G03EA03",
        "atc_description": "prasterone and estrogen"
    },
    {
        "atc_level": "G03EB",
        "atc_description": "Androgen, progestogen and estrogen in combination"
    },
    {
        "atc_level": "G03EK",
        "atc_description": "Androgens and female sex hormones in combination with other drugs"
    },
    {
        "atc_level": "G03EK01",
        "atc_description": "methyltestosterone"
    },
    {
        "atc_level": "G03F",
        "atc_description": "PROGESTOGENS AND ESTROGENS IN COMBINATION"
    },
    {
        "atc_level": "G03FA",
        "atc_description": "Progestogens and estrogens, fixed combinations"
    },
    {
        "atc_level": "G03FA01",
        "atc_description": "norethisterone and estrogen"
    },
    {
        "atc_level": "G03FA02",
        "atc_description": "hydroxyprogesterone and estrogen"
    },
    {
        "atc_level": "G03FA03",
        "atc_description": "ethisterone and estrogen"
    },
    {
        "atc_level": "G03FA04",
        "atc_description": "progesterone and estrogen"
    },
    {
        "atc_level": "G03FA05",
        "atc_description": "methylnortestosterone and estrogen"
    },
    {
        "atc_level": "G03FA06",
        "atc_description": "etynodiol and estrogen"
    },
    {
        "atc_level": "G03FA07",
        "atc_description": "lynestrenol and estrogen"
    },
    {
        "atc_level": "G03FA08",
        "atc_description": "megestrol and estrogen"
    },
    {
        "atc_level": "G03FA09",
        "atc_description": "noretynodrel and estrogen"
    },
    {
        "atc_level": "G03FA10",
        "atc_description": "norgestrel and estrogen"
    },
    {
        "atc_level": "G03FA11",
        "atc_description": "levonorgestrel and estrogen"
    },
    {
        "atc_level": "G03FA12",
        "atc_description": "medroxyprogesterone and estrogen"
    },
    {
        "atc_level": "G03FA13",
        "atc_description": "norgestimate and estrogen"
    },
    {
        "atc_level": "G03FA14",
        "atc_description": "dydrogesterone and estrogen"
    },
    {
        "atc_level": "G03FA15",
        "atc_description": "dienogest and estrogen"
    },
    {
        "atc_level": "G03FA16",
        "atc_description": "trimegestone and estrogen"
    },
    {
        "atc_level": "G03FA17",
        "atc_description": "drospirenone and estrogen"
    },
    {
        "atc_level": "G03FB",
        "atc_description": "Progestogens and estrogens, sequential preparations"
    },
    {
        "atc_level": "G03FB01",
        "atc_description": "norgestrel and estrogen"
    },
    {
        "atc_level": "G03FB02",
        "atc_description": "lynestrenol and estrogen"
    },
    {
        "atc_level": "G03FB03",
        "atc_description": "chlormadinone and estrogen"
    },
    {
        "atc_level": "G03FB04",
        "atc_description": "megestrol and estrogen"
    },
    {
        "atc_level": "G03FB05",
        "atc_description": "norethisterone and estrogen"
    },
    {
        "atc_level": "G03FB06",
        "atc_description": "medroxyprogesterone and estrogen"
    },
    {
        "atc_level": "G03FB07",
        "atc_description": "medrogestone and estrogen"
    },
    {
        "atc_level": "G03FB08",
        "atc_description": "dydrogesterone and estrogen"
    },
    {
        "atc_level": "G03FB09",
        "atc_description": "levonorgestrel and estrogen"
    },
    {
        "atc_level": "G03FB10",
        "atc_description": "desogestrel and estrogen"
    },
    {
        "atc_level": "G03FB11",
        "atc_description": "trimegestone and estrogen"
    },
    {
        "atc_level": "G03FB12",
        "atc_description": "nomegestrol and estrogen"
    },
    {
        "atc_level": "G03G",
        "atc_description": "GONADOTROPINS AND OTHER OVULATION STIMULANTS"
    },
    {
        "atc_level": "G03GA",
        "atc_description": "Gonadotropins"
    },
    {
        "atc_level": "G03GA01",
        "atc_description": "chorionic gonadotrophin"
    },
    {
        "atc_level": "G03GA02",
        "atc_description": "human menopausal gonadotrophin"
    },
    {
        "atc_level": "G03GA03",
        "atc_description": "serum gonadotrophin"
    },
    {
        "atc_level": "G03GA04",
        "atc_description": "urofollitropin"
    },
    {
        "atc_level": "G03GA05",
        "atc_description": "follitropin alfa"
    },
    {
        "atc_level": "G03GA06",
        "atc_description": "follitropin beta"
    },
    {
        "atc_level": "G03GA07",
        "atc_description": "lutropin alfa"
    },
    {
        "atc_level": "G03GA08",
        "atc_description": "choriogonadotropin alfa"
    },
    {
        "atc_level": "G03GA09",
        "atc_description": "corifollitropin alfa"
    },
    {
        "atc_level": "G03GA10",
        "atc_description": "follitropin delta"
    },
    {
        "atc_level": "G03GA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "G03GB",
        "atc_description": "Ovulation stimulants, synthetic"
    },
    {
        "atc_level": "G03GB01",
        "atc_description": "cyclofenil"
    },
    {
        "atc_level": "G03GB02",
        "atc_description": "clomifene"
    },
    {
        "atc_level": "G03GB03",
        "atc_description": "epimestrol"
    },
    {
        "atc_level": "G03H",
        "atc_description": "ANTIANDROGENS"
    },
    {
        "atc_level": "G03HA",
        "atc_description": "Antiandrogens, plain"
    },
    {
        "atc_level": "G03HA01",
        "atc_description": "cyproterone"
    },
    {
        "atc_level": "G03HB",
        "atc_description": "Antiandrogens and estrogens"
    },
    {
        "atc_level": "G03HB01",
        "atc_description": "cyproterone and estrogen"
    },
    {
        "atc_level": "G03X",
        "atc_description": "OTHER SEX HORMONES AND MODULATORS OF THE GENITAL SYSTEM"
    },
    {
        "atc_level": "G03XA",
        "atc_description": "Antigonadotropins and similar agents"
    },
    {
        "atc_level": "G03XA01",
        "atc_description": "danazol"
    },
    {
        "atc_level": "G03XA02",
        "atc_description": "gestrinone"
    },
    {
        "atc_level": "G03XB",
        "atc_description": "Progesterone receptor modulators"
    },
    {
        "atc_level": "G03XB01",
        "atc_description": "mifepristone"
    },
    {
        "atc_level": "G03XB02",
        "atc_description": "ulipristal"
    },
    {
        "atc_level": "G03XB51",
        "atc_description": "mifepristone, combinations"
    },
    {
        "atc_level": "G03XC",
        "atc_description": "Selective estrogen receptor modulators"
    },
    {
        "atc_level": "G03XC01",
        "atc_description": "raloxifene"
    },
    {
        "atc_level": "G03XC02",
        "atc_description": "bazedoxifene"
    },
    {
        "atc_level": "G03XC03",
        "atc_description": "lasofoxifene"
    },
    {
        "atc_level": "G03XC04",
        "atc_description": "ormeloxifene"
    },
    {
        "atc_level": "G03XC05",
        "atc_description": "ospemifene"
    },
    {
        "atc_level": "G03XX",
        "atc_description": "Other sex hormones and modulators of the genital system"
    },
    {
        "atc_level": "G03XX01",
        "atc_description": "prasterone"
    },
    {
        "atc_level": "G04",
        "atc_description": "UROLOGICALS"
    },
    {
        "atc_level": "G04A",
        "atc_description": "Urinary antiseptics and antiinfectives"
    },
    {
        "atc_level": "G04AA",
        "atc_description": "Methenamine preparations"
    },
    {
        "atc_level": "G04AA01",
        "atc_description": "Methenamine"
    },
    {
        "atc_level": "G04AB",
        "atc_description": "Quinolone derivatives (excl. quinolone antibacterials)"
    },
    {
        "atc_level": "G04AB01",
        "atc_description": "Nalidixic acid"
    },
    {
        "atc_level": "G04AB02",
        "atc_description": "Piromidic acid"
    },
    {
        "atc_level": "G04AB03",
        "atc_description": "Pipemidic acid"
    },
    {
        "atc_level": "G04AB04",
        "atc_description": "Oxolinic acid"
    },
    {
        "atc_level": "G04AB05",
        "atc_description": "Cinoxacin"
    },
    {
        "atc_level": "G04AB06",
        "atc_description": "Flumequine"
    },
    {
        "atc_level": "G04AC",
        "atc_description": "Nitrofuran derivatives"
    },
    {
        "atc_level": "G04AC01",
        "atc_description": "Nitrofurantoin"
    },
    {
        "atc_level": "G04AC02",
        "atc_description": "Nifurtoinol"
    },
    {
        "atc_level": "G04AD",
        "atc_description": "Salicylates"
    },
    {
        "atc_level": "G04AD01",
        "atc_description": "Phenyl salicylate"
    },
    {
        "atc_level": "G04AG",
        "atc_description": "Other urinary antiseptics and antiinfectives"
    },
    {
        "atc_level": "G04AG01",
        "atc_description": "Phenazopyridine"
    },
    {
        "atc_level": "G04AG02",
        "atc_description": "Oxolinic acid"
    },
    {
        "atc_level": "G04AG03",
        "atc_description": "Cinoxacin"
    },
    {
        "atc_level": "G04AG04",
        "atc_description": "Norfloxacin"
    },
    {
        "atc_level": "G04AG05",
        "atc_description": "Mandelic acid"
    },
    {
        "atc_level": "G04AG06",
        "atc_description": "Nitroxoline"
    },
    {
        "atc_level": "G04AH",
        "atc_description": "Sulfonamides in combination with other drugs"
    },
    {
        "atc_level": "G04AH01",
        "atc_description": "Methenamine and sulfonamides"
    },
    {
        "atc_level": "G04AH02",
        "atc_description": "Phenazopyridine and sulfonamides"
    },
    {
        "atc_level": "G04AK",
        "atc_description": "Urinary antiseptics and antiinfectives, combinations excl. sulfonamides"
    },
    {
        "atc_level": "G04B",
        "atc_description": "UROLOGICALS"
    },
    {
        "atc_level": "G04BA",
        "atc_description": "Acidifiers"
    },
    {
        "atc_level": "G04BA01",
        "atc_description": "ammonium chloride"
    },
    {
        "atc_level": "G04BA03",
        "atc_description": "calcium chloride"
    },
    {
        "atc_level": "G04BC",
        "atc_description": "Urinary concrement solvents"
    },
    {
        "atc_level": "G04BD",
        "atc_description": "Drugs for urinary frequency and incontinence"
    },
    {
        "atc_level": "G04BD01",
        "atc_description": "emepronium"
    },
    {
        "atc_level": "G04BD02",
        "atc_description": "flavoxate"
    },
    {
        "atc_level": "G04BD03",
        "atc_description": "meladrazine"
    },
    {
        "atc_level": "G04BD04",
        "atc_description": "oxybutynin"
    },
    {
        "atc_level": "G04BD05",
        "atc_description": "terodiline"
    },
    {
        "atc_level": "G04BD06",
        "atc_description": "propiverine"
    },
    {
        "atc_level": "G04BD07",
        "atc_description": "tolterodine"
    },
    {
        "atc_level": "G04BD08",
        "atc_description": "solifenacin"
    },
    {
        "atc_level": "G04BD09",
        "atc_description": "trospium"
    },
    {
        "atc_level": "G04BD10",
        "atc_description": "darifenacin"
    },
    {
        "atc_level": "G04BD11",
        "atc_description": "fesoterodine"
    },
    {
        "atc_level": "G04BD12",
        "atc_description": "mirabegron"
    },
    {
        "atc_level": "G04BD13",
        "atc_description": "desfesoterodine"
    },
    {
        "atc_level": "G04BE",
        "atc_description": "Drugs used in erectile dysfunction"
    },
    {
        "atc_level": "G04BE01",
        "atc_description": "alprostadil"
    },
    {
        "atc_level": "G04BE02",
        "atc_description": "papaverine"
    },
    {
        "atc_level": "G04BE03",
        "atc_description": "sildenafil"
    },
    {
        "atc_level": "G04BE04",
        "atc_description": "yohimbine"
    },
    {
        "atc_level": "G04BE05",
        "atc_description": "phentolamine"
    },
    {
        "atc_level": "G04BE06",
        "atc_description": "moxisylyte"
    },
    {
        "atc_level": "G04BE07",
        "atc_description": "apomorphine"
    },
    {
        "atc_level": "G04BE08",
        "atc_description": "tadalafil"
    },
    {
        "atc_level": "G04BE09",
        "atc_description": "vardenafil"
    },
    {
        "atc_level": "G04BE10",
        "atc_description": "avanafil"
    },
    {
        "atc_level": "G04BE11",
        "atc_description": "udenafil"
    },
    {
        "atc_level": "G04BE30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "G04BE52",
        "atc_description": "papaverine, combinations"
    },
    {
        "atc_level": "G04BX",
        "atc_description": "Other urologicals"
    },
    {
        "atc_level": "G04BX01",
        "atc_description": "magnesium hydroxide"
    },
    {
        "atc_level": "G04BX02",
        "atc_description": "Alfuzosin"
    },
    {
        "atc_level": "G04BX03",
        "atc_description": "acetohydroxamic acid"
    },
    {
        "atc_level": "G04BX04",
        "atc_description": "Finasteride"
    },
    {
        "atc_level": "G04BX05",
        "atc_description": "Alprostadil"
    },
    {
        "atc_level": "G04BX06",
        "atc_description": "phenazopyridine"
    },
    {
        "atc_level": "G04BX07",
        "atc_description": "Pygeum africanum"
    },
    {
        "atc_level": "G04BX08",
        "atc_description": "Tamsulosin"
    },
    {
        "atc_level": "G04BX09",
        "atc_description": "Serenoa repens"
    },
    {
        "atc_level": "G04BX10",
        "atc_description": "succinimide"
    },
    {
        "atc_level": "G04BX11",
        "atc_description": "collagen"
    },
    {
        "atc_level": "G04BX12",
        "atc_description": "phenyl salicylate"
    },
    {
        "atc_level": "G04BX13",
        "atc_description": "dimethyl sulfoxide"
    },
    {
        "atc_level": "G04BX14",
        "atc_description": "dapoxetine"
    },
    {
        "atc_level": "G04BX15",
        "atc_description": "pentosan polysulfate sodium"
    },
    {
        "atc_level": "G04BX16",
        "atc_description": "tiopronin"
    },
    {
        "atc_level": "G04C",
        "atc_description": "DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY"
    },
    {
        "atc_level": "G04CA",
        "atc_description": "Alpha-adrenoreceptor antagonists"
    },
    {
        "atc_level": "G04CA01",
        "atc_description": "alfuzosin"
    },
    {
        "atc_level": "G04CA02",
        "atc_description": "tamsulosin"
    },
    {
        "atc_level": "G04CA03",
        "atc_description": "terazosin"
    },
    {
        "atc_level": "G04CA04",
        "atc_description": "silodosin"
    },
    {
        "atc_level": "G04CA51",
        "atc_description": "alfuzosin and finasteride"
    },
    {
        "atc_level": "G04CA52",
        "atc_description": "tamsulosin and dutasteride"
    },
    {
        "atc_level": "G04CA53",
        "atc_description": "tamsulosin and solifenacin"
    },
    {
        "atc_level": "G04CA54",
        "atc_description": "tamsulosin and tadalafil"
    },
    {
        "atc_level": "G04CB",
        "atc_description": "Testosterone-5-alpha reductase inhibitors"
    },
    {
        "atc_level": "G04CB01",
        "atc_description": "finasteride"
    },
    {
        "atc_level": "G04CB02",
        "atc_description": "dutasteride"
    },
    {
        "atc_level": "G04CX",
        "atc_description": "Other drugs used in benign prostatic hypertrophy"
    },
    {
        "atc_level": "G04CX01",
        "atc_description": "Prunus africanae cortex"
    },
    {
        "atc_level": "G04CX02",
        "atc_description": "Sabalis serrulatae fructus"
    },
    {
        "atc_level": "G04CX03",
        "atc_description": "mepartricin"
    },
    {
        "atc_level": "G04CX04",
        "atc_description": "fexapotide"
    },
    {
        "atc_level": "H",
        "atc_description": "SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS"
    },
    {
        "atc_level": "H00",
        "atc_description": "SYSTEMIC HORMONAL PREPARATIONS EXCL. SEX HORMONES"
    },
    {
        "atc_level": "H01",
        "atc_description": "PITUITARY AND HYPOTHALAMIC HORMONES AND ANALOGUES"
    },
    {
        "atc_level": "H01A",
        "atc_description": "ANTERIOR PITUITARY LOBE HORMONES AND ANALOGUES"
    },
    {
        "atc_level": "H01AA",
        "atc_description": "ACTH"
    },
    {
        "atc_level": "H01AA01",
        "atc_description": "corticotropin"
    },
    {
        "atc_level": "H01AA02",
        "atc_description": "tetracosactide"
    },
    {
        "atc_level": "H01AB",
        "atc_description": "Thyrotropin"
    },
    {
        "atc_level": "H01AB01",
        "atc_description": "thyrotropin alfa"
    },
    {
        "atc_level": "H01AC",
        "atc_description": "Somatropin and somatropin agonists"
    },
    {
        "atc_level": "H01AC01",
        "atc_description": "somatropin"
    },
    {
        "atc_level": "H01AC02",
        "atc_description": "somatrem"
    },
    {
        "atc_level": "H01AC03",
        "atc_description": "mecasermin"
    },
    {
        "atc_level": "H01AC04",
        "atc_description": "sermorelin"
    },
    {
        "atc_level": "H01AC05",
        "atc_description": "mecasermin rinfabate"
    },
    {
        "atc_level": "H01AC06",
        "atc_description": "tesamorelin"
    },
    {
        "atc_level": "H01AC07",
        "atc_description": "somapacitan"
    },
    {
        "atc_level": "H01AC08",
        "atc_description": "somatrogon"
    },
    {
        "atc_level": "H01AX",
        "atc_description": "Other anterior pituitary lobe hormones and analogues"
    },
    {
        "atc_level": "H01AX01",
        "atc_description": "pegvisomant"
    },
    {
        "atc_level": "H01B",
        "atc_description": "POSTERIOR PITUITARY LOBE HORMONES"
    },
    {
        "atc_level": "H01BA",
        "atc_description": "Vasopressin and analogues"
    },
    {
        "atc_level": "H01BA01",
        "atc_description": "vasopressin (argipressin)"
    },
    {
        "atc_level": "H01BA02",
        "atc_description": "desmopressin"
    },
    {
        "atc_level": "H01BA03",
        "atc_description": "lypressin"
    },
    {
        "atc_level": "H01BA04",
        "atc_description": "terlipressin"
    },
    {
        "atc_level": "H01BA05",
        "atc_description": "ornipressin"
    },
    {
        "atc_level": "H01BA06",
        "atc_description": "argipressin"
    },
    {
        "atc_level": "H01BB",
        "atc_description": "Oxytocin and analogues"
    },
    {
        "atc_level": "H01BB01",
        "atc_description": "demoxytocin"
    },
    {
        "atc_level": "H01BB02",
        "atc_description": "oxytocin"
    },
    {
        "atc_level": "H01BB03",
        "atc_description": "carbetocin"
    },
    {
        "atc_level": "H01C",
        "atc_description": "HYPOTHALAMIC HORMONES"
    },
    {
        "atc_level": "H01CA",
        "atc_description": "Gonadotropin-releasing hormones"
    },
    {
        "atc_level": "H01CA01",
        "atc_description": "gonadorelin"
    },
    {
        "atc_level": "H01CA02",
        "atc_description": "nafarelin"
    },
    {
        "atc_level": "H01CA03",
        "atc_description": "histrelin"
    },
    {
        "atc_level": "H01CB",
        "atc_description": "Somatostatin and analogues"
    },
    {
        "atc_level": "H01CB01",
        "atc_description": "somatostatin"
    },
    {
        "atc_level": "H01CB02",
        "atc_description": "octreotide"
    },
    {
        "atc_level": "H01CB03",
        "atc_description": "lanreotide"
    },
    {
        "atc_level": "H01CB04",
        "atc_description": "vapreotide"
    },
    {
        "atc_level": "H01CB05",
        "atc_description": "pasireotide"
    },
    {
        "atc_level": "H01CC",
        "atc_description": "Anti-gonadotropin-releasing hormones"
    },
    {
        "atc_level": "H01CC01",
        "atc_description": "ganirelix"
    },
    {
        "atc_level": "H01CC02",
        "atc_description": "cetrorelix"
    },
    {
        "atc_level": "H01CC03",
        "atc_description": "elagolix"
    },
    {
        "atc_level": "H01CC04",
        "atc_description": "linzagolix"
    },
    {
        "atc_level": "H01CC54",
        "atc_description": "relugolix, estradiol and norethisterone"
    },
    {
        "atc_level": "H02",
        "atc_description": "CORTICOSTEROIDS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "H02A",
        "atc_description": "CORTICOSTEROIDS FOR SYSTEMIC USE, PLAIN"
    },
    {
        "atc_level": "H02AA",
        "atc_description": "Mineralocorticoids"
    },
    {
        "atc_level": "H02AA01",
        "atc_description": "aldosterone"
    },
    {
        "atc_level": "H02AA02",
        "atc_description": "fludrocortisone"
    },
    {
        "atc_level": "H02AA03",
        "atc_description": "desoxycortone"
    },
    {
        "atc_level": "H02AB",
        "atc_description": "Glucocorticoids"
    },
    {
        "atc_level": "H02AB01",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "H02AB02",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "H02AB03",
        "atc_description": "fluocortolone"
    },
    {
        "atc_level": "H02AB04",
        "atc_description": "methylprednisolone"
    },
    {
        "atc_level": "H02AB05",
        "atc_description": "paramethasone"
    },
    {
        "atc_level": "H02AB06",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "H02AB07",
        "atc_description": "prednisone"
    },
    {
        "atc_level": "H02AB08",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "H02AB09",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "H02AB10",
        "atc_description": "cortisone"
    },
    {
        "atc_level": "H02AB11",
        "atc_description": "prednylidene"
    },
    {
        "atc_level": "H02AB12",
        "atc_description": "rimexolone"
    },
    {
        "atc_level": "H02AB13",
        "atc_description": "deflazacort"
    },
    {
        "atc_level": "H02AB14",
        "atc_description": "cloprednol"
    },
    {
        "atc_level": "H02AB15",
        "atc_description": "meprednisone"
    },
    {
        "atc_level": "H02AB16",
        "atc_description": "Budesonide"
    },
    {
        "atc_level": "H02AB17",
        "atc_description": "cortivazol"
    },
    {
        "atc_level": "H02B",
        "atc_description": "CORTICOSTEROIDS FOR SYSTEMIC USE, COMBINATIONS"
    },
    {
        "atc_level": "H02BX",
        "atc_description": "Corticosteroids for systemic use, combinations"
    },
    {
        "atc_level": "H02BX01",
        "atc_description": "methylprednisolone, combinations"
    },
    {
        "atc_level": "H02C",
        "atc_description": "ANTIADRENAL PREPARATIONS"
    },
    {
        "atc_level": "H02CA",
        "atc_description": "Anticorticosteroids"
    },
    {
        "atc_level": "H02CA01",
        "atc_description": "trilostane"
    },
    {
        "atc_level": "H02CA02",
        "atc_description": "osilodrostat"
    },
    {
        "atc_level": "H02CA03",
        "atc_description": "ketoconazole"
    },
    {
        "atc_level": "H03",
        "atc_description": "THYROID THERAPY"
    },
    {
        "atc_level": "H03A",
        "atc_description": "THYROID PREPARATIONS"
    },
    {
        "atc_level": "H03AA",
        "atc_description": "Thyroid hormones"
    },
    {
        "atc_level": "H03AA01",
        "atc_description": "levothyroxine sodium"
    },
    {
        "atc_level": "H03AA02",
        "atc_description": "liothyronine sodium"
    },
    {
        "atc_level": "H03AA03",
        "atc_description": "combinations of levothyroxine and liothyronine"
    },
    {
        "atc_level": "H03AA04",
        "atc_description": "tiratricol"
    },
    {
        "atc_level": "H03AA05",
        "atc_description": "thyroid gland preparations"
    },
    {
        "atc_level": "H03B",
        "atc_description": "ANTITHYROID PREPARATIONS"
    },
    {
        "atc_level": "H03BA",
        "atc_description": "Thiouracils"
    },
    {
        "atc_level": "H03BA01",
        "atc_description": "methylthiouracil"
    },
    {
        "atc_level": "H03BA02",
        "atc_description": "propylthiouracil"
    },
    {
        "atc_level": "H03BA03",
        "atc_description": "benzylthiouracil"
    },
    {
        "atc_level": "H03BB",
        "atc_description": "Sulfur-containing imidazole derivatives"
    },
    {
        "atc_level": "H03BB01",
        "atc_description": "carbimazole"
    },
    {
        "atc_level": "H03BB02",
        "atc_description": "thiamazole"
    },
    {
        "atc_level": "H03BB52",
        "atc_description": "thiamazole, combinations"
    },
    {
        "atc_level": "H03BC",
        "atc_description": "Perchlorates"
    },
    {
        "atc_level": "H03BC01",
        "atc_description": "potassium perchlorate"
    },
    {
        "atc_level": "H03BX",
        "atc_description": "Other antithyroid preparations"
    },
    {
        "atc_level": "H03BX01",
        "atc_description": "diiodotyrosine"
    },
    {
        "atc_level": "H03BX02",
        "atc_description": "dibromotyrosine"
    },
    {
        "atc_level": "H03C",
        "atc_description": "IODINE THERAPY"
    },
    {
        "atc_level": "H03CA",
        "atc_description": "Iodine therapy"
    },
    {
        "atc_level": "H04",
        "atc_description": "PANCREATIC HORMONES"
    },
    {
        "atc_level": "H04A",
        "atc_description": "GLYCOGENOLYTIC HORMONES"
    },
    {
        "atc_level": "H04AA",
        "atc_description": "Glycogenolytic hormones"
    },
    {
        "atc_level": "H04AA01",
        "atc_description": "glucagon"
    },
    {
        "atc_level": "H05",
        "atc_description": "CALCIUM HOMEOSTASIS"
    },
    {
        "atc_level": "H05A",
        "atc_description": "PARATHYROID HORMONES AND ANALOGUES"
    },
    {
        "atc_level": "H05AA",
        "atc_description": "Parathyroid hormones and analogues"
    },
    {
        "atc_level": "H05AA01",
        "atc_description": "parathyroid gland extract"
    },
    {
        "atc_level": "H05AA02",
        "atc_description": "teriparatide"
    },
    {
        "atc_level": "H05AA03",
        "atc_description": "parathyroid hormone"
    },
    {
        "atc_level": "H05AA04",
        "atc_description": "abaloparatide"
    },
    {
        "atc_level": "H05B",
        "atc_description": "ANTI-PARATHYROID AGENTS"
    },
    {
        "atc_level": "H05BA",
        "atc_description": "Calcitonin preparations"
    },
    {
        "atc_level": "H05BA01",
        "atc_description": "calcitonin (salmon synthetic)"
    },
    {
        "atc_level": "H05BA02",
        "atc_description": "calcitonin (pork natural)"
    },
    {
        "atc_level": "H05BA03",
        "atc_description": "calcitonin (human synthetic)"
    },
    {
        "atc_level": "H05BA04",
        "atc_description": "elcatonin"
    },
    {
        "atc_level": "H05BX",
        "atc_description": "Other anti-parathyroid agents"
    },
    {
        "atc_level": "H05BX01",
        "atc_description": "cinacalcet"
    },
    {
        "atc_level": "H05BX02",
        "atc_description": "paricalcitol"
    },
    {
        "atc_level": "H05BX03",
        "atc_description": "doxercalciferol"
    },
    {
        "atc_level": "H05BX04",
        "atc_description": "etelcalcetide"
    },
    {
        "atc_level": "H05BX05",
        "atc_description": "calcifediol"
    },
    {
        "atc_level": "J",
        "atc_description": "ANTIINFECTIVES FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J00",
        "atc_description": "GENERAL ANTIINFECTIVES FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J01",
        "atc_description": "ANTIBACTERIALS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J01A",
        "atc_description": "TETRACYCLINES"
    },
    {
        "atc_level": "J01AA",
        "atc_description": "Tetracyclines"
    },
    {
        "atc_level": "J01AA01",
        "atc_description": "demeclocycline"
    },
    {
        "atc_level": "J01AA02",
        "atc_description": "doxycycline"
    },
    {
        "atc_level": "J01AA03",
        "atc_description": "chlortetracycline"
    },
    {
        "atc_level": "J01AA04",
        "atc_description": "lymecycline"
    },
    {
        "atc_level": "J01AA05",
        "atc_description": "metacycline"
    },
    {
        "atc_level": "J01AA06",
        "atc_description": "oxytetracycline"
    },
    {
        "atc_level": "J01AA07",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "J01AA08",
        "atc_description": "minocycline"
    },
    {
        "atc_level": "J01AA09",
        "atc_description": "rolitetracycline"
    },
    {
        "atc_level": "J01AA10",
        "atc_description": "penimepicycline"
    },
    {
        "atc_level": "J01AA11",
        "atc_description": "clomocycline"
    },
    {
        "atc_level": "J01AA12",
        "atc_description": "tigecycline"
    },
    {
        "atc_level": "J01AA13",
        "atc_description": "eravacycline"
    },
    {
        "atc_level": "J01AA14",
        "atc_description": "sarecycline"
    },
    {
        "atc_level": "J01AA15",
        "atc_description": "omadacycline"
    },
    {
        "atc_level": "J01AA20",
        "atc_description": "combinations of tetracyclines"
    },
    {
        "atc_level": "J01AA56",
        "atc_description": "oxytetracycline, combinations"
    },
    {
        "atc_level": "J01B",
        "atc_description": "AMPHENICOLS"
    },
    {
        "atc_level": "J01BA",
        "atc_description": "Amphenicols"
    },
    {
        "atc_level": "J01BA01",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "J01BA02",
        "atc_description": "thiamphenicol"
    },
    {
        "atc_level": "J01BA52",
        "atc_description": "thiamphenicol, combinations"
    },
    {
        "atc_level": "J01C",
        "atc_description": "BETA-LACTAM ANTIBACTERIALS, PENICILLINS"
    },
    {
        "atc_level": "J01CA",
        "atc_description": "Penicillins with extended spectrum"
    },
    {
        "atc_level": "J01CA01",
        "atc_description": "ampicillin"
    },
    {
        "atc_level": "J01CA02",
        "atc_description": "pivampicillin"
    },
    {
        "atc_level": "J01CA03",
        "atc_description": "carbenicillin"
    },
    {
        "atc_level": "J01CA04",
        "atc_description": "amoxicillin"
    },
    {
        "atc_level": "J01CA05",
        "atc_description": "carindacillin"
    },
    {
        "atc_level": "J01CA06",
        "atc_description": "bacampicillin"
    },
    {
        "atc_level": "J01CA07",
        "atc_description": "epicillin"
    },
    {
        "atc_level": "J01CA08",
        "atc_description": "pivmecillinam"
    },
    {
        "atc_level": "J01CA09",
        "atc_description": "azlocillin"
    },
    {
        "atc_level": "J01CA10",
        "atc_description": "mezlocillin"
    },
    {
        "atc_level": "J01CA11",
        "atc_description": "mecillinam"
    },
    {
        "atc_level": "J01CA12",
        "atc_description": "piperacillin"
    },
    {
        "atc_level": "J01CA13",
        "atc_description": "ticarcillin"
    },
    {
        "atc_level": "J01CA14",
        "atc_description": "metampicillin"
    },
    {
        "atc_level": "J01CA15",
        "atc_description": "talampicillin"
    },
    {
        "atc_level": "J01CA16",
        "atc_description": "sulbenicillin"
    },
    {
        "atc_level": "J01CA17",
        "atc_description": "temocillin"
    },
    {
        "atc_level": "J01CA18",
        "atc_description": "hetacillin"
    },
    {
        "atc_level": "J01CA19",
        "atc_description": "aspoxicillin"
    },
    {
        "atc_level": "J01CA20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J01CA51",
        "atc_description": "ampicillin, combinations"
    },
    {
        "atc_level": "J01CB",
        "atc_description": "AMPICILLIN AND SIMILAR ANTIBIOTICS IN COMBINATION WITH ENZYME INHIBITORS"
    },
    {
        "atc_level": "J01CB01",
        "atc_description": "Ampicillin and enzyme inhibitor"
    },
    {
        "atc_level": "J01CB04",
        "atc_description": "Amoxicillin and enzyme inhibito"
    },
    {
        "atc_level": "J01CE",
        "atc_description": "Beta-lactamase sensitive penicillins"
    },
    {
        "atc_level": "J01CE01",
        "atc_description": "benzylpenicillin"
    },
    {
        "atc_level": "J01CE02",
        "atc_description": "phenoxymethylpenicillin"
    },
    {
        "atc_level": "J01CE03",
        "atc_description": "propicillin"
    },
    {
        "atc_level": "J01CE04",
        "atc_description": "azidocillin"
    },
    {
        "atc_level": "J01CE05",
        "atc_description": "pheneticillin"
    },
    {
        "atc_level": "J01CE06",
        "atc_description": "penamecillin"
    },
    {
        "atc_level": "J01CE07",
        "atc_description": "clometocillin"
    },
    {
        "atc_level": "J01CE08",
        "atc_description": "benzathine benzylpenicillin"
    },
    {
        "atc_level": "J01CE09",
        "atc_description": "procaine benzylpenicillin"
    },
    {
        "atc_level": "J01CE10",
        "atc_description": "benzathine phenoxymethylpenicillin"
    },
    {
        "atc_level": "J01CE30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J01CF",
        "atc_description": "Beta-lactamase resistant penicillins"
    },
    {
        "atc_level": "J01CF01",
        "atc_description": "dicloxacillin"
    },
    {
        "atc_level": "J01CF02",
        "atc_description": "cloxacillin"
    },
    {
        "atc_level": "J01CF03",
        "atc_description": "meticillin"
    },
    {
        "atc_level": "J01CF04",
        "atc_description": "oxacillin"
    },
    {
        "atc_level": "J01CF05",
        "atc_description": "flucloxacillin"
    },
    {
        "atc_level": "J01CF06",
        "atc_description": "nafcillin"
    },
    {
        "atc_level": "J01CG",
        "atc_description": "Beta-lactamase inhibitors"
    },
    {
        "atc_level": "J01CG01",
        "atc_description": "sulbactam"
    },
    {
        "atc_level": "J01CG02",
        "atc_description": "tazobactam"
    },
    {
        "atc_level": "J01CR",
        "atc_description": "Combinations of penicillins, incl. beta-lactamase inhibitors"
    },
    {
        "atc_level": "J01CR01",
        "atc_description": "ampicillin and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01CR02",
        "atc_description": "amoxicillin and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01CR03",
        "atc_description": "ticarcillin and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01CR04",
        "atc_description": "sultamicillin"
    },
    {
        "atc_level": "J01CR05",
        "atc_description": "piperacillin and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01CR50",
        "atc_description": "combinations of penicillins"
    },
    {
        "atc_level": "J01D",
        "atc_description": "OTHER BETA-LACTAM ANTIBACTERIALS"
    },
    {
        "atc_level": "J01DA",
        "atc_description": "Cephalosporins and related substances"
    },
    {
        "atc_level": "J01DA01",
        "atc_description": "Cefalexin"
    },
    {
        "atc_level": "J01DA02",
        "atc_description": "Cefaloridine"
    },
    {
        "atc_level": "J01DA03",
        "atc_description": "Cefalotin"
    },
    {
        "atc_level": "J01DA04",
        "atc_description": "Cefazolin"
    },
    {
        "atc_level": "J01DA05",
        "atc_description": "Cefoxitin"
    },
    {
        "atc_level": "J01DA06",
        "atc_description": "Cefuroxime"
    },
    {
        "atc_level": "J01DA07",
        "atc_description": "Cefamandole"
    },
    {
        "atc_level": "J01DA08",
        "atc_description": "Cefaclor"
    },
    {
        "atc_level": "J01DA09",
        "atc_description": "Cefadroxil"
    },
    {
        "atc_level": "J01DA10",
        "atc_description": "Cefotaxime"
    },
    {
        "atc_level": "J01DA11",
        "atc_description": "Ceftazidime"
    },
    {
        "atc_level": "J01DA12",
        "atc_description": "Cefsulodin"
    },
    {
        "atc_level": "J01DA13",
        "atc_description": "Ceftriaxone"
    },
    {
        "atc_level": "J01DA14",
        "atc_description": "Cefotetan"
    },
    {
        "atc_level": "J01DA15",
        "atc_description": "Cefazedone"
    },
    {
        "atc_level": "J01DA16",
        "atc_description": "Cefmenoxime"
    },
    {
        "atc_level": "J01DA17",
        "atc_description": "Cefonicide"
    },
    {
        "atc_level": "J01DA18",
        "atc_description": "Latamoxef"
    },
    {
        "atc_level": "J01DA19",
        "atc_description": "Cefotiam"
    },
    {
        "atc_level": "J01DA21",
        "atc_description": "Cefatrizine"
    },
    {
        "atc_level": "J01DA22",
        "atc_description": "Ceftizoxime"
    },
    {
        "atc_level": "J01DA23",
        "atc_description": "Cefixime"
    },
    {
        "atc_level": "J01DA24",
        "atc_description": "Cefepime"
    },
    {
        "atc_level": "J01DA25",
        "atc_description": "Cefodizime"
    },
    {
        "atc_level": "J01DA26",
        "atc_description": "Cefetamet"
    },
    {
        "atc_level": "J01DA27",
        "atc_description": "Cefpiramide"
    },
    {
        "atc_level": "J01DA30",
        "atc_description": "Cefapirin"
    },
    {
        "atc_level": "J01DA31",
        "atc_description": "Cefradine"
    },
    {
        "atc_level": "J01DA32",
        "atc_description": "Cefoperazone"
    },
    {
        "atc_level": "J01DA33",
        "atc_description": "Cefpodoxime"
    },
    {
        "atc_level": "J01DA34",
        "atc_description": "Cefacetrile"
    },
    {
        "atc_level": "J01DA35",
        "atc_description": "Cefroxadine"
    },
    {
        "atc_level": "J01DA36",
        "atc_description": "Ceftezole"
    },
    {
        "atc_level": "J01DA37",
        "atc_description": "Cefpirome"
    },
    {
        "atc_level": "J01DA38",
        "atc_description": "Loracarbef"
    },
    {
        "atc_level": "J01DA39",
        "atc_description": "Cefibuten"
    },
    {
        "atc_level": "J01DA40",
        "atc_description": "Cefmetazole"
    },
    {
        "atc_level": "J01DA41",
        "atc_description": "Cefprozil"
    },
    {
        "atc_level": "J01DA42",
        "atc_description": "Cefdinir"
    },
    {
        "atc_level": "J01DA63",
        "atc_description": "Ceftriaxone, combinations"
    },
    {
        "atc_level": "J01DB",
        "atc_description": "First-generation cephalosporins"
    },
    {
        "atc_level": "J01DB01",
        "atc_description": "cefalexin"
    },
    {
        "atc_level": "J01DB02",
        "atc_description": "cefaloridine"
    },
    {
        "atc_level": "J01DB03",
        "atc_description": "cefalotin"
    },
    {
        "atc_level": "J01DB04",
        "atc_description": "cefazolin"
    },
    {
        "atc_level": "J01DB05",
        "atc_description": "cefadroxil"
    },
    {
        "atc_level": "J01DB06",
        "atc_description": "cefazedone"
    },
    {
        "atc_level": "J01DB07",
        "atc_description": "cefatrizine"
    },
    {
        "atc_level": "J01DB08",
        "atc_description": "cefapirin"
    },
    {
        "atc_level": "J01DB09",
        "atc_description": "cefradine"
    },
    {
        "atc_level": "J01DB10",
        "atc_description": "cefacetrile"
    },
    {
        "atc_level": "J01DB11",
        "atc_description": "cefroxadine"
    },
    {
        "atc_level": "J01DB12",
        "atc_description": "ceftezole"
    },
    {
        "atc_level": "J01DC",
        "atc_description": "Second-generation cephalosporins"
    },
    {
        "atc_level": "J01DC01",
        "atc_description": "cefoxitin"
    },
    {
        "atc_level": "J01DC02",
        "atc_description": "cefuroxime"
    },
    {
        "atc_level": "J01DC03",
        "atc_description": "cefamandole"
    },
    {
        "atc_level": "J01DC04",
        "atc_description": "cefaclor"
    },
    {
        "atc_level": "J01DC05",
        "atc_description": "cefotetan"
    },
    {
        "atc_level": "J01DC06",
        "atc_description": "cefonicid"
    },
    {
        "atc_level": "J01DC07",
        "atc_description": "cefotiam"
    },
    {
        "atc_level": "J01DC08",
        "atc_description": "loracarbef"
    },
    {
        "atc_level": "J01DC09",
        "atc_description": "cefmetazole"
    },
    {
        "atc_level": "J01DC10",
        "atc_description": "cefprozil"
    },
    {
        "atc_level": "J01DC11",
        "atc_description": "ceforanide"
    },
    {
        "atc_level": "J01DC12",
        "atc_description": "cefminox"
    },
    {
        "atc_level": "J01DC13",
        "atc_description": "cefbuperazone"
    },
    {
        "atc_level": "J01DC14",
        "atc_description": "flomoxef"
    },
    {
        "atc_level": "J01DD",
        "atc_description": "Third-generation cephalosporins"
    },
    {
        "atc_level": "J01DD01",
        "atc_description": "cefotaxime"
    },
    {
        "atc_level": "J01DD02",
        "atc_description": "ceftazidime"
    },
    {
        "atc_level": "J01DD03",
        "atc_description": "cefsulodin"
    },
    {
        "atc_level": "J01DD04",
        "atc_description": "ceftriaxone"
    },
    {
        "atc_level": "J01DD05",
        "atc_description": "cefmenoxime"
    },
    {
        "atc_level": "J01DD06",
        "atc_description": "latamoxef"
    },
    {
        "atc_level": "J01DD07",
        "atc_description": "ceftizoxime"
    },
    {
        "atc_level": "J01DD08",
        "atc_description": "cefixime"
    },
    {
        "atc_level": "J01DD09",
        "atc_description": "cefodizime"
    },
    {
        "atc_level": "J01DD10",
        "atc_description": "cefetamet"
    },
    {
        "atc_level": "J01DD11",
        "atc_description": "cefpiramide"
    },
    {
        "atc_level": "J01DD12",
        "atc_description": "cefoperazone"
    },
    {
        "atc_level": "J01DD13",
        "atc_description": "cefpodoxime"
    },
    {
        "atc_level": "J01DD14",
        "atc_description": "ceftibuten"
    },
    {
        "atc_level": "J01DD15",
        "atc_description": "cefdinir"
    },
    {
        "atc_level": "J01DD16",
        "atc_description": "cefditoren"
    },
    {
        "atc_level": "J01DD17",
        "atc_description": "cefcapene"
    },
    {
        "atc_level": "J01DD18",
        "atc_description": "cefteram"
    },
    {
        "atc_level": "J01DD51",
        "atc_description": "cefotaxime and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01DD52",
        "atc_description": "ceftazidime and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01DD54",
        "atc_description": "ceftriaxone, combinations"
    },
    {
        "atc_level": "J01DD62",
        "atc_description": "cefoperazone and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01DD63",
        "atc_description": "ceftriaxone and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01DD64",
        "atc_description": "cefpodoxime and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01DE",
        "atc_description": "Fourth-generation cephalosporins"
    },
    {
        "atc_level": "J01DE01",
        "atc_description": "cefepime"
    },
    {
        "atc_level": "J01DE02",
        "atc_description": "cefpirome"
    },
    {
        "atc_level": "J01DE03",
        "atc_description": "cefozopran"
    },
    {
        "atc_level": "J01DF",
        "atc_description": "Monobactams"
    },
    {
        "atc_level": "J01DF01",
        "atc_description": "aztreonam"
    },
    {
        "atc_level": "J01DF02",
        "atc_description": "carumonam"
    },
    {
        "atc_level": "J01DH",
        "atc_description": "Carbapenems"
    },
    {
        "atc_level": "J01DH02",
        "atc_description": "meropenem"
    },
    {
        "atc_level": "J01DH03",
        "atc_description": "ertapenem"
    },
    {
        "atc_level": "J01DH04",
        "atc_description": "doripenem"
    },
    {
        "atc_level": "J01DH05",
        "atc_description": "biapenem"
    },
    {
        "atc_level": "J01DH06",
        "atc_description": "tebipenem pivoxil"
    },
    {
        "atc_level": "J01DH51",
        "atc_description": "imipenem and cilastatin"
    },
    {
        "atc_level": "J01DH52",
        "atc_description": "meropenem and vaborbactam"
    },
    {
        "atc_level": "J01DH55",
        "atc_description": "panipenem and betamipron"
    },
    {
        "atc_level": "J01DH56",
        "atc_description": "imipenem, cilastatin and relebactam"
    },
    {
        "atc_level": "J01DI",
        "atc_description": "Other cephalosporins and penems"
    },
    {
        "atc_level": "J01DI01",
        "atc_description": "ceftobiprole medocaril"
    },
    {
        "atc_level": "J01DI02",
        "atc_description": "ceftaroline fosamil"
    },
    {
        "atc_level": "J01DI03",
        "atc_description": "faropenem"
    },
    {
        "atc_level": "J01DI04",
        "atc_description": "cefiderocol"
    },
    {
        "atc_level": "J01DI54",
        "atc_description": "ceftolozane and beta-lactamase inhibitor"
    },
    {
        "atc_level": "J01E",
        "atc_description": "SULFONAMIDES AND TRIMETHOPRIM"
    },
    {
        "atc_level": "J01EA",
        "atc_description": "Trimethoprim and derivatives"
    },
    {
        "atc_level": "J01EA01",
        "atc_description": "trimethoprim"
    },
    {
        "atc_level": "J01EA02",
        "atc_description": "brodimoprim"
    },
    {
        "atc_level": "J01EA03",
        "atc_description": "iclaprim"
    },
    {
        "atc_level": "J01EB",
        "atc_description": "Short-acting sulfonamides"
    },
    {
        "atc_level": "J01EB01",
        "atc_description": "sulfaisodimidine"
    },
    {
        "atc_level": "J01EB02",
        "atc_description": "sulfamethizole"
    },
    {
        "atc_level": "J01EB03",
        "atc_description": "sulfadimidine"
    },
    {
        "atc_level": "J01EB04",
        "atc_description": "sulfapyridine"
    },
    {
        "atc_level": "J01EB05",
        "atc_description": "sulfafurazole"
    },
    {
        "atc_level": "J01EB06",
        "atc_description": "sulfanilamide"
    },
    {
        "atc_level": "J01EB07",
        "atc_description": "sulfathiazole"
    },
    {
        "atc_level": "J01EB08",
        "atc_description": "sulfathiourea"
    },
    {
        "atc_level": "J01EB20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J01EC",
        "atc_description": "Intermediate-acting sulfonamides"
    },
    {
        "atc_level": "J01EC01",
        "atc_description": "sulfamethoxazole"
    },
    {
        "atc_level": "J01EC02",
        "atc_description": "sulfadiazine"
    },
    {
        "atc_level": "J01EC03",
        "atc_description": "sulfamoxole"
    },
    {
        "atc_level": "J01EC20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J01ED",
        "atc_description": "Long-acting sulfonamides"
    },
    {
        "atc_level": "J01ED01",
        "atc_description": "sulfadimethoxine"
    },
    {
        "atc_level": "J01ED02",
        "atc_description": "sulfalene"
    },
    {
        "atc_level": "J01ED03",
        "atc_description": "sulfametomidine"
    },
    {
        "atc_level": "J01ED04",
        "atc_description": "sulfametoxydiazine"
    },
    {
        "atc_level": "J01ED05",
        "atc_description": "sulfamethoxypyridazine"
    },
    {
        "atc_level": "J01ED06",
        "atc_description": "sulfaperin"
    },
    {
        "atc_level": "J01ED07",
        "atc_description": "sulfamerazine"
    },
    {
        "atc_level": "J01ED08",
        "atc_description": "sulfaphenazole"
    },
    {
        "atc_level": "J01ED09",
        "atc_description": "sulfamazone"
    },
    {
        "atc_level": "J01ED20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J01EE",
        "atc_description": "Combinations of sulfonamides and trimethoprim, incl. derivatives"
    },
    {
        "atc_level": "J01EE01",
        "atc_description": "sulfamethoxazole and trimethoprim"
    },
    {
        "atc_level": "J01EE02",
        "atc_description": "sulfadiazine and trimethoprim"
    },
    {
        "atc_level": "J01EE03",
        "atc_description": "sulfametrole and trimethoprim"
    },
    {
        "atc_level": "J01EE04",
        "atc_description": "sulfamoxole and trimethoprim"
    },
    {
        "atc_level": "J01EE05",
        "atc_description": "sulfadimidine and trimethoprim"
    },
    {
        "atc_level": "J01EE06",
        "atc_description": "sulfadiazine and tetroxoprim"
    },
    {
        "atc_level": "J01EE07",
        "atc_description": "sulfamerazine and trimethoprim"
    },
    {
        "atc_level": "J01F",
        "atc_description": "MACROLIDES, LINCOSAMIDES AND STREPTOGRAMINS"
    },
    {
        "atc_level": "J01FA",
        "atc_description": "Macrolides"
    },
    {
        "atc_level": "J01FA01",
        "atc_description": "erythromycin"
    },
    {
        "atc_level": "J01FA02",
        "atc_description": "spiramycin"
    },
    {
        "atc_level": "J01FA03",
        "atc_description": "midecamycin"
    },
    {
        "atc_level": "J01FA04",
        "atc_description": "Pristinamycin"
    },
    {
        "atc_level": "J01FA05",
        "atc_description": "oleandomycin"
    },
    {
        "atc_level": "J01FA06",
        "atc_description": "roxithromycin"
    },
    {
        "atc_level": "J01FA07",
        "atc_description": "josamycin"
    },
    {
        "atc_level": "J01FA08",
        "atc_description": "troleandomycin"
    },
    {
        "atc_level": "J01FA09",
        "atc_description": "clarithromycin"
    },
    {
        "atc_level": "J01FA10",
        "atc_description": "azithromycin"
    },
    {
        "atc_level": "J01FA11",
        "atc_description": "miocamycin"
    },
    {
        "atc_level": "J01FA12",
        "atc_description": "rokitamycin"
    },
    {
        "atc_level": "J01FA13",
        "atc_description": "dirithromycin"
    },
    {
        "atc_level": "J01FA14",
        "atc_description": "flurithromycin"
    },
    {
        "atc_level": "J01FA15",
        "atc_description": "telithromycin"
    },
    {
        "atc_level": "J01FA16",
        "atc_description": "solithromycin"
    },
    {
        "atc_level": "J01FF",
        "atc_description": "Lincosamides"
    },
    {
        "atc_level": "J01FF01",
        "atc_description": "clindamycin"
    },
    {
        "atc_level": "J01FF02",
        "atc_description": "lincomycin"
    },
    {
        "atc_level": "J01FG",
        "atc_description": "Streptogramins"
    },
    {
        "atc_level": "J01FG01",
        "atc_description": "pristinamycin"
    },
    {
        "atc_level": "J01FG02",
        "atc_description": "quinupristin/dalfopristin"
    },
    {
        "atc_level": "J01G",
        "atc_description": "AMINOGLYCOSIDE ANTIBACTERIALS"
    },
    {
        "atc_level": "J01GA",
        "atc_description": "Streptomycins"
    },
    {
        "atc_level": "J01GA01",
        "atc_description": "streptomycin"
    },
    {
        "atc_level": "J01GA02",
        "atc_description": "streptoduocin"
    },
    {
        "atc_level": "J01GB",
        "atc_description": "Other aminoglycosides"
    },
    {
        "atc_level": "J01GB01",
        "atc_description": "tobramycin"
    },
    {
        "atc_level": "J01GB02",
        "atc_description": "Spectinomycin"
    },
    {
        "atc_level": "J01GB03",
        "atc_description": "gentamicin"
    },
    {
        "atc_level": "J01GB04",
        "atc_description": "kanamycin"
    },
    {
        "atc_level": "J01GB05",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "J01GB06",
        "atc_description": "amikacin"
    },
    {
        "atc_level": "J01GB07",
        "atc_description": "netilmicin"
    },
    {
        "atc_level": "J01GB08",
        "atc_description": "sisomicin"
    },
    {
        "atc_level": "J01GB09",
        "atc_description": "dibekacin"
    },
    {
        "atc_level": "J01GB10",
        "atc_description": "ribostamycin"
    },
    {
        "atc_level": "J01GB11",
        "atc_description": "isepamicin"
    },
    {
        "atc_level": "J01GB12",
        "atc_description": "arbekacin"
    },
    {
        "atc_level": "J01GB13",
        "atc_description": "bekanamycin"
    },
    {
        "atc_level": "J01GB14",
        "atc_description": "plazomicin"
    },
    {
        "atc_level": "J01H",
        "atc_description": "Penicillins"
    },
    {
        "atc_level": "J01HA",
        "atc_description": "PENICILLINASE SENSITIVE PENICILLINS"
    },
    {
        "atc_level": "J01HA01",
        "atc_description": "Benzylpenicillin"
    },
    {
        "atc_level": "J01HA02",
        "atc_description": "Phenoxymethylpenicillin"
    },
    {
        "atc_level": "J01HA03",
        "atc_description": "Propicillin"
    },
    {
        "atc_level": "J01HA04",
        "atc_description": "Azidocillin"
    },
    {
        "atc_level": "J01HA05",
        "atc_description": "Pheneticillin"
    },
    {
        "atc_level": "J01HA06",
        "atc_description": "Penamecillin"
    },
    {
        "atc_level": "J01HA07",
        "atc_description": "Clometocillin"
    },
    {
        "atc_level": "J01HB",
        "atc_description": "Penicillinase resistant penicillins"
    },
    {
        "atc_level": "J01HB01",
        "atc_description": "Dicloxacillin"
    },
    {
        "atc_level": "J01HB02",
        "atc_description": "Cloxacillin"
    },
    {
        "atc_level": "J01HB03",
        "atc_description": "Methicillin"
    },
    {
        "atc_level": "J01HB04",
        "atc_description": "Oxacillin"
    },
    {
        "atc_level": "J01HB30",
        "atc_description": "Flucloxacillin"
    },
    {
        "atc_level": "J01HC",
        "atc_description": "PENICILLINASE RESISTANT PENICILLINS"
    },
    {
        "atc_level": "J01J",
        "atc_description": "PENICILLIN/STREPTOMYCIN COMBINATIONS"
    },
    {
        "atc_level": "J01JA",
        "atc_description": "PENICILLINASE SENS PENICILLINS WITH STREPTOMYCINS"
    },
    {
        "atc_level": "J01K",
        "atc_description": "ALL OTHER ANTIBIOTICS"
    },
    {
        "atc_level": "J01KA",
        "atc_description": "CARBOHYDRATE ANTIBIOTICS"
    },
    {
        "atc_level": "J01KA01",
        "atc_description": "Clindamycin"
    },
    {
        "atc_level": "J01KA04",
        "atc_description": "Lincomycin"
    },
    {
        "atc_level": "J01KA05",
        "atc_description": "Vancomycin"
    },
    {
        "atc_level": "J01KA06",
        "atc_description": "Teicoplanin"
    },
    {
        "atc_level": "J01KB",
        "atc_description": "POLYPEPTIDE ANTIBIOTICS"
    },
    {
        "atc_level": "J01KB01",
        "atc_description": "Colistin"
    },
    {
        "atc_level": "J01KB02",
        "atc_description": "Polymyxin"
    },
    {
        "atc_level": "J01KC",
        "atc_description": "STEROID ANTIBIOTICS"
    },
    {
        "atc_level": "J01KC01",
        "atc_description": "Fusidic acid"
    },
    {
        "atc_level": "J01KD",
        "atc_description": "AMINOGLYCOSIDE ANTIBIOTICS"
    },
    {
        "atc_level": "J01KD01",
        "atc_description": "Tobramycin"
    },
    {
        "atc_level": "J01KD02",
        "atc_description": "Spectinomycin"
    },
    {
        "atc_level": "J01KD03",
        "atc_description": "Gentamicin"
    },
    {
        "atc_level": "J01KD04",
        "atc_description": "Kanamycin"
    },
    {
        "atc_level": "J01KD06",
        "atc_description": "Neomycin"
    },
    {
        "atc_level": "J01KD07",
        "atc_description": "Amikacin"
    },
    {
        "atc_level": "J01KD08",
        "atc_description": "Netilmicin"
    },
    {
        "atc_level": "J01KD09",
        "atc_description": "Sisomicin"
    },
    {
        "atc_level": "J01KD10",
        "atc_description": "Dibekacin"
    },
    {
        "atc_level": "J01KD11",
        "atc_description": "Ribostamycin"
    },
    {
        "atc_level": "J01KE",
        "atc_description": "MONOBACTAM ANTIBIOTICS"
    },
    {
        "atc_level": "J01KE01",
        "atc_description": "Aztreonam"
    },
    {
        "atc_level": "J01KF",
        "atc_description": "THIENAMYCIN DERIVATIVES AND ENZYME INHIBITORS"
    },
    {
        "atc_level": "J01KF01",
        "atc_description": "Imipenem and enzyme inhibitor"
    },
    {
        "atc_level": "J01KX",
        "atc_description": "OTHER ANTIBIOTICS"
    },
    {
        "atc_level": "J01KX01",
        "atc_description": "Fosfomycin"
    },
    {
        "atc_level": "J01L",
        "atc_description": "COMBINATIONS OF DIFFERENT ANTIBIOTICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J01LA",
        "atc_description": "COMBINATIONS OF DIFFERENT ANTIBIOTICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J01M",
        "atc_description": "QUINOLONE ANTIBACTERIALS"
    },
    {
        "atc_level": "J01MA",
        "atc_description": "Fluoroquinolones"
    },
    {
        "atc_level": "J01MA01",
        "atc_description": "ofloxacin"
    },
    {
        "atc_level": "J01MA02",
        "atc_description": "ciprofloxacin"
    },
    {
        "atc_level": "J01MA03",
        "atc_description": "pefloxacin"
    },
    {
        "atc_level": "J01MA04",
        "atc_description": "enoxacin"
    },
    {
        "atc_level": "J01MA05",
        "atc_description": "temafloxacin"
    },
    {
        "atc_level": "J01MA06",
        "atc_description": "norfloxacin"
    },
    {
        "atc_level": "J01MA07",
        "atc_description": "lomefloxacin"
    },
    {
        "atc_level": "J01MA08",
        "atc_description": "fleroxacin"
    },
    {
        "atc_level": "J01MA09",
        "atc_description": "sparfloxacin"
    },
    {
        "atc_level": "J01MA10",
        "atc_description": "rufloxacin"
    },
    {
        "atc_level": "J01MA11",
        "atc_description": "grepafloxacin"
    },
    {
        "atc_level": "J01MA12",
        "atc_description": "levofloxacin"
    },
    {
        "atc_level": "J01MA13",
        "atc_description": "trovafloxacin"
    },
    {
        "atc_level": "J01MA14",
        "atc_description": "moxifloxacin"
    },
    {
        "atc_level": "J01MA15",
        "atc_description": "gemifloxacin"
    },
    {
        "atc_level": "J01MA16",
        "atc_description": "gatifloxacin"
    },
    {
        "atc_level": "J01MA17",
        "atc_description": "prulifloxacin"
    },
    {
        "atc_level": "J01MA18",
        "atc_description": "pazufloxacin"
    },
    {
        "atc_level": "J01MA19",
        "atc_description": "garenoxacin"
    },
    {
        "atc_level": "J01MA21",
        "atc_description": "sitafloxacin"
    },
    {
        "atc_level": "J01MA22",
        "atc_description": "tosufloxacin"
    },
    {
        "atc_level": "J01MA23",
        "atc_description": "delafloxacin"
    },
    {
        "atc_level": "J01MA24",
        "atc_description": "levonadifloxacin"
    },
    {
        "atc_level": "J01MA25",
        "atc_description": "lascufloxacin"
    },
    {
        "atc_level": "J01MB",
        "atc_description": "Other quinolones"
    },
    {
        "atc_level": "J01MB01",
        "atc_description": "rosoxacin"
    },
    {
        "atc_level": "J01MB02",
        "atc_description": "nalidixic acid"
    },
    {
        "atc_level": "J01MB03",
        "atc_description": "piromidic acid"
    },
    {
        "atc_level": "J01MB04",
        "atc_description": "pipemidic acid"
    },
    {
        "atc_level": "J01MB05",
        "atc_description": "oxolinic acid"
    },
    {
        "atc_level": "J01MB06",
        "atc_description": "cinoxacin"
    },
    {
        "atc_level": "J01MB07",
        "atc_description": "flumequine"
    },
    {
        "atc_level": "J01MB08",
        "atc_description": "nemonoxacin"
    },
    {
        "atc_level": "J01R",
        "atc_description": "COMBINATIONS OF ANTIBACTERIALS"
    },
    {
        "atc_level": "J01RA",
        "atc_description": "Combinations of antibacterials"
    },
    {
        "atc_level": "J01RA01",
        "atc_description": "penicillins, combinations with other antibacterials"
    },
    {
        "atc_level": "J01RA02",
        "atc_description": "sulfonamides, combinations with other antibacterials (excl. trimethoprim)"
    },
    {
        "atc_level": "J01RA03",
        "atc_description": "cefuroxime and metronidazole"
    },
    {
        "atc_level": "J01RA04",
        "atc_description": "spiramycin and metronidazole"
    },
    {
        "atc_level": "J01RA05",
        "atc_description": "levofloxacin and ornidazole"
    },
    {
        "atc_level": "J01RA06",
        "atc_description": "cefepime and amikacin"
    },
    {
        "atc_level": "J01RA07",
        "atc_description": "azithromycin, fluconazole and secnidazole"
    },
    {
        "atc_level": "J01RA08",
        "atc_description": "tetracycline and oleandomycin"
    },
    {
        "atc_level": "J01RA09",
        "atc_description": "ofloxacin and ornidazole"
    },
    {
        "atc_level": "J01RA10",
        "atc_description": "ciprofloxacin and metronidazole"
    },
    {
        "atc_level": "J01RA11",
        "atc_description": "ciprofloxacin and tinidazole"
    },
    {
        "atc_level": "J01RA12",
        "atc_description": "ciprofloxacin and ornidazole"
    },
    {
        "atc_level": "J01RA13",
        "atc_description": "norfloxacin and tinidazole"
    },
    {
        "atc_level": "J01RA14",
        "atc_description": "norfloxacin and metronidazole"
    },
    {
        "atc_level": "J01RA15",
        "atc_description": "cefixime and ornidazole"
    },
    {
        "atc_level": "J01X",
        "atc_description": "OTHER ANTIBACTERIALS"
    },
    {
        "atc_level": "J01XA",
        "atc_description": "Glycopeptide antibacterials"
    },
    {
        "atc_level": "J01XA01",
        "atc_description": "vancomycin"
    },
    {
        "atc_level": "J01XA02",
        "atc_description": "teicoplanin"
    },
    {
        "atc_level": "J01XA03",
        "atc_description": "telavancin"
    },
    {
        "atc_level": "J01XA04",
        "atc_description": "dalbavancin"
    },
    {
        "atc_level": "J01XA05",
        "atc_description": "oritavancin"
    },
    {
        "atc_level": "J01XB",
        "atc_description": "Polymyxins"
    },
    {
        "atc_level": "J01XB01",
        "atc_description": "colistin"
    },
    {
        "atc_level": "J01XB02",
        "atc_description": "polymyxin B"
    },
    {
        "atc_level": "J01XC",
        "atc_description": "Steroid antibacterials"
    },
    {
        "atc_level": "J01XC01",
        "atc_description": "fusidic acid"
    },
    {
        "atc_level": "J01XD",
        "atc_description": "Imidazole derivatives"
    },
    {
        "atc_level": "J01XD01",
        "atc_description": "metronidazole"
    },
    {
        "atc_level": "J01XD02",
        "atc_description": "tinidazole"
    },
    {
        "atc_level": "J01XD03",
        "atc_description": "ornidazole"
    },
    {
        "atc_level": "J01XE",
        "atc_description": "Nitrofuran derivatives"
    },
    {
        "atc_level": "J01XE01",
        "atc_description": "nitrofurantoin"
    },
    {
        "atc_level": "J01XE02",
        "atc_description": "nifurtoinol"
    },
    {
        "atc_level": "J01XE03",
        "atc_description": "furazidin"
    },
    {
        "atc_level": "J01XE51",
        "atc_description": "nitrofurantoin, combinations"
    },
    {
        "atc_level": "J01XX",
        "atc_description": "Other antibacterials"
    },
    {
        "atc_level": "J01XX01",
        "atc_description": "fosfomycin"
    },
    {
        "atc_level": "J01XX02",
        "atc_description": "xibornol"
    },
    {
        "atc_level": "J01XX03",
        "atc_description": "clofoctol"
    },
    {
        "atc_level": "J01XX04",
        "atc_description": "spectinomycin"
    },
    {
        "atc_level": "J01XX05",
        "atc_description": "methenamine"
    },
    {
        "atc_level": "J01XX06",
        "atc_description": "mandelic acid"
    },
    {
        "atc_level": "J01XX07",
        "atc_description": "nitroxoline"
    },
    {
        "atc_level": "J01XX08",
        "atc_description": "linezolid"
    },
    {
        "atc_level": "J01XX09",
        "atc_description": "daptomycin"
    },
    {
        "atc_level": "J01XX10",
        "atc_description": "bacitracin"
    },
    {
        "atc_level": "J01XX11",
        "atc_description": "tedizolid"
    },
    {
        "atc_level": "J01XX12",
        "atc_description": "lefamulin"
    },
    {
        "atc_level": "J02",
        "atc_description": "ANTIMYCOTICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J02A",
        "atc_description": "ANTIMYCOTICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J02AA",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "J02AA01",
        "atc_description": "amphotericin B"
    },
    {
        "atc_level": "J02AA02",
        "atc_description": "hachimycin"
    },
    {
        "atc_level": "J02AB",
        "atc_description": "Imidazole derivatives"
    },
    {
        "atc_level": "J02AB01",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "J02AB02",
        "atc_description": "ketoconazole"
    },
    {
        "atc_level": "J02AC",
        "atc_description": "Triazole and tetrazole derivatives"
    },
    {
        "atc_level": "J02AC01",
        "atc_description": "fluconazole"
    },
    {
        "atc_level": "J02AC02",
        "atc_description": "itraconazole"
    },
    {
        "atc_level": "J02AC03",
        "atc_description": "voriconazole"
    },
    {
        "atc_level": "J02AC04",
        "atc_description": "posaconazole"
    },
    {
        "atc_level": "J02AC05",
        "atc_description": "isavuconazole"
    },
    {
        "atc_level": "J02AC06",
        "atc_description": "oteseconazole"
    },
    {
        "atc_level": "J02AX",
        "atc_description": "Other antimycotics for systemic use"
    },
    {
        "atc_level": "J02AX01",
        "atc_description": "flucytosine"
    },
    {
        "atc_level": "J02AX02",
        "atc_description": "Fluconazole"
    },
    {
        "atc_level": "J02AX03",
        "atc_description": "Itraconazole"
    },
    {
        "atc_level": "J02AX04",
        "atc_description": "caspofungin"
    },
    {
        "atc_level": "J02AX05",
        "atc_description": "micafungin"
    },
    {
        "atc_level": "J02AX06",
        "atc_description": "anidulafungin"
    },
    {
        "atc_level": "J03",
        "atc_description": "CHEMOTHERAPEUTICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J03A",
        "atc_description": "SULFONAMIDES"
    },
    {
        "atc_level": "J03AA",
        "atc_description": "SHORT-ACTING SULFONAMIDES"
    },
    {
        "atc_level": "J03AA02",
        "atc_description": "Sulfaisodimidine"
    },
    {
        "atc_level": "J03AA03",
        "atc_description": "Sulfamethizole"
    },
    {
        "atc_level": "J03AA04",
        "atc_description": "Sulfadimidine"
    },
    {
        "atc_level": "J03AA05",
        "atc_description": "Sulfapyridine"
    },
    {
        "atc_level": "J03AA06",
        "atc_description": "Sulfafurazole"
    },
    {
        "atc_level": "J03AA07",
        "atc_description": "Sulfanilamide"
    },
    {
        "atc_level": "J03AA08",
        "atc_description": "Sulfathiazole"
    },
    {
        "atc_level": "J03AA09",
        "atc_description": "Sulfathiourea"
    },
    {
        "atc_level": "J03AA10",
        "atc_description": "Combinations"
    },
    {
        "atc_level": "J03AB",
        "atc_description": "INTERMEDIATE-ACTING SULFONAMIDES"
    },
    {
        "atc_level": "J03AB01",
        "atc_description": "Sulfamethoxazole"
    },
    {
        "atc_level": "J03AB02",
        "atc_description": "Sulfadiazine"
    },
    {
        "atc_level": "J03AB03",
        "atc_description": "Sulfamoxole"
    },
    {
        "atc_level": "J03AB10",
        "atc_description": "Combinations"
    },
    {
        "atc_level": "J03AC",
        "atc_description": "LONG-ACTING SULFONAMIDES"
    },
    {
        "atc_level": "J03AC01",
        "atc_description": "Sulfadimethoxine"
    },
    {
        "atc_level": "J03AC02",
        "atc_description": "Sulfalene"
    },
    {
        "atc_level": "J03AC03",
        "atc_description": "Sulfametomidine"
    },
    {
        "atc_level": "J03AC04",
        "atc_description": "Sulfametoxydiazine"
    },
    {
        "atc_level": "J03AC05",
        "atc_description": "Sulfamethoxypyridazine"
    },
    {
        "atc_level": "J03AC06",
        "atc_description": "Sulfaperin"
    },
    {
        "atc_level": "J03AC07",
        "atc_description": "Sulfamerazine"
    },
    {
        "atc_level": "J03AC08",
        "atc_description": "Sulfaphenazole"
    },
    {
        "atc_level": "J03AC10",
        "atc_description": "Combinations"
    },
    {
        "atc_level": "J03AE",
        "atc_description": "DIAMINODIPHENYLSULFONES"
    },
    {
        "atc_level": "J03AE01",
        "atc_description": "Sulfoxone sodium"
    },
    {
        "atc_level": "J03B",
        "atc_description": "SULFONAMIDES AND ANTIINFECTIVES IN COMBINATION"
    },
    {
        "atc_level": "J03BA",
        "atc_description": "SULFONAMIDES AND TRIMETHOPRIM, INCL. DERIVATIVES"
    },
    {
        "atc_level": "J03BA01",
        "atc_description": "Sulfamethoxazole and trimethoprim"
    },
    {
        "atc_level": "J03BA02",
        "atc_description": "Sulfadiazine and trimethoprim"
    },
    {
        "atc_level": "J03BA03",
        "atc_description": "Sulfametrole and trimethoprim"
    },
    {
        "atc_level": "J03BA04",
        "atc_description": "Sulfamoxole and trimethoprim"
    },
    {
        "atc_level": "J03BA05",
        "atc_description": "Sulphadimidine and trimethoprim"
    },
    {
        "atc_level": "J03BB",
        "atc_description": "SULFONAMIDES AND OTHER ANTIINFECTIVES, EXCL. TRIMETHOPRIM"
    },
    {
        "atc_level": "J03BB01",
        "atc_description": "Sulfadiazine and antiinfectives"
    },
    {
        "atc_level": "J03BB10",
        "atc_description": "Combinations of sulfonamides and antiinfectives"
    },
    {
        "atc_level": "J03C",
        "atc_description": "OTHER CHEMOTHERAPEUTICS"
    },
    {
        "atc_level": "J03CA",
        "atc_description": "IMIDAZOLE DERIVATIVES"
    },
    {
        "atc_level": "J03CA01",
        "atc_description": "Metronidazole"
    },
    {
        "atc_level": "J03CA02",
        "atc_description": "Tinidazole"
    },
    {
        "atc_level": "J03CA03",
        "atc_description": "Ornidazole"
    },
    {
        "atc_level": "J03CB",
        "atc_description": "QUINOLONE DERIVATIVES"
    },
    {
        "atc_level": "J03CB01",
        "atc_description": "Rosoxacin"
    },
    {
        "atc_level": "J03CB02",
        "atc_description": "Ofloxacin"
    },
    {
        "atc_level": "J03CB03",
        "atc_description": "Ciprofloxacin"
    },
    {
        "atc_level": "J03CB04",
        "atc_description": "Pefloxacin"
    },
    {
        "atc_level": "J03CB05",
        "atc_description": "Enoxacin"
    },
    {
        "atc_level": "J04",
        "atc_description": "ANTIMYCOBACTERIALS"
    },
    {
        "atc_level": "J04A",
        "atc_description": "DRUGS FOR TREATMENT OF TUBERCULOSIS"
    },
    {
        "atc_level": "J04AA",
        "atc_description": "Aminosalicylic acid and derivatives"
    },
    {
        "atc_level": "J04AA01",
        "atc_description": "4-aminosalicylic acid"
    },
    {
        "atc_level": "J04AA02",
        "atc_description": "sodium aminosalicylate"
    },
    {
        "atc_level": "J04AA03",
        "atc_description": "calcium aminosalicylate"
    },
    {
        "atc_level": "J04AB",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "J04AB01",
        "atc_description": "cycloserine"
    },
    {
        "atc_level": "J04AB02",
        "atc_description": "rifampicin"
    },
    {
        "atc_level": "J04AB03",
        "atc_description": "rifamycin"
    },
    {
        "atc_level": "J04AB04",
        "atc_description": "rifabutin"
    },
    {
        "atc_level": "J04AB05",
        "atc_description": "rifapentine"
    },
    {
        "atc_level": "J04AB06",
        "atc_description": "enviomycin"
    },
    {
        "atc_level": "J04AB30",
        "atc_description": "capreomycin"
    },
    {
        "atc_level": "J04AC",
        "atc_description": "Hydrazides"
    },
    {
        "atc_level": "J04AC01",
        "atc_description": "isoniazid"
    },
    {
        "atc_level": "J04AC51",
        "atc_description": "isoniazid, combinations"
    },
    {
        "atc_level": "J04AD",
        "atc_description": "Thiocarbamide derivatives"
    },
    {
        "atc_level": "J04AD01",
        "atc_description": "protionamide"
    },
    {
        "atc_level": "J04AD02",
        "atc_description": "tiocarlide"
    },
    {
        "atc_level": "J04AD03",
        "atc_description": "ethionamide"
    },
    {
        "atc_level": "J04AK",
        "atc_description": "Other drugs for treatment of tuberculosis"
    },
    {
        "atc_level": "J04AK01",
        "atc_description": "pyrazinamide"
    },
    {
        "atc_level": "J04AK02",
        "atc_description": "ethambutol"
    },
    {
        "atc_level": "J04AK03",
        "atc_description": "terizidone"
    },
    {
        "atc_level": "J04AK04",
        "atc_description": "morinamide"
    },
    {
        "atc_level": "J04AK05",
        "atc_description": "bedaquiline"
    },
    {
        "atc_level": "J04AK06",
        "atc_description": "delamanid"
    },
    {
        "atc_level": "J04AK07",
        "atc_description": "thioacetazone"
    },
    {
        "atc_level": "J04AK08",
        "atc_description": "pretomanid"
    },
    {
        "atc_level": "J04AL",
        "atc_description": "COMBINATIONS OF TUBERCULOSTATICS"
    },
    {
        "atc_level": "J04AM",
        "atc_description": "Combinations of drugs for treatment of tuberculosis"
    },
    {
        "atc_level": "J04AM01",
        "atc_description": "streptomycin and isoniazid"
    },
    {
        "atc_level": "J04AM02",
        "atc_description": "rifampicin and isoniazid"
    },
    {
        "atc_level": "J04AM03",
        "atc_description": "ethambutol and isoniazid"
    },
    {
        "atc_level": "J04AM04",
        "atc_description": "thioacetazone and isoniazid"
    },
    {
        "atc_level": "J04AM05",
        "atc_description": "rifampicin, pyrazinamide and isoniazid"
    },
    {
        "atc_level": "J04AM06",
        "atc_description": "rifampicin, pyrazinamide, ethambutol and isoniazid"
    },
    {
        "atc_level": "J04AM07",
        "atc_description": "rifampicin, ethambutol and isoniazid"
    },
    {
        "atc_level": "J04AM08",
        "atc_description": "isoniazid, sulfamethoxazole, trimethoprim and pyridoxine"
    },
    {
        "atc_level": "J04B",
        "atc_description": "DRUGS FOR TREATMENT OF LEPRA"
    },
    {
        "atc_level": "J04BA",
        "atc_description": "Drugs for treatment of lepra"
    },
    {
        "atc_level": "J04BA01",
        "atc_description": "clofazimine"
    },
    {
        "atc_level": "J04BA02",
        "atc_description": "dapsone"
    },
    {
        "atc_level": "J04BA03",
        "atc_description": "aldesulfone sodium"
    },
    {
        "atc_level": "J05",
        "atc_description": "ANTIVIRALS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "J05A",
        "atc_description": "DIRECT ACTING ANTIVIRALS"
    },
    {
        "atc_level": "J05AA",
        "atc_description": "Thiosemicarbazones"
    },
    {
        "atc_level": "J05AA01",
        "atc_description": "metisazone"
    },
    {
        "atc_level": "J05AB",
        "atc_description": "Nucleosides and nucleotides excl. reverse transcriptase inhibitors"
    },
    {
        "atc_level": "J05AB01",
        "atc_description": "aciclovir"
    },
    {
        "atc_level": "J05AB02",
        "atc_description": "idoxuridine"
    },
    {
        "atc_level": "J05AB03",
        "atc_description": "vidarabine"
    },
    {
        "atc_level": "J05AB04",
        "atc_description": "ribavirin"
    },
    {
        "atc_level": "J05AB05",
        "atc_description": "Zidovudine"
    },
    {
        "atc_level": "J05AB06",
        "atc_description": "ganciclovir"
    },
    {
        "atc_level": "J05AB07",
        "atc_description": "Didanosine"
    },
    {
        "atc_level": "J05AB08",
        "atc_description": "Zalcitabine"
    },
    {
        "atc_level": "J05AB09",
        "atc_description": "famciclovir"
    },
    {
        "atc_level": "J05AB10",
        "atc_description": "Lamivudine"
    },
    {
        "atc_level": "J05AB11",
        "atc_description": "valaciclovir"
    },
    {
        "atc_level": "J05AB12",
        "atc_description": "cidofovir"
    },
    {
        "atc_level": "J05AB13",
        "atc_description": "penciclovir"
    },
    {
        "atc_level": "J05AB14",
        "atc_description": "valganciclovir"
    },
    {
        "atc_level": "J05AB15",
        "atc_description": "brivudine"
    },
    {
        "atc_level": "J05AB16",
        "atc_description": "remdesivir"
    },
    {
        "atc_level": "J05AB17",
        "atc_description": "brincidofovir"
    },
    {
        "atc_level": "J05AB54",
        "atc_description": "Ribavirin, combinations"
    },
    {
        "atc_level": "J05AC",
        "atc_description": "Cyclic amines"
    },
    {
        "atc_level": "J05AC01",
        "atc_description": "Amantadine"
    },
    {
        "atc_level": "J05AC02",
        "atc_description": "rimantadine"
    },
    {
        "atc_level": "J05AC03",
        "atc_description": "tromantadine"
    },
    {
        "atc_level": "J05AD",
        "atc_description": "Phosphonic acid derivatives"
    },
    {
        "atc_level": "J05AD01",
        "atc_description": "foscarnet"
    },
    {
        "atc_level": "J05AD02",
        "atc_description": "fosfonet"
    },
    {
        "atc_level": "J05AE",
        "atc_description": "Protease inhibitors"
    },
    {
        "atc_level": "J05AE01",
        "atc_description": "saquinavir"
    },
    {
        "atc_level": "J05AE02",
        "atc_description": "indinavir"
    },
    {
        "atc_level": "J05AE03",
        "atc_description": "ritonavir"
    },
    {
        "atc_level": "J05AE04",
        "atc_description": "nelfinavir"
    },
    {
        "atc_level": "J05AE05",
        "atc_description": "amprenavir"
    },
    {
        "atc_level": "J05AE06",
        "atc_description": "lopinavir"
    },
    {
        "atc_level": "J05AE07",
        "atc_description": "fosamprenavir"
    },
    {
        "atc_level": "J05AE08",
        "atc_description": "atazanavir"
    },
    {
        "atc_level": "J05AE09",
        "atc_description": "tipranavir"
    },
    {
        "atc_level": "J05AE10",
        "atc_description": "darunavir"
    },
    {
        "atc_level": "J05AE11",
        "atc_description": "telaprevir"
    },
    {
        "atc_level": "J05AE12",
        "atc_description": "boceprevir"
    },
    {
        "atc_level": "J05AE13",
        "atc_description": "faldaprevir"
    },
    {
        "atc_level": "J05AE14",
        "atc_description": "simeprevir"
    },
    {
        "atc_level": "J05AE15",
        "atc_description": "asunaprevir"
    },
    {
        "atc_level": "J05AF",
        "atc_description": "Nucleoside and nucleotide reverse transcriptase inhibitors"
    },
    {
        "atc_level": "J05AF01",
        "atc_description": "zidovudine"
    },
    {
        "atc_level": "J05AF02",
        "atc_description": "didanosine"
    },
    {
        "atc_level": "J05AF03",
        "atc_description": "zalcitabine"
    },
    {
        "atc_level": "J05AF04",
        "atc_description": "stavudine"
    },
    {
        "atc_level": "J05AF05",
        "atc_description": "lamivudine"
    },
    {
        "atc_level": "J05AF06",
        "atc_description": "abacavir"
    },
    {
        "atc_level": "J05AF07",
        "atc_description": "tenofovir disoproxil"
    },
    {
        "atc_level": "J05AF08",
        "atc_description": "adefovir dipivoxil"
    },
    {
        "atc_level": "J05AF09",
        "atc_description": "emtricitabine"
    },
    {
        "atc_level": "J05AF10",
        "atc_description": "entecavir"
    },
    {
        "atc_level": "J05AF11",
        "atc_description": "telbivudine"
    },
    {
        "atc_level": "J05AF12",
        "atc_description": "clevudine"
    },
    {
        "atc_level": "J05AF13",
        "atc_description": "tenofovir alafenamide"
    },
    {
        "atc_level": "J05AF30",
        "atc_description": "Combinations"
    },
    {
        "atc_level": "J05AG",
        "atc_description": "Non-nucleoside reverse transcriptase inhibitors"
    },
    {
        "atc_level": "J05AG01",
        "atc_description": "nevirapine"
    },
    {
        "atc_level": "J05AG02",
        "atc_description": "delavirdine"
    },
    {
        "atc_level": "J05AG03",
        "atc_description": "efavirenz"
    },
    {
        "atc_level": "J05AG04",
        "atc_description": "etravirine"
    },
    {
        "atc_level": "J05AG05",
        "atc_description": "rilpivirine"
    },
    {
        "atc_level": "J05AG06",
        "atc_description": "doravirine"
    },
    {
        "atc_level": "J05AH",
        "atc_description": "Neuraminidase inhibitors"
    },
    {
        "atc_level": "J05AH01",
        "atc_description": "zanamivir"
    },
    {
        "atc_level": "J05AH02",
        "atc_description": "oseltamivir"
    },
    {
        "atc_level": "J05AH03",
        "atc_description": "peramivir"
    },
    {
        "atc_level": "J05AH04",
        "atc_description": "laninamivir"
    },
    {
        "atc_level": "J05AJ",
        "atc_description": "Integrase inhibitors"
    },
    {
        "atc_level": "J05AJ01",
        "atc_description": "raltegravir"
    },
    {
        "atc_level": "J05AJ02",
        "atc_description": "elvitegravir"
    },
    {
        "atc_level": "J05AJ03",
        "atc_description": "dolutegravir"
    },
    {
        "atc_level": "J05AJ04",
        "atc_description": "cabotegravir"
    },
    {
        "atc_level": "J05AP",
        "atc_description": "Antivirals for treatment of HCV infections"
    },
    {
        "atc_level": "J05AP01",
        "atc_description": "ribavirin"
    },
    {
        "atc_level": "J05AP02",
        "atc_description": "telaprevir"
    },
    {
        "atc_level": "J05AP03",
        "atc_description": "boceprevir"
    },
    {
        "atc_level": "J05AP04",
        "atc_description": "faldaprevir"
    },
    {
        "atc_level": "J05AP05",
        "atc_description": "simeprevir"
    },
    {
        "atc_level": "J05AP06",
        "atc_description": "asunaprevir"
    },
    {
        "atc_level": "J05AP07",
        "atc_description": "daclatasvir"
    },
    {
        "atc_level": "J05AP08",
        "atc_description": "sofosbuvir"
    },
    {
        "atc_level": "J05AP09",
        "atc_description": "dasabuvir"
    },
    {
        "atc_level": "J05AP10",
        "atc_description": "elbasvir"
    },
    {
        "atc_level": "J05AP11",
        "atc_description": "grazoprevir"
    },
    {
        "atc_level": "J05AP12",
        "atc_description": "coblopasvir"
    },
    {
        "atc_level": "J05AP51",
        "atc_description": "sofosbuvir and ledipasvir"
    },
    {
        "atc_level": "J05AP52",
        "atc_description": "dasabuvir, ombitasvir, paritaprevir and ritonavir"
    },
    {
        "atc_level": "J05AP53",
        "atc_description": "ombitasvir, paritaprevir and ritonavir"
    },
    {
        "atc_level": "J05AP54",
        "atc_description": "elbasvir and grazoprevir"
    },
    {
        "atc_level": "J05AP55",
        "atc_description": "sofosbuvir and velpatasvir"
    },
    {
        "atc_level": "J05AP56",
        "atc_description": "sofosbuvir, velpatasvir and voxilaprevir"
    },
    {
        "atc_level": "J05AP57",
        "atc_description": "glecaprevir and pibrentasvir"
    },
    {
        "atc_level": "J05AP58",
        "atc_description": "daclatasvir, asunaprevir and beclabuvir"
    },
    {
        "atc_level": "J05AR",
        "atc_description": "Antivirals for treatment of HIV infections, combinations"
    },
    {
        "atc_level": "J05AR01",
        "atc_description": "zidovudine and lamivudine"
    },
    {
        "atc_level": "J05AR02",
        "atc_description": "lamivudine and abacavir"
    },
    {
        "atc_level": "J05AR03",
        "atc_description": "tenofovir disoproxil and emtricitabine"
    },
    {
        "atc_level": "J05AR04",
        "atc_description": "zidovudine, lamivudine and abacavir"
    },
    {
        "atc_level": "J05AR05",
        "atc_description": "zidovudine, lamivudine and nevirapine"
    },
    {
        "atc_level": "J05AR06",
        "atc_description": "emtricitabine, tenofovir disoproxil and efavirenz"
    },
    {
        "atc_level": "J05AR07",
        "atc_description": "stavudine, lamivudine and nevirapine"
    },
    {
        "atc_level": "J05AR08",
        "atc_description": "emtricitabine, tenofovir disoproxil and rilpivirine"
    },
    {
        "atc_level": "J05AR09",
        "atc_description": "emtricitabine, tenofovir disoproxil, elvitegravir and cobicistat"
    },
    {
        "atc_level": "J05AR10",
        "atc_description": "lopinavir and ritonavir"
    },
    {
        "atc_level": "J05AR11",
        "atc_description": "lamivudine, tenofovir disoproxil and efavirenz"
    },
    {
        "atc_level": "J05AR12",
        "atc_description": "lamivudine and tenofovir disoproxil"
    },
    {
        "atc_level": "J05AR13",
        "atc_description": "lamivudine, abacavir and dolutegravir"
    },
    {
        "atc_level": "J05AR14",
        "atc_description": "darunavir and cobicistat"
    },
    {
        "atc_level": "J05AR15",
        "atc_description": "atazanavir and cobicistat"
    },
    {
        "atc_level": "J05AR16",
        "atc_description": "lamivudine and raltegravir"
    },
    {
        "atc_level": "J05AR17",
        "atc_description": "emtricitabine and tenofovir alafenamide"
    },
    {
        "atc_level": "J05AR18",
        "atc_description": "emtricitabine, tenofovir alafenamide, elvitegravir and cobicistat"
    },
    {
        "atc_level": "J05AR19",
        "atc_description": "emtricitabine, tenofovir alafenamide and rilpivirine"
    },
    {
        "atc_level": "J05AR20",
        "atc_description": "emtricitabine, tenofovir alafenamide and bictegravir"
    },
    {
        "atc_level": "J05AR21",
        "atc_description": "dolutegravir and rilpivirine"
    },
    {
        "atc_level": "J05AR22",
        "atc_description": "emtricitabine, tenofovir alafenamide, darunavir and cobicistat"
    },
    {
        "atc_level": "J05AR23",
        "atc_description": "atazanavir and ritonavir"
    },
    {
        "atc_level": "J05AR24",
        "atc_description": "lamivudine, tenofovir disoproxil and doravirine"
    },
    {
        "atc_level": "J05AR25",
        "atc_description": "lamivudine and dolutegravir"
    },
    {
        "atc_level": "J05AR26",
        "atc_description": "darunavir and ritonavir"
    },
    {
        "atc_level": "J05AR27",
        "atc_description": "lamivudine, tenofovir disoproxil and dolutegravir"
    },
    {
        "atc_level": "J05AX",
        "atc_description": "Other antivirals"
    },
    {
        "atc_level": "J05AX01",
        "atc_description": "moroxydine"
    },
    {
        "atc_level": "J05AX02",
        "atc_description": "lysozyme"
    },
    {
        "atc_level": "J05AX03",
        "atc_description": "Nevirapine"
    },
    {
        "atc_level": "J05AX04",
        "atc_description": "Stavudine"
    },
    {
        "atc_level": "J05AX05",
        "atc_description": "inosine pranobex"
    },
    {
        "atc_level": "J05AX06",
        "atc_description": "pleconaril"
    },
    {
        "atc_level": "J05AX07",
        "atc_description": "enfuvirtide"
    },
    {
        "atc_level": "J05AX08",
        "atc_description": "raltegravir"
    },
    {
        "atc_level": "J05AX09",
        "atc_description": "maraviroc"
    },
    {
        "atc_level": "J05AX10",
        "atc_description": "maribavir"
    },
    {
        "atc_level": "J05AX11",
        "atc_description": "elvitegravir"
    },
    {
        "atc_level": "J05AX12",
        "atc_description": "dolutegravir"
    },
    {
        "atc_level": "J05AX13",
        "atc_description": "umifenovir"
    },
    {
        "atc_level": "J05AX14",
        "atc_description": "daclatasvir"
    },
    {
        "atc_level": "J05AX15",
        "atc_description": "sofosbuvir"
    },
    {
        "atc_level": "J05AX16",
        "atc_description": "dasabuvir"
    },
    {
        "atc_level": "J05AX17",
        "atc_description": "enisamium iodide"
    },
    {
        "atc_level": "J05AX18",
        "atc_description": "letermovir"
    },
    {
        "atc_level": "J05AX19",
        "atc_description": "tilorone"
    },
    {
        "atc_level": "J05AX21",
        "atc_description": "pentanedioic acid imidazolyl ethanamide"
    },
    {
        "atc_level": "J05AX23",
        "atc_description": "ibalizumab"
    },
    {
        "atc_level": "J05AX24",
        "atc_description": "tecovirimat"
    },
    {
        "atc_level": "J05AX25",
        "atc_description": "baloxavir marboxil"
    },
    {
        "atc_level": "J05AX26",
        "atc_description": "amenamevir"
    },
    {
        "atc_level": "J05AX27",
        "atc_description": "favipiravir"
    },
    {
        "atc_level": "J05AX28",
        "atc_description": "bulevirtide"
    },
    {
        "atc_level": "J05AX29",
        "atc_description": "fostemsavir"
    },
    {
        "atc_level": "J05AX31",
        "atc_description": "lenacapavir"
    },
    {
        "atc_level": "J05AX65",
        "atc_description": "sofosbuvir and ledipasvir"
    },
    {
        "atc_level": "J05AX66",
        "atc_description": "dasabuvir, ombitasvir, paritaprevir and ritonavir"
    },
    {
        "atc_level": "J05AX67",
        "atc_description": "ombitasvir, paritaprevir and ritonavir"
    },
    {
        "atc_level": "J05AX68",
        "atc_description": "elbasvir and grazoprevir"
    },
    {
        "atc_level": "J05B",
        "atc_description": "IMMUNOSTIMULATING AGENTS"
    },
    {
        "atc_level": "J05BA",
        "atc_description": "INTERFERONS"
    },
    {
        "atc_level": "J05BA01",
        "atc_description": "Interferon-alfa (human leucocyte)"
    },
    {
        "atc_level": "J05BB",
        "atc_description": "INTERFERON INDUCING SUBSTANCES"
    },
    {
        "atc_level": "J05BB01",
        "atc_description": "Poly I:C"
    },
    {
        "atc_level": "J05BB02",
        "atc_description": "Poly ICLC"
    },
    {
        "atc_level": "J05BX",
        "atc_description": "OTHER IMMUNOSTIMULATING AGENTS"
    },
    {
        "atc_level": "J05BX01",
        "atc_description": "Thymopentin"
    },
    {
        "atc_level": "J05C",
        "atc_description": "AGENTS WITH IMMUNOSTIMULANT AND ANTIVIRAL ACTIVITY"
    },
    {
        "atc_level": "J06",
        "atc_description": "IMMUNE SERA AND IMMUNOGLOBULINS"
    },
    {
        "atc_level": "J06A",
        "atc_description": "IMMUNE SERA"
    },
    {
        "atc_level": "J06AA",
        "atc_description": "Immune sera"
    },
    {
        "atc_level": "J06AA01",
        "atc_description": "diphtheria antitoxin"
    },
    {
        "atc_level": "J06AA02",
        "atc_description": "tetanus antitoxin"
    },
    {
        "atc_level": "J06AA03",
        "atc_description": "snake venom antiserum"
    },
    {
        "atc_level": "J06AA04",
        "atc_description": "botulinum antitoxin"
    },
    {
        "atc_level": "J06AA05",
        "atc_description": "gas-gangrene sera"
    },
    {
        "atc_level": "J06AA06",
        "atc_description": "rabies serum"
    },
    {
        "atc_level": "J06B",
        "atc_description": "IMMUNOGLOBULINS"
    },
    {
        "atc_level": "J06BA",
        "atc_description": "Immunoglobulins, normal human"
    },
    {
        "atc_level": "J06BA01",
        "atc_description": "immunoglobulins, normal human, for extravascular adm."
    },
    {
        "atc_level": "J06BA02",
        "atc_description": "immunoglobulins, normal human, for intravascular adm."
    },
    {
        "atc_level": "J06BB",
        "atc_description": "Specific immunoglobulins"
    },
    {
        "atc_level": "J06BB01",
        "atc_description": "anti-D (rh) immunoglobulin"
    },
    {
        "atc_level": "J06BB02",
        "atc_description": "tetanus immunoglobulin"
    },
    {
        "atc_level": "J06BB03",
        "atc_description": "varicella/zoster immunoglobulin"
    },
    {
        "atc_level": "J06BB04",
        "atc_description": "hepatitis B immunoglobulin"
    },
    {
        "atc_level": "J06BB05",
        "atc_description": "rabies immunoglobulin"
    },
    {
        "atc_level": "J06BB06",
        "atc_description": "rubella immunoglobulin"
    },
    {
        "atc_level": "J06BB07",
        "atc_description": "vaccinia immunoglobulin"
    },
    {
        "atc_level": "J06BB08",
        "atc_description": "staphylococcus immunoglobulin"
    },
    {
        "atc_level": "J06BB09",
        "atc_description": "cytomegalovirus immunoglobulin"
    },
    {
        "atc_level": "J06BB10",
        "atc_description": "diphtheria immunoglobulin"
    },
    {
        "atc_level": "J06BB11",
        "atc_description": "hepatitis A immunoglobulin"
    },
    {
        "atc_level": "J06BB12",
        "atc_description": "encephalitis, tick borne immunoglobulin"
    },
    {
        "atc_level": "J06BB13",
        "atc_description": "pertussis immunoglobulin"
    },
    {
        "atc_level": "J06BB14",
        "atc_description": "measles immunoglobulin"
    },
    {
        "atc_level": "J06BB15",
        "atc_description": "mumps immunoglobulin"
    },
    {
        "atc_level": "J06BB16",
        "atc_description": "palivizumab"
    },
    {
        "atc_level": "J06BB17",
        "atc_description": "motavizumab"
    },
    {
        "atc_level": "J06BB18",
        "atc_description": "raxibacumab"
    },
    {
        "atc_level": "J06BB19",
        "atc_description": "anthrax immunoglobulin"
    },
    {
        "atc_level": "J06BB21",
        "atc_description": "bezlotoxumab"
    },
    {
        "atc_level": "J06BB22",
        "atc_description": "obiltoxaximab"
    },
    {
        "atc_level": "J06BB30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J06BC",
        "atc_description": "Antibacterial monoclonal antibodies"
    },
    {
        "atc_level": "J06BC01",
        "atc_description": "nebacumab"
    },
    {
        "atc_level": "J06BC02",
        "atc_description": "raxibacumab"
    },
    {
        "atc_level": "J06BC03",
        "atc_description": "bezlotoxumab"
    },
    {
        "atc_level": "J06BC04",
        "atc_description": "obiltoxaximab"
    },
    {
        "atc_level": "J06BD",
        "atc_description": "Antiviral monoclonal antibodies"
    },
    {
        "atc_level": "J06BD01",
        "atc_description": "palivizumab"
    },
    {
        "atc_level": "J06BD02",
        "atc_description": "motavizumab"
    },
    {
        "atc_level": "J06BD03",
        "atc_description": "tixagevimab and cilgavimab"
    },
    {
        "atc_level": "J07",
        "atc_description": "VACCINES"
    },
    {
        "atc_level": "J07A",
        "atc_description": "BACTERIAL VACCINES"
    },
    {
        "atc_level": "J07AA",
        "atc_description": "VARIOUS VACCINES"
    },
    {
        "atc_level": "J07AA01",
        "atc_description": "Arthritis"
    },
    {
        "atc_level": "J07AA02",
        "atc_description": "Diphteria"
    },
    {
        "atc_level": "J07AA03",
        "atc_description": "Diphteria-tetanus"
    },
    {
        "atc_level": "J07AA04",
        "atc_description": "Diphteria-tetanus-pertussis"
    },
    {
        "atc_level": "J07AA05",
        "atc_description": "Pertussis"
    },
    {
        "atc_level": "J07AA06",
        "atc_description": "Respiratory system infections"
    },
    {
        "atc_level": "J07AA07",
        "atc_description": "Staphylococcus infections"
    },
    {
        "atc_level": "J07AA08",
        "atc_description": "Tetanus"
    },
    {
        "atc_level": "J07AA09",
        "atc_description": "Streptococcus infections"
    },
    {
        "atc_level": "J07AA10",
        "atc_description": "Typhoid-paratyphoid A and B"
    },
    {
        "atc_level": "J07AA11",
        "atc_description": "Influenza"
    },
    {
        "atc_level": "J07AA12",
        "atc_description": "Cholera"
    },
    {
        "atc_level": "J07AA13",
        "atc_description": "Variola (smallpox)"
    },
    {
        "atc_level": "J07AA14",
        "atc_description": "Typhoid"
    },
    {
        "atc_level": "J07AA15",
        "atc_description": "BCG-vaccine"
    },
    {
        "atc_level": "J07AA16",
        "atc_description": "Yellow fever"
    },
    {
        "atc_level": "J07AA17",
        "atc_description": "Rabies"
    },
    {
        "atc_level": "J07AA18",
        "atc_description": "Parotitis epidemica (mumps)"
    },
    {
        "atc_level": "J07AA19",
        "atc_description": "Meningococcus infections"
    },
    {
        "atc_level": "J07AA20",
        "atc_description": "Morbilli (measles)"
    },
    {
        "atc_level": "J07AA21",
        "atc_description": "Pest (plague)"
    },
    {
        "atc_level": "J07AA22",
        "atc_description": "Poliomyelitis"
    },
    {
        "atc_level": "J07AA23",
        "atc_description": "Encephalitis, japanese"
    },
    {
        "atc_level": "J07AA24",
        "atc_description": "Meningo-encephalitis, tick-borne"
    },
    {
        "atc_level": "J07AA25",
        "atc_description": "Haemophilus influenza type B infections"
    },
    {
        "atc_level": "J07AA32",
        "atc_description": "Typhus exanthematicus"
    },
    {
        "atc_level": "J07AA33",
        "atc_description": "Morbilli-parotitis epidemica- rubella"
    },
    {
        "atc_level": "J07AA34",
        "atc_description": "Hepatitis B"
    },
    {
        "atc_level": "J07AA35",
        "atc_description": "Morbilli-parotitis epidemica"
    },
    {
        "atc_level": "J07AA39",
        "atc_description": "Rubella"
    },
    {
        "atc_level": "J07AA40",
        "atc_description": "Pneumococcus infections"
    },
    {
        "atc_level": "J07AB",
        "atc_description": "VACCINES IN COMBINATION WITH IMMUNOGLOBULINS"
    },
    {
        "atc_level": "J07AB08",
        "atc_description": "Tetanus"
    },
    {
        "atc_level": "J07AC",
        "atc_description": "Anthrax vaccines"
    },
    {
        "atc_level": "J07AC01",
        "atc_description": "anthrax antigen"
    },
    {
        "atc_level": "J07AD",
        "atc_description": "Brucellosis vaccines"
    },
    {
        "atc_level": "J07AD01",
        "atc_description": "brucella antigen"
    },
    {
        "atc_level": "J07AE",
        "atc_description": "Cholera vaccines"
    },
    {
        "atc_level": "J07AE01",
        "atc_description": "cholera, inactivated, whole cell"
    },
    {
        "atc_level": "J07AE02",
        "atc_description": "cholera, live attenuated"
    },
    {
        "atc_level": "J07AE51",
        "atc_description": "cholera, combinations with typhoid vaccine, inactivated, whole cell"
    },
    {
        "atc_level": "J07AF",
        "atc_description": "Diphtheria vaccines"
    },
    {
        "atc_level": "J07AF01",
        "atc_description": "diphtheria toxoid"
    },
    {
        "atc_level": "J07AG",
        "atc_description": "Haemophilus influenzae B vaccines"
    },
    {
        "atc_level": "J07AG01",
        "atc_description": "haemophilus influenzae B, purified antigen conjugated"
    },
    {
        "atc_level": "J07AG51",
        "atc_description": "haemophilus influenzae B, combinations with toxoids"
    },
    {
        "atc_level": "J07AG52",
        "atc_description": "haemophilus influenzae B, combinations with pertussis and toxoids"
    },
    {
        "atc_level": "J07AG53",
        "atc_description": "haemophilus influenzae B, combinations with meningococcus C, conjugated"
    },
    {
        "atc_level": "J07AG54",
        "atc_description": "haemophilus influenza B, combinations with meningococcus C,Y, conjugated"
    },
    {
        "atc_level": "J07AH",
        "atc_description": "Meningococcal vaccines"
    },
    {
        "atc_level": "J07AH01",
        "atc_description": "meningococcus A, purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AH02",
        "atc_description": "other meningococcal monovalent purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AH03",
        "atc_description": "meningococcus A,C, bivalent purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AH04",
        "atc_description": "meningococcus A,C,Y,W-135, tetravalent purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AH05",
        "atc_description": "other meningococcal polyvalent purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AH06",
        "atc_description": "meningococcus B, outer membrane vesicle vaccine"
    },
    {
        "atc_level": "J07AH07",
        "atc_description": "meningococcus C, purified polysaccharides antigen conjugated"
    },
    {
        "atc_level": "J07AH08",
        "atc_description": "meningococcus A,C,Y,W-135, tetravalent purified polysaccharides antigen conjugated"
    },
    {
        "atc_level": "J07AH09",
        "atc_description": "meningococcus B, multicomponent vaccine"
    },
    {
        "atc_level": "J07AH10",
        "atc_description": "meningococcus A, purified polysaccharides antigen conjugated"
    },
    {
        "atc_level": "J07AJ",
        "atc_description": "Pertussis vaccines"
    },
    {
        "atc_level": "J07AJ01",
        "atc_description": "pertussis, inactivated, whole cell"
    },
    {
        "atc_level": "J07AJ02",
        "atc_description": "pertussis, purified antigen"
    },
    {
        "atc_level": "J07AJ51",
        "atc_description": "pertussis, inactivated, whole cell, combinations with toxoids"
    },
    {
        "atc_level": "J07AJ52",
        "atc_description": "pertussis, purified antigen, combinations with toxoids"
    },
    {
        "atc_level": "J07AK",
        "atc_description": "Plague vaccines"
    },
    {
        "atc_level": "J07AK01",
        "atc_description": "plague, inactivated, whole cell"
    },
    {
        "atc_level": "J07AL",
        "atc_description": "Pneumococcal vaccines"
    },
    {
        "atc_level": "J07AL01",
        "atc_description": "pneumococcus, purified polysaccharides antigen"
    },
    {
        "atc_level": "J07AL02",
        "atc_description": "pneumococcus, purified polysaccharides antigen conjugated"
    },
    {
        "atc_level": "J07AL52",
        "atc_description": "pneumococcus purified polysaccharides antigen and haemophilus influenzae, conjugated"
    },
    {
        "atc_level": "J07AM",
        "atc_description": "Tetanus vaccines"
    },
    {
        "atc_level": "J07AM01",
        "atc_description": "tetanus toxoid"
    },
    {
        "atc_level": "J07AM51",
        "atc_description": "tetanus toxoid, combinations with diphtheria toxoid"
    },
    {
        "atc_level": "J07AM52",
        "atc_description": "tetanus toxoid, combinations with tetanus immunoglobulin"
    },
    {
        "atc_level": "J07AN",
        "atc_description": "Tuberculosis vaccines"
    },
    {
        "atc_level": "J07AN01",
        "atc_description": "tuberculosis, live attenuated"
    },
    {
        "atc_level": "J07AP",
        "atc_description": "Typhoid vaccines"
    },
    {
        "atc_level": "J07AP01",
        "atc_description": "typhoid, oral, live attenuated"
    },
    {
        "atc_level": "J07AP02",
        "atc_description": "typhoid, inactivated, whole cell"
    },
    {
        "atc_level": "J07AP03",
        "atc_description": "typhoid, purified polysaccharide antigen"
    },
    {
        "atc_level": "J07AP10",
        "atc_description": "typhoid, combinations with paratyphi types"
    },
    {
        "atc_level": "J07AR",
        "atc_description": "Typhus (exanthematicus) vaccines"
    },
    {
        "atc_level": "J07AR01",
        "atc_description": "typhus exanthematicus, inactivated, whole cell"
    },
    {
        "atc_level": "J07AX",
        "atc_description": "Other bacterial vaccines"
    },
    {
        "atc_level": "J07B",
        "atc_description": "VIRAL VACCINES"
    },
    {
        "atc_level": "J07BA",
        "atc_description": "Encephalitis vaccines"
    },
    {
        "atc_level": "J07BA01",
        "atc_description": "encephalitis, tick borne, inactivated, whole virus"
    },
    {
        "atc_level": "J07BA02",
        "atc_description": "encephalitis, Japanese, inactivated, whole virus"
    },
    {
        "atc_level": "J07BA03",
        "atc_description": "encephalitis, Japanese, live attenuated"
    },
    {
        "atc_level": "J07BB",
        "atc_description": "Influenza vaccines"
    },
    {
        "atc_level": "J07BB01",
        "atc_description": "influenza, inactivated, whole virus"
    },
    {
        "atc_level": "J07BB02",
        "atc_description": "influenza, inactivated, split virus or surface antigen"
    },
    {
        "atc_level": "J07BB03",
        "atc_description": "influenza, live attenuated"
    },
    {
        "atc_level": "J07BB04",
        "atc_description": "influenza, virus like particles"
    },
    {
        "atc_level": "J07BC",
        "atc_description": "Hepatitis vaccines"
    },
    {
        "atc_level": "J07BC01",
        "atc_description": "hepatitis B, purified antigen"
    },
    {
        "atc_level": "J07BC02",
        "atc_description": "hepatitis A, inactivated, whole virus"
    },
    {
        "atc_level": "J07BC20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "J07BD",
        "atc_description": "Measles vaccines"
    },
    {
        "atc_level": "J07BD01",
        "atc_description": "measles, live attenuated"
    },
    {
        "atc_level": "J07BD51",
        "atc_description": "measles, combinations with mumps, live attenuated"
    },
    {
        "atc_level": "J07BD52",
        "atc_description": "measles, combinations with mumps and rubella, live attenuated"
    },
    {
        "atc_level": "J07BD53",
        "atc_description": "measles, combinations with rubella, live attenuated"
    },
    {
        "atc_level": "J07BD54",
        "atc_description": "measles, combinations with mumps, rubella and varicella, live attenuated"
    },
    {
        "atc_level": "J07BE",
        "atc_description": "Mumps vaccines"
    },
    {
        "atc_level": "J07BE01",
        "atc_description": "mumps, live attenuated"
    },
    {
        "atc_level": "J07BF",
        "atc_description": "Poliomyelitis vaccines"
    },
    {
        "atc_level": "J07BF01",
        "atc_description": "poliomyelitis oral, monovalent, live attenuated"
    },
    {
        "atc_level": "J07BF02",
        "atc_description": "poliomyelitis oral, trivalent, live attenuated"
    },
    {
        "atc_level": "J07BF03",
        "atc_description": "poliomyelitis, trivalent, inactivated, whole virus"
    },
    {
        "atc_level": "J07BF04",
        "atc_description": "poliomyelitis oral, bivalent, live attenuated"
    },
    {
        "atc_level": "J07BG",
        "atc_description": "Rabies vaccines"
    },
    {
        "atc_level": "J07BG01",
        "atc_description": "rabies, inactivated, whole virus"
    },
    {
        "atc_level": "J07BH",
        "atc_description": "Rota virus diarrhea vaccines"
    },
    {
        "atc_level": "J07BH01",
        "atc_description": "rota virus, live attenuated"
    },
    {
        "atc_level": "J07BH02",
        "atc_description": "rota virus, pentavalent, live, reassorted"
    },
    {
        "atc_level": "J07BJ",
        "atc_description": "Rubella vaccines"
    },
    {
        "atc_level": "J07BJ01",
        "atc_description": "rubella, live attenuated"
    },
    {
        "atc_level": "J07BJ51",
        "atc_description": "rubella, combinations with mumps, live attenuated"
    },
    {
        "atc_level": "J07BK",
        "atc_description": "Varicella zoster vaccines"
    },
    {
        "atc_level": "J07BK01",
        "atc_description": "varicella, live attenuated"
    },
    {
        "atc_level": "J07BK02",
        "atc_description": "zoster, live attenuated"
    },
    {
        "atc_level": "J07BK03",
        "atc_description": "zoster, purified antigen"
    },
    {
        "atc_level": "J07BL",
        "atc_description": "Yellow fever vaccines"
    },
    {
        "atc_level": "J07BL01",
        "atc_description": "yellow fever, live attenuated"
    },
    {
        "atc_level": "J07BM",
        "atc_description": "Papillomavirus vaccines"
    },
    {
        "atc_level": "J07BM01",
        "atc_description": "papillomavirus (human types 6, 11, 16, 18)"
    },
    {
        "atc_level": "J07BM02",
        "atc_description": "papillomavirus (human types 16, 18)"
    },
    {
        "atc_level": "J07BM03",
        "atc_description": "papillomavirus (human types 6, 11, 16, 18, 31, 33, 45, 52, 58)"
    },
    {
        "atc_level": "J07BX",
        "atc_description": "Other viral vaccines"
    },
    {
        "atc_level": "J07BX01",
        "atc_description": "smallpox vaccines"
    },
    {
        "atc_level": "J07BX02",
        "atc_description": "ebola vaccines"
    },
    {
        "atc_level": "J07BX03",
        "atc_description": "covid-19 vaccines"
    },
    {
        "atc_level": "J07BX04",
        "atc_description": "dengue virus vaccines"
    },
    {
        "atc_level": "J07C",
        "atc_description": "BACTERIAL AND VIRAL VACCINES, COMBINED"
    },
    {
        "atc_level": "J07CA",
        "atc_description": "Bacterial and viral vaccines, combined"
    },
    {
        "atc_level": "J07CA01",
        "atc_description": "diphtheria-poliomyelitis-tetanus"
    },
    {
        "atc_level": "J07CA02",
        "atc_description": "diphtheria-pertussis-poliomyelitis-tetanus"
    },
    {
        "atc_level": "J07CA03",
        "atc_description": "diphtheria-rubella-tetanus"
    },
    {
        "atc_level": "J07CA04",
        "atc_description": "haemophilus influenzae B and poliomyelitis"
    },
    {
        "atc_level": "J07CA05",
        "atc_description": "diphtheria-hepatitis B-pertussis-tetanus"
    },
    {
        "atc_level": "J07CA06",
        "atc_description": "diphtheria-haemophilus influenzae B-pertussis-poliomyelitis-tetanus"
    },
    {
        "atc_level": "J07CA07",
        "atc_description": "diphtheria-hepatitis B-tetanus"
    },
    {
        "atc_level": "J07CA08",
        "atc_description": "haemophilus influenzae B and hepatitis B"
    },
    {
        "atc_level": "J07CA09",
        "atc_description": "diphtheria-haemophilus influenzae B-pertussis-poliomyelitis-tetanus-hepatitis B"
    },
    {
        "atc_level": "J07CA10",
        "atc_description": "typhoid-hepatitis A"
    },
    {
        "atc_level": "J07CA11",
        "atc_description": "diphtheria-haemophilus influenzae B-pertussis-tetanus-hepatitis B"
    },
    {
        "atc_level": "J07CA12",
        "atc_description": "diphtheria-pertussis-poliomyelitis-tetanus-hepatitis B"
    },
    {
        "atc_level": "J07CA13",
        "atc_description": "diphtheria-haemophilus influenzae B-pertussis-tetanus-hepatitis B-meningococcus A + C"
    },
    {
        "atc_level": "J07X",
        "atc_description": "OTHER VACCINES"
    },
    {
        "atc_level": "J08",
        "atc_description": "OTHER ANTIINFECTIVES, INCL. LEPROSTATICS"
    },
    {
        "atc_level": "J08A",
        "atc_description": "OTHER ANTIINFECTIVES, INCL. LEPROSTATICS"
    },
    {
        "atc_level": "J08AA",
        "atc_description": "LEPROSTATICS"
    },
    {
        "atc_level": "J08AA01",
        "atc_description": "Clofazimine"
    },
    {
        "atc_level": "J08AA02",
        "atc_description": "Dapsone"
    },
    {
        "atc_level": "L",
        "atc_description": "ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS"
    },
    {
        "atc_level": "L00",
        "atc_description": "ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS"
    },
    {
        "atc_level": "L01",
        "atc_description": "ANTINEOPLASTIC AGENTS"
    },
    {
        "atc_level": "L01A",
        "atc_description": "ALKYLATING AGENTS"
    },
    {
        "atc_level": "L01AA",
        "atc_description": "Nitrogen mustard analogues"
    },
    {
        "atc_level": "L01AA01",
        "atc_description": "cyclophosphamide"
    },
    {
        "atc_level": "L01AA02",
        "atc_description": "chlorambucil"
    },
    {
        "atc_level": "L01AA03",
        "atc_description": "melphalan"
    },
    {
        "atc_level": "L01AA04",
        "atc_description": "Estramustine"
    },
    {
        "atc_level": "L01AA05",
        "atc_description": "chlormethine"
    },
    {
        "atc_level": "L01AA06",
        "atc_description": "ifosfamide"
    },
    {
        "atc_level": "L01AA07",
        "atc_description": "trofosfamide"
    },
    {
        "atc_level": "L01AA08",
        "atc_description": "prednimustine"
    },
    {
        "atc_level": "L01AA09",
        "atc_description": "bendamustine"
    },
    {
        "atc_level": "L01AA10",
        "atc_description": "melphalan flufenamide"
    },
    {
        "atc_level": "L01AB",
        "atc_description": "Alkyl sulfonates"
    },
    {
        "atc_level": "L01AB01",
        "atc_description": "busulfan"
    },
    {
        "atc_level": "L01AB02",
        "atc_description": "treosulfan"
    },
    {
        "atc_level": "L01AB03",
        "atc_description": "mannosulfan"
    },
    {
        "atc_level": "L01AC",
        "atc_description": "Ethylene imines"
    },
    {
        "atc_level": "L01AC01",
        "atc_description": "thiotepa"
    },
    {
        "atc_level": "L01AC02",
        "atc_description": "triaziquone"
    },
    {
        "atc_level": "L01AC03",
        "atc_description": "carboquone"
    },
    {
        "atc_level": "L01AD",
        "atc_description": "Nitrosoureas"
    },
    {
        "atc_level": "L01AD01",
        "atc_description": "carmustine"
    },
    {
        "atc_level": "L01AD02",
        "atc_description": "lomustine"
    },
    {
        "atc_level": "L01AD03",
        "atc_description": "semustine"
    },
    {
        "atc_level": "L01AD04",
        "atc_description": "streptozocin"
    },
    {
        "atc_level": "L01AD05",
        "atc_description": "fotemustine"
    },
    {
        "atc_level": "L01AD06",
        "atc_description": "nimustine"
    },
    {
        "atc_level": "L01AD07",
        "atc_description": "ranimustine"
    },
    {
        "atc_level": "L01AD08",
        "atc_description": "uramustine"
    },
    {
        "atc_level": "L01AG",
        "atc_description": "Epoxides"
    },
    {
        "atc_level": "L01AG01",
        "atc_description": "etoglucid"
    },
    {
        "atc_level": "L01AX",
        "atc_description": "Other alkylating agents"
    },
    {
        "atc_level": "L01AX01",
        "atc_description": "mitobronitol"
    },
    {
        "atc_level": "L01AX02",
        "atc_description": "pipobroman"
    },
    {
        "atc_level": "L01AX03",
        "atc_description": "temozolomide"
    },
    {
        "atc_level": "L01AX04",
        "atc_description": "dacarbazine"
    },
    {
        "atc_level": "L01B",
        "atc_description": "ANTIMETABOLITES"
    },
    {
        "atc_level": "L01BA",
        "atc_description": "Folic acid analogues"
    },
    {
        "atc_level": "L01BA01",
        "atc_description": "methotrexate"
    },
    {
        "atc_level": "L01BA02",
        "atc_description": "Paltitrexid"
    },
    {
        "atc_level": "L01BA03",
        "atc_description": "raltitrexed"
    },
    {
        "atc_level": "L01BA04",
        "atc_description": "pemetrexed"
    },
    {
        "atc_level": "L01BA05",
        "atc_description": "pralatrexate"
    },
    {
        "atc_level": "L01BB",
        "atc_description": "Purine analogues"
    },
    {
        "atc_level": "L01BB01",
        "atc_description": "Azathioprine"
    },
    {
        "atc_level": "L01BB02",
        "atc_description": "mercaptopurine"
    },
    {
        "atc_level": "L01BB03",
        "atc_description": "tioguanine"
    },
    {
        "atc_level": "L01BB04",
        "atc_description": "cladribine"
    },
    {
        "atc_level": "L01BB05",
        "atc_description": "fludarabine"
    },
    {
        "atc_level": "L01BB06",
        "atc_description": "clofarabine"
    },
    {
        "atc_level": "L01BB07",
        "atc_description": "nelarabine"
    },
    {
        "atc_level": "L01BC",
        "atc_description": "Pyrimidine analogues"
    },
    {
        "atc_level": "L01BC01",
        "atc_description": "cytarabine"
    },
    {
        "atc_level": "L01BC02",
        "atc_description": "fluorouracil"
    },
    {
        "atc_level": "L01BC03",
        "atc_description": "tegafur"
    },
    {
        "atc_level": "L01BC04",
        "atc_description": "carmofur"
    },
    {
        "atc_level": "L01BC05",
        "atc_description": "gemcitabine"
    },
    {
        "atc_level": "L01BC06",
        "atc_description": "capecitabine"
    },
    {
        "atc_level": "L01BC07",
        "atc_description": "azacitidine"
    },
    {
        "atc_level": "L01BC08",
        "atc_description": "decitabine"
    },
    {
        "atc_level": "L01BC09",
        "atc_description": "floxuridine"
    },
    {
        "atc_level": "L01BC52",
        "atc_description": "fluorouracil, combinations"
    },
    {
        "atc_level": "L01BC53",
        "atc_description": "tegafur, combinations"
    },
    {
        "atc_level": "L01BC59",
        "atc_description": "trifluridine, combinations"
    },
    {
        "atc_level": "L01C",
        "atc_description": "PLANT ALKALOIDS AND OTHER NATURAL PRODUCTS"
    },
    {
        "atc_level": "L01CA",
        "atc_description": "Vinca alkaloids and analogues"
    },
    {
        "atc_level": "L01CA01",
        "atc_description": "vinblastine"
    },
    {
        "atc_level": "L01CA02",
        "atc_description": "vincristine"
    },
    {
        "atc_level": "L01CA03",
        "atc_description": "vindesine"
    },
    {
        "atc_level": "L01CA04",
        "atc_description": "vinorelbine"
    },
    {
        "atc_level": "L01CA05",
        "atc_description": "vinflunine"
    },
    {
        "atc_level": "L01CA06",
        "atc_description": "vintafolide"
    },
    {
        "atc_level": "L01CB",
        "atc_description": "Podophyllotoxin derivatives"
    },
    {
        "atc_level": "L01CB01",
        "atc_description": "etoposide"
    },
    {
        "atc_level": "L01CB02",
        "atc_description": "teniposide"
    },
    {
        "atc_level": "L01CC",
        "atc_description": "Colchicine derivatives"
    },
    {
        "atc_level": "L01CC01",
        "atc_description": "demecolcine"
    },
    {
        "atc_level": "L01CD",
        "atc_description": "Taxanes"
    },
    {
        "atc_level": "L01CD01",
        "atc_description": "paclitaxel"
    },
    {
        "atc_level": "L01CD02",
        "atc_description": "docetaxel"
    },
    {
        "atc_level": "L01CD03",
        "atc_description": "paclitaxel poliglumex"
    },
    {
        "atc_level": "L01CD04",
        "atc_description": "cabazitaxel"
    },
    {
        "atc_level": "L01CE",
        "atc_description": "Topoisomerase 1 (TOP1) inhibitors"
    },
    {
        "atc_level": "L01CE01",
        "atc_description": "topotecan"
    },
    {
        "atc_level": "L01CE02",
        "atc_description": "irinotecan"
    },
    {
        "atc_level": "L01CE03",
        "atc_description": "etirinotecan pegol"
    },
    {
        "atc_level": "L01CE04",
        "atc_description": "belotecan"
    },
    {
        "atc_level": "L01CX",
        "atc_description": "Other plant alkaloids and natural products"
    },
    {
        "atc_level": "L01CX01",
        "atc_description": "trabectedin"
    },
    {
        "atc_level": "L01D",
        "atc_description": "CYTOTOXIC ANTIBIOTICS AND RELATED SUBSTANCES"
    },
    {
        "atc_level": "L01DA",
        "atc_description": "Actinomycines"
    },
    {
        "atc_level": "L01DA01",
        "atc_description": "dactinomycin"
    },
    {
        "atc_level": "L01DB",
        "atc_description": "Anthracyclines and related substances"
    },
    {
        "atc_level": "L01DB01",
        "atc_description": "doxorubicin"
    },
    {
        "atc_level": "L01DB02",
        "atc_description": "daunorubicin"
    },
    {
        "atc_level": "L01DB03",
        "atc_description": "epirubicin"
    },
    {
        "atc_level": "L01DB04",
        "atc_description": "aclarubicin"
    },
    {
        "atc_level": "L01DB05",
        "atc_description": "zorubicin"
    },
    {
        "atc_level": "L01DB06",
        "atc_description": "idarubicin"
    },
    {
        "atc_level": "L01DB07",
        "atc_description": "mitoxantrone"
    },
    {
        "atc_level": "L01DB08",
        "atc_description": "pirarubicin"
    },
    {
        "atc_level": "L01DB09",
        "atc_description": "valrubicin"
    },
    {
        "atc_level": "L01DB10",
        "atc_description": "amrubicin"
    },
    {
        "atc_level": "L01DB11",
        "atc_description": "pixantrone"
    },
    {
        "atc_level": "L01DC",
        "atc_description": "Other cytotoxic antibiotics"
    },
    {
        "atc_level": "L01DC01",
        "atc_description": "bleomycin"
    },
    {
        "atc_level": "L01DC02",
        "atc_description": "plicamycin"
    },
    {
        "atc_level": "L01DC03",
        "atc_description": "mitomycin"
    },
    {
        "atc_level": "L01DC04",
        "atc_description": "ixabepilone"
    },
    {
        "atc_level": "L01E",
        "atc_description": "PROTEIN KINASE INHIBITORS"
    },
    {
        "atc_level": "L01EA",
        "atc_description": "BCR-ABL tyrosine kinase inhibitors"
    },
    {
        "atc_level": "L01EA01",
        "atc_description": "imatinib"
    },
    {
        "atc_level": "L01EA02",
        "atc_description": "dasatinib"
    },
    {
        "atc_level": "L01EA03",
        "atc_description": "nilotinib"
    },
    {
        "atc_level": "L01EA04",
        "atc_description": "bosutinib"
    },
    {
        "atc_level": "L01EA05",
        "atc_description": "ponatinib"
    },
    {
        "atc_level": "L01EA06",
        "atc_description": "asciminib"
    },
    {
        "atc_level": "L01EB",
        "atc_description": "Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors"
    },
    {
        "atc_level": "L01EB01",
        "atc_description": "gefitinib"
    },
    {
        "atc_level": "L01EB02",
        "atc_description": "erlotinib"
    },
    {
        "atc_level": "L01EB03",
        "atc_description": "afatinib"
    },
    {
        "atc_level": "L01EB04",
        "atc_description": "osimertinib"
    },
    {
        "atc_level": "L01EB05",
        "atc_description": "rociletinib"
    },
    {
        "atc_level": "L01EB06",
        "atc_description": "olmutinib"
    },
    {
        "atc_level": "L01EB07",
        "atc_description": "dacomitinib"
    },
    {
        "atc_level": "L01EB08",
        "atc_description": "icotinib"
    },
    {
        "atc_level": "L01EC",
        "atc_description": "B-Raf serine-threonine kinase (BRAF) inhibitors"
    },
    {
        "atc_level": "L01EC01",
        "atc_description": "vemurafenib"
    },
    {
        "atc_level": "L01EC02",
        "atc_description": "dabrafenib"
    },
    {
        "atc_level": "L01EC03",
        "atc_description": "encorafenib"
    },
    {
        "atc_level": "L01ED",
        "atc_description": "Anaplastic lymphoma kinase (ALK) inhibitors"
    },
    {
        "atc_level": "L01ED01",
        "atc_description": "crizotinib"
    },
    {
        "atc_level": "L01ED02",
        "atc_description": "ceritinib"
    },
    {
        "atc_level": "L01ED03",
        "atc_description": "alectinib"
    },
    {
        "atc_level": "L01ED04",
        "atc_description": "brigatinib"
    },
    {
        "atc_level": "L01ED05",
        "atc_description": "lorlatinib"
    },
    {
        "atc_level": "L01EE",
        "atc_description": "Mitogen-activated protein kinase (MEK) inhibitors"
    },
    {
        "atc_level": "L01EE01",
        "atc_description": "trametinib"
    },
    {
        "atc_level": "L01EE02",
        "atc_description": "cobimetinib"
    },
    {
        "atc_level": "L01EE03",
        "atc_description": "binimetinib"
    },
    {
        "atc_level": "L01EE04",
        "atc_description": "selumetinib"
    },
    {
        "atc_level": "L01EF",
        "atc_description": "Cyclin-dependent kinase (CDK) inhibitors"
    },
    {
        "atc_level": "L01EF01",
        "atc_description": "palbociclib"
    },
    {
        "atc_level": "L01EF02",
        "atc_description": "ribociclib"
    },
    {
        "atc_level": "L01EF03",
        "atc_description": "abemaciclib"
    },
    {
        "atc_level": "L01EG",
        "atc_description": "Mammalian target of rapamycin (mTOR) kinase inhibitors"
    },
    {
        "atc_level": "L01EG01",
        "atc_description": "temsirolimus"
    },
    {
        "atc_level": "L01EG02",
        "atc_description": "everolimus"
    },
    {
        "atc_level": "L01EG03",
        "atc_description": "ridaforolimus"
    },
    {
        "atc_level": "L01EH",
        "atc_description": "Human epidermal growth factor receptor 2 (HER2) tyrosine kinase inhibitors"
    },
    {
        "atc_level": "L01EH01",
        "atc_description": "lapatinib"
    },
    {
        "atc_level": "L01EH02",
        "atc_description": "neratinib"
    },
    {
        "atc_level": "L01EH03",
        "atc_description": "tucatinib"
    },
    {
        "atc_level": "L01EJ",
        "atc_description": "Janus-associated kinase (JAK) inhibitors"
    },
    {
        "atc_level": "L01EJ01",
        "atc_description": "ruxolitinib"
    },
    {
        "atc_level": "L01EJ02",
        "atc_description": "fedratinib"
    },
    {
        "atc_level": "L01EJ03",
        "atc_description": "pacritinib"
    },
    {
        "atc_level": "L01EK",
        "atc_description": "Vascular endothelial growth factor receptor (VEGFR) tyrosine kinase inhibitors"
    },
    {
        "atc_level": "L01EK01",
        "atc_description": "axitinib"
    },
    {
        "atc_level": "L01EK02",
        "atc_description": "cediranib"
    },
    {
        "atc_level": "L01EK03",
        "atc_description": "tivozanib"
    },
    {
        "atc_level": "L01EL",
        "atc_description": "Bruton's tyrosine kinase (BTK) inhibitors"
    },
    {
        "atc_level": "L01EL01",
        "atc_description": "ibrutinib"
    },
    {
        "atc_level": "L01EL02",
        "atc_description": "acalabrutinib"
    },
    {
        "atc_level": "L01EL03",
        "atc_description": "zanubrutinib"
    },
    {
        "atc_level": "L01EM",
        "atc_description": "Phosphatidylinositol-3-kinase (Pi3K) inhibitors"
    },
    {
        "atc_level": "L01EM01",
        "atc_description": "idelalisib"
    },
    {
        "atc_level": "L01EM02",
        "atc_description": "copanlisib"
    },
    {
        "atc_level": "L01EM03",
        "atc_description": "alpelisib"
    },
    {
        "atc_level": "L01EM04",
        "atc_description": "duvelisib"
    },
    {
        "atc_level": "L01EN",
        "atc_description": "Fibroblast growth factor receptor (FGFR) tyrosine kinase inhibitors"
    },
    {
        "atc_level": "L01EN01",
        "atc_description": "erdafitinib"
    },
    {
        "atc_level": "L01EN02",
        "atc_description": "pemigatinib"
    },
    {
        "atc_level": "L01EN03",
        "atc_description": "infigratinib"
    },
    {
        "atc_level": "L01EN04",
        "atc_description": "futibatinib"
    },
    {
        "atc_level": "L01EX",
        "atc_description": "Other protein kinase inhibitors"
    },
    {
        "atc_level": "L01EX01",
        "atc_description": "sunitinib"
    },
    {
        "atc_level": "L01EX02",
        "atc_description": "sorafenib"
    },
    {
        "atc_level": "L01EX03",
        "atc_description": "pazopanib"
    },
    {
        "atc_level": "L01EX04",
        "atc_description": "vandetanib"
    },
    {
        "atc_level": "L01EX05",
        "atc_description": "regorafenib"
    },
    {
        "atc_level": "L01EX06",
        "atc_description": "masitinib"
    },
    {
        "atc_level": "L01EX07",
        "atc_description": "cabozantinib"
    },
    {
        "atc_level": "L01EX08",
        "atc_description": "lenvatinib"
    },
    {
        "atc_level": "L01EX09",
        "atc_description": "nintedanib"
    },
    {
        "atc_level": "L01EX10",
        "atc_description": "midostaurin"
    },
    {
        "atc_level": "L01EX11",
        "atc_description": "quizartinib"
    },
    {
        "atc_level": "L01EX12",
        "atc_description": "larotrectinib"
    },
    {
        "atc_level": "L01EX13",
        "atc_description": "gilteritinib"
    },
    {
        "atc_level": "L01EX14",
        "atc_description": "entrectinib"
    },
    {
        "atc_level": "L01EX15",
        "atc_description": "pexidartinib"
    },
    {
        "atc_level": "L01EX16",
        "atc_description": "erdafitinib"
    },
    {
        "atc_level": "L01EX17",
        "atc_description": "capmatinib"
    },
    {
        "atc_level": "L01EX18",
        "atc_description": "avapritinib"
    },
    {
        "atc_level": "L01EX19",
        "atc_description": "ripretinib"
    },
    {
        "atc_level": "L01EX20",
        "atc_description": "pemigatinib"
    },
    {
        "atc_level": "L01EX21",
        "atc_description": "tepotinib"
    },
    {
        "atc_level": "L01EX22",
        "atc_description": "selpercatinib"
    },
    {
        "atc_level": "L01EX23",
        "atc_description": "pralsetinib"
    },
    {
        "atc_level": "L01F",
        "atc_description": "MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES"
    },
    {
        "atc_level": "L01FA",
        "atc_description": "CD20 (Clusters of Differentiation 20) inhibitors"
    },
    {
        "atc_level": "L01FA01",
        "atc_description": "rituximab"
    },
    {
        "atc_level": "L01FA02",
        "atc_description": "ofatumumab"
    },
    {
        "atc_level": "L01FA03",
        "atc_description": "obinutuzumab"
    },
    {
        "atc_level": "L01FB",
        "atc_description": "CD22 (Clusters of Differentiation 22) inhibitors"
    },
    {
        "atc_level": "L01FB01",
        "atc_description": "inotuzumab ozogamicin"
    },
    {
        "atc_level": "L01FB02",
        "atc_description": "moxetumomab pasudotox"
    },
    {
        "atc_level": "L01FC",
        "atc_description": "CD38 (Clusters of Differentiation 38) inhibitors"
    },
    {
        "atc_level": "L01FC01",
        "atc_description": "daratumumab"
    },
    {
        "atc_level": "L01FC02",
        "atc_description": "isatuximab"
    },
    {
        "atc_level": "L01FD",
        "atc_description": "HER2 (Human Epidermal Growth Factor Receptor 2) inhibitors"
    },
    {
        "atc_level": "L01FD01",
        "atc_description": "trastuzumab"
    },
    {
        "atc_level": "L01FD02",
        "atc_description": "pertuzumab"
    },
    {
        "atc_level": "L01FD03",
        "atc_description": "trastuzumab emtansine"
    },
    {
        "atc_level": "L01FD04",
        "atc_description": "trastuzumab deruxtecan"
    },
    {
        "atc_level": "L01FD05",
        "atc_description": "trastuzumab duocarmazine"
    },
    {
        "atc_level": "L01FE",
        "atc_description": "EGFR (Epidermal Growth Factor Receptor) inhibitors"
    },
    {
        "atc_level": "L01FE01",
        "atc_description": "cetuximab"
    },
    {
        "atc_level": "L01FE02",
        "atc_description": "panitumumab"
    },
    {
        "atc_level": "L01FE03",
        "atc_description": "necitumumab"
    },
    {
        "atc_level": "L01FF",
        "atc_description": "PD-1/PDL-1 (Programmed cell death protein 1/death ligand 1) inhibitors"
    },
    {
        "atc_level": "L01FF01",
        "atc_description": "nivolumab"
    },
    {
        "atc_level": "L01FF02",
        "atc_description": "pembrolizumab"
    },
    {
        "atc_level": "L01FF03",
        "atc_description": "durvalumab"
    },
    {
        "atc_level": "L01FF04",
        "atc_description": "avelumab"
    },
    {
        "atc_level": "L01FF05",
        "atc_description": "atezolizumab"
    },
    {
        "atc_level": "L01FF06",
        "atc_description": "cemiplimab"
    },
    {
        "atc_level": "L01FF07",
        "atc_description": "dostarlimab"
    },
    {
        "atc_level": "L01FF08",
        "atc_description": "prolgolimab"
    },
    {
        "atc_level": "L01FF09",
        "atc_description": "tislelizumab"
    },
    {
        "atc_level": "L01FF10",
        "atc_description": "retifanlimab"
    },
    {
        "atc_level": "L01FG",
        "atc_description": "VEGF/VEGFR (Vascular Endothelial Growth Factor) inhibitors"
    },
    {
        "atc_level": "L01FG01",
        "atc_description": "bevacizumab"
    },
    {
        "atc_level": "L01FG02",
        "atc_description": "ramucirumab"
    },
    {
        "atc_level": "L01FX",
        "atc_description": "Other monoclonal antibodies and antibody drug conjugates"
    },
    {
        "atc_level": "L01FX01",
        "atc_description": "edrecolomab"
    },
    {
        "atc_level": "L01FX02",
        "atc_description": "gemtuzumab ozogamicin"
    },
    {
        "atc_level": "L01FX03",
        "atc_description": "catumaxomab"
    },
    {
        "atc_level": "L01FX04",
        "atc_description": "ipilimumab"
    },
    {
        "atc_level": "L01FX05",
        "atc_description": "brentuximab vedotin"
    },
    {
        "atc_level": "L01FX06",
        "atc_description": "dinutuximab beta"
    },
    {
        "atc_level": "L01FX07",
        "atc_description": "blinatumomab"
    },
    {
        "atc_level": "L01FX08",
        "atc_description": "elotuzumab"
    },
    {
        "atc_level": "L01FX09",
        "atc_description": "mogamulizumab"
    },
    {
        "atc_level": "L01FX10",
        "atc_description": "olaratumab"
    },
    {
        "atc_level": "L01FX11",
        "atc_description": "bermekimab"
    },
    {
        "atc_level": "L01FX12",
        "atc_description": "tafasitamab"
    },
    {
        "atc_level": "L01FX13",
        "atc_description": "enfortumab vedotin"
    },
    {
        "atc_level": "L01FX14",
        "atc_description": "polatuzumab vedotin"
    },
    {
        "atc_level": "L01FX15",
        "atc_description": "belantamab mafodotin"
    },
    {
        "atc_level": "L01FX16",
        "atc_description": "oportuzumab monatox"
    },
    {
        "atc_level": "L01FX17",
        "atc_description": "sacituzumab govitecan"
    },
    {
        "atc_level": "L01FX18",
        "atc_description": "amivantamab"
    },
    {
        "atc_level": "L01X",
        "atc_description": "OTHER ANTINEOPLASTIC AGENTS"
    },
    {
        "atc_level": "L01XA",
        "atc_description": "Platinum compounds"
    },
    {
        "atc_level": "L01XA01",
        "atc_description": "cisplatin"
    },
    {
        "atc_level": "L01XA02",
        "atc_description": "carboplatin"
    },
    {
        "atc_level": "L01XA03",
        "atc_description": "oxaliplatin"
    },
    {
        "atc_level": "L01XA04",
        "atc_description": "satraplatin"
    },
    {
        "atc_level": "L01XA05",
        "atc_description": "polyplatillen"
    },
    {
        "atc_level": "L01XB",
        "atc_description": "Methylhydrazines"
    },
    {
        "atc_level": "L01XB01",
        "atc_description": "procarbazine"
    },
    {
        "atc_level": "L01XB02",
        "atc_description": "Dacarbazine"
    },
    {
        "atc_level": "L01XC",
        "atc_description": "Monoclonal antibodies"
    },
    {
        "atc_level": "L01XC01",
        "atc_description": "edrecolomab"
    },
    {
        "atc_level": "L01XC01",
        "atc_description": "edrecolomab"
    },
    {
        "atc_level": "L01XC02",
        "atc_description": "rituximab"
    },
    {
        "atc_level": "L01XC02",
        "atc_description": "rituximab"
    },
    {
        "atc_level": "L01XC03",
        "atc_description": "trastuzumab"
    },
    {
        "atc_level": "L01XC03",
        "atc_description": "trastuzumab"
    },
    {
        "atc_level": "L01XC04",
        "atc_description": "alemtuzumab"
    },
    {
        "atc_level": "L01XC04",
        "atc_description": "alemtuzumab"
    },
    {
        "atc_level": "L01XC05",
        "atc_description": "gemtuzumab ozogamicin"
    },
    {
        "atc_level": "L01XC05",
        "atc_description": "gemtuzumab ozogamicin"
    },
    {
        "atc_level": "L01XC06",
        "atc_description": "cetuximab"
    },
    {
        "atc_level": "L01XC06",
        "atc_description": "cetuximab"
    },
    {
        "atc_level": "L01XC07",
        "atc_description": "bevacizumab"
    },
    {
        "atc_level": "L01XC07",
        "atc_description": "bevacizumab"
    },
    {
        "atc_level": "L01XC08",
        "atc_description": "panitumumab"
    },
    {
        "atc_level": "L01XC08",
        "atc_description": "panitumumab"
    },
    {
        "atc_level": "L01XC09",
        "atc_description": "catumaxomab"
    },
    {
        "atc_level": "L01XC09",
        "atc_description": "catumaxomab"
    },
    {
        "atc_level": "L01XC10",
        "atc_description": "ofatumumab"
    },
    {
        "atc_level": "L01XC10",
        "atc_description": "ofatumumab"
    },
    {
        "atc_level": "L01XC11",
        "atc_description": "ipilimumab"
    },
    {
        "atc_level": "L01XC11",
        "atc_description": "ipilimumab"
    },
    {
        "atc_level": "L01XC12",
        "atc_description": "brentuximab vedotin"
    },
    {
        "atc_level": "L01XC12",
        "atc_description": "brentuximab vedotin"
    },
    {
        "atc_level": "L01XC13",
        "atc_description": "pertuzumab"
    },
    {
        "atc_level": "L01XC13",
        "atc_description": "pertuzumab"
    },
    {
        "atc_level": "L01XC14",
        "atc_description": "trastuzumab emtansine"
    },
    {
        "atc_level": "L01XC14",
        "atc_description": "trastuzumab emtansine"
    },
    {
        "atc_level": "L01XC15",
        "atc_description": "obinutuzumab"
    },
    {
        "atc_level": "L01XC15",
        "atc_description": "obinutuzumab"
    },
    {
        "atc_level": "L01XC16",
        "atc_description": "dinutuximab beta"
    },
    {
        "atc_level": "L01XC16",
        "atc_description": "dinutuximab beta"
    },
    {
        "atc_level": "L01XC17",
        "atc_description": "nivolumab"
    },
    {
        "atc_level": "L01XC17",
        "atc_description": "nivolumab"
    },
    {
        "atc_level": "L01XC18",
        "atc_description": "pembrolizumab"
    },
    {
        "atc_level": "L01XC18",
        "atc_description": "pembrolizumab"
    },
    {
        "atc_level": "L01XC19",
        "atc_description": "blinatumomab"
    },
    {
        "atc_level": "L01XC19",
        "atc_description": "blinatumomab"
    },
    {
        "atc_level": "L01XC21",
        "atc_description": "ramucirumab"
    },
    {
        "atc_level": "L01XC21",
        "atc_description": "ramucirumab"
    },
    {
        "atc_level": "L01XC22",
        "atc_description": "necitumumab"
    },
    {
        "atc_level": "L01XC22",
        "atc_description": "necitumumab"
    },
    {
        "atc_level": "L01XC23",
        "atc_description": "elotuzumab"
    },
    {
        "atc_level": "L01XC23",
        "atc_description": "elotuzumab"
    },
    {
        "atc_level": "L01XC24",
        "atc_description": "daratumumab"
    },
    {
        "atc_level": "L01XC24",
        "atc_description": "daratumumab"
    },
    {
        "atc_level": "L01XC25",
        "atc_description": "mogamulizumab"
    },
    {
        "atc_level": "L01XC25",
        "atc_description": "mogamulizumab"
    },
    {
        "atc_level": "L01XC26",
        "atc_description": "inotuzumab ozogamicin"
    },
    {
        "atc_level": "L01XC26",
        "atc_description": "inotuzumab ozogamicin"
    },
    {
        "atc_level": "L01XC27",
        "atc_description": "olaratumab"
    },
    {
        "atc_level": "L01XC27",
        "atc_description": "olaratumab"
    },
    {
        "atc_level": "L01XC28",
        "atc_description": "durvalumab"
    },
    {
        "atc_level": "L01XC28",
        "atc_description": "durvalumab"
    },
    {
        "atc_level": "L01XC29",
        "atc_description": "bermekimab"
    },
    {
        "atc_level": "L01XC29",
        "atc_description": "bermekimab"
    },
    {
        "atc_level": "L01XC31",
        "atc_description": "avelumab"
    },
    {
        "atc_level": "L01XC31",
        "atc_description": "avelumab"
    },
    {
        "atc_level": "L01XC32",
        "atc_description": "atezolizumab"
    },
    {
        "atc_level": "L01XC32",
        "atc_description": "atezolizumab"
    },
    {
        "atc_level": "L01XC33",
        "atc_description": "cemiplimab"
    },
    {
        "atc_level": "L01XC33",
        "atc_description": "cemiplimab"
    },
    {
        "atc_level": "L01XC34",
        "atc_description": "moxetumomab pasudotox"
    },
    {
        "atc_level": "L01XC34",
        "atc_description": "moxetumomab pasudotox"
    },
    {
        "atc_level": "L01XC35",
        "atc_description": "tafasitamab"
    },
    {
        "atc_level": "L01XC35",
        "atc_description": "tafasitamab"
    },
    {
        "atc_level": "L01XC36",
        "atc_description": "enfortumab vedotin"
    },
    {
        "atc_level": "L01XC36",
        "atc_description": "enfortumab vedotin"
    },
    {
        "atc_level": "L01XC37",
        "atc_description": "polatuzumab vedotin"
    },
    {
        "atc_level": "L01XC37",
        "atc_description": "polatuzumab vedotin"
    },
    {
        "atc_level": "L01XC38",
        "atc_description": "isatuximab"
    },
    {
        "atc_level": "L01XC38",
        "atc_description": "isatuximab"
    },
    {
        "atc_level": "L01XC39",
        "atc_description": "belantamab mafodotin"
    },
    {
        "atc_level": "L01XC39",
        "atc_description": "belantamab mafodotin"
    },
    {
        "atc_level": "L01XC40",
        "atc_description": "dostarlimab"
    },
    {
        "atc_level": "L01XC40",
        "atc_description": "dostarlimab"
    },
    {
        "atc_level": "L01XC41",
        "atc_description": "trastuzumab deruxtecan"
    },
    {
        "atc_level": "L01XC41",
        "atc_description": "trastuzumab deruxtecan"
    },
    {
        "atc_level": "L01XD",
        "atc_description": "Sensitizers used in photodynamic/radiation therapy"
    },
    {
        "atc_level": "L01XD01",
        "atc_description": "porfimer sodium"
    },
    {
        "atc_level": "L01XD02",
        "atc_description": "Verteporfin"
    },
    {
        "atc_level": "L01XD03",
        "atc_description": "methyl aminolevulinate"
    },
    {
        "atc_level": "L01XD04",
        "atc_description": "aminolevulinic acid"
    },
    {
        "atc_level": "L01XD05",
        "atc_description": "temoporfin"
    },
    {
        "atc_level": "L01XD06",
        "atc_description": "efaproxiral"
    },
    {
        "atc_level": "L01XD07",
        "atc_description": "padeliporfin"
    },
    {
        "atc_level": "L01XE",
        "atc_description": "Protein kinase inhibitors"
    },
    {
        "atc_level": "L01XE01",
        "atc_description": "imatinib"
    },
    {
        "atc_level": "L01XE02",
        "atc_description": "gefitinib"
    },
    {
        "atc_level": "L01XE03",
        "atc_description": "erlotinib"
    },
    {
        "atc_level": "L01XE04",
        "atc_description": "sunitinib"
    },
    {
        "atc_level": "L01XE05",
        "atc_description": "sorafenib"
    },
    {
        "atc_level": "L01XE06",
        "atc_description": "dasatinib"
    },
    {
        "atc_level": "L01XE07",
        "atc_description": "lapatinib"
    },
    {
        "atc_level": "L01XE08",
        "atc_description": "nilotinib"
    },
    {
        "atc_level": "L01XE09",
        "atc_description": "temsirolimus"
    },
    {
        "atc_level": "L01XE10",
        "atc_description": "everolimus"
    },
    {
        "atc_level": "L01XE11",
        "atc_description": "pazopanib"
    },
    {
        "atc_level": "L01XE12",
        "atc_description": "vandetanib"
    },
    {
        "atc_level": "L01XE13",
        "atc_description": "afatinib"
    },
    {
        "atc_level": "L01XE14",
        "atc_description": "bosutinib"
    },
    {
        "atc_level": "L01XE15",
        "atc_description": "vemurafenib"
    },
    {
        "atc_level": "L01XE16",
        "atc_description": "crizotinib"
    },
    {
        "atc_level": "L01XE17",
        "atc_description": "axitinib"
    },
    {
        "atc_level": "L01XE18",
        "atc_description": "ruxolitinib"
    },
    {
        "atc_level": "L01XE19",
        "atc_description": "ridaforolimus"
    },
    {
        "atc_level": "L01XE21",
        "atc_description": "regorafenib"
    },
    {
        "atc_level": "L01XE22",
        "atc_description": "masitinib"
    },
    {
        "atc_level": "L01XE23",
        "atc_description": "dabrafenib"
    },
    {
        "atc_level": "L01XE24",
        "atc_description": "ponatinib"
    },
    {
        "atc_level": "L01XE25",
        "atc_description": "trametinib"
    },
    {
        "atc_level": "L01XE26",
        "atc_description": "cabozantinib"
    },
    {
        "atc_level": "L01XE27",
        "atc_description": "ibrutinib"
    },
    {
        "atc_level": "L01XE28",
        "atc_description": "ceritinib"
    },
    {
        "atc_level": "L01XE29",
        "atc_description": "lenvatinib"
    },
    {
        "atc_level": "L01XE31",
        "atc_description": "nintedanib"
    },
    {
        "atc_level": "L01XE32",
        "atc_description": "cediranib"
    },
    {
        "atc_level": "L01XE33",
        "atc_description": "palbociclib"
    },
    {
        "atc_level": "L01XE34",
        "atc_description": "tivozanib"
    },
    {
        "atc_level": "L01XE35",
        "atc_description": "osimertinib"
    },
    {
        "atc_level": "L01XE36",
        "atc_description": "alectinib"
    },
    {
        "atc_level": "L01XE37",
        "atc_description": "rociletinib"
    },
    {
        "atc_level": "L01XE38",
        "atc_description": "cobimetinib"
    },
    {
        "atc_level": "L01XE39",
        "atc_description": "midostaurin"
    },
    {
        "atc_level": "L01XE40",
        "atc_description": "olmutinib"
    },
    {
        "atc_level": "L01XE41",
        "atc_description": "binimetinib"
    },
    {
        "atc_level": "L01XE42",
        "atc_description": "ribociclib"
    },
    {
        "atc_level": "L01XE43",
        "atc_description": "brigatinib"
    },
    {
        "atc_level": "L01XE44",
        "atc_description": "lorlatinib"
    },
    {
        "atc_level": "L01XE45",
        "atc_description": "neratinib"
    },
    {
        "atc_level": "L01XE46",
        "atc_description": "encorafenib"
    },
    {
        "atc_level": "L01XE47",
        "atc_description": "dacomitinib"
    },
    {
        "atc_level": "L01XE48",
        "atc_description": "icotinib"
    },
    {
        "atc_level": "L01XE50",
        "atc_description": "abemaciclib"
    },
    {
        "atc_level": "L01XE51",
        "atc_description": "acalabrutinib"
    },
    {
        "atc_level": "L01XE52",
        "atc_description": "quizartinib"
    },
    {
        "atc_level": "L01XE53",
        "atc_description": "larotrectinib"
    },
    {
        "atc_level": "L01XE54",
        "atc_description": "gilteritinib"
    },
    {
        "atc_level": "L01XE56",
        "atc_description": "entrectinib"
    },
    {
        "atc_level": "L01XE57",
        "atc_description": "fedratinib"
    },
    {
        "atc_level": "L01XF",
        "atc_description": "Retinoids for cancer treatment"
    },
    {
        "atc_level": "L01XF01",
        "atc_description": "tretinoin"
    },
    {
        "atc_level": "L01XF02",
        "atc_description": "alitretinoin"
    },
    {
        "atc_level": "L01XF03",
        "atc_description": "bexarotene"
    },
    {
        "atc_level": "L01XG",
        "atc_description": "Proteasome inhibitors"
    },
    {
        "atc_level": "L01XG01",
        "atc_description": "bortezomib"
    },
    {
        "atc_level": "L01XG02",
        "atc_description": "carfilzomib"
    },
    {
        "atc_level": "L01XG03",
        "atc_description": "ixazomib"
    },
    {
        "atc_level": "L01XH",
        "atc_description": "Histone deacetylase (HDAC) inhibitors"
    },
    {
        "atc_level": "L01XH01",
        "atc_description": "vorinostat"
    },
    {
        "atc_level": "L01XH02",
        "atc_description": "romidepsin"
    },
    {
        "atc_level": "L01XH03",
        "atc_description": "panobinostat"
    },
    {
        "atc_level": "L01XH04",
        "atc_description": "belinostat"
    },
    {
        "atc_level": "L01XH05",
        "atc_description": "entinostat"
    },
    {
        "atc_level": "L01XJ",
        "atc_description": "Hedgehog pathway inhibitors"
    },
    {
        "atc_level": "L01XJ01",
        "atc_description": "vismodegib"
    },
    {
        "atc_level": "L01XJ02",
        "atc_description": "sonidegib"
    },
    {
        "atc_level": "L01XJ03",
        "atc_description": "glasdegib"
    },
    {
        "atc_level": "L01XK",
        "atc_description": "Poly (ADP-ribose) polymerase (PARP) inhibitors"
    },
    {
        "atc_level": "L01XK01",
        "atc_description": "olaparib"
    },
    {
        "atc_level": "L01XK02",
        "atc_description": "niraparib"
    },
    {
        "atc_level": "L01XK03",
        "atc_description": "rucaparib"
    },
    {
        "atc_level": "L01XK04",
        "atc_description": "talazoparib"
    },
    {
        "atc_level": "L01XK05",
        "atc_description": "veliparib"
    },
    {
        "atc_level": "L01XK06",
        "atc_description": "pamiparib"
    },
    {
        "atc_level": "L01XX",
        "atc_description": "Other antineoplastic agents"
    },
    {
        "atc_level": "L01XX01",
        "atc_description": "amsacrine"
    },
    {
        "atc_level": "L01XX02",
        "atc_description": "asparaginase"
    },
    {
        "atc_level": "L01XX03",
        "atc_description": "altretamine"
    },
    {
        "atc_level": "L01XX04",
        "atc_description": "Mitoxantrone"
    },
    {
        "atc_level": "L01XX05",
        "atc_description": "hydroxycarbamide"
    },
    {
        "atc_level": "L01XX06",
        "atc_description": "BCG vaccine"
    },
    {
        "atc_level": "L01XX07",
        "atc_description": "lonidamine"
    },
    {
        "atc_level": "L01XX08",
        "atc_description": "pentostatin"
    },
    {
        "atc_level": "L01XX09",
        "atc_description": "miltefosine"
    },
    {
        "atc_level": "L01XX10",
        "atc_description": "masoprocol"
    },
    {
        "atc_level": "L01XX11",
        "atc_description": "estramustine"
    },
    {
        "atc_level": "L01XX12",
        "atc_description": "Paclitaxel"
    },
    {
        "atc_level": "L01XX13",
        "atc_description": "Dacarbazine"
    },
    {
        "atc_level": "L01XX14",
        "atc_description": "tretinoin"
    },
    {
        "atc_level": "L01XX15",
        "atc_description": "Porfimer sodium"
    },
    {
        "atc_level": "L01XX16",
        "atc_description": "mitoguazone"
    },
    {
        "atc_level": "L01XX17",
        "atc_description": "topotecan"
    },
    {
        "atc_level": "L01XX18",
        "atc_description": "tiazofurine"
    },
    {
        "atc_level": "L01XX19",
        "atc_description": "irinotecan"
    },
    {
        "atc_level": "L01XX21",
        "atc_description": "Rituximab"
    },
    {
        "atc_level": "L01XX22",
        "atc_description": "alitretinoin"
    },
    {
        "atc_level": "L01XX23",
        "atc_description": "mitotane"
    },
    {
        "atc_level": "L01XX24",
        "atc_description": "pegaspargase"
    },
    {
        "atc_level": "L01XX25",
        "atc_description": "bexarotene"
    },
    {
        "atc_level": "L01XX26",
        "atc_description": "Verteporfin"
    },
    {
        "atc_level": "L01XX27",
        "atc_description": "arsenic trioxide"
    },
    {
        "atc_level": "L01XX28",
        "atc_description": "Imatinib"
    },
    {
        "atc_level": "L01XX29",
        "atc_description": "denileukin diftitox"
    },
    {
        "atc_level": "L01XX31",
        "atc_description": "Gefitinib"
    },
    {
        "atc_level": "L01XX32",
        "atc_description": "bortezomib"
    },
    {
        "atc_level": "L01XX33",
        "atc_description": "celecoxib"
    },
    {
        "atc_level": "L01XX34",
        "atc_description": "Erlotinib"
    },
    {
        "atc_level": "L01XX35",
        "atc_description": "anagrelide"
    },
    {
        "atc_level": "L01XX36",
        "atc_description": "oblimersen"
    },
    {
        "atc_level": "L01XX37",
        "atc_description": "sitimagene ceradenovec"
    },
    {
        "atc_level": "L01XX38",
        "atc_description": "vorinostat"
    },
    {
        "atc_level": "L01XX39",
        "atc_description": "romidepsin"
    },
    {
        "atc_level": "L01XX40",
        "atc_description": "omacetaxine mepesuccinate"
    },
    {
        "atc_level": "L01XX41",
        "atc_description": "eribulin"
    },
    {
        "atc_level": "L01XX42",
        "atc_description": "panobinostat"
    },
    {
        "atc_level": "L01XX43",
        "atc_description": "vismodegib"
    },
    {
        "atc_level": "L01XX44",
        "atc_description": "aflibercept"
    },
    {
        "atc_level": "L01XX45",
        "atc_description": "carfilzomib"
    },
    {
        "atc_level": "L01XX46",
        "atc_description": "olaparib"
    },
    {
        "atc_level": "L01XX47",
        "atc_description": "idelalisib"
    },
    {
        "atc_level": "L01XX48",
        "atc_description": "sonidegib"
    },
    {
        "atc_level": "L01XX49",
        "atc_description": "belinostat"
    },
    {
        "atc_level": "L01XX50",
        "atc_description": "ixazomib"
    },
    {
        "atc_level": "L01XX51",
        "atc_description": "talimogene laherparepvec"
    },
    {
        "atc_level": "L01XX52",
        "atc_description": "venetoclax"
    },
    {
        "atc_level": "L01XX53",
        "atc_description": "vosaroxin"
    },
    {
        "atc_level": "L01XX54",
        "atc_description": "niraparib"
    },
    {
        "atc_level": "L01XX55",
        "atc_description": "rucaparib"
    },
    {
        "atc_level": "L01XX56",
        "atc_description": "etirinotecan pegol"
    },
    {
        "atc_level": "L01XX57",
        "atc_description": "plitidepsin"
    },
    {
        "atc_level": "L01XX58",
        "atc_description": "epacadostat"
    },
    {
        "atc_level": "L01XX59",
        "atc_description": "enasidenib"
    },
    {
        "atc_level": "L01XX60",
        "atc_description": "talazoparib"
    },
    {
        "atc_level": "L01XX61",
        "atc_description": "copanlisib"
    },
    {
        "atc_level": "L01XX62",
        "atc_description": "ivosidenib"
    },
    {
        "atc_level": "L01XX63",
        "atc_description": "glasdegib"
    },
    {
        "atc_level": "L01XX64",
        "atc_description": "entinostat"
    },
    {
        "atc_level": "L01XX65",
        "atc_description": "alpelisib"
    },
    {
        "atc_level": "L01XX66",
        "atc_description": "selinexor"
    },
    {
        "atc_level": "L01XX67",
        "atc_description": "tagraxofusp"
    },
    {
        "atc_level": "L01XX68",
        "atc_description": "belotecan"
    },
    {
        "atc_level": "L01XX69",
        "atc_description": "lurbinectedin"
    },
    {
        "atc_level": "L01XX70",
        "atc_description": "axicabtagene ciloleucel"
    },
    {
        "atc_level": "L01XX71",
        "atc_description": "tisagenlecleucel"
    },
    {
        "atc_level": "L01XX72",
        "atc_description": "tazemetostat"
    },
    {
        "atc_level": "L01XX73",
        "atc_description": "sotorasib"
    },
    {
        "atc_level": "L01XX74",
        "atc_description": "belzutifan"
    },
    {
        "atc_level": "L01XY",
        "atc_description": "Combinations of antineoplastic agents"
    },
    {
        "atc_level": "L01XY01",
        "atc_description": "cytarabine and daunorubicin"
    },
    {
        "atc_level": "L01XY02",
        "atc_description": "pertuzumab and trastuzumab"
    },
    {
        "atc_level": "L02",
        "atc_description": "ENDOCRINE THERAPY"
    },
    {
        "atc_level": "L02A",
        "atc_description": "HORMONES AND RELATED AGENTS"
    },
    {
        "atc_level": "L02AA",
        "atc_description": "Estrogens"
    },
    {
        "atc_level": "L02AA01",
        "atc_description": "diethylstilbestrol"
    },
    {
        "atc_level": "L02AA02",
        "atc_description": "polyestradiol phosphate"
    },
    {
        "atc_level": "L02AA03",
        "atc_description": "ethinylestradiol"
    },
    {
        "atc_level": "L02AA04",
        "atc_description": "fosfestrol"
    },
    {
        "atc_level": "L02AB",
        "atc_description": "Progestogens"
    },
    {
        "atc_level": "L02AB01",
        "atc_description": "megestrol"
    },
    {
        "atc_level": "L02AB02",
        "atc_description": "medroxyprogesterone"
    },
    {
        "atc_level": "L02AB03",
        "atc_description": "gestonorone"
    },
    {
        "atc_level": "L02AE",
        "atc_description": "Gonadotropin releasing hormone analogues"
    },
    {
        "atc_level": "L02AE01",
        "atc_description": "buserelin"
    },
    {
        "atc_level": "L02AE02",
        "atc_description": "leuprorelin"
    },
    {
        "atc_level": "L02AE03",
        "atc_description": "goserelin"
    },
    {
        "atc_level": "L02AE04",
        "atc_description": "triptorelin"
    },
    {
        "atc_level": "L02AE05",
        "atc_description": "histrelin"
    },
    {
        "atc_level": "L02AE51",
        "atc_description": "leuprorelin and bicalutamide"
    },
    {
        "atc_level": "L02AX",
        "atc_description": "Other hormones"
    },
    {
        "atc_level": "L02B",
        "atc_description": "HORMONE ANTAGONISTS AND RELATED AGENTS"
    },
    {
        "atc_level": "L02BA",
        "atc_description": "Anti-estrogens"
    },
    {
        "atc_level": "L02BA01",
        "atc_description": "tamoxifen"
    },
    {
        "atc_level": "L02BA02",
        "atc_description": "toremifene"
    },
    {
        "atc_level": "L02BA03",
        "atc_description": "fulvestrant"
    },
    {
        "atc_level": "L02BB",
        "atc_description": "Anti-androgens"
    },
    {
        "atc_level": "L02BB01",
        "atc_description": "flutamide"
    },
    {
        "atc_level": "L02BB02",
        "atc_description": "nilutamide"
    },
    {
        "atc_level": "L02BB03",
        "atc_description": "bicalutamide"
    },
    {
        "atc_level": "L02BB04",
        "atc_description": "enzalutamide"
    },
    {
        "atc_level": "L02BB05",
        "atc_description": "apalutamide"
    },
    {
        "atc_level": "L02BB06",
        "atc_description": "darolutamide"
    },
    {
        "atc_level": "L02BG",
        "atc_description": "Aromatase inhibitors"
    },
    {
        "atc_level": "L02BG01",
        "atc_description": "aminoglutethimide"
    },
    {
        "atc_level": "L02BG02",
        "atc_description": "formestane"
    },
    {
        "atc_level": "L02BG03",
        "atc_description": "anastrozole"
    },
    {
        "atc_level": "L02BG04",
        "atc_description": "letrozole"
    },
    {
        "atc_level": "L02BG05",
        "atc_description": "vorozole"
    },
    {
        "atc_level": "L02BG06",
        "atc_description": "exemestane"
    },
    {
        "atc_level": "L02BX",
        "atc_description": "Other hormone antagonists and related agents"
    },
    {
        "atc_level": "L02BX01",
        "atc_description": "abarelix"
    },
    {
        "atc_level": "L02BX02",
        "atc_description": "degarelix"
    },
    {
        "atc_level": "L02BX03",
        "atc_description": "abiraterone"
    },
    {
        "atc_level": "L02BX04",
        "atc_description": "relugolix"
    },
    {
        "atc_level": "L02BZ",
        "atc_description": "Anti-adrenal steroids"
    },
    {
        "atc_level": "L03",
        "atc_description": "IMMUNOSTIMULANTS"
    },
    {
        "atc_level": "L03A",
        "atc_description": "IMMUNOSTIMULANTS"
    },
    {
        "atc_level": "L03AA",
        "atc_description": "Colony stimulating factors"
    },
    {
        "atc_level": "L03AA01",
        "atc_description": "Interleukin 2"
    },
    {
        "atc_level": "L03AA02",
        "atc_description": "filgrastim"
    },
    {
        "atc_level": "L03AA03",
        "atc_description": "molgramostim"
    },
    {
        "atc_level": "L03AA04",
        "atc_description": "Interferon alfa"
    },
    {
        "atc_level": "L03AA05",
        "atc_description": "Poly I:C"
    },
    {
        "atc_level": "L03AA06",
        "atc_description": "Poly ICLC"
    },
    {
        "atc_level": "L03AA07",
        "atc_description": "Thymopentin"
    },
    {
        "atc_level": "L03AA08",
        "atc_description": "Interferon gamma"
    },
    {
        "atc_level": "L03AA09",
        "atc_description": "sargramostim"
    },
    {
        "atc_level": "L03AA10",
        "atc_description": "lenograstim"
    },
    {
        "atc_level": "L03AA11",
        "atc_description": "Interferon beta"
    },
    {
        "atc_level": "L03AA12",
        "atc_description": "ancestim"
    },
    {
        "atc_level": "L03AA13",
        "atc_description": "pegfilgrastim"
    },
    {
        "atc_level": "L03AA14",
        "atc_description": "lipegfilgrastim"
    },
    {
        "atc_level": "L03AA15",
        "atc_description": "balugrastim"
    },
    {
        "atc_level": "L03AA16",
        "atc_description": "empegfilgrastim"
    },
    {
        "atc_level": "L03AA17",
        "atc_description": "pegteograstim"
    },
    {
        "atc_level": "L03AB",
        "atc_description": "Interferons"
    },
    {
        "atc_level": "L03AB01",
        "atc_description": "interferon alfa natural"
    },
    {
        "atc_level": "L03AB02",
        "atc_description": "interferon beta natural"
    },
    {
        "atc_level": "L03AB03",
        "atc_description": "interferon gamma"
    },
    {
        "atc_level": "L03AB04",
        "atc_description": "interferon alfa-2a"
    },
    {
        "atc_level": "L03AB05",
        "atc_description": "interferon alfa-2b"
    },
    {
        "atc_level": "L03AB06",
        "atc_description": "interferon alfa-n1"
    },
    {
        "atc_level": "L03AB07",
        "atc_description": "interferon beta-1a"
    },
    {
        "atc_level": "L03AB08",
        "atc_description": "interferon beta-1b"
    },
    {
        "atc_level": "L03AB09",
        "atc_description": "interferon alfacon-1"
    },
    {
        "atc_level": "L03AB10",
        "atc_description": "peginterferon alfa-2b"
    },
    {
        "atc_level": "L03AB11",
        "atc_description": "peginterferon alfa-2a"
    },
    {
        "atc_level": "L03AB12",
        "atc_description": "albinterferon alfa-2b"
    },
    {
        "atc_level": "L03AB13",
        "atc_description": "peginterferon beta-1a"
    },
    {
        "atc_level": "L03AB14",
        "atc_description": "cepeginterferon alfa-2b"
    },
    {
        "atc_level": "L03AB15",
        "atc_description": "ropeginterferon alfa-2b"
    },
    {
        "atc_level": "L03AB16",
        "atc_description": "peginterferon alfacon-2"
    },
    {
        "atc_level": "L03AB60",
        "atc_description": "peginterferon alfa-2b, combinations"
    },
    {
        "atc_level": "L03AB61",
        "atc_description": "peginterferon alfa-2a, combinations"
    },
    {
        "atc_level": "L03AC",
        "atc_description": "Interleukins"
    },
    {
        "atc_level": "L03AC01",
        "atc_description": "aldesleukin"
    },
    {
        "atc_level": "L03AC02",
        "atc_description": "oprelvekin"
    },
    {
        "atc_level": "L03AX",
        "atc_description": "Other immunostimulants"
    },
    {
        "atc_level": "L03AX01",
        "atc_description": "lentinan"
    },
    {
        "atc_level": "L03AX02",
        "atc_description": "roquinimex"
    },
    {
        "atc_level": "L03AX03",
        "atc_description": "BCG vaccine"
    },
    {
        "atc_level": "L03AX04",
        "atc_description": "pegademase"
    },
    {
        "atc_level": "L03AX05",
        "atc_description": "pidotimod"
    },
    {
        "atc_level": "L03AX06",
        "atc_description": "Edrecolomab"
    },
    {
        "atc_level": "L03AX07",
        "atc_description": "poly I:C"
    },
    {
        "atc_level": "L03AX08",
        "atc_description": "poly ICLC"
    },
    {
        "atc_level": "L03AX09",
        "atc_description": "thymopentin"
    },
    {
        "atc_level": "L03AX10",
        "atc_description": "immunocyanin"
    },
    {
        "atc_level": "L03AX11",
        "atc_description": "tasonermin"
    },
    {
        "atc_level": "L03AX12",
        "atc_description": "melanoma vaccine"
    },
    {
        "atc_level": "L03AX13",
        "atc_description": "glatiramer acetate"
    },
    {
        "atc_level": "L03AX14",
        "atc_description": "histamine dihydrochloride"
    },
    {
        "atc_level": "L03AX15",
        "atc_description": "mifamurtide"
    },
    {
        "atc_level": "L03AX16",
        "atc_description": "plerixafor"
    },
    {
        "atc_level": "L03AX17",
        "atc_description": "sipuleucel-T"
    },
    {
        "atc_level": "L03AX18",
        "atc_description": "cridanimod"
    },
    {
        "atc_level": "L03AX19",
        "atc_description": "dasiprotimut-T"
    },
    {
        "atc_level": "L03AX21",
        "atc_description": "elapegademase"
    },
    {
        "atc_level": "L04",
        "atc_description": "IMMUNOSUPPRESSANTS"
    },
    {
        "atc_level": "L04A",
        "atc_description": "IMMUNOSUPPRESSANTS"
    },
    {
        "atc_level": "L04AA",
        "atc_description": "Selective immunosuppressants"
    },
    {
        "atc_level": "L04AA01",
        "atc_description": "Ciclosporin"
    },
    {
        "atc_level": "L04AA02",
        "atc_description": "muromonab-CD3"
    },
    {
        "atc_level": "L04AA03",
        "atc_description": "antilymphocyte immunoglobulin (horse)"
    },
    {
        "atc_level": "L04AA04",
        "atc_description": "antithymocyte immunoglobulin (rabbit)"
    },
    {
        "atc_level": "L04AA05",
        "atc_description": "Tacrolimus"
    },
    {
        "atc_level": "L04AA06",
        "atc_description": "mycophenolic acid"
    },
    {
        "atc_level": "L04AA07",
        "atc_description": "Glatiramer acetate"
    },
    {
        "atc_level": "L04AA08",
        "atc_description": "Daclizumab"
    },
    {
        "atc_level": "L04AA09",
        "atc_description": "Basiliximab"
    },
    {
        "atc_level": "L04AA10",
        "atc_description": "sirolimus"
    },
    {
        "atc_level": "L04AA11",
        "atc_description": "Etanercept"
    },
    {
        "atc_level": "L04AA12",
        "atc_description": "Infliximab"
    },
    {
        "atc_level": "L04AA13",
        "atc_description": "leflunomide"
    },
    {
        "atc_level": "L04AA14",
        "atc_description": "Anakinra"
    },
    {
        "atc_level": "L04AA15",
        "atc_description": "alefacept"
    },
    {
        "atc_level": "L04AA16",
        "atc_description": "Afelimomab"
    },
    {
        "atc_level": "L04AA17",
        "atc_description": "Adalimumab"
    },
    {
        "atc_level": "L04AA18",
        "atc_description": "everolimus"
    },
    {
        "atc_level": "L04AA19",
        "atc_description": "gusperimus"
    },
    {
        "atc_level": "L04AA21",
        "atc_description": "efalizumab"
    },
    {
        "atc_level": "L04AA22",
        "atc_description": "abetimus"
    },
    {
        "atc_level": "L04AA23",
        "atc_description": "natalizumab"
    },
    {
        "atc_level": "L04AA24",
        "atc_description": "abatacept"
    },
    {
        "atc_level": "L04AA25",
        "atc_description": "eculizumab"
    },
    {
        "atc_level": "L04AA26",
        "atc_description": "belimumab"
    },
    {
        "atc_level": "L04AA27",
        "atc_description": "fingolimod"
    },
    {
        "atc_level": "L04AA28",
        "atc_description": "belatacept"
    },
    {
        "atc_level": "L04AA29",
        "atc_description": "tofacitinib"
    },
    {
        "atc_level": "L04AA31",
        "atc_description": "teriflunomide"
    },
    {
        "atc_level": "L04AA32",
        "atc_description": "apremilast"
    },
    {
        "atc_level": "L04AA33",
        "atc_description": "vedolizumab"
    },
    {
        "atc_level": "L04AA34",
        "atc_description": "alemtuzumab"
    },
    {
        "atc_level": "L04AA35",
        "atc_description": "begelomab"
    },
    {
        "atc_level": "L04AA36",
        "atc_description": "ocrelizumab"
    },
    {
        "atc_level": "L04AA37",
        "atc_description": "baricitinib"
    },
    {
        "atc_level": "L04AA38",
        "atc_description": "ozanimod"
    },
    {
        "atc_level": "L04AA39",
        "atc_description": "emapalumab"
    },
    {
        "atc_level": "L04AA40",
        "atc_description": "cladribine"
    },
    {
        "atc_level": "L04AA41",
        "atc_description": "imlifidase"
    },
    {
        "atc_level": "L04AA42",
        "atc_description": "siponimod"
    },
    {
        "atc_level": "L04AA43",
        "atc_description": "ravulizumab"
    },
    {
        "atc_level": "L04AA44",
        "atc_description": "upadacitinib"
    },
    {
        "atc_level": "L04AA45",
        "atc_description": "filgotinib"
    },
    {
        "atc_level": "L04AA46",
        "atc_description": "itacitinib"
    },
    {
        "atc_level": "L04AA47",
        "atc_description": "inebilizumab"
    },
    {
        "atc_level": "L04AA48",
        "atc_description": "belumosudil"
    },
    {
        "atc_level": "L04AA49",
        "atc_description": "peficitinib"
    },
    {
        "atc_level": "L04AA50",
        "atc_description": "ponesimod"
    },
    {
        "atc_level": "L04AA51",
        "atc_description": "anifrolumab"
    },
    {
        "atc_level": "L04AA52",
        "atc_description": "ofatumumab"
    },
    {
        "atc_level": "L04AA53",
        "atc_description": "teprotumumab"
    },
    {
        "atc_level": "L04AA54",
        "atc_description": "pegcetacoplan"
    },
    {
        "atc_level": "L04AA55",
        "atc_description": "sutimlimab"
    },
    {
        "atc_level": "L04AA56",
        "atc_description": "deucravacitinib"
    },
    {
        "atc_level": "L04AB",
        "atc_description": "Tumor necrosis factor alpha (TNF-alpha) inhibitors"
    },
    {
        "atc_level": "L04AB01",
        "atc_description": "etanercept"
    },
    {
        "atc_level": "L04AB02",
        "atc_description": "infliximab"
    },
    {
        "atc_level": "L04AB03",
        "atc_description": "afelimomab"
    },
    {
        "atc_level": "L04AB04",
        "atc_description": "adalimumab"
    },
    {
        "atc_level": "L04AB05",
        "atc_description": "certolizumab pegol"
    },
    {
        "atc_level": "L04AB06",
        "atc_description": "golimumab"
    },
    {
        "atc_level": "L04AB07",
        "atc_description": "opinercept"
    },
    {
        "atc_level": "L04AC",
        "atc_description": "Interleukin inhibitors"
    },
    {
        "atc_level": "L04AC01",
        "atc_description": "daclizumab"
    },
    {
        "atc_level": "L04AC02",
        "atc_description": "basiliximab"
    },
    {
        "atc_level": "L04AC03",
        "atc_description": "anakinra"
    },
    {
        "atc_level": "L04AC04",
        "atc_description": "rilonacept"
    },
    {
        "atc_level": "L04AC05",
        "atc_description": "ustekinumab"
    },
    {
        "atc_level": "L04AC06",
        "atc_description": "mepolizumab"
    },
    {
        "atc_level": "L04AC07",
        "atc_description": "tocilizumab"
    },
    {
        "atc_level": "L04AC08",
        "atc_description": "canakinumab"
    },
    {
        "atc_level": "L04AC09",
        "atc_description": "briakinumab"
    },
    {
        "atc_level": "L04AC10",
        "atc_description": "secukinumab"
    },
    {
        "atc_level": "L04AC11",
        "atc_description": "siltuximab"
    },
    {
        "atc_level": "L04AC12",
        "atc_description": "brodalumab"
    },
    {
        "atc_level": "L04AC13",
        "atc_description": "ixekizumab"
    },
    {
        "atc_level": "L04AC14",
        "atc_description": "sarilumab"
    },
    {
        "atc_level": "L04AC15",
        "atc_description": "sirukumab"
    },
    {
        "atc_level": "L04AC16",
        "atc_description": "guselkumab"
    },
    {
        "atc_level": "L04AC17",
        "atc_description": "tildrakizumab"
    },
    {
        "atc_level": "L04AC18",
        "atc_description": "risankizumab"
    },
    {
        "atc_level": "L04AC19",
        "atc_description": "satralizumab"
    },
    {
        "atc_level": "L04AC20",
        "atc_description": "netakimab"
    },
    {
        "atc_level": "L04AC21",
        "atc_description": "bimekizumab"
    },
    {
        "atc_level": "L04AC22",
        "atc_description": "spesolimab"
    },
    {
        "atc_level": "L04AD",
        "atc_description": "Calcineurin inhibitors"
    },
    {
        "atc_level": "L04AD01",
        "atc_description": "ciclosporin"
    },
    {
        "atc_level": "L04AD02",
        "atc_description": "tacrolimus"
    },
    {
        "atc_level": "L04AD03",
        "atc_description": "voclosporin"
    },
    {
        "atc_level": "L04AX",
        "atc_description": "Other immunosuppressants"
    },
    {
        "atc_level": "L04AX01",
        "atc_description": "azathioprine"
    },
    {
        "atc_level": "L04AX02",
        "atc_description": "thalidomide"
    },
    {
        "atc_level": "L04AX03",
        "atc_description": "methotrexate"
    },
    {
        "atc_level": "L04AX04",
        "atc_description": "lenalidomide"
    },
    {
        "atc_level": "L04AX05",
        "atc_description": "pirfenidone"
    },
    {
        "atc_level": "L04AX06",
        "atc_description": "pomalidomide"
    },
    {
        "atc_level": "L04AX07",
        "atc_description": "dimethyl fumarate"
    },
    {
        "atc_level": "L04AX08",
        "atc_description": "darvadstrocel"
    },
    {
        "atc_level": "L04AX09",
        "atc_description": "diroximel fumarate"
    },
    {
        "atc_level": "L04AY",
        "atc_description": "THERAPEUTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "L04AZ",
        "atc_description": "Non-radioisotopes used in conjunction with L04AX"
    },
    {
        "atc_level": "L04B",
        "atc_description": "THERAPEUTIC RADIOISOTOPES"
    },
    {
        "atc_level": "L04BA",
        "atc_description": "THERAPEUTIC RADIOISOTOPES"
    },
    {
        "atc_level": "L04BB",
        "atc_description": "THERAPEUTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "L04BC",
        "atc_description": "NON-RADIOISOTOPES USED IN CONJUNCTION WITH L04BA"
    },
    {
        "atc_level": "L04BX",
        "atc_description": "PHOTOSENSITISERS IN PHOTORADIATION THERAPY"
    },
    {
        "atc_level": "M",
        "atc_description": "MUSCULO-SKELETAL SYSTEM"
    },
    {
        "atc_level": "M00",
        "atc_description": "MUSCULO-SKELETAL SYSTEM"
    },
    {
        "atc_level": "M01",
        "atc_description": "ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS"
    },
    {
        "atc_level": "M01A",
        "atc_description": "ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS"
    },
    {
        "atc_level": "M01AA",
        "atc_description": "Butylpyrazolidines"
    },
    {
        "atc_level": "M01AA01",
        "atc_description": "phenylbutazone"
    },
    {
        "atc_level": "M01AA02",
        "atc_description": "mofebutazone"
    },
    {
        "atc_level": "M01AA03",
        "atc_description": "oxyphenbutazone"
    },
    {
        "atc_level": "M01AA04",
        "atc_description": "Azapropazone"
    },
    {
        "atc_level": "M01AA05",
        "atc_description": "clofezone"
    },
    {
        "atc_level": "M01AA06",
        "atc_description": "kebuzone"
    },
    {
        "atc_level": "M01AB",
        "atc_description": "Acetic acid derivatives and related substances"
    },
    {
        "atc_level": "M01AB01",
        "atc_description": "indometacin"
    },
    {
        "atc_level": "M01AB02",
        "atc_description": "sulindac"
    },
    {
        "atc_level": "M01AB03",
        "atc_description": "tolmetin"
    },
    {
        "atc_level": "M01AB04",
        "atc_description": "zomepirac"
    },
    {
        "atc_level": "M01AB05",
        "atc_description": "diclofenac"
    },
    {
        "atc_level": "M01AB06",
        "atc_description": "alclofenac"
    },
    {
        "atc_level": "M01AB07",
        "atc_description": "bumadizone"
    },
    {
        "atc_level": "M01AB08",
        "atc_description": "etodolac"
    },
    {
        "atc_level": "M01AB09",
        "atc_description": "lonazolac"
    },
    {
        "atc_level": "M01AB10",
        "atc_description": "fentiazac"
    },
    {
        "atc_level": "M01AB11",
        "atc_description": "acemetacin"
    },
    {
        "atc_level": "M01AB12",
        "atc_description": "difenpiramide"
    },
    {
        "atc_level": "M01AB13",
        "atc_description": "oxametacin"
    },
    {
        "atc_level": "M01AB14",
        "atc_description": "proglumetacin"
    },
    {
        "atc_level": "M01AB15",
        "atc_description": "ketorolac"
    },
    {
        "atc_level": "M01AB16",
        "atc_description": "aceclofenac"
    },
    {
        "atc_level": "M01AB17",
        "atc_description": "bufexamac"
    },
    {
        "atc_level": "M01AB51",
        "atc_description": "indometacin, combinations"
    },
    {
        "atc_level": "M01AB55",
        "atc_description": "diclofenac, combinations"
    },
    {
        "atc_level": "M01AC",
        "atc_description": "Oxicams"
    },
    {
        "atc_level": "M01AC01",
        "atc_description": "piroxicam"
    },
    {
        "atc_level": "M01AC02",
        "atc_description": "tenoxicam"
    },
    {
        "atc_level": "M01AC04",
        "atc_description": "droxicam"
    },
    {
        "atc_level": "M01AC05",
        "atc_description": "lornoxicam"
    },
    {
        "atc_level": "M01AC06",
        "atc_description": "meloxicam"
    },
    {
        "atc_level": "M01AC56",
        "atc_description": "meloxicam, combinations"
    },
    {
        "atc_level": "M01AE",
        "atc_description": "Propionic acid derivatives"
    },
    {
        "atc_level": "M01AE01",
        "atc_description": "ibuprofen"
    },
    {
        "atc_level": "M01AE02",
        "atc_description": "naproxen"
    },
    {
        "atc_level": "M01AE03",
        "atc_description": "ketoprofen"
    },
    {
        "atc_level": "M01AE04",
        "atc_description": "fenoprofen"
    },
    {
        "atc_level": "M01AE05",
        "atc_description": "fenbufen"
    },
    {
        "atc_level": "M01AE06",
        "atc_description": "benoxaprofen"
    },
    {
        "atc_level": "M01AE07",
        "atc_description": "suprofen"
    },
    {
        "atc_level": "M01AE08",
        "atc_description": "pirprofen"
    },
    {
        "atc_level": "M01AE09",
        "atc_description": "flurbiprofen"
    },
    {
        "atc_level": "M01AE10",
        "atc_description": "indoprofen"
    },
    {
        "atc_level": "M01AE11",
        "atc_description": "tiaprofenic acid"
    },
    {
        "atc_level": "M01AE12",
        "atc_description": "oxaprozin"
    },
    {
        "atc_level": "M01AE13",
        "atc_description": "ibuproxam"
    },
    {
        "atc_level": "M01AE14",
        "atc_description": "dexibuprofen"
    },
    {
        "atc_level": "M01AE15",
        "atc_description": "flunoxaprofen"
    },
    {
        "atc_level": "M01AE16",
        "atc_description": "alminoprofen"
    },
    {
        "atc_level": "M01AE17",
        "atc_description": "dexketoprofen"
    },
    {
        "atc_level": "M01AE18",
        "atc_description": "naproxcinod"
    },
    {
        "atc_level": "M01AE51",
        "atc_description": "ibuprofen, combinations"
    },
    {
        "atc_level": "M01AE52",
        "atc_description": "naproxen and esomeprazole"
    },
    {
        "atc_level": "M01AE53",
        "atc_description": "ketoprofen, combinations"
    },
    {
        "atc_level": "M01AE56",
        "atc_description": "naproxen and misoprostol"
    },
    {
        "atc_level": "M01AG",
        "atc_description": "Fenamates"
    },
    {
        "atc_level": "M01AG01",
        "atc_description": "mefenamic acid"
    },
    {
        "atc_level": "M01AG02",
        "atc_description": "tolfenamic acid"
    },
    {
        "atc_level": "M01AG03",
        "atc_description": "flufenamic acid"
    },
    {
        "atc_level": "M01AG04",
        "atc_description": "meclofenamic acid"
    },
    {
        "atc_level": "M01AH",
        "atc_description": "Coxibs"
    },
    {
        "atc_level": "M01AH01",
        "atc_description": "celecoxib"
    },
    {
        "atc_level": "M01AH02",
        "atc_description": "rofecoxib"
    },
    {
        "atc_level": "M01AH03",
        "atc_description": "valdecoxib"
    },
    {
        "atc_level": "M01AH04",
        "atc_description": "parecoxib"
    },
    {
        "atc_level": "M01AH05",
        "atc_description": "etoricoxib"
    },
    {
        "atc_level": "M01AH06",
        "atc_description": "lumiracoxib"
    },
    {
        "atc_level": "M01AH07",
        "atc_description": "polmacoxib"
    },
    {
        "atc_level": "M01AX",
        "atc_description": "Other antiinflammatory and antirheumatic agents, non-steroids"
    },
    {
        "atc_level": "M01AX01",
        "atc_description": "nabumetone"
    },
    {
        "atc_level": "M01AX02",
        "atc_description": "niflumic acid"
    },
    {
        "atc_level": "M01AX03",
        "atc_description": "Ketorolac"
    },
    {
        "atc_level": "M01AX04",
        "atc_description": "azapropazone"
    },
    {
        "atc_level": "M01AX05",
        "atc_description": "glucosamine"
    },
    {
        "atc_level": "M01AX07",
        "atc_description": "benzydamine"
    },
    {
        "atc_level": "M01AX12",
        "atc_description": "glucosaminoglycan polysulfate"
    },
    {
        "atc_level": "M01AX13",
        "atc_description": "proquazone"
    },
    {
        "atc_level": "M01AX14",
        "atc_description": "orgotein"
    },
    {
        "atc_level": "M01AX17",
        "atc_description": "nimesulide"
    },
    {
        "atc_level": "M01AX18",
        "atc_description": "feprazone"
    },
    {
        "atc_level": "M01AX21",
        "atc_description": "diacerein"
    },
    {
        "atc_level": "M01AX22",
        "atc_description": "morniflumate"
    },
    {
        "atc_level": "M01AX23",
        "atc_description": "tenidap"
    },
    {
        "atc_level": "M01AX24",
        "atc_description": "oxaceprol"
    },
    {
        "atc_level": "M01AX25",
        "atc_description": "chondroitin sulfate"
    },
    {
        "atc_level": "M01AX26",
        "atc_description": "avocado and soyabean oil, unsaponifiables"
    },
    {
        "atc_level": "M01AX68",
        "atc_description": "feprazone, combinations"
    },
    {
        "atc_level": "M01B",
        "atc_description": "ANTIINFLAMMATORY/ANTIRHEUMATIC AGENTS IN COMBINATION"
    },
    {
        "atc_level": "M01BA",
        "atc_description": "Antiinflammatory/antirheumatic agents in combination with corticosteroids"
    },
    {
        "atc_level": "M01BA01",
        "atc_description": "phenylbutazone and corticosteroids"
    },
    {
        "atc_level": "M01BA02",
        "atc_description": "dipyrocetyl and corticosteroids"
    },
    {
        "atc_level": "M01BA03",
        "atc_description": "acetylsalicylic acid and corticosteroids"
    },
    {
        "atc_level": "M01BX",
        "atc_description": "Other antiinflammatory/antirheumatic agents in combination with other drugs"
    },
    {
        "atc_level": "M01C",
        "atc_description": "SPECIFIC ANTIRHEUMATIC AGENTS"
    },
    {
        "atc_level": "M01CA",
        "atc_description": "Quinolines"
    },
    {
        "atc_level": "M01CA03",
        "atc_description": "oxycinchophen"
    },
    {
        "atc_level": "M01CB",
        "atc_description": "Gold preparations"
    },
    {
        "atc_level": "M01CB01",
        "atc_description": "sodium aurothiomalate"
    },
    {
        "atc_level": "M01CB02",
        "atc_description": "sodium aurotiosulfate"
    },
    {
        "atc_level": "M01CB03",
        "atc_description": "auranofin"
    },
    {
        "atc_level": "M01CB04",
        "atc_description": "aurothioglucose"
    },
    {
        "atc_level": "M01CB05",
        "atc_description": "aurotioprol"
    },
    {
        "atc_level": "M01CC",
        "atc_description": "Penicillamine and similar agents"
    },
    {
        "atc_level": "M01CC01",
        "atc_description": "penicillamine"
    },
    {
        "atc_level": "M01CC02",
        "atc_description": "bucillamine"
    },
    {
        "atc_level": "M01CX",
        "atc_description": "Other specific antirheumatic agents"
    },
    {
        "atc_level": "M02",
        "atc_description": "TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN"
    },
    {
        "atc_level": "M02A",
        "atc_description": "TOPICAL PRODUCTS FOR JOINT AND MUSCULAR PAIN"
    },
    {
        "atc_level": "M02AA",
        "atc_description": "Antiinflammatory preparations, non-steroids for topical use"
    },
    {
        "atc_level": "M02AA01",
        "atc_description": "phenylbutazone"
    },
    {
        "atc_level": "M02AA02",
        "atc_description": "mofebutazone"
    },
    {
        "atc_level": "M02AA03",
        "atc_description": "clofezone"
    },
    {
        "atc_level": "M02AA04",
        "atc_description": "oxyphenbutazone"
    },
    {
        "atc_level": "M02AA05",
        "atc_description": "benzydamine"
    },
    {
        "atc_level": "M02AA06",
        "atc_description": "etofenamate"
    },
    {
        "atc_level": "M02AA07",
        "atc_description": "piroxicam"
    },
    {
        "atc_level": "M02AA08",
        "atc_description": "felbinac"
    },
    {
        "atc_level": "M02AA09",
        "atc_description": "bufexamac"
    },
    {
        "atc_level": "M02AA10",
        "atc_description": "ketoprofen"
    },
    {
        "atc_level": "M02AA11",
        "atc_description": "bendazac"
    },
    {
        "atc_level": "M02AA12",
        "atc_description": "naproxen"
    },
    {
        "atc_level": "M02AA13",
        "atc_description": "ibuprofen"
    },
    {
        "atc_level": "M02AA14",
        "atc_description": "fentiazac"
    },
    {
        "atc_level": "M02AA15",
        "atc_description": "diclofenac"
    },
    {
        "atc_level": "M02AA16",
        "atc_description": "feprazone"
    },
    {
        "atc_level": "M02AA17",
        "atc_description": "niflumic acid"
    },
    {
        "atc_level": "M02AA18",
        "atc_description": "meclofenamic acid"
    },
    {
        "atc_level": "M02AA19",
        "atc_description": "flurbiprofen"
    },
    {
        "atc_level": "M02AA21",
        "atc_description": "tolmetin"
    },
    {
        "atc_level": "M02AA22",
        "atc_description": "suxibuzone"
    },
    {
        "atc_level": "M02AA23",
        "atc_description": "indometacin"
    },
    {
        "atc_level": "M02AA24",
        "atc_description": "nifenazone"
    },
    {
        "atc_level": "M02AA25",
        "atc_description": "aceclofenac"
    },
    {
        "atc_level": "M02AA26",
        "atc_description": "nimesulide"
    },
    {
        "atc_level": "M02AA27",
        "atc_description": "dexketoprofen"
    },
    {
        "atc_level": "M02AA28",
        "atc_description": "piketoprofen"
    },
    {
        "atc_level": "M02AA29",
        "atc_description": "esflurbiprofen"
    },
    {
        "atc_level": "M02AA31",
        "atc_description": "loxoprofen"
    },
    {
        "atc_level": "M02AB",
        "atc_description": "Capsaicin and similar agents"
    },
    {
        "atc_level": "M02AB01",
        "atc_description": "capsaicin"
    },
    {
        "atc_level": "M02AB02",
        "atc_description": "zucapsaicin"
    },
    {
        "atc_level": "M02AC",
        "atc_description": "Preparations with salicylic acid derivatives"
    },
    {
        "atc_level": "M02AX",
        "atc_description": "Other topical products for joint and muscular pain"
    },
    {
        "atc_level": "M02AX02",
        "atc_description": "tolazoline"
    },
    {
        "atc_level": "M02AX03",
        "atc_description": "dimethyl sulfoxide"
    },
    {
        "atc_level": "M02AX05",
        "atc_description": "idrocilamide"
    },
    {
        "atc_level": "M02AX06",
        "atc_description": "tolperisone"
    },
    {
        "atc_level": "M02AX10",
        "atc_description": "various"
    },
    {
        "atc_level": "M03",
        "atc_description": "MUSCLE RELAXANTS"
    },
    {
        "atc_level": "M03A",
        "atc_description": "MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS"
    },
    {
        "atc_level": "M03AA",
        "atc_description": "Curare alkaloids"
    },
    {
        "atc_level": "M03AA01",
        "atc_description": "alcuronium"
    },
    {
        "atc_level": "M03AA02",
        "atc_description": "tubocurarine"
    },
    {
        "atc_level": "M03AA04",
        "atc_description": "dimethyltubocurarine"
    },
    {
        "atc_level": "M03AB",
        "atc_description": "Choline derivatives"
    },
    {
        "atc_level": "M03AB01",
        "atc_description": "suxamethonium"
    },
    {
        "atc_level": "M03AC",
        "atc_description": "Other quaternary ammonium compounds"
    },
    {
        "atc_level": "M03AC01",
        "atc_description": "pancuronium"
    },
    {
        "atc_level": "M03AC02",
        "atc_description": "gallamine"
    },
    {
        "atc_level": "M03AC03",
        "atc_description": "vecuronium"
    },
    {
        "atc_level": "M03AC04",
        "atc_description": "atracurium"
    },
    {
        "atc_level": "M03AC05",
        "atc_description": "hexafluronium"
    },
    {
        "atc_level": "M03AC06",
        "atc_description": "pipecuronium bromide"
    },
    {
        "atc_level": "M03AC07",
        "atc_description": "doxacurium chloride"
    },
    {
        "atc_level": "M03AC08",
        "atc_description": "fazadinium bromide"
    },
    {
        "atc_level": "M03AC09",
        "atc_description": "rocuronium bromide"
    },
    {
        "atc_level": "M03AC10",
        "atc_description": "mivacurium chloride"
    },
    {
        "atc_level": "M03AC11",
        "atc_description": "cisatracurium"
    },
    {
        "atc_level": "M03AX",
        "atc_description": "Other muscle relaxants, peripherally acting agents"
    },
    {
        "atc_level": "M03AX01",
        "atc_description": "botulinum toxin"
    },
    {
        "atc_level": "M03B",
        "atc_description": "MUSCLE RELAXANTS, CENTRALLY ACTING AGENTS"
    },
    {
        "atc_level": "M03BA",
        "atc_description": "Carbamic acid esters"
    },
    {
        "atc_level": "M03BA01",
        "atc_description": "phenprobamate"
    },
    {
        "atc_level": "M03BA02",
        "atc_description": "carisoprodol"
    },
    {
        "atc_level": "M03BA03",
        "atc_description": "methocarbamol"
    },
    {
        "atc_level": "M03BA04",
        "atc_description": "styramate"
    },
    {
        "atc_level": "M03BA05",
        "atc_description": "febarbamate"
    },
    {
        "atc_level": "M03BA51",
        "atc_description": "phenprobamate, combinations excl. psycholeptics"
    },
    {
        "atc_level": "M03BA52",
        "atc_description": "carisoprodol, combinations excl. psycholeptics"
    },
    {
        "atc_level": "M03BA53",
        "atc_description": "methocarbamol, combinations excl. psycholeptics"
    },
    {
        "atc_level": "M03BA71",
        "atc_description": "phenprobamate, combinations with psycholeptics"
    },
    {
        "atc_level": "M03BA72",
        "atc_description": "carisoprodol, combinations with psycholeptics"
    },
    {
        "atc_level": "M03BA73",
        "atc_description": "methocarbamol, combinations with psycholeptics"
    },
    {
        "atc_level": "M03BB",
        "atc_description": "Oxazol, thiazine, and triazine derivatives"
    },
    {
        "atc_level": "M03BB02",
        "atc_description": "chlormezanone"
    },
    {
        "atc_level": "M03BB03",
        "atc_description": "chlorzoxazone"
    },
    {
        "atc_level": "M03BB52",
        "atc_description": "chlormezanone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "M03BB53",
        "atc_description": "chlorzoxazone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "M03BB72",
        "atc_description": "chlormezanone, combinations with psycholeptics"
    },
    {
        "atc_level": "M03BB73",
        "atc_description": "chlorzoxazone, combinations with psycholeptics"
    },
    {
        "atc_level": "M03BC",
        "atc_description": "Ethers, chemically close to antihistamines"
    },
    {
        "atc_level": "M03BC01",
        "atc_description": "orphenadrine (citrate)"
    },
    {
        "atc_level": "M03BC51",
        "atc_description": "orphenadrine, combinations"
    },
    {
        "atc_level": "M03BX",
        "atc_description": "Other centrally acting agents"
    },
    {
        "atc_level": "M03BX01",
        "atc_description": "baclofen"
    },
    {
        "atc_level": "M03BX02",
        "atc_description": "tizanidine"
    },
    {
        "atc_level": "M03BX03",
        "atc_description": "pridinol"
    },
    {
        "atc_level": "M03BX04",
        "atc_description": "tolperisone"
    },
    {
        "atc_level": "M03BX05",
        "atc_description": "thiocolchicoside"
    },
    {
        "atc_level": "M03BX06",
        "atc_description": "mephenesin"
    },
    {
        "atc_level": "M03BX07",
        "atc_description": "tetrazepam"
    },
    {
        "atc_level": "M03BX08",
        "atc_description": "cyclobenzaprine"
    },
    {
        "atc_level": "M03BX09",
        "atc_description": "eperisone"
    },
    {
        "atc_level": "M03BX30",
        "atc_description": "fenyramidol"
    },
    {
        "atc_level": "M03BX55",
        "atc_description": "thiocolchicoside, combinations"
    },
    {
        "atc_level": "M03C",
        "atc_description": "MUSCLE RELAXANTS, DIRECTLY ACTING AGENTS"
    },
    {
        "atc_level": "M03CA",
        "atc_description": "Dantrolene and derivatives"
    },
    {
        "atc_level": "M03CA01",
        "atc_description": "dantrolene"
    },
    {
        "atc_level": "M04",
        "atc_description": "ANTIGOUT PREPARATIONS"
    },
    {
        "atc_level": "M04A",
        "atc_description": "ANTIGOUT PREPARATIONS"
    },
    {
        "atc_level": "M04AA",
        "atc_description": "Preparations inhibiting uric acid production"
    },
    {
        "atc_level": "M04AA01",
        "atc_description": "allopurinol"
    },
    {
        "atc_level": "M04AA02",
        "atc_description": "tisopurine"
    },
    {
        "atc_level": "M04AA03",
        "atc_description": "febuxostat"
    },
    {
        "atc_level": "M04AA51",
        "atc_description": "allopurinol, combinations"
    },
    {
        "atc_level": "M04AB",
        "atc_description": "Preparations increasing uric acid excretion"
    },
    {
        "atc_level": "M04AB01",
        "atc_description": "probenecid"
    },
    {
        "atc_level": "M04AB02",
        "atc_description": "sulfinpyrazone"
    },
    {
        "atc_level": "M04AB03",
        "atc_description": "benzbromarone"
    },
    {
        "atc_level": "M04AB04",
        "atc_description": "isobromindione"
    },
    {
        "atc_level": "M04AB05",
        "atc_description": "lesinurad"
    },
    {
        "atc_level": "M04AC",
        "atc_description": "Preparations with no effect on uric acid metabolism"
    },
    {
        "atc_level": "M04AC01",
        "atc_description": "colchicine"
    },
    {
        "atc_level": "M04AC02",
        "atc_description": "cinchophen"
    },
    {
        "atc_level": "M04AX",
        "atc_description": "Other antigout preparations"
    },
    {
        "atc_level": "M04AX01",
        "atc_description": "urate oxidase"
    },
    {
        "atc_level": "M04AX02",
        "atc_description": "pegloticase"
    },
    {
        "atc_level": "M05",
        "atc_description": "DRUGS FOR TREATMENT OF BONE DISEASES"
    },
    {
        "atc_level": "M05A",
        "atc_description": "Other drugs for disorders of the musculo-skeletal system"
    },
    {
        "atc_level": "M05AA",
        "atc_description": "Quinine and derivatives"
    },
    {
        "atc_level": "M05AA02",
        "atc_description": "Hydroquinine"
    },
    {
        "atc_level": "M05AA51",
        "atc_description": "Quinine, combinations"
    },
    {
        "atc_level": "M05AB",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "M05AB01",
        "atc_description": "Chymopapain"
    },
    {
        "atc_level": "M05AX",
        "atc_description": "OTHER DRUGS FOR DISORDERS OF MUSCULO-SKELETAL SYSTEM"
    },
    {
        "atc_level": "M05B",
        "atc_description": "DRUGS AFFECTING BONE STRUCTURE AND MINERALIZATION"
    },
    {
        "atc_level": "M05BA",
        "atc_description": "Bisphosphonates"
    },
    {
        "atc_level": "M05BA01",
        "atc_description": "etidronic acid"
    },
    {
        "atc_level": "M05BA02",
        "atc_description": "clodronic acid"
    },
    {
        "atc_level": "M05BA03",
        "atc_description": "pamidronic acid"
    },
    {
        "atc_level": "M05BA04",
        "atc_description": "alendronic acid"
    },
    {
        "atc_level": "M05BA05",
        "atc_description": "tiludronic acid"
    },
    {
        "atc_level": "M05BA06",
        "atc_description": "ibandronic acid"
    },
    {
        "atc_level": "M05BA07",
        "atc_description": "risedronic acid"
    },
    {
        "atc_level": "M05BA08",
        "atc_description": "zoledronic acid"
    },
    {
        "atc_level": "M05BB",
        "atc_description": "Bisphosphonates, combinations"
    },
    {
        "atc_level": "M05BB01",
        "atc_description": "etidronic acid and calcium, sequential"
    },
    {
        "atc_level": "M05BB02",
        "atc_description": "risedronic acid and calcium, sequential"
    },
    {
        "atc_level": "M05BB03",
        "atc_description": "alendronic acid and colecalciferol"
    },
    {
        "atc_level": "M05BB04",
        "atc_description": "risedronic acid, calcium and colecalciferol, sequential"
    },
    {
        "atc_level": "M05BB05",
        "atc_description": "alendronic acid, calcium and colecalciferol, sequential"
    },
    {
        "atc_level": "M05BB06",
        "atc_description": "alendronic acid and alfacalcidol, sequential"
    },
    {
        "atc_level": "M05BB07",
        "atc_description": "risedronic acid and colecalciferol"
    },
    {
        "atc_level": "M05BB08",
        "atc_description": "zoledronic acid, calcium and colecalciferol, sequential"
    },
    {
        "atc_level": "M05BB09",
        "atc_description": "ibandronic acid and colecalciferol"
    },
    {
        "atc_level": "M05BC",
        "atc_description": "Bone morphogenetic proteins"
    },
    {
        "atc_level": "M05BC01",
        "atc_description": "dibotermin alfa"
    },
    {
        "atc_level": "M05BC02",
        "atc_description": "eptotermin alfa"
    },
    {
        "atc_level": "M05BX",
        "atc_description": "Other drugs affecting bone structure and mineralization"
    },
    {
        "atc_level": "M05BX01",
        "atc_description": "ipriflavone"
    },
    {
        "atc_level": "M05BX02",
        "atc_description": "aluminium chlorohydrate"
    },
    {
        "atc_level": "M05BX03",
        "atc_description": "strontium ranelate"
    },
    {
        "atc_level": "M05BX04",
        "atc_description": "denosumab"
    },
    {
        "atc_level": "M05BX05",
        "atc_description": "burosumab"
    },
    {
        "atc_level": "M05BX06",
        "atc_description": "romosozumab"
    },
    {
        "atc_level": "M05BX07",
        "atc_description": "vosoritide"
    },
    {
        "atc_level": "M05BX53",
        "atc_description": "strontium ranelate and colecalciferol"
    },
    {
        "atc_level": "M09",
        "atc_description": "OTHER DRUGS FOR DISORDERS OF THE MUSCULO-SKELETAL SYSTEM"
    },
    {
        "atc_level": "M09A",
        "atc_description": "OTHER DRUGS FOR DISORDERS OF THE MUSCULO-SKELETAL SYSTEM"
    },
    {
        "atc_level": "M09AA",
        "atc_description": "Quinine and derivatives"
    },
    {
        "atc_level": "M09AA01",
        "atc_description": "hydroquinine"
    },
    {
        "atc_level": "M09AA72",
        "atc_description": "quinine, combinations with psycholeptics"
    },
    {
        "atc_level": "M09AB",
        "atc_description": "Enzymes"
    },
    {
        "atc_level": "M09AB01",
        "atc_description": "chymopapain"
    },
    {
        "atc_level": "M09AB02",
        "atc_description": "collagenase clostridium histolyticum"
    },
    {
        "atc_level": "M09AB03",
        "atc_description": "bromelains"
    },
    {
        "atc_level": "M09AB52",
        "atc_description": "trypsin, combinations"
    },
    {
        "atc_level": "M09AX",
        "atc_description": "Other drugs for disorders of the musculo-skeletal system"
    },
    {
        "atc_level": "M09AX01",
        "atc_description": "hyaluronic acid"
    },
    {
        "atc_level": "M09AX02",
        "atc_description": "chondrocytes, autologous"
    },
    {
        "atc_level": "M09AX03",
        "atc_description": "ataluren"
    },
    {
        "atc_level": "M09AX04",
        "atc_description": "drisapersen"
    },
    {
        "atc_level": "M09AX05",
        "atc_description": "aceneuramic acid"
    },
    {
        "atc_level": "M09AX06",
        "atc_description": "eteplirsen"
    },
    {
        "atc_level": "M09AX07",
        "atc_description": "nusinersen"
    },
    {
        "atc_level": "M09AX08",
        "atc_description": "golodirsen"
    },
    {
        "atc_level": "M09AX09",
        "atc_description": "onasemnogene abeparvovec"
    },
    {
        "atc_level": "M09AX10",
        "atc_description": "risdiplam"
    },
    {
        "atc_level": "M09AX11",
        "atc_description": "palovarotene"
    },
    {
        "atc_level": "M09AX12",
        "atc_description": "viltolarsen"
    },
    {
        "atc_level": "M09AX13",
        "atc_description": "casimersen"
    },
    {
        "atc_level": "N",
        "atc_description": "NERVOUS SYSTEM"
    },
    {
        "atc_level": "N00",
        "atc_description": "CENTRAL NERVOUS SYSTEM"
    },
    {
        "atc_level": "N01",
        "atc_description": "ANESTHETICS"
    },
    {
        "atc_level": "N01A",
        "atc_description": "ANESTHETICS, GENERAL"
    },
    {
        "atc_level": "N01AA",
        "atc_description": "Ethers"
    },
    {
        "atc_level": "N01AA01",
        "atc_description": "diethyl ether"
    },
    {
        "atc_level": "N01AA02",
        "atc_description": "vinyl ether"
    },
    {
        "atc_level": "N01AB",
        "atc_description": "Halogenated hydrocarbons"
    },
    {
        "atc_level": "N01AB01",
        "atc_description": "halothane"
    },
    {
        "atc_level": "N01AB02",
        "atc_description": "chloroform"
    },
    {
        "atc_level": "N01AB03",
        "atc_description": "Methoxyflurane"
    },
    {
        "atc_level": "N01AB04",
        "atc_description": "enflurane"
    },
    {
        "atc_level": "N01AB05",
        "atc_description": "trichloroethylene"
    },
    {
        "atc_level": "N01AB06",
        "atc_description": "isoflurane"
    },
    {
        "atc_level": "N01AB07",
        "atc_description": "desflurane"
    },
    {
        "atc_level": "N01AB08",
        "atc_description": "sevoflurane"
    },
    {
        "atc_level": "N01AF",
        "atc_description": "Barbiturates, plain"
    },
    {
        "atc_level": "N01AF01",
        "atc_description": "methohexital"
    },
    {
        "atc_level": "N01AF02",
        "atc_description": "hexobarbital"
    },
    {
        "atc_level": "N01AF03",
        "atc_description": "thiopental"
    },
    {
        "atc_level": "N01AG",
        "atc_description": "Barbiturates in combination with other drugs"
    },
    {
        "atc_level": "N01AG01",
        "atc_description": "narcobarbital"
    },
    {
        "atc_level": "N01AH",
        "atc_description": "Opioid anesthetics"
    },
    {
        "atc_level": "N01AH01",
        "atc_description": "fentanyl"
    },
    {
        "atc_level": "N01AH02",
        "atc_description": "alfentanil"
    },
    {
        "atc_level": "N01AH03",
        "atc_description": "sufentanil"
    },
    {
        "atc_level": "N01AH04",
        "atc_description": "phenoperidine"
    },
    {
        "atc_level": "N01AH05",
        "atc_description": "anileridine"
    },
    {
        "atc_level": "N01AH06",
        "atc_description": "remifentanil"
    },
    {
        "atc_level": "N01AH51",
        "atc_description": "fentanyl, combinations"
    },
    {
        "atc_level": "N01AX",
        "atc_description": "Other general anesthetics"
    },
    {
        "atc_level": "N01AX01",
        "atc_description": "droperidol"
    },
    {
        "atc_level": "N01AX03",
        "atc_description": "ketamine"
    },
    {
        "atc_level": "N01AX04",
        "atc_description": "propanidid"
    },
    {
        "atc_level": "N01AX05",
        "atc_description": "alfaxalone"
    },
    {
        "atc_level": "N01AX07",
        "atc_description": "etomidate"
    },
    {
        "atc_level": "N01AX10",
        "atc_description": "propofol"
    },
    {
        "atc_level": "N01AX11",
        "atc_description": "sodium oxybate"
    },
    {
        "atc_level": "N01AX13",
        "atc_description": "nitrous oxide"
    },
    {
        "atc_level": "N01AX14",
        "atc_description": "esketamine"
    },
    {
        "atc_level": "N01AX15",
        "atc_description": "xenon"
    },
    {
        "atc_level": "N01AX63",
        "atc_description": "nitrous oxide, combinations"
    },
    {
        "atc_level": "N01B",
        "atc_description": "ANESTHETICS, LOCAL"
    },
    {
        "atc_level": "N01BA",
        "atc_description": "Esters of aminobenzoic acid"
    },
    {
        "atc_level": "N01BA01",
        "atc_description": "metabutethamine"
    },
    {
        "atc_level": "N01BA02",
        "atc_description": "procaine"
    },
    {
        "atc_level": "N01BA03",
        "atc_description": "tetracaine"
    },
    {
        "atc_level": "N01BA04",
        "atc_description": "chloroprocaine"
    },
    {
        "atc_level": "N01BA05",
        "atc_description": "benzocaine"
    },
    {
        "atc_level": "N01BA52",
        "atc_description": "procaine, combinations"
    },
    {
        "atc_level": "N01BA53",
        "atc_description": "tetracaine, combinations"
    },
    {
        "atc_level": "N01BB",
        "atc_description": "Amides"
    },
    {
        "atc_level": "N01BB01",
        "atc_description": "bupivacaine"
    },
    {
        "atc_level": "N01BB02",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "N01BB03",
        "atc_description": "mepivacaine"
    },
    {
        "atc_level": "N01BB04",
        "atc_description": "prilocaine"
    },
    {
        "atc_level": "N01BB05",
        "atc_description": "butanilicaine"
    },
    {
        "atc_level": "N01BB06",
        "atc_description": "cinchocaine"
    },
    {
        "atc_level": "N01BB07",
        "atc_description": "etidocaine"
    },
    {
        "atc_level": "N01BB08",
        "atc_description": "articaine"
    },
    {
        "atc_level": "N01BB09",
        "atc_description": "ropivacaine"
    },
    {
        "atc_level": "N01BB10",
        "atc_description": "levobupivacaine"
    },
    {
        "atc_level": "N01BB20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "N01BB51",
        "atc_description": "bupivacaine, combinations"
    },
    {
        "atc_level": "N01BB52",
        "atc_description": "lidocaine, combinations"
    },
    {
        "atc_level": "N01BB53",
        "atc_description": "mepivacaine, combinations"
    },
    {
        "atc_level": "N01BB54",
        "atc_description": "prilocaine, combinations"
    },
    {
        "atc_level": "N01BB57",
        "atc_description": "etidocaine, combinations"
    },
    {
        "atc_level": "N01BB58",
        "atc_description": "articaine, combinations"
    },
    {
        "atc_level": "N01BB59",
        "atc_description": "bupivacaine and meloxicam"
    },
    {
        "atc_level": "N01BC",
        "atc_description": "Esters of benzoic acid"
    },
    {
        "atc_level": "N01BC01",
        "atc_description": "cocaine"
    },
    {
        "atc_level": "N01BX",
        "atc_description": "Other local anesthetics"
    },
    {
        "atc_level": "N01BX01",
        "atc_description": "ethyl chloride"
    },
    {
        "atc_level": "N01BX02",
        "atc_description": "dyclonine"
    },
    {
        "atc_level": "N01BX03",
        "atc_description": "phenol"
    },
    {
        "atc_level": "N01BX04",
        "atc_description": "capsaicin"
    },
    {
        "atc_level": "N02",
        "atc_description": "ANALGESICS"
    },
    {
        "atc_level": "N02A",
        "atc_description": "OPIOIDS"
    },
    {
        "atc_level": "N02AA",
        "atc_description": "Natural opium alkaloids"
    },
    {
        "atc_level": "N02AA01",
        "atc_description": "morphine"
    },
    {
        "atc_level": "N02AA02",
        "atc_description": "opium"
    },
    {
        "atc_level": "N02AA03",
        "atc_description": "hydromorphone"
    },
    {
        "atc_level": "N02AA04",
        "atc_description": "nicomorphine"
    },
    {
        "atc_level": "N02AA05",
        "atc_description": "oxycodone"
    },
    {
        "atc_level": "N02AA08",
        "atc_description": "dihydrocodeine"
    },
    {
        "atc_level": "N02AA09",
        "atc_description": "diamorphine"
    },
    {
        "atc_level": "N02AA10",
        "atc_description": "papaveretum"
    },
    {
        "atc_level": "N02AA11",
        "atc_description": "oxymorphone"
    },
    {
        "atc_level": "N02AA51",
        "atc_description": "morphine, combinations"
    },
    {
        "atc_level": "N02AA53",
        "atc_description": "hydromorphone and naloxone"
    },
    {
        "atc_level": "N02AA55",
        "atc_description": "oxycodone and naloxone"
    },
    {
        "atc_level": "N02AA56",
        "atc_description": "oxycodone and naltrexone"
    },
    {
        "atc_level": "N02AA58",
        "atc_description": "dihydrocodeine, combinations"
    },
    {
        "atc_level": "N02AA59",
        "atc_description": "codeine, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02AA79",
        "atc_description": "codeine, combinations with psycholeptics"
    },
    {
        "atc_level": "N02AB",
        "atc_description": "Phenylpiperidine derivatives"
    },
    {
        "atc_level": "N02AB01",
        "atc_description": "ketobemidone"
    },
    {
        "atc_level": "N02AB02",
        "atc_description": "pethidine"
    },
    {
        "atc_level": "N02AB03",
        "atc_description": "fentanyl"
    },
    {
        "atc_level": "N02AB52",
        "atc_description": "pethidine, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02AB72",
        "atc_description": "pethidine, combinations with psycholeptics"
    },
    {
        "atc_level": "N02AC",
        "atc_description": "Diphenylpropylamine derivatives"
    },
    {
        "atc_level": "N02AC01",
        "atc_description": "dextromoramide"
    },
    {
        "atc_level": "N02AC02",
        "atc_description": "Methadone"
    },
    {
        "atc_level": "N02AC03",
        "atc_description": "piritramide"
    },
    {
        "atc_level": "N02AC04",
        "atc_description": "dextropropoxyphene"
    },
    {
        "atc_level": "N02AC05",
        "atc_description": "bezitramide"
    },
    {
        "atc_level": "N02AC06",
        "atc_description": "Levacetylmethadol"
    },
    {
        "atc_level": "N02AC52",
        "atc_description": "methadone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02AC54",
        "atc_description": "dextropropoxyphene, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02AC74",
        "atc_description": "dextropropoxyphene, combinations with psycholeptics"
    },
    {
        "atc_level": "N02AD",
        "atc_description": "Benzomorphan derivatives"
    },
    {
        "atc_level": "N02AD01",
        "atc_description": "pentazocine"
    },
    {
        "atc_level": "N02AD02",
        "atc_description": "phenazocine"
    },
    {
        "atc_level": "N02AE",
        "atc_description": "Oripavine derivatives"
    },
    {
        "atc_level": "N02AE01",
        "atc_description": "buprenorphine"
    },
    {
        "atc_level": "N02AF",
        "atc_description": "Morphinan derivatives"
    },
    {
        "atc_level": "N02AF01",
        "atc_description": "butorphanol"
    },
    {
        "atc_level": "N02AF02",
        "atc_description": "nalbuphine"
    },
    {
        "atc_level": "N02AG",
        "atc_description": "Opioids in combination with antispasmodics"
    },
    {
        "atc_level": "N02AG01",
        "atc_description": "morphine and antispasmodics"
    },
    {
        "atc_level": "N02AG02",
        "atc_description": "ketobemidone and antispasmodics"
    },
    {
        "atc_level": "N02AG03",
        "atc_description": "pethidine and antispasmodics"
    },
    {
        "atc_level": "N02AG04",
        "atc_description": "hydromorphone and antispasmodics"
    },
    {
        "atc_level": "N02AH",
        "atc_description": "OTHER OPIODS"
    },
    {
        "atc_level": "N02AJ",
        "atc_description": "Opioids in combination with non-opioid analgesics"
    },
    {
        "atc_level": "N02AJ01",
        "atc_description": "dihydrocodeine and paracetamol"
    },
    {
        "atc_level": "N02AJ02",
        "atc_description": "dihydrocodeine and acetylsalicylic acid"
    },
    {
        "atc_level": "N02AJ03",
        "atc_description": "dihydrocodeine and other non-opioid analgesics"
    },
    {
        "atc_level": "N02AJ06",
        "atc_description": "codeine and paracetamol"
    },
    {
        "atc_level": "N02AJ07",
        "atc_description": "codeine and acetylsalicylic acid"
    },
    {
        "atc_level": "N02AJ08",
        "atc_description": "codeine and ibuprofen"
    },
    {
        "atc_level": "N02AJ09",
        "atc_description": "codeine and other non-opioid analgesics"
    },
    {
        "atc_level": "N02AJ13",
        "atc_description": "tramadol and paracetamol"
    },
    {
        "atc_level": "N02AJ14",
        "atc_description": "tramadol and dexketoprofen"
    },
    {
        "atc_level": "N02AJ15",
        "atc_description": "tramadol and other non-opioid analgesics"
    },
    {
        "atc_level": "N02AJ16",
        "atc_description": "tramadol and celecoxib"
    },
    {
        "atc_level": "N02AJ17",
        "atc_description": "oxycodone and paracetamol"
    },
    {
        "atc_level": "N02AJ18",
        "atc_description": "oxycodone and acetylsalicylic acid"
    },
    {
        "atc_level": "N02AJ19",
        "atc_description": "oxycodone and ibuprofen"
    },
    {
        "atc_level": "N02AX",
        "atc_description": "Other opioids"
    },
    {
        "atc_level": "N02AX01",
        "atc_description": "tilidine"
    },
    {
        "atc_level": "N02AX02",
        "atc_description": "tramadol"
    },
    {
        "atc_level": "N02AX03",
        "atc_description": "dezocine"
    },
    {
        "atc_level": "N02AX04",
        "atc_description": "Flupirtine"
    },
    {
        "atc_level": "N02AX05",
        "atc_description": "meptazinol"
    },
    {
        "atc_level": "N02AX06",
        "atc_description": "tapentadol"
    },
    {
        "atc_level": "N02AX07",
        "atc_description": "oliceridine"
    },
    {
        "atc_level": "N02AX51",
        "atc_description": "tilidine and naloxone"
    },
    {
        "atc_level": "N02AX52",
        "atc_description": "tramadol, combinations"
    },
    {
        "atc_level": "N02B",
        "atc_description": "OTHER ANALGESICS AND ANTIPYRETICS"
    },
    {
        "atc_level": "N02BA",
        "atc_description": "Salicylic acid and derivatives"
    },
    {
        "atc_level": "N02BA01",
        "atc_description": "acetylsalicylic acid"
    },
    {
        "atc_level": "N02BA02",
        "atc_description": "aloxiprin"
    },
    {
        "atc_level": "N02BA03",
        "atc_description": "choline salicylate"
    },
    {
        "atc_level": "N02BA04",
        "atc_description": "sodium salicylate"
    },
    {
        "atc_level": "N02BA05",
        "atc_description": "salicylamide"
    },
    {
        "atc_level": "N02BA06",
        "atc_description": "salsalate"
    },
    {
        "atc_level": "N02BA07",
        "atc_description": "ethenzamide"
    },
    {
        "atc_level": "N02BA08",
        "atc_description": "morpholine salicylate"
    },
    {
        "atc_level": "N02BA09",
        "atc_description": "dipyrocetyl"
    },
    {
        "atc_level": "N02BA10",
        "atc_description": "benorilate"
    },
    {
        "atc_level": "N02BA11",
        "atc_description": "diflunisal"
    },
    {
        "atc_level": "N02BA12",
        "atc_description": "potassium salicylate"
    },
    {
        "atc_level": "N02BA13",
        "atc_description": "Lysine acetylsalicylate"
    },
    {
        "atc_level": "N02BA14",
        "atc_description": "guacetisal"
    },
    {
        "atc_level": "N02BA15",
        "atc_description": "carbasalate calcium"
    },
    {
        "atc_level": "N02BA16",
        "atc_description": "imidazole salicylate"
    },
    {
        "atc_level": "N02BA51",
        "atc_description": "acetylsalicylic acid, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BA55",
        "atc_description": "salicylamide, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BA57",
        "atc_description": "ethenzamide, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BA59",
        "atc_description": "dipyrocetyl, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BA65",
        "atc_description": "carbasalate calcium combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BA71",
        "atc_description": "acetylsalicylic acid, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BA75",
        "atc_description": "salicylamide, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BA77",
        "atc_description": "ethenzamide, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BA79",
        "atc_description": "dipyrocetyl, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BB",
        "atc_description": "Pyrazolones"
    },
    {
        "atc_level": "N02BB01",
        "atc_description": "phenazone"
    },
    {
        "atc_level": "N02BB02",
        "atc_description": "metamizole sodium"
    },
    {
        "atc_level": "N02BB03",
        "atc_description": "aminophenazone"
    },
    {
        "atc_level": "N02BB04",
        "atc_description": "propyphenazone"
    },
    {
        "atc_level": "N02BB05",
        "atc_description": "nifenazone"
    },
    {
        "atc_level": "N02BB51",
        "atc_description": "phenazone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BB52",
        "atc_description": "metamizole sodium, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BB53",
        "atc_description": "aminophenazone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BB54",
        "atc_description": "propyphenazone, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BB71",
        "atc_description": "phenazone, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BB72",
        "atc_description": "metamizole sodium, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BB73",
        "atc_description": "aminophenazone, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BB74",
        "atc_description": "propyphenazone, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BE",
        "atc_description": "Anilides"
    },
    {
        "atc_level": "N02BE01",
        "atc_description": "paracetamol"
    },
    {
        "atc_level": "N02BE02",
        "atc_description": "Tolfenamic acid"
    },
    {
        "atc_level": "N02BE03",
        "atc_description": "phenacetin"
    },
    {
        "atc_level": "N02BE04",
        "atc_description": "bucetin"
    },
    {
        "atc_level": "N02BE05",
        "atc_description": "propacetamol"
    },
    {
        "atc_level": "N02BE51",
        "atc_description": "paracetamol, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BE53",
        "atc_description": "phenacetin, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BE54",
        "atc_description": "bucetin, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02BE71",
        "atc_description": "paracetamol, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BE73",
        "atc_description": "phenacetin, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BE74",
        "atc_description": "bucetin, combinations with psycholeptics"
    },
    {
        "atc_level": "N02BG",
        "atc_description": "Other analgesics and antipyretics"
    },
    {
        "atc_level": "N02BG02",
        "atc_description": "rimazolium"
    },
    {
        "atc_level": "N02BG03",
        "atc_description": "glafenine"
    },
    {
        "atc_level": "N02BG04",
        "atc_description": "floctafenine"
    },
    {
        "atc_level": "N02BG05",
        "atc_description": "viminol"
    },
    {
        "atc_level": "N02BG06",
        "atc_description": "nefopam"
    },
    {
        "atc_level": "N02BG07",
        "atc_description": "flupirtine"
    },
    {
        "atc_level": "N02BG08",
        "atc_description": "ziconotide"
    },
    {
        "atc_level": "N02BG09",
        "atc_description": "methoxyflurane"
    },
    {
        "atc_level": "N02BG10",
        "atc_description": "cannabinoids"
    },
    {
        "atc_level": "N02BG11",
        "atc_description": "mirogabalin"
    },
    {
        "atc_level": "N02BG12",
        "atc_description": "tanezumab"
    },
    {
        "atc_level": "N02C",
        "atc_description": "ANTIMIGRAINE PREPARATIONS"
    },
    {
        "atc_level": "N02CA",
        "atc_description": "Ergot alkaloids"
    },
    {
        "atc_level": "N02CA01",
        "atc_description": "dihydroergotamine"
    },
    {
        "atc_level": "N02CA02",
        "atc_description": "ergotamine"
    },
    {
        "atc_level": "N02CA04",
        "atc_description": "methysergide"
    },
    {
        "atc_level": "N02CA05",
        "atc_description": "Ergometrine"
    },
    {
        "atc_level": "N02CA06",
        "atc_description": "Dihydroergocristine"
    },
    {
        "atc_level": "N02CA07",
        "atc_description": "lisuride"
    },
    {
        "atc_level": "N02CA51",
        "atc_description": "dihydroergotamine, combinations"
    },
    {
        "atc_level": "N02CA52",
        "atc_description": "ergotamine, combinations excl. psycholeptics"
    },
    {
        "atc_level": "N02CA56",
        "atc_description": "Dihydroergocristine, combinations"
    },
    {
        "atc_level": "N02CA72",
        "atc_description": "ergotamine, combinations with psycholeptics"
    },
    {
        "atc_level": "N02CB",
        "atc_description": "Corticosteroid derivatives"
    },
    {
        "atc_level": "N02CB01",
        "atc_description": "flumedroxone"
    },
    {
        "atc_level": "N02CC",
        "atc_description": "Selective serotonin (5HT1) agonists"
    },
    {
        "atc_level": "N02CC01",
        "atc_description": "sumatriptan"
    },
    {
        "atc_level": "N02CC02",
        "atc_description": "naratriptan"
    },
    {
        "atc_level": "N02CC03",
        "atc_description": "zolmitriptan"
    },
    {
        "atc_level": "N02CC04",
        "atc_description": "rizatriptan"
    },
    {
        "atc_level": "N02CC05",
        "atc_description": "almotriptan"
    },
    {
        "atc_level": "N02CC06",
        "atc_description": "eletriptan"
    },
    {
        "atc_level": "N02CC07",
        "atc_description": "frovatriptan"
    },
    {
        "atc_level": "N02CC08",
        "atc_description": "lasmiditan"
    },
    {
        "atc_level": "N02CD",
        "atc_description": "Calcitonin gene-related peptide (CGRP) antagonists"
    },
    {
        "atc_level": "N02CD01",
        "atc_description": "erenumab"
    },
    {
        "atc_level": "N02CD02",
        "atc_description": "galcanezumab"
    },
    {
        "atc_level": "N02CD03",
        "atc_description": "fremanezumab"
    },
    {
        "atc_level": "N02CD04",
        "atc_description": "ubrogepant"
    },
    {
        "atc_level": "N02CD05",
        "atc_description": "eptinezumab"
    },
    {
        "atc_level": "N02CD06",
        "atc_description": "rimegepant"
    },
    {
        "atc_level": "N02CD07",
        "atc_description": "atogepant"
    },
    {
        "atc_level": "N02CX",
        "atc_description": "Other antimigraine preparations"
    },
    {
        "atc_level": "N02CX01",
        "atc_description": "pizotifen"
    },
    {
        "atc_level": "N02CX02",
        "atc_description": "clonidine"
    },
    {
        "atc_level": "N02CX03",
        "atc_description": "iprazochrome"
    },
    {
        "atc_level": "N02CX04",
        "atc_description": "Sumatriptan"
    },
    {
        "atc_level": "N02CX05",
        "atc_description": "dimetotiazine"
    },
    {
        "atc_level": "N02CX06",
        "atc_description": "oxetorone"
    },
    {
        "atc_level": "N02CX07",
        "atc_description": "erenumab"
    },
    {
        "atc_level": "N02CX08",
        "atc_description": "galcanezumab"
    },
    {
        "atc_level": "N03",
        "atc_description": "ANTIEPILEPTICS"
    },
    {
        "atc_level": "N03A",
        "atc_description": "ANTIEPILEPTICS"
    },
    {
        "atc_level": "N03AA",
        "atc_description": "Barbiturates and derivatives"
    },
    {
        "atc_level": "N03AA01",
        "atc_description": "methylphenobarbital"
    },
    {
        "atc_level": "N03AA02",
        "atc_description": "phenobarbital"
    },
    {
        "atc_level": "N03AA03",
        "atc_description": "primidone"
    },
    {
        "atc_level": "N03AA04",
        "atc_description": "barbexaclone"
    },
    {
        "atc_level": "N03AA30",
        "atc_description": "metharbital"
    },
    {
        "atc_level": "N03AB",
        "atc_description": "Hydantoin derivatives"
    },
    {
        "atc_level": "N03AB01",
        "atc_description": "ethotoin"
    },
    {
        "atc_level": "N03AB02",
        "atc_description": "phenytoin"
    },
    {
        "atc_level": "N03AB03",
        "atc_description": "amino(diphenylhydantoin) valeric acid"
    },
    {
        "atc_level": "N03AB04",
        "atc_description": "mephenytoin"
    },
    {
        "atc_level": "N03AB05",
        "atc_description": "fosphenytoin"
    },
    {
        "atc_level": "N03AB52",
        "atc_description": "phenytoin, combinations"
    },
    {
        "atc_level": "N03AB54",
        "atc_description": "mephenytoin, combinations"
    },
    {
        "atc_level": "N03AC",
        "atc_description": "Oxazolidine derivatives"
    },
    {
        "atc_level": "N03AC01",
        "atc_description": "paramethadione"
    },
    {
        "atc_level": "N03AC02",
        "atc_description": "trimethadione"
    },
    {
        "atc_level": "N03AC03",
        "atc_description": "ethadione"
    },
    {
        "atc_level": "N03AD",
        "atc_description": "Succinimide derivatives"
    },
    {
        "atc_level": "N03AD01",
        "atc_description": "ethosuximide"
    },
    {
        "atc_level": "N03AD02",
        "atc_description": "phensuximide"
    },
    {
        "atc_level": "N03AD03",
        "atc_description": "mesuximide"
    },
    {
        "atc_level": "N03AD51",
        "atc_description": "ethosuximide, combinations"
    },
    {
        "atc_level": "N03AE",
        "atc_description": "Benzodiazepine derivatives"
    },
    {
        "atc_level": "N03AE01",
        "atc_description": "clonazepam"
    },
    {
        "atc_level": "N03AF",
        "atc_description": "Carboxamide derivatives"
    },
    {
        "atc_level": "N03AF01",
        "atc_description": "carbamazepine"
    },
    {
        "atc_level": "N03AF02",
        "atc_description": "oxcarbazepine"
    },
    {
        "atc_level": "N03AF03",
        "atc_description": "rufinamide"
    },
    {
        "atc_level": "N03AF04",
        "atc_description": "eslicarbazepine"
    },
    {
        "atc_level": "N03AG",
        "atc_description": "Fatty acid derivatives"
    },
    {
        "atc_level": "N03AG01",
        "atc_description": "valproic acid"
    },
    {
        "atc_level": "N03AG02",
        "atc_description": "valpromide"
    },
    {
        "atc_level": "N03AG03",
        "atc_description": "aminobutyric acid"
    },
    {
        "atc_level": "N03AG04",
        "atc_description": "vigabatrin"
    },
    {
        "atc_level": "N03AG05",
        "atc_description": "progabide"
    },
    {
        "atc_level": "N03AG06",
        "atc_description": "tiagabine"
    },
    {
        "atc_level": "N03AX",
        "atc_description": "Other antiepileptics"
    },
    {
        "atc_level": "N03AX03",
        "atc_description": "sultiame"
    },
    {
        "atc_level": "N03AX07",
        "atc_description": "phenacemide"
    },
    {
        "atc_level": "N03AX09",
        "atc_description": "lamotrigine"
    },
    {
        "atc_level": "N03AX10",
        "atc_description": "felbamate"
    },
    {
        "atc_level": "N03AX11",
        "atc_description": "topiramate"
    },
    {
        "atc_level": "N03AX12",
        "atc_description": "gabapentin"
    },
    {
        "atc_level": "N03AX13",
        "atc_description": "pheneturide"
    },
    {
        "atc_level": "N03AX14",
        "atc_description": "levetiracetam"
    },
    {
        "atc_level": "N03AX15",
        "atc_description": "zonisamide"
    },
    {
        "atc_level": "N03AX16",
        "atc_description": "pregabalin"
    },
    {
        "atc_level": "N03AX17",
        "atc_description": "stiripentol"
    },
    {
        "atc_level": "N03AX18",
        "atc_description": "lacosamide"
    },
    {
        "atc_level": "N03AX19",
        "atc_description": "carisbamate"
    },
    {
        "atc_level": "N03AX21",
        "atc_description": "retigabine"
    },
    {
        "atc_level": "N03AX22",
        "atc_description": "perampanel"
    },
    {
        "atc_level": "N03AX23",
        "atc_description": "brivaracetam"
    },
    {
        "atc_level": "N03AX24",
        "atc_description": "cannabidiol"
    },
    {
        "atc_level": "N03AX25",
        "atc_description": "cenobamate"
    },
    {
        "atc_level": "N03AX26",
        "atc_description": "fenfluramine"
    },
    {
        "atc_level": "N03AX27",
        "atc_description": "ganaxolone"
    },
    {
        "atc_level": "N03AX30",
        "atc_description": "beclamide"
    },
    {
        "atc_level": "N04",
        "atc_description": "ANTI-PARKINSON DRUGS"
    },
    {
        "atc_level": "N04A",
        "atc_description": "ANTICHOLINERGIC AGENTS"
    },
    {
        "atc_level": "N04AA",
        "atc_description": "Tertiary amines"
    },
    {
        "atc_level": "N04AA01",
        "atc_description": "trihexyphenidyl"
    },
    {
        "atc_level": "N04AA02",
        "atc_description": "biperiden"
    },
    {
        "atc_level": "N04AA03",
        "atc_description": "metixene"
    },
    {
        "atc_level": "N04AA04",
        "atc_description": "procyclidine"
    },
    {
        "atc_level": "N04AA05",
        "atc_description": "profenamine"
    },
    {
        "atc_level": "N04AA06",
        "atc_description": "Tolperisone"
    },
    {
        "atc_level": "N04AA08",
        "atc_description": "dexetimide"
    },
    {
        "atc_level": "N04AA09",
        "atc_description": "phenglutarimide"
    },
    {
        "atc_level": "N04AA10",
        "atc_description": "mazaticol"
    },
    {
        "atc_level": "N04AA11",
        "atc_description": "bornaprine"
    },
    {
        "atc_level": "N04AA12",
        "atc_description": "tropatepine"
    },
    {
        "atc_level": "N04AB",
        "atc_description": "Ethers chemically close to antihistamines"
    },
    {
        "atc_level": "N04AB01",
        "atc_description": "etanautine"
    },
    {
        "atc_level": "N04AB02",
        "atc_description": "orphenadrine (chloride)"
    },
    {
        "atc_level": "N04AC",
        "atc_description": "Ethers of tropine or tropine derivatives"
    },
    {
        "atc_level": "N04AC01",
        "atc_description": "benzatropine"
    },
    {
        "atc_level": "N04AC30",
        "atc_description": "etybenzatropine"
    },
    {
        "atc_level": "N04AD",
        "atc_description": "DOPA AND DOPA DERIVATIVES"
    },
    {
        "atc_level": "N04AE",
        "atc_description": "ADAMANTANE DERIVATIVES"
    },
    {
        "atc_level": "N04B",
        "atc_description": "DOPAMINERGIC AGENTS"
    },
    {
        "atc_level": "N04BA",
        "atc_description": "Dopa and dopa derivatives"
    },
    {
        "atc_level": "N04BA01",
        "atc_description": "levodopa"
    },
    {
        "atc_level": "N04BA02",
        "atc_description": "levodopa and decarboxylase inhibitor"
    },
    {
        "atc_level": "N04BA03",
        "atc_description": "levodopa, decarboxylase inhibitor and COMT inhibitor"
    },
    {
        "atc_level": "N04BA04",
        "atc_description": "melevodopa"
    },
    {
        "atc_level": "N04BA05",
        "atc_description": "melevodopa and decarboxylase inhibitor"
    },
    {
        "atc_level": "N04BA06",
        "atc_description": "etilevodopa and decarboxylase inhibitor"
    },
    {
        "atc_level": "N04BB",
        "atc_description": "Adamantane derivatives"
    },
    {
        "atc_level": "N04BB01",
        "atc_description": "amantadine"
    },
    {
        "atc_level": "N04BC",
        "atc_description": "Dopamine agonists"
    },
    {
        "atc_level": "N04BC01",
        "atc_description": "bromocriptine"
    },
    {
        "atc_level": "N04BC02",
        "atc_description": "pergolide"
    },
    {
        "atc_level": "N04BC03",
        "atc_description": "dihydroergocryptine mesylate"
    },
    {
        "atc_level": "N04BC04",
        "atc_description": "ropinirole"
    },
    {
        "atc_level": "N04BC05",
        "atc_description": "pramipexole"
    },
    {
        "atc_level": "N04BC06",
        "atc_description": "cabergoline"
    },
    {
        "atc_level": "N04BC07",
        "atc_description": "apomorphine"
    },
    {
        "atc_level": "N04BC08",
        "atc_description": "piribedil"
    },
    {
        "atc_level": "N04BC09",
        "atc_description": "rotigotine"
    },
    {
        "atc_level": "N04BD",
        "atc_description": "Monoamine oxidase B inhibitors"
    },
    {
        "atc_level": "N04BD01",
        "atc_description": "selegiline"
    },
    {
        "atc_level": "N04BD02",
        "atc_description": "rasagiline"
    },
    {
        "atc_level": "N04BD03",
        "atc_description": "safinamide"
    },
    {
        "atc_level": "N04BX",
        "atc_description": "Other dopaminergic agents"
    },
    {
        "atc_level": "N04BX01",
        "atc_description": "tolcapone"
    },
    {
        "atc_level": "N04BX02",
        "atc_description": "entacapone"
    },
    {
        "atc_level": "N04BX03",
        "atc_description": "budipine"
    },
    {
        "atc_level": "N04BX04",
        "atc_description": "opicapone"
    },
    {
        "atc_level": "N04C",
        "atc_description": "OTHER ANTIPARKINSON DRUGS"
    },
    {
        "atc_level": "N04CX",
        "atc_description": "Other antiparkinson drugs"
    },
    {
        "atc_level": "N04CX01",
        "atc_description": "istradefylline"
    },
    {
        "atc_level": "N05",
        "atc_description": "PSYCHOLEPTICS"
    },
    {
        "atc_level": "N05A",
        "atc_description": "ANTIPSYCHOTICS"
    },
    {
        "atc_level": "N05AA",
        "atc_description": "Phenothiazines with aliphatic side-chain"
    },
    {
        "atc_level": "N05AA01",
        "atc_description": "chlorpromazine"
    },
    {
        "atc_level": "N05AA02",
        "atc_description": "levomepromazine"
    },
    {
        "atc_level": "N05AA03",
        "atc_description": "promazine"
    },
    {
        "atc_level": "N05AA04",
        "atc_description": "acepromazine"
    },
    {
        "atc_level": "N05AA05",
        "atc_description": "triflupromazine"
    },
    {
        "atc_level": "N05AA06",
        "atc_description": "cyamemazine"
    },
    {
        "atc_level": "N05AA07",
        "atc_description": "chlorproethazine"
    },
    {
        "atc_level": "N05AB",
        "atc_description": "Phenothiazines with piperazine structure"
    },
    {
        "atc_level": "N05AB01",
        "atc_description": "dixyrazine"
    },
    {
        "atc_level": "N05AB02",
        "atc_description": "fluphenazine"
    },
    {
        "atc_level": "N05AB03",
        "atc_description": "perphenazine"
    },
    {
        "atc_level": "N05AB04",
        "atc_description": "prochlorperazine"
    },
    {
        "atc_level": "N05AB05",
        "atc_description": "thiopropazate"
    },
    {
        "atc_level": "N05AB06",
        "atc_description": "trifluoperazine"
    },
    {
        "atc_level": "N05AB07",
        "atc_description": "acetophenazine"
    },
    {
        "atc_level": "N05AB08",
        "atc_description": "thioproperazine"
    },
    {
        "atc_level": "N05AB09",
        "atc_description": "butaperazine"
    },
    {
        "atc_level": "N05AB10",
        "atc_description": "perazine"
    },
    {
        "atc_level": "N05AC",
        "atc_description": "Phenothiazines with piperidine structure"
    },
    {
        "atc_level": "N05AC01",
        "atc_description": "periciazine"
    },
    {
        "atc_level": "N05AC02",
        "atc_description": "thioridazine"
    },
    {
        "atc_level": "N05AC03",
        "atc_description": "mesoridazine"
    },
    {
        "atc_level": "N05AC04",
        "atc_description": "pipotiazine"
    },
    {
        "atc_level": "N05AD",
        "atc_description": "Butyrophenone derivatives"
    },
    {
        "atc_level": "N05AD01",
        "atc_description": "haloperidol"
    },
    {
        "atc_level": "N05AD02",
        "atc_description": "trifluperidol"
    },
    {
        "atc_level": "N05AD03",
        "atc_description": "melperone"
    },
    {
        "atc_level": "N05AD04",
        "atc_description": "moperone"
    },
    {
        "atc_level": "N05AD05",
        "atc_description": "pipamperone"
    },
    {
        "atc_level": "N05AD06",
        "atc_description": "bromperidol"
    },
    {
        "atc_level": "N05AD07",
        "atc_description": "benperidol"
    },
    {
        "atc_level": "N05AD08",
        "atc_description": "droperidol"
    },
    {
        "atc_level": "N05AD09",
        "atc_description": "fluanisone"
    },
    {
        "atc_level": "N05AD10",
        "atc_description": "lumateperone"
    },
    {
        "atc_level": "N05AE",
        "atc_description": "Indole derivatives"
    },
    {
        "atc_level": "N05AE01",
        "atc_description": "oxypertine"
    },
    {
        "atc_level": "N05AE02",
        "atc_description": "molindone"
    },
    {
        "atc_level": "N05AE03",
        "atc_description": "sertindole"
    },
    {
        "atc_level": "N05AE04",
        "atc_description": "ziprasidone"
    },
    {
        "atc_level": "N05AE05",
        "atc_description": "lurasidone"
    },
    {
        "atc_level": "N05AF",
        "atc_description": "Thioxanthene derivatives"
    },
    {
        "atc_level": "N05AF01",
        "atc_description": "flupentixol"
    },
    {
        "atc_level": "N05AF02",
        "atc_description": "clopenthixol"
    },
    {
        "atc_level": "N05AF03",
        "atc_description": "chlorprothixene"
    },
    {
        "atc_level": "N05AF04",
        "atc_description": "tiotixene"
    },
    {
        "atc_level": "N05AF05",
        "atc_description": "zuclopenthixol"
    },
    {
        "atc_level": "N05AG",
        "atc_description": "Diphenylbutylpiperidine derivatives"
    },
    {
        "atc_level": "N05AG01",
        "atc_description": "fluspirilene"
    },
    {
        "atc_level": "N05AG02",
        "atc_description": "pimozide"
    },
    {
        "atc_level": "N05AG03",
        "atc_description": "penfluridol"
    },
    {
        "atc_level": "N05AH",
        "atc_description": "Diazepines, oxazepines, thiazepines and oxepines"
    },
    {
        "atc_level": "N05AH01",
        "atc_description": "loxapine"
    },
    {
        "atc_level": "N05AH02",
        "atc_description": "clozapine"
    },
    {
        "atc_level": "N05AH03",
        "atc_description": "olanzapine"
    },
    {
        "atc_level": "N05AH04",
        "atc_description": "quetiapine"
    },
    {
        "atc_level": "N05AH05",
        "atc_description": "asenapine"
    },
    {
        "atc_level": "N05AH06",
        "atc_description": "clotiapine"
    },
    {
        "atc_level": "N05AK",
        "atc_description": "Neuroleptics, in tardive dyskinesia"
    },
    {
        "atc_level": "N05AK01",
        "atc_description": "Tetrabenazine"
    },
    {
        "atc_level": "N05AL",
        "atc_description": "Benzamides"
    },
    {
        "atc_level": "N05AL01",
        "atc_description": "sulpiride"
    },
    {
        "atc_level": "N05AL02",
        "atc_description": "sultopride"
    },
    {
        "atc_level": "N05AL03",
        "atc_description": "tiapride"
    },
    {
        "atc_level": "N05AL04",
        "atc_description": "remoxipride"
    },
    {
        "atc_level": "N05AL05",
        "atc_description": "amisulpride"
    },
    {
        "atc_level": "N05AL06",
        "atc_description": "veralipride"
    },
    {
        "atc_level": "N05AL07",
        "atc_description": "levosulpiride"
    },
    {
        "atc_level": "N05AN",
        "atc_description": "Lithium"
    },
    {
        "atc_level": "N05AN01",
        "atc_description": "lithium"
    },
    {
        "atc_level": "N05AX",
        "atc_description": "Other antipsychotics"
    },
    {
        "atc_level": "N05AX07",
        "atc_description": "prothipendyl"
    },
    {
        "atc_level": "N05AX08",
        "atc_description": "risperidone"
    },
    {
        "atc_level": "N05AX09",
        "atc_description": "Clotiapine"
    },
    {
        "atc_level": "N05AX10",
        "atc_description": "mosapramine"
    },
    {
        "atc_level": "N05AX11",
        "atc_description": "zotepine"
    },
    {
        "atc_level": "N05AX12",
        "atc_description": "aripiprazole"
    },
    {
        "atc_level": "N05AX13",
        "atc_description": "paliperidone"
    },
    {
        "atc_level": "N05AX14",
        "atc_description": "iloperidone"
    },
    {
        "atc_level": "N05AX15",
        "atc_description": "cariprazine"
    },
    {
        "atc_level": "N05AX16",
        "atc_description": "brexpiprazole"
    },
    {
        "atc_level": "N05AX17",
        "atc_description": "pimavanserin"
    },
    {
        "atc_level": "N05B",
        "atc_description": "ANXIOLYTICS"
    },
    {
        "atc_level": "N05BA",
        "atc_description": "Benzodiazepine derivatives"
    },
    {
        "atc_level": "N05BA01",
        "atc_description": "diazepam"
    },
    {
        "atc_level": "N05BA02",
        "atc_description": "chlordiazepoxide"
    },
    {
        "atc_level": "N05BA03",
        "atc_description": "medazepam"
    },
    {
        "atc_level": "N05BA04",
        "atc_description": "oxazepam"
    },
    {
        "atc_level": "N05BA05",
        "atc_description": "potassium clorazepate"
    },
    {
        "atc_level": "N05BA06",
        "atc_description": "lorazepam"
    },
    {
        "atc_level": "N05BA07",
        "atc_description": "adinazolam"
    },
    {
        "atc_level": "N05BA08",
        "atc_description": "bromazepam"
    },
    {
        "atc_level": "N05BA09",
        "atc_description": "clobazam"
    },
    {
        "atc_level": "N05BA10",
        "atc_description": "ketazolam"
    },
    {
        "atc_level": "N05BA11",
        "atc_description": "prazepam"
    },
    {
        "atc_level": "N05BA12",
        "atc_description": "alprazolam"
    },
    {
        "atc_level": "N05BA13",
        "atc_description": "halazepam"
    },
    {
        "atc_level": "N05BA14",
        "atc_description": "pinazepam"
    },
    {
        "atc_level": "N05BA15",
        "atc_description": "camazepam"
    },
    {
        "atc_level": "N05BA16",
        "atc_description": "nordazepam"
    },
    {
        "atc_level": "N05BA17",
        "atc_description": "fludiazepam"
    },
    {
        "atc_level": "N05BA18",
        "atc_description": "ethyl loflazepate"
    },
    {
        "atc_level": "N05BA19",
        "atc_description": "etizolam"
    },
    {
        "atc_level": "N05BA21",
        "atc_description": "clotiazepam"
    },
    {
        "atc_level": "N05BA22",
        "atc_description": "cloxazolam"
    },
    {
        "atc_level": "N05BA23",
        "atc_description": "tofisopam"
    },
    {
        "atc_level": "N05BA24",
        "atc_description": "bentazepam"
    },
    {
        "atc_level": "N05BA25",
        "atc_description": "mexazolam"
    },
    {
        "atc_level": "N05BA56",
        "atc_description": "lorazepam, combinations"
    },
    {
        "atc_level": "N05BB",
        "atc_description": "Diphenylmethane derivatives"
    },
    {
        "atc_level": "N05BB01",
        "atc_description": "hydroxyzine"
    },
    {
        "atc_level": "N05BB02",
        "atc_description": "captodiame"
    },
    {
        "atc_level": "N05BB51",
        "atc_description": "hydroxyzine, combinations"
    },
    {
        "atc_level": "N05BC",
        "atc_description": "Carbamates"
    },
    {
        "atc_level": "N05BC01",
        "atc_description": "meprobamate"
    },
    {
        "atc_level": "N05BC03",
        "atc_description": "emylcamate"
    },
    {
        "atc_level": "N05BC04",
        "atc_description": "mebutamate"
    },
    {
        "atc_level": "N05BC51",
        "atc_description": "meprobamate, combinations"
    },
    {
        "atc_level": "N05BD",
        "atc_description": "Dibenzo-bicyclo-octadiene derivatives"
    },
    {
        "atc_level": "N05BD01",
        "atc_description": "benzoctamine"
    },
    {
        "atc_level": "N05BE",
        "atc_description": "Azaspirodecanedione derivatives"
    },
    {
        "atc_level": "N05BE01",
        "atc_description": "buspirone"
    },
    {
        "atc_level": "N05BX",
        "atc_description": "Other anxiolytics"
    },
    {
        "atc_level": "N05BX01",
        "atc_description": "mephenoxalone"
    },
    {
        "atc_level": "N05BX02",
        "atc_description": "gedocarnil"
    },
    {
        "atc_level": "N05BX03",
        "atc_description": "etifoxine"
    },
    {
        "atc_level": "N05BX04",
        "atc_description": "fabomotizole"
    },
    {
        "atc_level": "N05BX05",
        "atc_description": "Lavandulae aetheroleum"
    },
    {
        "atc_level": "N05C",
        "atc_description": "HYPNOTICS AND SEDATIVES"
    },
    {
        "atc_level": "N05CA",
        "atc_description": "Barbiturates, plain"
    },
    {
        "atc_level": "N05CA01",
        "atc_description": "pentobarbital"
    },
    {
        "atc_level": "N05CA02",
        "atc_description": "amobarbital"
    },
    {
        "atc_level": "N05CA03",
        "atc_description": "butobarbital"
    },
    {
        "atc_level": "N05CA04",
        "atc_description": "barbital"
    },
    {
        "atc_level": "N05CA05",
        "atc_description": "aprobarbital"
    },
    {
        "atc_level": "N05CA06",
        "atc_description": "secobarbital"
    },
    {
        "atc_level": "N05CA07",
        "atc_description": "talbutal"
    },
    {
        "atc_level": "N05CA08",
        "atc_description": "vinylbital"
    },
    {
        "atc_level": "N05CA09",
        "atc_description": "vinbarbital"
    },
    {
        "atc_level": "N05CA10",
        "atc_description": "cyclobarbital"
    },
    {
        "atc_level": "N05CA11",
        "atc_description": "heptabarbital"
    },
    {
        "atc_level": "N05CA12",
        "atc_description": "reposal"
    },
    {
        "atc_level": "N05CA15",
        "atc_description": "methohexital"
    },
    {
        "atc_level": "N05CA16",
        "atc_description": "hexobarbital"
    },
    {
        "atc_level": "N05CA19",
        "atc_description": "thiopental"
    },
    {
        "atc_level": "N05CA20",
        "atc_description": "etallobarbital"
    },
    {
        "atc_level": "N05CA21",
        "atc_description": "allobarbital"
    },
    {
        "atc_level": "N05CA22",
        "atc_description": "proxibarbal"
    },
    {
        "atc_level": "N05CB",
        "atc_description": "Barbiturates, combinations"
    },
    {
        "atc_level": "N05CB01",
        "atc_description": "combinations of barbiturates"
    },
    {
        "atc_level": "N05CB02",
        "atc_description": "barbiturates in combination with other drugs"
    },
    {
        "atc_level": "N05CC",
        "atc_description": "Aldehydes and derivatives"
    },
    {
        "atc_level": "N05CC01",
        "atc_description": "chloral hydrate"
    },
    {
        "atc_level": "N05CC02",
        "atc_description": "chloralodol"
    },
    {
        "atc_level": "N05CC03",
        "atc_description": "acetylglycinamide chloral hydrate"
    },
    {
        "atc_level": "N05CC04",
        "atc_description": "dichloralphenazone"
    },
    {
        "atc_level": "N05CC05",
        "atc_description": "paraldehyde"
    },
    {
        "atc_level": "N05CD",
        "atc_description": "Benzodiazepine derivatives"
    },
    {
        "atc_level": "N05CD01",
        "atc_description": "flurazepam"
    },
    {
        "atc_level": "N05CD02",
        "atc_description": "nitrazepam"
    },
    {
        "atc_level": "N05CD03",
        "atc_description": "flunitrazepam"
    },
    {
        "atc_level": "N05CD04",
        "atc_description": "estazolam"
    },
    {
        "atc_level": "N05CD05",
        "atc_description": "triazolam"
    },
    {
        "atc_level": "N05CD06",
        "atc_description": "lormetazepam"
    },
    {
        "atc_level": "N05CD07",
        "atc_description": "temazepam"
    },
    {
        "atc_level": "N05CD08",
        "atc_description": "midazolam"
    },
    {
        "atc_level": "N05CD09",
        "atc_description": "brotizolam"
    },
    {
        "atc_level": "N05CD10",
        "atc_description": "quazepam"
    },
    {
        "atc_level": "N05CD11",
        "atc_description": "loprazolam"
    },
    {
        "atc_level": "N05CD12",
        "atc_description": "doxefazepam"
    },
    {
        "atc_level": "N05CD13",
        "atc_description": "cinolazepam"
    },
    {
        "atc_level": "N05CD14",
        "atc_description": "remimazolam"
    },
    {
        "atc_level": "N05CD15",
        "atc_description": "nimetazepam"
    },
    {
        "atc_level": "N05CE",
        "atc_description": "Piperidinedione derivatives"
    },
    {
        "atc_level": "N05CE01",
        "atc_description": "glutethimide"
    },
    {
        "atc_level": "N05CE02",
        "atc_description": "methyprylon"
    },
    {
        "atc_level": "N05CE03",
        "atc_description": "pyrithyldione"
    },
    {
        "atc_level": "N05CF",
        "atc_description": "Benzodiazepine related drugs"
    },
    {
        "atc_level": "N05CF01",
        "atc_description": "zopiclone"
    },
    {
        "atc_level": "N05CF02",
        "atc_description": "zolpidem"
    },
    {
        "atc_level": "N05CF03",
        "atc_description": "zaleplon"
    },
    {
        "atc_level": "N05CF04",
        "atc_description": "eszopiclone"
    },
    {
        "atc_level": "N05CG",
        "atc_description": "Imidazopyridines"
    },
    {
        "atc_level": "N05CG01",
        "atc_description": "Zolpidem"
    },
    {
        "atc_level": "N05CH",
        "atc_description": "Melatonin receptor agonists"
    },
    {
        "atc_level": "N05CH01",
        "atc_description": "melatonin"
    },
    {
        "atc_level": "N05CH02",
        "atc_description": "ramelteon"
    },
    {
        "atc_level": "N05CH03",
        "atc_description": "tasimelteon"
    },
    {
        "atc_level": "N05CM",
        "atc_description": "Other hypnotics and sedatives"
    },
    {
        "atc_level": "N05CM01",
        "atc_description": "methaqualone"
    },
    {
        "atc_level": "N05CM02",
        "atc_description": "clomethiazole"
    },
    {
        "atc_level": "N05CM03",
        "atc_description": "bromisoval"
    },
    {
        "atc_level": "N05CM04",
        "atc_description": "carbromal"
    },
    {
        "atc_level": "N05CM05",
        "atc_description": "scopolamine"
    },
    {
        "atc_level": "N05CM06",
        "atc_description": "propiomazine"
    },
    {
        "atc_level": "N05CM07",
        "atc_description": "triclofos"
    },
    {
        "atc_level": "N05CM08",
        "atc_description": "ethchlorvynol"
    },
    {
        "atc_level": "N05CM09",
        "atc_description": "Valerianae radix"
    },
    {
        "atc_level": "N05CM10",
        "atc_description": "hexapropymate"
    },
    {
        "atc_level": "N05CM11",
        "atc_description": "bromides"
    },
    {
        "atc_level": "N05CM12",
        "atc_description": "apronal"
    },
    {
        "atc_level": "N05CM13",
        "atc_description": "valnoctamide"
    },
    {
        "atc_level": "N05CM14",
        "atc_description": "Zolpidem"
    },
    {
        "atc_level": "N05CM15",
        "atc_description": "methylpentynol"
    },
    {
        "atc_level": "N05CM16",
        "atc_description": "niaprazine"
    },
    {
        "atc_level": "N05CM17",
        "atc_description": "Melatonin"
    },
    {
        "atc_level": "N05CM18",
        "atc_description": "dexmedetomidine"
    },
    {
        "atc_level": "N05CM19",
        "atc_description": "suvorexant"
    },
    {
        "atc_level": "N05CM21",
        "atc_description": "lemborexant"
    },
    {
        "atc_level": "N05CX",
        "atc_description": "Hypnotics and sedatives in combination, excl. barbiturates"
    },
    {
        "atc_level": "N05CX01",
        "atc_description": "meprobamate, combinations"
    },
    {
        "atc_level": "N05CX02",
        "atc_description": "methaqualone, combinations"
    },
    {
        "atc_level": "N05CX03",
        "atc_description": "methylpentynol, combinations"
    },
    {
        "atc_level": "N05CX04",
        "atc_description": "clomethiazole, combinations"
    },
    {
        "atc_level": "N05CX05",
        "atc_description": "emepronium, combinations"
    },
    {
        "atc_level": "N05CX06",
        "atc_description": "dipiperonylaminoethanol, combinations"
    },
    {
        "atc_level": "N06",
        "atc_description": "PSYCHOANALEPTICS"
    },
    {
        "atc_level": "N06A",
        "atc_description": "ANTIDEPRESSANTS"
    },
    {
        "atc_level": "N06AA",
        "atc_description": "Non-selective monoamine reuptake inhibitors"
    },
    {
        "atc_level": "N06AA01",
        "atc_description": "desipramine"
    },
    {
        "atc_level": "N06AA02",
        "atc_description": "imipramine"
    },
    {
        "atc_level": "N06AA03",
        "atc_description": "imipramine oxide"
    },
    {
        "atc_level": "N06AA04",
        "atc_description": "clomipramine"
    },
    {
        "atc_level": "N06AA05",
        "atc_description": "opipramol"
    },
    {
        "atc_level": "N06AA06",
        "atc_description": "trimipramine"
    },
    {
        "atc_level": "N06AA07",
        "atc_description": "lofepramine"
    },
    {
        "atc_level": "N06AA08",
        "atc_description": "dibenzepin"
    },
    {
        "atc_level": "N06AA09",
        "atc_description": "amitriptyline"
    },
    {
        "atc_level": "N06AA10",
        "atc_description": "nortriptyline"
    },
    {
        "atc_level": "N06AA11",
        "atc_description": "protriptyline"
    },
    {
        "atc_level": "N06AA12",
        "atc_description": "doxepin"
    },
    {
        "atc_level": "N06AA13",
        "atc_description": "iprindole"
    },
    {
        "atc_level": "N06AA14",
        "atc_description": "melitracen"
    },
    {
        "atc_level": "N06AA15",
        "atc_description": "butriptyline"
    },
    {
        "atc_level": "N06AA16",
        "atc_description": "dosulepin"
    },
    {
        "atc_level": "N06AA17",
        "atc_description": "amoxapine"
    },
    {
        "atc_level": "N06AA18",
        "atc_description": "dimetacrine"
    },
    {
        "atc_level": "N06AA19",
        "atc_description": "amineptine"
    },
    {
        "atc_level": "N06AA21",
        "atc_description": "maprotiline"
    },
    {
        "atc_level": "N06AA22",
        "atc_description": "Venlafaxine"
    },
    {
        "atc_level": "N06AA23",
        "atc_description": "quinupramine"
    },
    {
        "atc_level": "N06AA24",
        "atc_description": "Milnacipran"
    },
    {
        "atc_level": "N06AB",
        "atc_description": "Selective serotonin reuptake inhibitors"
    },
    {
        "atc_level": "N06AB01",
        "atc_description": "Viloxazine"
    },
    {
        "atc_level": "N06AB02",
        "atc_description": "zimeldine"
    },
    {
        "atc_level": "N06AB03",
        "atc_description": "fluoxetine"
    },
    {
        "atc_level": "N06AB04",
        "atc_description": "citalopram"
    },
    {
        "atc_level": "N06AB05",
        "atc_description": "paroxetine"
    },
    {
        "atc_level": "N06AB06",
        "atc_description": "sertraline"
    },
    {
        "atc_level": "N06AB07",
        "atc_description": "alaproclate"
    },
    {
        "atc_level": "N06AB08",
        "atc_description": "fluvoxamine"
    },
    {
        "atc_level": "N06AB09",
        "atc_description": "etoperidone"
    },
    {
        "atc_level": "N06AB10",
        "atc_description": "escitalopram"
    },
    {
        "atc_level": "N06AC",
        "atc_description": "Tetracyclic derivatives"
    },
    {
        "atc_level": "N06AC01",
        "atc_description": "Maprotiline"
    },
    {
        "atc_level": "N06AC02",
        "atc_description": "Mianserin"
    },
    {
        "atc_level": "N06AD",
        "atc_description": "Modified cyclic derivatives"
    },
    {
        "atc_level": "N06AD01",
        "atc_description": "Nomifensine"
    },
    {
        "atc_level": "N06AD02",
        "atc_description": "Trazodone"
    },
    {
        "atc_level": "N06AE",
        "atc_description": "Monocyclic derivatives"
    },
    {
        "atc_level": "N06AE01",
        "atc_description": "Alaproclate"
    },
    {
        "atc_level": "N06AE02",
        "atc_description": "Fluvoxamine"
    },
    {
        "atc_level": "N06AE03",
        "atc_description": "Minaprine"
    },
    {
        "atc_level": "N06AE04",
        "atc_description": "Bifemelane"
    },
    {
        "atc_level": "N06AE05",
        "atc_description": "Etoperidone"
    },
    {
        "atc_level": "N06AE06",
        "atc_description": "Venlafaxine"
    },
    {
        "atc_level": "N06AE07",
        "atc_description": "Nefazadone"
    },
    {
        "atc_level": "N06AF",
        "atc_description": "Monoamine oxidase inhibitors, non-selective"
    },
    {
        "atc_level": "N06AF01",
        "atc_description": "isocarboxazid"
    },
    {
        "atc_level": "N06AF02",
        "atc_description": "nialamide"
    },
    {
        "atc_level": "N06AF03",
        "atc_description": "phenelzine"
    },
    {
        "atc_level": "N06AF04",
        "atc_description": "tranylcypromine"
    },
    {
        "atc_level": "N06AF05",
        "atc_description": "iproniazide"
    },
    {
        "atc_level": "N06AF06",
        "atc_description": "iproclozide"
    },
    {
        "atc_level": "N06AG",
        "atc_description": "Monoamine oxidase A inhibitors"
    },
    {
        "atc_level": "N06AG01",
        "atc_description": "Tranylcypromine"
    },
    {
        "atc_level": "N06AG02",
        "atc_description": "moclobemide"
    },
    {
        "atc_level": "N06AG03",
        "atc_description": "toloxatone"
    },
    {
        "atc_level": "N06AX",
        "atc_description": "Other antidepressants"
    },
    {
        "atc_level": "N06AX01",
        "atc_description": "oxitriptan"
    },
    {
        "atc_level": "N06AX02",
        "atc_description": "tryptophan"
    },
    {
        "atc_level": "N06AX03",
        "atc_description": "mianserin"
    },
    {
        "atc_level": "N06AX04",
        "atc_description": "nomifensine"
    },
    {
        "atc_level": "N06AX05",
        "atc_description": "trazodone"
    },
    {
        "atc_level": "N06AX06",
        "atc_description": "nefazodone"
    },
    {
        "atc_level": "N06AX07",
        "atc_description": "minaprine"
    },
    {
        "atc_level": "N06AX08",
        "atc_description": "bifemelane"
    },
    {
        "atc_level": "N06AX09",
        "atc_description": "viloxazine"
    },
    {
        "atc_level": "N06AX10",
        "atc_description": "oxaflozane"
    },
    {
        "atc_level": "N06AX11",
        "atc_description": "mirtazapine"
    },
    {
        "atc_level": "N06AX12",
        "atc_description": "bupropion"
    },
    {
        "atc_level": "N06AX13",
        "atc_description": "medifoxamine"
    },
    {
        "atc_level": "N06AX14",
        "atc_description": "tianeptine"
    },
    {
        "atc_level": "N06AX15",
        "atc_description": "pivagabine"
    },
    {
        "atc_level": "N06AX16",
        "atc_description": "venlafaxine"
    },
    {
        "atc_level": "N06AX17",
        "atc_description": "milnacipran"
    },
    {
        "atc_level": "N06AX18",
        "atc_description": "reboxetine"
    },
    {
        "atc_level": "N06AX19",
        "atc_description": "gepirone"
    },
    {
        "atc_level": "N06AX21",
        "atc_description": "duloxetine"
    },
    {
        "atc_level": "N06AX22",
        "atc_description": "agomelatine"
    },
    {
        "atc_level": "N06AX23",
        "atc_description": "desvenlafaxine"
    },
    {
        "atc_level": "N06AX24",
        "atc_description": "vilazodone"
    },
    {
        "atc_level": "N06AX25",
        "atc_description": "Hyperici herba"
    },
    {
        "atc_level": "N06AX26",
        "atc_description": "vortioxetine"
    },
    {
        "atc_level": "N06AX27",
        "atc_description": "esketamine"
    },
    {
        "atc_level": "N06AX28",
        "atc_description": "levomilnacipran"
    },
    {
        "atc_level": "N06AZ",
        "atc_description": "OTHER ANTIDEPRESSANTS"
    },
    {
        "atc_level": "N06B",
        "atc_description": "PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS"
    },
    {
        "atc_level": "N06BA",
        "atc_description": "Centrally acting sympathomimetics"
    },
    {
        "atc_level": "N06BA01",
        "atc_description": "amfetamine"
    },
    {
        "atc_level": "N06BA02",
        "atc_description": "dexamfetamine"
    },
    {
        "atc_level": "N06BA03",
        "atc_description": "metamfetamine"
    },
    {
        "atc_level": "N06BA04",
        "atc_description": "methylphenidate"
    },
    {
        "atc_level": "N06BA05",
        "atc_description": "pemoline"
    },
    {
        "atc_level": "N06BA06",
        "atc_description": "fencamfamin"
    },
    {
        "atc_level": "N06BA07",
        "atc_description": "modafinil"
    },
    {
        "atc_level": "N06BA08",
        "atc_description": "fenozolone"
    },
    {
        "atc_level": "N06BA09",
        "atc_description": "atomoxetine"
    },
    {
        "atc_level": "N06BA10",
        "atc_description": "fenetylline"
    },
    {
        "atc_level": "N06BA11",
        "atc_description": "dexmethylphenidate"
    },
    {
        "atc_level": "N06BA12",
        "atc_description": "lisdexamfetamine"
    },
    {
        "atc_level": "N06BA13",
        "atc_description": "armodafinil"
    },
    {
        "atc_level": "N06BA14",
        "atc_description": "solriamfetol"
    },
    {
        "atc_level": "N06BB",
        "atc_description": "Bicyclic compounds"
    },
    {
        "atc_level": "N06BB01",
        "atc_description": "Methylphenidate"
    },
    {
        "atc_level": "N06BB02",
        "atc_description": "Pemoline"
    },
    {
        "atc_level": "N06BB03",
        "atc_description": "Fencamfamin"
    },
    {
        "atc_level": "N06BB04",
        "atc_description": "Prolintane"
    },
    {
        "atc_level": "N06BC",
        "atc_description": "Xanthine derivatives"
    },
    {
        "atc_level": "N06BC01",
        "atc_description": "caffeine"
    },
    {
        "atc_level": "N06BC02",
        "atc_description": "propentofylline"
    },
    {
        "atc_level": "N06BD",
        "atc_description": "Tricyclic compounds"
    },
    {
        "atc_level": "N06BD01",
        "atc_description": "Pipradrol"
    },
    {
        "atc_level": "N06BX",
        "atc_description": "Other psychostimulants and nootropics"
    },
    {
        "atc_level": "N06BX01",
        "atc_description": "meclofenoxate"
    },
    {
        "atc_level": "N06BX02",
        "atc_description": "pyritinol"
    },
    {
        "atc_level": "N06BX03",
        "atc_description": "piracetam"
    },
    {
        "atc_level": "N06BX04",
        "atc_description": "deanol"
    },
    {
        "atc_level": "N06BX05",
        "atc_description": "fipexide"
    },
    {
        "atc_level": "N06BX06",
        "atc_description": "citicoline"
    },
    {
        "atc_level": "N06BX07",
        "atc_description": "oxiracetam"
    },
    {
        "atc_level": "N06BX08",
        "atc_description": "pirisudanol"
    },
    {
        "atc_level": "N06BX09",
        "atc_description": "linopirdine"
    },
    {
        "atc_level": "N06BX10",
        "atc_description": "nizofenone"
    },
    {
        "atc_level": "N06BX11",
        "atc_description": "aniracetam"
    },
    {
        "atc_level": "N06BX12",
        "atc_description": "acetylcarnitine"
    },
    {
        "atc_level": "N06BX13",
        "atc_description": "idebenone"
    },
    {
        "atc_level": "N06BX14",
        "atc_description": "prolintane"
    },
    {
        "atc_level": "N06BX15",
        "atc_description": "pipradrol"
    },
    {
        "atc_level": "N06BX16",
        "atc_description": "pramiracetam"
    },
    {
        "atc_level": "N06BX17",
        "atc_description": "adrafinil"
    },
    {
        "atc_level": "N06BX18",
        "atc_description": "vinpocetine"
    },
    {
        "atc_level": "N06BX19",
        "atc_description": "Ginkgo biloba"
    },
    {
        "atc_level": "N06BX21",
        "atc_description": "temgicoluril"
    },
    {
        "atc_level": "N06BX22",
        "atc_description": "phenibut"
    },
    {
        "atc_level": "N06C",
        "atc_description": "PSYCHOLEPTICS AND PSYCHOANALEPTICS IN COMBINATION"
    },
    {
        "atc_level": "N06CA",
        "atc_description": "Antidepressants in combination with psycholeptics"
    },
    {
        "atc_level": "N06CA01",
        "atc_description": "amitriptyline and psycholeptics"
    },
    {
        "atc_level": "N06CA02",
        "atc_description": "melitracen and psycholeptics"
    },
    {
        "atc_level": "N06CA03",
        "atc_description": "fluoxetine and psycholeptics"
    },
    {
        "atc_level": "N06CB",
        "atc_description": "Psychostimulants in combination with psycholeptics"
    },
    {
        "atc_level": "N06D",
        "atc_description": "ANTI-DEMENTIA DRUGS"
    },
    {
        "atc_level": "N06DA",
        "atc_description": "Anticholinesterases"
    },
    {
        "atc_level": "N06DA01",
        "atc_description": "tacrine"
    },
    {
        "atc_level": "N06DA02",
        "atc_description": "donepezil"
    },
    {
        "atc_level": "N06DA03",
        "atc_description": "rivastigmine"
    },
    {
        "atc_level": "N06DA04",
        "atc_description": "galantamine"
    },
    {
        "atc_level": "N06DA05",
        "atc_description": "ipidacrine"
    },
    {
        "atc_level": "N06DA52",
        "atc_description": "donepezil and memantine"
    },
    {
        "atc_level": "N06DA53",
        "atc_description": "donepezil, memantine and Ginkgo folium"
    },
    {
        "atc_level": "N06DX",
        "atc_description": "Other anti-dementia drugs"
    },
    {
        "atc_level": "N06DX01",
        "atc_description": "memantine"
    },
    {
        "atc_level": "N06DX02",
        "atc_description": "Ginkgo folium"
    },
    {
        "atc_level": "N06DX03",
        "atc_description": "aducanumab"
    },
    {
        "atc_level": "N06DX30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "N07",
        "atc_description": "OTHER NERVOUS SYSTEM DRUGS"
    },
    {
        "atc_level": "N07A",
        "atc_description": "PARASYMPATHOMIMETICS"
    },
    {
        "atc_level": "N07AA",
        "atc_description": "Anticholinesterases"
    },
    {
        "atc_level": "N07AA01",
        "atc_description": "neostigmine"
    },
    {
        "atc_level": "N07AA02",
        "atc_description": "pyridostigmine"
    },
    {
        "atc_level": "N07AA03",
        "atc_description": "distigmine"
    },
    {
        "atc_level": "N07AA04",
        "atc_description": "Tacrine"
    },
    {
        "atc_level": "N07AA05",
        "atc_description": "Donepezil"
    },
    {
        "atc_level": "N07AA06",
        "atc_description": "Rivastigmine"
    },
    {
        "atc_level": "N07AA30",
        "atc_description": "ambenonium"
    },
    {
        "atc_level": "N07AA51",
        "atc_description": "neostigmine, combinations"
    },
    {
        "atc_level": "N07AB",
        "atc_description": "Choline esters"
    },
    {
        "atc_level": "N07AB01",
        "atc_description": "carbachol"
    },
    {
        "atc_level": "N07AB02",
        "atc_description": "bethanechol"
    },
    {
        "atc_level": "N07AX",
        "atc_description": "Other parasympathomimetics"
    },
    {
        "atc_level": "N07AX01",
        "atc_description": "pilocarpine"
    },
    {
        "atc_level": "N07AX02",
        "atc_description": "choline alfoscerate"
    },
    {
        "atc_level": "N07AX03",
        "atc_description": "cevimeline"
    },
    {
        "atc_level": "N07B",
        "atc_description": "DRUGS USED IN ADDICTIVE DISORDERS"
    },
    {
        "atc_level": "N07BA",
        "atc_description": "Drugs used in nicotine dependence"
    },
    {
        "atc_level": "N07BA01",
        "atc_description": "nicotine"
    },
    {
        "atc_level": "N07BA02",
        "atc_description": "Bupropion"
    },
    {
        "atc_level": "N07BA03",
        "atc_description": "varenicline"
    },
    {
        "atc_level": "N07BA04",
        "atc_description": "cytisinicline"
    },
    {
        "atc_level": "N07BB",
        "atc_description": "Drugs used in alcohol dependence"
    },
    {
        "atc_level": "N07BB01",
        "atc_description": "disulfiram"
    },
    {
        "atc_level": "N07BB02",
        "atc_description": "calcium carbimide"
    },
    {
        "atc_level": "N07BB03",
        "atc_description": "acamprosate"
    },
    {
        "atc_level": "N07BB04",
        "atc_description": "naltrexone"
    },
    {
        "atc_level": "N07BB05",
        "atc_description": "nalmefene"
    },
    {
        "atc_level": "N07BC",
        "atc_description": "Drugs used in opioid dependence"
    },
    {
        "atc_level": "N07BC01",
        "atc_description": "buprenorphine"
    },
    {
        "atc_level": "N07BC02",
        "atc_description": "methadone"
    },
    {
        "atc_level": "N07BC03",
        "atc_description": "levacetylmethadol"
    },
    {
        "atc_level": "N07BC04",
        "atc_description": "lofexidine"
    },
    {
        "atc_level": "N07BC05",
        "atc_description": "levomethadone"
    },
    {
        "atc_level": "N07BC06",
        "atc_description": "diamorphine"
    },
    {
        "atc_level": "N07BC51",
        "atc_description": "buprenorphine, combinations"
    },
    {
        "atc_level": "N07C",
        "atc_description": "ANTIVERTIGO PREPARATIONS"
    },
    {
        "atc_level": "N07CA",
        "atc_description": "Antivertigo preparations"
    },
    {
        "atc_level": "N07CA01",
        "atc_description": "betahistine"
    },
    {
        "atc_level": "N07CA02",
        "atc_description": "cinnarizine"
    },
    {
        "atc_level": "N07CA03",
        "atc_description": "flunarizine"
    },
    {
        "atc_level": "N07CA04",
        "atc_description": "acetylleucine"
    },
    {
        "atc_level": "N07CA52",
        "atc_description": "cinnarizine, combinations"
    },
    {
        "atc_level": "N07X",
        "atc_description": "OTHER NERVOUS SYSTEM DRUGS"
    },
    {
        "atc_level": "N07XA",
        "atc_description": "Gangliosides and ganglioside derivatives"
    },
    {
        "atc_level": "N07XX",
        "atc_description": "Other nervous system drugs"
    },
    {
        "atc_level": "N07XX01",
        "atc_description": "tirilazad"
    },
    {
        "atc_level": "N07XX02",
        "atc_description": "riluzole"
    },
    {
        "atc_level": "N07XX03",
        "atc_description": "xaliproden"
    },
    {
        "atc_level": "N07XX04",
        "atc_description": "sodium oxybate"
    },
    {
        "atc_level": "N07XX05",
        "atc_description": "amifampridine"
    },
    {
        "atc_level": "N07XX06",
        "atc_description": "tetrabenazine"
    },
    {
        "atc_level": "N07XX07",
        "atc_description": "fampridine"
    },
    {
        "atc_level": "N07XX08",
        "atc_description": "tafamidis"
    },
    {
        "atc_level": "N07XX09",
        "atc_description": "dimethyl fumarate"
    },
    {
        "atc_level": "N07XX10",
        "atc_description": "laquinimod"
    },
    {
        "atc_level": "N07XX11",
        "atc_description": "pitolisant"
    },
    {
        "atc_level": "N07XX12",
        "atc_description": "patisiran"
    },
    {
        "atc_level": "N07XX13",
        "atc_description": "valbenazine"
    },
    {
        "atc_level": "N07XX14",
        "atc_description": "edaravone"
    },
    {
        "atc_level": "N07XX15",
        "atc_description": "inotersen"
    },
    {
        "atc_level": "N07XX16",
        "atc_description": "deutetrabenazine"
    },
    {
        "atc_level": "N07XX17",
        "atc_description": "arimoclomol"
    },
    {
        "atc_level": "N07XX59",
        "atc_description": "dextromethorphan, combinations"
    },
    {
        "atc_level": "P",
        "atc_description": "ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS"
    },
    {
        "atc_level": "P00",
        "atc_description": "ANTIPARASITIC PRODUCTS"
    },
    {
        "atc_level": "P01",
        "atc_description": "ANTIPROTOZOALS"
    },
    {
        "atc_level": "P01A",
        "atc_description": "AGENTS AGAINST AMOEBIASIS AND OTHER PROTOZOAL DISEASES"
    },
    {
        "atc_level": "P01AA",
        "atc_description": "Hydroxyquinoline derivatives"
    },
    {
        "atc_level": "P01AA01",
        "atc_description": "broxyquinoline"
    },
    {
        "atc_level": "P01AA02",
        "atc_description": "clioquinol"
    },
    {
        "atc_level": "P01AA04",
        "atc_description": "chlorquinaldol"
    },
    {
        "atc_level": "P01AA05",
        "atc_description": "tilbroquinol"
    },
    {
        "atc_level": "P01AA30",
        "atc_description": "tilbroquinol and tiliquinol"
    },
    {
        "atc_level": "P01AA52",
        "atc_description": "clioquinol, combinations"
    },
    {
        "atc_level": "P01AB",
        "atc_description": "Nitroimidazole derivatives"
    },
    {
        "atc_level": "P01AB01",
        "atc_description": "metronidazole"
    },
    {
        "atc_level": "P01AB02",
        "atc_description": "tinidazole"
    },
    {
        "atc_level": "P01AB03",
        "atc_description": "ornidazole"
    },
    {
        "atc_level": "P01AB04",
        "atc_description": "azanidazole"
    },
    {
        "atc_level": "P01AB05",
        "atc_description": "propenidazole"
    },
    {
        "atc_level": "P01AB06",
        "atc_description": "nimorazole"
    },
    {
        "atc_level": "P01AB07",
        "atc_description": "secnidazole"
    },
    {
        "atc_level": "P01AB51",
        "atc_description": "metronidazole and furazolidone"
    },
    {
        "atc_level": "P01AB52",
        "atc_description": "metronidazole and diloxanide"
    },
    {
        "atc_level": "P01AC",
        "atc_description": "Dichloroacetamide derivatives"
    },
    {
        "atc_level": "P01AC01",
        "atc_description": "diloxanide"
    },
    {
        "atc_level": "P01AC02",
        "atc_description": "clefamide"
    },
    {
        "atc_level": "P01AC03",
        "atc_description": "etofamide"
    },
    {
        "atc_level": "P01AC04",
        "atc_description": "teclozan"
    },
    {
        "atc_level": "P01AR",
        "atc_description": "Arsenic compounds"
    },
    {
        "atc_level": "P01AR01",
        "atc_description": "arsthinol"
    },
    {
        "atc_level": "P01AR02",
        "atc_description": "difetarsone"
    },
    {
        "atc_level": "P01AR03",
        "atc_description": "glycobiarsol"
    },
    {
        "atc_level": "P01AR53",
        "atc_description": "glycobiarsol, combinations"
    },
    {
        "atc_level": "P01AX",
        "atc_description": "Other agents against amoebiasis and other protozoal diseases"
    },
    {
        "atc_level": "P01AX01",
        "atc_description": "chiniofon"
    },
    {
        "atc_level": "P01AX02",
        "atc_description": "emetine"
    },
    {
        "atc_level": "P01AX03",
        "atc_description": "Diloxanide"
    },
    {
        "atc_level": "P01AX04",
        "atc_description": "phanquinone"
    },
    {
        "atc_level": "P01AX05",
        "atc_description": "mepacrine"
    },
    {
        "atc_level": "P01AX06",
        "atc_description": "atovaquone"
    },
    {
        "atc_level": "P01AX07",
        "atc_description": "trimetrexate"
    },
    {
        "atc_level": "P01AX08",
        "atc_description": "tenonitrozole"
    },
    {
        "atc_level": "P01AX09",
        "atc_description": "dehydroemetine"
    },
    {
        "atc_level": "P01AX10",
        "atc_description": "fumagillin"
    },
    {
        "atc_level": "P01AX11",
        "atc_description": "nitazoxanide"
    },
    {
        "atc_level": "P01AX52",
        "atc_description": "emetine, combinations"
    },
    {
        "atc_level": "P01B",
        "atc_description": "ANTIMALARIALS"
    },
    {
        "atc_level": "P01BA",
        "atc_description": "Aminoquinolines"
    },
    {
        "atc_level": "P01BA01",
        "atc_description": "chloroquine"
    },
    {
        "atc_level": "P01BA02",
        "atc_description": "hydroxychloroquine"
    },
    {
        "atc_level": "P01BA03",
        "atc_description": "primaquine"
    },
    {
        "atc_level": "P01BA04",
        "atc_description": "Mepacrine"
    },
    {
        "atc_level": "P01BA05",
        "atc_description": "Mefloquine"
    },
    {
        "atc_level": "P01BA06",
        "atc_description": "amodiaquine"
    },
    {
        "atc_level": "P01BA07",
        "atc_description": "tafenoquine"
    },
    {
        "atc_level": "P01BB",
        "atc_description": "Biguanides"
    },
    {
        "atc_level": "P01BB01",
        "atc_description": "proguanil"
    },
    {
        "atc_level": "P01BB02",
        "atc_description": "cycloguanil embonate"
    },
    {
        "atc_level": "P01BB51",
        "atc_description": "proguanil and atovaquone"
    },
    {
        "atc_level": "P01BB52",
        "atc_description": "chloroquine and proguanil"
    },
    {
        "atc_level": "P01BC",
        "atc_description": "Methanolquinolines"
    },
    {
        "atc_level": "P01BC01",
        "atc_description": "quinine"
    },
    {
        "atc_level": "P01BC02",
        "atc_description": "mefloquine"
    },
    {
        "atc_level": "P01BD",
        "atc_description": "Diaminopyrimidines"
    },
    {
        "atc_level": "P01BD01",
        "atc_description": "pyrimethamine"
    },
    {
        "atc_level": "P01BD51",
        "atc_description": "pyrimethamine, combinations"
    },
    {
        "atc_level": "P01BE",
        "atc_description": "Artemisinin and derivatives, plain"
    },
    {
        "atc_level": "P01BE01",
        "atc_description": "artemisinin"
    },
    {
        "atc_level": "P01BE02",
        "atc_description": "artemether"
    },
    {
        "atc_level": "P01BE03",
        "atc_description": "artesunate"
    },
    {
        "atc_level": "P01BE04",
        "atc_description": "artemotil"
    },
    {
        "atc_level": "P01BE05",
        "atc_description": "artenimol"
    },
    {
        "atc_level": "P01BE52",
        "atc_description": "artemether, combinations"
    },
    {
        "atc_level": "P01BF",
        "atc_description": "Artemisinin and derivatives, combinations"
    },
    {
        "atc_level": "P01BF01",
        "atc_description": "artemether and lumefantrine"
    },
    {
        "atc_level": "P01BF02",
        "atc_description": "artesunate and mefloquine"
    },
    {
        "atc_level": "P01BF03",
        "atc_description": "artesunate and amodiaquine"
    },
    {
        "atc_level": "P01BF04",
        "atc_description": "artesunate, sulfalene and pyrimethamine"
    },
    {
        "atc_level": "P01BF05",
        "atc_description": "artenimol and piperaquine"
    },
    {
        "atc_level": "P01BF06",
        "atc_description": "artesunate and pyronaridine"
    },
    {
        "atc_level": "P01BF07",
        "atc_description": "artemisinin and piperaquine"
    },
    {
        "atc_level": "P01BF08",
        "atc_description": "artemisinin and naphthoquine"
    },
    {
        "atc_level": "P01BF09",
        "atc_description": "artesunate, sulfadoxine and pyrimethamine"
    },
    {
        "atc_level": "P01BX",
        "atc_description": "Other antimalarials"
    },
    {
        "atc_level": "P01BX01",
        "atc_description": "halofantrine"
    },
    {
        "atc_level": "P01BX02",
        "atc_description": "arterolane and piperaquine"
    },
    {
        "atc_level": "P01C",
        "atc_description": "AGENTS AGAINST LEISHMANIASIS AND TRYPANOSOMIASIS"
    },
    {
        "atc_level": "P01CA",
        "atc_description": "Nitroimidazole derivatives"
    },
    {
        "atc_level": "P01CA01",
        "atc_description": "Nimorazole"
    },
    {
        "atc_level": "P01CA02",
        "atc_description": "benznidazole"
    },
    {
        "atc_level": "P01CA03",
        "atc_description": "fexinidazole"
    },
    {
        "atc_level": "P01CB",
        "atc_description": "Antimony compounds"
    },
    {
        "atc_level": "P01CB01",
        "atc_description": "meglumine antimonate"
    },
    {
        "atc_level": "P01CB02",
        "atc_description": "sodium stibogluconate"
    },
    {
        "atc_level": "P01CC",
        "atc_description": "Nitrofuran derivatives"
    },
    {
        "atc_level": "P01CC01",
        "atc_description": "nifurtimox"
    },
    {
        "atc_level": "P01CC02",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "P01CD",
        "atc_description": "Arsenic compounds"
    },
    {
        "atc_level": "P01CD01",
        "atc_description": "melarsoprol"
    },
    {
        "atc_level": "P01CD02",
        "atc_description": "acetarsol"
    },
    {
        "atc_level": "P01CX",
        "atc_description": "Other agents against leishmaniasis and trypanosomiasis"
    },
    {
        "atc_level": "P01CX01",
        "atc_description": "pentamidine isethionate"
    },
    {
        "atc_level": "P01CX02",
        "atc_description": "suramin sodium"
    },
    {
        "atc_level": "P01CX03",
        "atc_description": "eflornithine"
    },
    {
        "atc_level": "P01CX04",
        "atc_description": "miltefosine"
    },
    {
        "atc_level": "P01X",
        "atc_description": "OTHER ANTIPROTOZOALS"
    },
    {
        "atc_level": "P01XA",
        "atc_description": "DRUGS FOR TREATMENT OF PNEUMOCYSTIS CARINII"
    },
    {
        "atc_level": "P01XA01",
        "atc_description": "Pentamidine isethionat"
    },
    {
        "atc_level": "P02",
        "atc_description": "ANTHELMINTICS"
    },
    {
        "atc_level": "P02A",
        "atc_description": "SCHISTOSOMICIDES"
    },
    {
        "atc_level": "P02B",
        "atc_description": "ANTITREMATODALS"
    },
    {
        "atc_level": "P02BA",
        "atc_description": "Quinoline derivatives and related substances"
    },
    {
        "atc_level": "P02BA01",
        "atc_description": "praziquantel"
    },
    {
        "atc_level": "P02BA02",
        "atc_description": "oxamniquine"
    },
    {
        "atc_level": "P02BB",
        "atc_description": "Organophosphorous compounds"
    },
    {
        "atc_level": "P02BB01",
        "atc_description": "metrifonate"
    },
    {
        "atc_level": "P02BX",
        "atc_description": "Other antitrematodal agents"
    },
    {
        "atc_level": "P02BX01",
        "atc_description": "bithionol"
    },
    {
        "atc_level": "P02BX02",
        "atc_description": "niridazole"
    },
    {
        "atc_level": "P02BX03",
        "atc_description": "stibophen"
    },
    {
        "atc_level": "P02BX04",
        "atc_description": "triclabendazole"
    },
    {
        "atc_level": "P02C",
        "atc_description": "ANTINEMATODAL AGENTS"
    },
    {
        "atc_level": "P02CA",
        "atc_description": "Benzimidazole derivatives"
    },
    {
        "atc_level": "P02CA01",
        "atc_description": "mebendazole"
    },
    {
        "atc_level": "P02CA02",
        "atc_description": "tiabendazole"
    },
    {
        "atc_level": "P02CA03",
        "atc_description": "albendazole"
    },
    {
        "atc_level": "P02CA04",
        "atc_description": "ciclobendazole"
    },
    {
        "atc_level": "P02CA05",
        "atc_description": "flubendazole"
    },
    {
        "atc_level": "P02CA06",
        "atc_description": "fenbendazole"
    },
    {
        "atc_level": "P02CA51",
        "atc_description": "mebendazole, combinations"
    },
    {
        "atc_level": "P02CB",
        "atc_description": "Piperazine and derivatives"
    },
    {
        "atc_level": "P02CB01",
        "atc_description": "piperazine"
    },
    {
        "atc_level": "P02CB02",
        "atc_description": "diethylcarbamazine"
    },
    {
        "atc_level": "P02CC",
        "atc_description": "Tetrahydropyrimidine derivatives"
    },
    {
        "atc_level": "P02CC01",
        "atc_description": "pyrantel"
    },
    {
        "atc_level": "P02CC02",
        "atc_description": "oxantel"
    },
    {
        "atc_level": "P02CE",
        "atc_description": "Imidazothiazole derivatives"
    },
    {
        "atc_level": "P02CE01",
        "atc_description": "levamisole"
    },
    {
        "atc_level": "P02CF",
        "atc_description": "Avermectines"
    },
    {
        "atc_level": "P02CF01",
        "atc_description": "ivermectin"
    },
    {
        "atc_level": "P02CX",
        "atc_description": "Other antinematodals"
    },
    {
        "atc_level": "P02CX01",
        "atc_description": "pyrvinium"
    },
    {
        "atc_level": "P02CX02",
        "atc_description": "bephenium"
    },
    {
        "atc_level": "P02CX03",
        "atc_description": "moxidectin"
    },
    {
        "atc_level": "P02D",
        "atc_description": "ANTICESTODALS"
    },
    {
        "atc_level": "P02DA",
        "atc_description": "Salicylic acid derivatives"
    },
    {
        "atc_level": "P02DA01",
        "atc_description": "niclosamide"
    },
    {
        "atc_level": "P02DX",
        "atc_description": "Other anticestodals"
    },
    {
        "atc_level": "P02DX01",
        "atc_description": "desaspidin"
    },
    {
        "atc_level": "P02DX02",
        "atc_description": "dichlorophen"
    },
    {
        "atc_level": "P02X",
        "atc_description": "Other anthelmintics"
    },
    {
        "atc_level": "P02XA",
        "atc_description": "QUINOLINE DERIVATIVES"
    },
    {
        "atc_level": "P02XA01",
        "atc_description": "Pyrvinium"
    },
    {
        "atc_level": "P02XB",
        "atc_description": "PIPERAZINE DERIVATIVES"
    },
    {
        "atc_level": "P02XB01",
        "atc_description": "Piperazine"
    },
    {
        "atc_level": "P02XB02",
        "atc_description": "Diethylcarbamazine"
    },
    {
        "atc_level": "P02XC",
        "atc_description": "SALICYLIC ACID DERIVATIVES"
    },
    {
        "atc_level": "P02XC01",
        "atc_description": "Niclosamide"
    },
    {
        "atc_level": "P02XX",
        "atc_description": "OTHER ANTHELMINTICS"
    },
    {
        "atc_level": "P02XX01",
        "atc_description": "Levamisole"
    },
    {
        "atc_level": "P02XX02",
        "atc_description": "Desaspidin"
    },
    {
        "atc_level": "P02XX03",
        "atc_description": "Mebendazole"
    },
    {
        "atc_level": "P02XX04",
        "atc_description": "Tiabendazole"
    },
    {
        "atc_level": "P02XX05",
        "atc_description": "Pyrantel"
    },
    {
        "atc_level": "P02XX06",
        "atc_description": "Dichlorophen"
    },
    {
        "atc_level": "P02XX08",
        "atc_description": "Praziquantel"
    },
    {
        "atc_level": "P03",
        "atc_description": "ECTOPARASITICIDES, INCL. SCABICIDES, INSECTICIDES AND REPELLENTS"
    },
    {
        "atc_level": "P03A",
        "atc_description": "ECTOPARASITICIDES, INCL. SCABICIDES"
    },
    {
        "atc_level": "P03AA",
        "atc_description": "Sulfur containing products"
    },
    {
        "atc_level": "P03AA01",
        "atc_description": "dixanthogen"
    },
    {
        "atc_level": "P03AA02",
        "atc_description": "potassium polysulfide"
    },
    {
        "atc_level": "P03AA03",
        "atc_description": "mesulfen"
    },
    {
        "atc_level": "P03AA04",
        "atc_description": "disulfiram"
    },
    {
        "atc_level": "P03AA05",
        "atc_description": "thiram"
    },
    {
        "atc_level": "P03AA54",
        "atc_description": "disulfiram, combinations"
    },
    {
        "atc_level": "P03AB",
        "atc_description": "Chlorine containing products"
    },
    {
        "atc_level": "P03AB01",
        "atc_description": "clofenotane"
    },
    {
        "atc_level": "P03AB02",
        "atc_description": "lindane"
    },
    {
        "atc_level": "P03AB51",
        "atc_description": "clofenotane, combinations"
    },
    {
        "atc_level": "P03AC",
        "atc_description": "Pyrethrines, incl. synthetic compounds"
    },
    {
        "atc_level": "P03AC01",
        "atc_description": "pyrethrum"
    },
    {
        "atc_level": "P03AC02",
        "atc_description": "bioallethrin"
    },
    {
        "atc_level": "P03AC03",
        "atc_description": "phenothrin"
    },
    {
        "atc_level": "P03AC04",
        "atc_description": "permethrin"
    },
    {
        "atc_level": "P03AC51",
        "atc_description": "pyrethrum, combinations"
    },
    {
        "atc_level": "P03AC52",
        "atc_description": "bioallethrin, combinations"
    },
    {
        "atc_level": "P03AC53",
        "atc_description": "phenothrin, combinations"
    },
    {
        "atc_level": "P03AC54",
        "atc_description": "permethrin, combinations"
    },
    {
        "atc_level": "P03AX",
        "atc_description": "Other ectoparasiticides, incl. scabicides"
    },
    {
        "atc_level": "P03AX01",
        "atc_description": "benzyl benzoate"
    },
    {
        "atc_level": "P03AX02",
        "atc_description": "copper oleinate"
    },
    {
        "atc_level": "P03AX03",
        "atc_description": "malathion"
    },
    {
        "atc_level": "P03AX04",
        "atc_description": "quassia"
    },
    {
        "atc_level": "P03AX05",
        "atc_description": "dimeticone"
    },
    {
        "atc_level": "P03AX06",
        "atc_description": "benzyl alcohol"
    },
    {
        "atc_level": "P03AX07",
        "atc_description": "abametapir"
    },
    {
        "atc_level": "P03B",
        "atc_description": "INSECTICIDES AND REPELLENTS"
    },
    {
        "atc_level": "P03BA",
        "atc_description": "Pyrethrines"
    },
    {
        "atc_level": "P03BA01",
        "atc_description": "cyfluthrin"
    },
    {
        "atc_level": "P03BA02",
        "atc_description": "cypermethrin"
    },
    {
        "atc_level": "P03BA03",
        "atc_description": "decamethrin"
    },
    {
        "atc_level": "P03BA04",
        "atc_description": "tetramethrin"
    },
    {
        "atc_level": "P03BX",
        "atc_description": "Other insecticides and repellents"
    },
    {
        "atc_level": "P03BX01",
        "atc_description": "diethyltoluamide"
    },
    {
        "atc_level": "P03BX02",
        "atc_description": "dimethylphthalate"
    },
    {
        "atc_level": "P03BX03",
        "atc_description": "dibutylphthalate"
    },
    {
        "atc_level": "P03BX04",
        "atc_description": "dibutylsuccinate"
    },
    {
        "atc_level": "P03BX05",
        "atc_description": "dimethylcarbate"
    },
    {
        "atc_level": "P03BX06",
        "atc_description": "etohexadiol"
    },
    {
        "atc_level": "R",
        "atc_description": "RESPIRATORY SYSTEM"
    },
    {
        "atc_level": "R00",
        "atc_description": "RESPIRATORY SYSTEM"
    },
    {
        "atc_level": "R01",
        "atc_description": "NASAL PREPARATIONS"
    },
    {
        "atc_level": "R01A",
        "atc_description": "DECONGESTANTS AND OTHER NASAL PREPARATIONS FOR TOPICAL USE"
    },
    {
        "atc_level": "R01AA",
        "atc_description": "Sympathomimetics, plain"
    },
    {
        "atc_level": "R01AA02",
        "atc_description": "cyclopentamine"
    },
    {
        "atc_level": "R01AA03",
        "atc_description": "ephedrine"
    },
    {
        "atc_level": "R01AA04",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "R01AA05",
        "atc_description": "oxymetazoline"
    },
    {
        "atc_level": "R01AA06",
        "atc_description": "tetryzoline"
    },
    {
        "atc_level": "R01AA07",
        "atc_description": "xylometazoline"
    },
    {
        "atc_level": "R01AA08",
        "atc_description": "naphazoline"
    },
    {
        "atc_level": "R01AA09",
        "atc_description": "tramazoline"
    },
    {
        "atc_level": "R01AA10",
        "atc_description": "metizoline"
    },
    {
        "atc_level": "R01AA11",
        "atc_description": "tuaminoheptane"
    },
    {
        "atc_level": "R01AA12",
        "atc_description": "fenoxazoline"
    },
    {
        "atc_level": "R01AA13",
        "atc_description": "tymazoline"
    },
    {
        "atc_level": "R01AA14",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "R01AA15",
        "atc_description": "indanazoline"
    },
    {
        "atc_level": "R01AB",
        "atc_description": "Sympathomimetics, combinations excl. corticosteroids"
    },
    {
        "atc_level": "R01AB01",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "R01AB02",
        "atc_description": "naphazoline"
    },
    {
        "atc_level": "R01AB03",
        "atc_description": "tetryzoline"
    },
    {
        "atc_level": "R01AB05",
        "atc_description": "ephedrine"
    },
    {
        "atc_level": "R01AB06",
        "atc_description": "xylometazoline"
    },
    {
        "atc_level": "R01AB07",
        "atc_description": "oxymetazoline"
    },
    {
        "atc_level": "R01AB08",
        "atc_description": "tuaminoheptane"
    },
    {
        "atc_level": "R01AC",
        "atc_description": "Antiallergic agents, excl. corticosteroids"
    },
    {
        "atc_level": "R01AC01",
        "atc_description": "cromoglicic acid"
    },
    {
        "atc_level": "R01AC02",
        "atc_description": "levocabastine"
    },
    {
        "atc_level": "R01AC03",
        "atc_description": "azelastine"
    },
    {
        "atc_level": "R01AC04",
        "atc_description": "antazoline"
    },
    {
        "atc_level": "R01AC05",
        "atc_description": "spaglumic acid"
    },
    {
        "atc_level": "R01AC06",
        "atc_description": "thonzylamine"
    },
    {
        "atc_level": "R01AC07",
        "atc_description": "nedocromil"
    },
    {
        "atc_level": "R01AC08",
        "atc_description": "olopatadine"
    },
    {
        "atc_level": "R01AC51",
        "atc_description": "cromoglicic acid, combinations"
    },
    {
        "atc_level": "R01AD",
        "atc_description": "Corticosteroids"
    },
    {
        "atc_level": "R01AD01",
        "atc_description": "beclometasone"
    },
    {
        "atc_level": "R01AD02",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "R01AD03",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "R01AD04",
        "atc_description": "flunisolide"
    },
    {
        "atc_level": "R01AD05",
        "atc_description": "budesonide"
    },
    {
        "atc_level": "R01AD06",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "R01AD07",
        "atc_description": "tixocortol"
    },
    {
        "atc_level": "R01AD08",
        "atc_description": "fluticasone"
    },
    {
        "atc_level": "R01AD09",
        "atc_description": "mometasone"
    },
    {
        "atc_level": "R01AD11",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "R01AD12",
        "atc_description": "fluticasone furoate"
    },
    {
        "atc_level": "R01AD13",
        "atc_description": "ciclesonide"
    },
    {
        "atc_level": "R01AD52",
        "atc_description": "prednisolone, combinations"
    },
    {
        "atc_level": "R01AD53",
        "atc_description": "dexamethasone, combinations"
    },
    {
        "atc_level": "R01AD57",
        "atc_description": "tixocortol, combinations"
    },
    {
        "atc_level": "R01AD58",
        "atc_description": "fluticasone, combinations"
    },
    {
        "atc_level": "R01AD59",
        "atc_description": "mometasone, combinations"
    },
    {
        "atc_level": "R01AD60",
        "atc_description": "hydrocortisone, combinations"
    },
    {
        "atc_level": "R01AX",
        "atc_description": "Other nasal preparations"
    },
    {
        "atc_level": "R01AX01",
        "atc_description": "calcium hexamine thiocyanate"
    },
    {
        "atc_level": "R01AX02",
        "atc_description": "retinol"
    },
    {
        "atc_level": "R01AX03",
        "atc_description": "ipratropium bromide"
    },
    {
        "atc_level": "R01AX04",
        "atc_description": "Antazoline"
    },
    {
        "atc_level": "R01AX05",
        "atc_description": "ritiometan"
    },
    {
        "atc_level": "R01AX06",
        "atc_description": "mupirocin"
    },
    {
        "atc_level": "R01AX07",
        "atc_description": "hexamidine"
    },
    {
        "atc_level": "R01AX08",
        "atc_description": "framycetin"
    },
    {
        "atc_level": "R01AX09",
        "atc_description": "hyaluronic acid"
    },
    {
        "atc_level": "R01AX10",
        "atc_description": "various"
    },
    {
        "atc_level": "R01AX30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R01B",
        "atc_description": "NASAL DECONGESTANTS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "R01BA",
        "atc_description": "Sympathomimetics"
    },
    {
        "atc_level": "R01BA01",
        "atc_description": "phenylpropanolamine"
    },
    {
        "atc_level": "R01BA02",
        "atc_description": "pseudoephedrine"
    },
    {
        "atc_level": "R01BA03",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "R01BA51",
        "atc_description": "phenylpropanolamine, combinations"
    },
    {
        "atc_level": "R01BA52",
        "atc_description": "pseudoephedrine, combinations"
    },
    {
        "atc_level": "R01BA53",
        "atc_description": "phenylephrine, combinations"
    },
    {
        "atc_level": "R02",
        "atc_description": "THROAT PREPARATIONS"
    },
    {
        "atc_level": "R02A",
        "atc_description": "THROAT PREPARATIONS"
    },
    {
        "atc_level": "R02AA",
        "atc_description": "Antiseptics"
    },
    {
        "atc_level": "R02AA01",
        "atc_description": "ambazone"
    },
    {
        "atc_level": "R02AA02",
        "atc_description": "dequalinium"
    },
    {
        "atc_level": "R02AA03",
        "atc_description": "dichlorobenzyl alcohol"
    },
    {
        "atc_level": "R02AA05",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "R02AA06",
        "atc_description": "cetylpyridinium"
    },
    {
        "atc_level": "R02AA09",
        "atc_description": "benzethonium"
    },
    {
        "atc_level": "R02AA10",
        "atc_description": "myristyl-benzalkonium"
    },
    {
        "atc_level": "R02AA11",
        "atc_description": "chlorquinaldol"
    },
    {
        "atc_level": "R02AA12",
        "atc_description": "hexylresorcinol"
    },
    {
        "atc_level": "R02AA13",
        "atc_description": "acriflavinium chloride"
    },
    {
        "atc_level": "R02AA14",
        "atc_description": "oxyquinoline"
    },
    {
        "atc_level": "R02AA15",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "R02AA16",
        "atc_description": "benzalkonium"
    },
    {
        "atc_level": "R02AA17",
        "atc_description": "cetrimonium"
    },
    {
        "atc_level": "R02AA18",
        "atc_description": "hexamidine"
    },
    {
        "atc_level": "R02AA19",
        "atc_description": "phenol"
    },
    {
        "atc_level": "R02AA20",
        "atc_description": "various"
    },
    {
        "atc_level": "R02AA21",
        "atc_description": "octenidine"
    },
    {
        "atc_level": "R02AB",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "R02AB01",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "R02AB02",
        "atc_description": "tyrothricin"
    },
    {
        "atc_level": "R02AB03",
        "atc_description": "fusafungine"
    },
    {
        "atc_level": "R02AB04",
        "atc_description": "bacitracin"
    },
    {
        "atc_level": "R02AB30",
        "atc_description": "gramicidin"
    },
    {
        "atc_level": "R02AD",
        "atc_description": "Anesthetics, local"
    },
    {
        "atc_level": "R02AD01",
        "atc_description": "benzocaine"
    },
    {
        "atc_level": "R02AD02",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "R02AD03",
        "atc_description": "cocaine"
    },
    {
        "atc_level": "R02AD04",
        "atc_description": "dyclonine"
    },
    {
        "atc_level": "R02AX",
        "atc_description": "Other throat preparations"
    },
    {
        "atc_level": "R02AX01",
        "atc_description": "flurbiprofen"
    },
    {
        "atc_level": "R02AX02",
        "atc_description": "ibuprofen"
    },
    {
        "atc_level": "R02AX03",
        "atc_description": "benzydamine"
    },
    {
        "atc_level": "R03",
        "atc_description": "DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES"
    },
    {
        "atc_level": "R03A",
        "atc_description": "ADRENERGICS, INHALANTS"
    },
    {
        "atc_level": "R03AA",
        "atc_description": "Alpha- and beta-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03AA01",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "R03AB",
        "atc_description": "Non-selective beta-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03AB02",
        "atc_description": "isoprenaline"
    },
    {
        "atc_level": "R03AB03",
        "atc_description": "orciprenaline"
    },
    {
        "atc_level": "R03AC",
        "atc_description": "Selective beta-2-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03AC02",
        "atc_description": "salbutamol"
    },
    {
        "atc_level": "R03AC03",
        "atc_description": "terbutaline"
    },
    {
        "atc_level": "R03AC04",
        "atc_description": "fenoterol"
    },
    {
        "atc_level": "R03AC05",
        "atc_description": "rimiterol"
    },
    {
        "atc_level": "R03AC06",
        "atc_description": "hexoprenaline"
    },
    {
        "atc_level": "R03AC07",
        "atc_description": "isoetarine"
    },
    {
        "atc_level": "R03AC08",
        "atc_description": "pirbuterol"
    },
    {
        "atc_level": "R03AC09",
        "atc_description": "tretoquinol"
    },
    {
        "atc_level": "R03AC10",
        "atc_description": "carbuterol"
    },
    {
        "atc_level": "R03AC11",
        "atc_description": "tulobuterol"
    },
    {
        "atc_level": "R03AC12",
        "atc_description": "salmeterol"
    },
    {
        "atc_level": "R03AC13",
        "atc_description": "formoterol"
    },
    {
        "atc_level": "R03AC14",
        "atc_description": "clenbuterol"
    },
    {
        "atc_level": "R03AC15",
        "atc_description": "reproterol"
    },
    {
        "atc_level": "R03AC16",
        "atc_description": "procaterol"
    },
    {
        "atc_level": "R03AC17",
        "atc_description": "bitolterol"
    },
    {
        "atc_level": "R03AC18",
        "atc_description": "indacaterol"
    },
    {
        "atc_level": "R03AC19",
        "atc_description": "olodaterol"
    },
    {
        "atc_level": "R03AH",
        "atc_description": "Combinations of adrenergics"
    },
    {
        "atc_level": "R03AK",
        "atc_description": "Adrenergics in combination with corticosteroids or other drugs, excl. anticholinergics"
    },
    {
        "atc_level": "R03AK01",
        "atc_description": "epinephrine and other drugs for obstructive airway diseases"
    },
    {
        "atc_level": "R03AK02",
        "atc_description": "isoprenaline and other drugs for obstructive airway diseases"
    },
    {
        "atc_level": "R03AK03",
        "atc_description": "fenoterol and other drugs for obstructive airway diseases"
    },
    {
        "atc_level": "R03AK04",
        "atc_description": "salbutamol and sodium cromoglicate"
    },
    {
        "atc_level": "R03AK05",
        "atc_description": "reproterol and sodium cromoglicate"
    },
    {
        "atc_level": "R03AK06",
        "atc_description": "salmeterol and fluticasone"
    },
    {
        "atc_level": "R03AK07",
        "atc_description": "formoterol and budesonide"
    },
    {
        "atc_level": "R03AK08",
        "atc_description": "formoterol and beclometasone"
    },
    {
        "atc_level": "R03AK09",
        "atc_description": "formoterol and mometasone"
    },
    {
        "atc_level": "R03AK10",
        "atc_description": "vilanterol and fluticasone furoate"
    },
    {
        "atc_level": "R03AK11",
        "atc_description": "formoterol and fluticasone"
    },
    {
        "atc_level": "R03AK12",
        "atc_description": "salmeterol and budesonide"
    },
    {
        "atc_level": "R03AK13",
        "atc_description": "salbutamol and beclometasone"
    },
    {
        "atc_level": "R03AK14",
        "atc_description": "indacaterol and mometasone"
    },
    {
        "atc_level": "R03AL",
        "atc_description": "Adrenergics in combination with anticholinergics incl. triple combinations with corticosteroids"
    },
    {
        "atc_level": "R03AL01",
        "atc_description": "fenoterol and ipratropium bromide"
    },
    {
        "atc_level": "R03AL02",
        "atc_description": "salbutamol and ipratropium bromide"
    },
    {
        "atc_level": "R03AL03",
        "atc_description": "vilanterol and umeclidinium bromide"
    },
    {
        "atc_level": "R03AL04",
        "atc_description": "indacaterol and glycopyrronium bromide"
    },
    {
        "atc_level": "R03AL05",
        "atc_description": "formoterol and aclidinium bromide"
    },
    {
        "atc_level": "R03AL06",
        "atc_description": "olodaterol and tiotropium bromide"
    },
    {
        "atc_level": "R03AL07",
        "atc_description": "formoterol and glycopyrronium bromide"
    },
    {
        "atc_level": "R03AL08",
        "atc_description": "vilanterol, umeclidinium bromide and fluticasone furoate"
    },
    {
        "atc_level": "R03AL09",
        "atc_description": "formoterol, glycopyrronium bromide and beclometasone"
    },
    {
        "atc_level": "R03AL10",
        "atc_description": "formoterol and tiotropium bromide"
    },
    {
        "atc_level": "R03AL11",
        "atc_description": "formoterol, glycopyrronium bromide and budesonide"
    },
    {
        "atc_level": "R03AL12",
        "atc_description": "indacaterol, glycopyrronium bromide and mometasone"
    },
    {
        "atc_level": "R03B",
        "atc_description": "OTHER DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES, INHALANTS"
    },
    {
        "atc_level": "R03BA",
        "atc_description": "Glucocorticoids"
    },
    {
        "atc_level": "R03BA01",
        "atc_description": "beclometasone"
    },
    {
        "atc_level": "R03BA02",
        "atc_description": "budesonide"
    },
    {
        "atc_level": "R03BA03",
        "atc_description": "flunisolide"
    },
    {
        "atc_level": "R03BA04",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "R03BA05",
        "atc_description": "fluticasone"
    },
    {
        "atc_level": "R03BA06",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "R03BA07",
        "atc_description": "mometasone"
    },
    {
        "atc_level": "R03BA08",
        "atc_description": "ciclesonide"
    },
    {
        "atc_level": "R03BA09",
        "atc_description": "fluticasone furoate"
    },
    {
        "atc_level": "R03BB",
        "atc_description": "Anticholinergics"
    },
    {
        "atc_level": "R03BB01",
        "atc_description": "ipratropium bromide"
    },
    {
        "atc_level": "R03BB02",
        "atc_description": "oxitropium bromide"
    },
    {
        "atc_level": "R03BB03",
        "atc_description": "stramoni preparations"
    },
    {
        "atc_level": "R03BB04",
        "atc_description": "tiotropium bromide"
    },
    {
        "atc_level": "R03BB05",
        "atc_description": "aclidinium bromide"
    },
    {
        "atc_level": "R03BB06",
        "atc_description": "glycopyrronium bromide"
    },
    {
        "atc_level": "R03BB07",
        "atc_description": "umeclidinium bromide"
    },
    {
        "atc_level": "R03BB08",
        "atc_description": "revefenacin"
    },
    {
        "atc_level": "R03BB54",
        "atc_description": "tiotropium bromide, combinations"
    },
    {
        "atc_level": "R03BC",
        "atc_description": "Antiallergic agents, excl. corticosteroids"
    },
    {
        "atc_level": "R03BC01",
        "atc_description": "cromoglicic acid"
    },
    {
        "atc_level": "R03BC03",
        "atc_description": "nedocromil"
    },
    {
        "atc_level": "R03BX",
        "atc_description": "Other drugs for obstructive airway diseases, inhalants"
    },
    {
        "atc_level": "R03BX01",
        "atc_description": "fenspiride"
    },
    {
        "atc_level": "R03C",
        "atc_description": "ADRENERGICS FOR SYSTEMIC USE"
    },
    {
        "atc_level": "R03CA",
        "atc_description": "Alpha- and beta-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03CA01",
        "atc_description": "Epinephrine"
    },
    {
        "atc_level": "R03CA02",
        "atc_description": "ephedrine"
    },
    {
        "atc_level": "R03CB",
        "atc_description": "Non-selective beta-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03CB01",
        "atc_description": "isoprenaline"
    },
    {
        "atc_level": "R03CB02",
        "atc_description": "methoxyphenamine"
    },
    {
        "atc_level": "R03CB03",
        "atc_description": "orciprenaline"
    },
    {
        "atc_level": "R03CB51",
        "atc_description": "isoprenaline, combinations"
    },
    {
        "atc_level": "R03CB53",
        "atc_description": "orciprenaline, combinations"
    },
    {
        "atc_level": "R03CC",
        "atc_description": "Selective beta-2-adrenoreceptor agonists"
    },
    {
        "atc_level": "R03CC02",
        "atc_description": "salbutamol"
    },
    {
        "atc_level": "R03CC03",
        "atc_description": "terbutaline"
    },
    {
        "atc_level": "R03CC04",
        "atc_description": "fenoterol"
    },
    {
        "atc_level": "R03CC05",
        "atc_description": "hexoprenaline"
    },
    {
        "atc_level": "R03CC06",
        "atc_description": "isoetarine"
    },
    {
        "atc_level": "R03CC07",
        "atc_description": "pirbuterol"
    },
    {
        "atc_level": "R03CC08",
        "atc_description": "procaterol"
    },
    {
        "atc_level": "R03CC09",
        "atc_description": "tretoquinol"
    },
    {
        "atc_level": "R03CC10",
        "atc_description": "carbuterol"
    },
    {
        "atc_level": "R03CC11",
        "atc_description": "tulobuterol"
    },
    {
        "atc_level": "R03CC12",
        "atc_description": "bambuterol"
    },
    {
        "atc_level": "R03CC13",
        "atc_description": "clenbuterol"
    },
    {
        "atc_level": "R03CC14",
        "atc_description": "reproterol"
    },
    {
        "atc_level": "R03CC15",
        "atc_description": "formoterol"
    },
    {
        "atc_level": "R03CC53",
        "atc_description": "terbutaline, combinations"
    },
    {
        "atc_level": "R03CC63",
        "atc_description": "clenbuterol and ambroxol"
    },
    {
        "atc_level": "R03CK",
        "atc_description": "Adrenergics and other drugs for obstructive airway diseases"
    },
    {
        "atc_level": "R03D",
        "atc_description": "OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES"
    },
    {
        "atc_level": "R03DA",
        "atc_description": "Xanthines"
    },
    {
        "atc_level": "R03DA01",
        "atc_description": "diprophylline"
    },
    {
        "atc_level": "R03DA02",
        "atc_description": "choline theophyllinate"
    },
    {
        "atc_level": "R03DA03",
        "atc_description": "proxyphylline"
    },
    {
        "atc_level": "R03DA04",
        "atc_description": "theophylline"
    },
    {
        "atc_level": "R03DA05",
        "atc_description": "aminophylline"
    },
    {
        "atc_level": "R03DA06",
        "atc_description": "etamiphylline"
    },
    {
        "atc_level": "R03DA07",
        "atc_description": "theobromine"
    },
    {
        "atc_level": "R03DA08",
        "atc_description": "bamifylline"
    },
    {
        "atc_level": "R03DA09",
        "atc_description": "acefylline piperazine"
    },
    {
        "atc_level": "R03DA10",
        "atc_description": "bufylline"
    },
    {
        "atc_level": "R03DA11",
        "atc_description": "doxofylline"
    },
    {
        "atc_level": "R03DA12",
        "atc_description": "mepyramine theophyllinacetate"
    },
    {
        "atc_level": "R03DA20",
        "atc_description": "combinations of xanthines"
    },
    {
        "atc_level": "R03DA51",
        "atc_description": "diprophylline, combinations"
    },
    {
        "atc_level": "R03DA54",
        "atc_description": "theophylline, combinations excl. psycholeptics"
    },
    {
        "atc_level": "R03DA55",
        "atc_description": "aminophylline, combinations"
    },
    {
        "atc_level": "R03DA57",
        "atc_description": "theobromine, combinations"
    },
    {
        "atc_level": "R03DA74",
        "atc_description": "theophylline, combinations with psycholeptics"
    },
    {
        "atc_level": "R03DB",
        "atc_description": "Xanthines and adrenergics"
    },
    {
        "atc_level": "R03DB01",
        "atc_description": "diprophylline and adrenergics"
    },
    {
        "atc_level": "R03DB02",
        "atc_description": "choline theophyllinate and adrenergics"
    },
    {
        "atc_level": "R03DB03",
        "atc_description": "proxyphylline and adrenergics"
    },
    {
        "atc_level": "R03DB04",
        "atc_description": "theophylline and adrenergics"
    },
    {
        "atc_level": "R03DB05",
        "atc_description": "aminophylline and adrenergics"
    },
    {
        "atc_level": "R03DB06",
        "atc_description": "etamiphylline and adrenergics"
    },
    {
        "atc_level": "R03DC",
        "atc_description": "Leukotriene receptor antagonists"
    },
    {
        "atc_level": "R03DC01",
        "atc_description": "zafirlukast"
    },
    {
        "atc_level": "R03DC02",
        "atc_description": "pranlukast"
    },
    {
        "atc_level": "R03DC03",
        "atc_description": "montelukast"
    },
    {
        "atc_level": "R03DC04",
        "atc_description": "ibudilast"
    },
    {
        "atc_level": "R03DC53",
        "atc_description": "montelukast, combinations"
    },
    {
        "atc_level": "R03DX",
        "atc_description": "Other systemic drugs for obstructive airway diseases"
    },
    {
        "atc_level": "R03DX01",
        "atc_description": "amlexanox"
    },
    {
        "atc_level": "R03DX02",
        "atc_description": "eprozinol"
    },
    {
        "atc_level": "R03DX03",
        "atc_description": "fenspiride"
    },
    {
        "atc_level": "R03DX04",
        "atc_description": "Ibudilast"
    },
    {
        "atc_level": "R03DX05",
        "atc_description": "omalizumab"
    },
    {
        "atc_level": "R03DX06",
        "atc_description": "seratrodast"
    },
    {
        "atc_level": "R03DX07",
        "atc_description": "roflumilast"
    },
    {
        "atc_level": "R03DX08",
        "atc_description": "reslizumab"
    },
    {
        "atc_level": "R03DX09",
        "atc_description": "mepolizumab"
    },
    {
        "atc_level": "R03DX10",
        "atc_description": "benralizumab"
    },
    {
        "atc_level": "R03DX11",
        "atc_description": "tezepelumab"
    },
    {
        "atc_level": "R04",
        "atc_description": "CHEST RUBS AND OTHER INHALANTS"
    },
    {
        "atc_level": "R04A",
        "atc_description": "CHEST RUBS"
    },
    {
        "atc_level": "R04AZ",
        "atc_description": "INHALATIONS"
    },
    {
        "atc_level": "R05",
        "atc_description": "COUGH AND COLD PREPARATIONS"
    },
    {
        "atc_level": "R05C",
        "atc_description": "EXPECTORANTS, EXCL. COMBINATIONS WITH COUGH SUPPRESSANTS"
    },
    {
        "atc_level": "R05CA",
        "atc_description": "Expectorants"
    },
    {
        "atc_level": "R05CA01",
        "atc_description": "tyloxapol"
    },
    {
        "atc_level": "R05CA02",
        "atc_description": "potassium iodide"
    },
    {
        "atc_level": "R05CA03",
        "atc_description": "guaifenesin"
    },
    {
        "atc_level": "R05CA04",
        "atc_description": "ipecacuanha"
    },
    {
        "atc_level": "R05CA05",
        "atc_description": "altheae radix"
    },
    {
        "atc_level": "R05CA06",
        "atc_description": "senega"
    },
    {
        "atc_level": "R05CA07",
        "atc_description": "antimony pentasulfide"
    },
    {
        "atc_level": "R05CA08",
        "atc_description": "creosote"
    },
    {
        "atc_level": "R05CA09",
        "atc_description": "guaiacolsulfonate"
    },
    {
        "atc_level": "R05CA10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R05CA11",
        "atc_description": "levoverbenone"
    },
    {
        "atc_level": "R05CA12",
        "atc_description": "Hederae helicis folium"
    },
    {
        "atc_level": "R05CA13",
        "atc_description": "cineole"
    },
    {
        "atc_level": "R05CB",
        "atc_description": "Mucolytics"
    },
    {
        "atc_level": "R05CB01",
        "atc_description": "acetylcysteine"
    },
    {
        "atc_level": "R05CB02",
        "atc_description": "bromhexine"
    },
    {
        "atc_level": "R05CB03",
        "atc_description": "carbocisteine"
    },
    {
        "atc_level": "R05CB04",
        "atc_description": "eprazinone"
    },
    {
        "atc_level": "R05CB05",
        "atc_description": "mesna"
    },
    {
        "atc_level": "R05CB06",
        "atc_description": "ambroxol"
    },
    {
        "atc_level": "R05CB07",
        "atc_description": "sobrerol"
    },
    {
        "atc_level": "R05CB08",
        "atc_description": "domiodol"
    },
    {
        "atc_level": "R05CB09",
        "atc_description": "letosteine"
    },
    {
        "atc_level": "R05CB10",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R05CB11",
        "atc_description": "stepronin"
    },
    {
        "atc_level": "R05CB12",
        "atc_description": "tiopronin"
    },
    {
        "atc_level": "R05CB13",
        "atc_description": "dornase alfa (desoxyribonuclease)"
    },
    {
        "atc_level": "R05CB14",
        "atc_description": "neltenexine"
    },
    {
        "atc_level": "R05CB15",
        "atc_description": "erdosteine"
    },
    {
        "atc_level": "R05CB16",
        "atc_description": "mannitol"
    },
    {
        "atc_level": "R05D",
        "atc_description": "COUGH SUPPRESSANTS, EXCL. COMBINATIONS WITH EXPECTORANTS"
    },
    {
        "atc_level": "R05DA",
        "atc_description": "Opium alkaloids and derivatives"
    },
    {
        "atc_level": "R05DA01",
        "atc_description": "ethylmorphine"
    },
    {
        "atc_level": "R05DA03",
        "atc_description": "hydrocodone"
    },
    {
        "atc_level": "R05DA04",
        "atc_description": "codeine"
    },
    {
        "atc_level": "R05DA05",
        "atc_description": "opium alkaloids with morphine"
    },
    {
        "atc_level": "R05DA06",
        "atc_description": "normethadone"
    },
    {
        "atc_level": "R05DA07",
        "atc_description": "noscapine"
    },
    {
        "atc_level": "R05DA08",
        "atc_description": "pholcodine"
    },
    {
        "atc_level": "R05DA09",
        "atc_description": "dextromethorphan"
    },
    {
        "atc_level": "R05DA10",
        "atc_description": "thebacon"
    },
    {
        "atc_level": "R05DA11",
        "atc_description": "dimemorfan"
    },
    {
        "atc_level": "R05DA12",
        "atc_description": "acetyldihydrocodeine"
    },
    {
        "atc_level": "R05DA20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R05DB",
        "atc_description": "Other cough suppressants"
    },
    {
        "atc_level": "R05DB01",
        "atc_description": "benzonatate"
    },
    {
        "atc_level": "R05DB02",
        "atc_description": "benproperine"
    },
    {
        "atc_level": "R05DB03",
        "atc_description": "clobutinol"
    },
    {
        "atc_level": "R05DB04",
        "atc_description": "isoaminile"
    },
    {
        "atc_level": "R05DB05",
        "atc_description": "pentoxyverine"
    },
    {
        "atc_level": "R05DB07",
        "atc_description": "oxolamine"
    },
    {
        "atc_level": "R05DB09",
        "atc_description": "oxeladin"
    },
    {
        "atc_level": "R05DB10",
        "atc_description": "clofedanol"
    },
    {
        "atc_level": "R05DB11",
        "atc_description": "pipazetate"
    },
    {
        "atc_level": "R05DB12",
        "atc_description": "bibenzonium bromide"
    },
    {
        "atc_level": "R05DB13",
        "atc_description": "butamirate"
    },
    {
        "atc_level": "R05DB14",
        "atc_description": "fedrilate"
    },
    {
        "atc_level": "R05DB15",
        "atc_description": "zipeprol"
    },
    {
        "atc_level": "R05DB16",
        "atc_description": "dibunate"
    },
    {
        "atc_level": "R05DB17",
        "atc_description": "droxypropine"
    },
    {
        "atc_level": "R05DB18",
        "atc_description": "prenoxdiazine"
    },
    {
        "atc_level": "R05DB19",
        "atc_description": "dropropizine"
    },
    {
        "atc_level": "R05DB20",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R05DB21",
        "atc_description": "cloperastine"
    },
    {
        "atc_level": "R05DB22",
        "atc_description": "meprotixol"
    },
    {
        "atc_level": "R05DB23",
        "atc_description": "piperidione"
    },
    {
        "atc_level": "R05DB24",
        "atc_description": "tipepidine"
    },
    {
        "atc_level": "R05DB25",
        "atc_description": "morclofone"
    },
    {
        "atc_level": "R05DB26",
        "atc_description": "nepinalone"
    },
    {
        "atc_level": "R05DB27",
        "atc_description": "levodropropizine"
    },
    {
        "atc_level": "R05DB28",
        "atc_description": "dimethoxanate"
    },
    {
        "atc_level": "R05DB29",
        "atc_description": "gefapixant"
    },
    {
        "atc_level": "R05DX",
        "atc_description": "Other antitussives"
    },
    {
        "atc_level": "R05DX01",
        "atc_description": "Meprotixol"
    },
    {
        "atc_level": "R05DX02",
        "atc_description": "Piperidione"
    },
    {
        "atc_level": "R05DX03",
        "atc_description": "Tipepidine"
    },
    {
        "atc_level": "R05F",
        "atc_description": "COUGH SUPPRESSANTS AND EXPECTORANTS, COMBINATIONS"
    },
    {
        "atc_level": "R05FA",
        "atc_description": "Opium derivatives and expectorants"
    },
    {
        "atc_level": "R05FA01",
        "atc_description": "opium derivatives and mucolytics"
    },
    {
        "atc_level": "R05FA02",
        "atc_description": "opium derivatives and expectorants"
    },
    {
        "atc_level": "R05FB",
        "atc_description": "Other cough suppressants and expectorants"
    },
    {
        "atc_level": "R05FB01",
        "atc_description": "cough suppressants and mucolytics"
    },
    {
        "atc_level": "R05FB02",
        "atc_description": "cough suppressants and expectorants"
    },
    {
        "atc_level": "R05X",
        "atc_description": "OTHER COLD PREPARATIONS"
    },
    {
        "atc_level": "R06",
        "atc_description": "ANTIHISTAMINES FOR SYSTEMIC USE"
    },
    {
        "atc_level": "R06A",
        "atc_description": "ANTIHISTAMINES FOR SYSTEMIC USE"
    },
    {
        "atc_level": "R06AA",
        "atc_description": "Aminoalkyl ethers"
    },
    {
        "atc_level": "R06AA01",
        "atc_description": "bromazine"
    },
    {
        "atc_level": "R06AA02",
        "atc_description": "diphenhydramine"
    },
    {
        "atc_level": "R06AA04",
        "atc_description": "clemastine"
    },
    {
        "atc_level": "R06AA06",
        "atc_description": "chlorphenoxamine"
    },
    {
        "atc_level": "R06AA07",
        "atc_description": "diphenylpyraline"
    },
    {
        "atc_level": "R06AA08",
        "atc_description": "carbinoxamine"
    },
    {
        "atc_level": "R06AA09",
        "atc_description": "doxylamine"
    },
    {
        "atc_level": "R06AA10",
        "atc_description": "trimethobenzamide"
    },
    {
        "atc_level": "R06AA11",
        "atc_description": "dimenhydrinate"
    },
    {
        "atc_level": "R06AA52",
        "atc_description": "diphenhydramine, combinations"
    },
    {
        "atc_level": "R06AA54",
        "atc_description": "clemastine, combinations"
    },
    {
        "atc_level": "R06AA56",
        "atc_description": "chlorphenoxamine, combinations"
    },
    {
        "atc_level": "R06AA57",
        "atc_description": "diphenylpyraline, combinations"
    },
    {
        "atc_level": "R06AA59",
        "atc_description": "doxylamine, combinations"
    },
    {
        "atc_level": "R06AB",
        "atc_description": "Substituted alkylamines"
    },
    {
        "atc_level": "R06AB01",
        "atc_description": "brompheniramine"
    },
    {
        "atc_level": "R06AB02",
        "atc_description": "dexchlorpheniramine"
    },
    {
        "atc_level": "R06AB03",
        "atc_description": "dimetindene"
    },
    {
        "atc_level": "R06AB04",
        "atc_description": "chlorphenamine"
    },
    {
        "atc_level": "R06AB05",
        "atc_description": "pheniramine"
    },
    {
        "atc_level": "R06AB06",
        "atc_description": "dexbrompheniramine"
    },
    {
        "atc_level": "R06AB07",
        "atc_description": "talastine"
    },
    {
        "atc_level": "R06AB51",
        "atc_description": "brompheniramine, combinations"
    },
    {
        "atc_level": "R06AB52",
        "atc_description": "dexchlorpheniramine, combinations"
    },
    {
        "atc_level": "R06AB54",
        "atc_description": "chlorphenamine, combinations"
    },
    {
        "atc_level": "R06AB56",
        "atc_description": "dexbrompheniramine, combinations"
    },
    {
        "atc_level": "R06AC",
        "atc_description": "Substituted ethylene diamines"
    },
    {
        "atc_level": "R06AC01",
        "atc_description": "mepyramine"
    },
    {
        "atc_level": "R06AC02",
        "atc_description": "histapyrrodine"
    },
    {
        "atc_level": "R06AC03",
        "atc_description": "chloropyramine"
    },
    {
        "atc_level": "R06AC04",
        "atc_description": "tripelennamine"
    },
    {
        "atc_level": "R06AC05",
        "atc_description": "methapyrilene"
    },
    {
        "atc_level": "R06AC06",
        "atc_description": "thonzylamine"
    },
    {
        "atc_level": "R06AC52",
        "atc_description": "histapyrrodine, combinations"
    },
    {
        "atc_level": "R06AC53",
        "atc_description": "chloropyramine, combinations"
    },
    {
        "atc_level": "R06AD",
        "atc_description": "Phenothiazine derivatives"
    },
    {
        "atc_level": "R06AD01",
        "atc_description": "alimemazine"
    },
    {
        "atc_level": "R06AD02",
        "atc_description": "promethazine"
    },
    {
        "atc_level": "R06AD03",
        "atc_description": "thiethylperazine"
    },
    {
        "atc_level": "R06AD04",
        "atc_description": "methdilazine"
    },
    {
        "atc_level": "R06AD05",
        "atc_description": "hydroxyethylpromethazine"
    },
    {
        "atc_level": "R06AD06",
        "atc_description": "thiazinam"
    },
    {
        "atc_level": "R06AD07",
        "atc_description": "mequitazine"
    },
    {
        "atc_level": "R06AD08",
        "atc_description": "oxomemazine"
    },
    {
        "atc_level": "R06AD09",
        "atc_description": "isothipendyl"
    },
    {
        "atc_level": "R06AD52",
        "atc_description": "promethazine, combinations"
    },
    {
        "atc_level": "R06AD55",
        "atc_description": "hydroxyethylpromethazine, combinations"
    },
    {
        "atc_level": "R06AE",
        "atc_description": "Piperazine derivatives"
    },
    {
        "atc_level": "R06AE01",
        "atc_description": "buclizine"
    },
    {
        "atc_level": "R06AE02",
        "atc_description": "Cinnarizine"
    },
    {
        "atc_level": "R06AE03",
        "atc_description": "cyclizine"
    },
    {
        "atc_level": "R06AE04",
        "atc_description": "chlorcyclizine"
    },
    {
        "atc_level": "R06AE05",
        "atc_description": "meclozine"
    },
    {
        "atc_level": "R06AE06",
        "atc_description": "oxatomide"
    },
    {
        "atc_level": "R06AE07",
        "atc_description": "cetirizine"
    },
    {
        "atc_level": "R06AE08",
        "atc_description": "Levocetirizine"
    },
    {
        "atc_level": "R06AE09",
        "atc_description": "levocetirizine"
    },
    {
        "atc_level": "R06AE51",
        "atc_description": "buclizine, combinations"
    },
    {
        "atc_level": "R06AE52",
        "atc_description": "Cinnarizine, combinations"
    },
    {
        "atc_level": "R06AE53",
        "atc_description": "cyclizine, combinations"
    },
    {
        "atc_level": "R06AE55",
        "atc_description": "meclozine, combinations"
    },
    {
        "atc_level": "R06AK",
        "atc_description": "Combinations of antihistamines"
    },
    {
        "atc_level": "R06AX",
        "atc_description": "Other antihistamines for systemic use"
    },
    {
        "atc_level": "R06AX01",
        "atc_description": "bamipine"
    },
    {
        "atc_level": "R06AX02",
        "atc_description": "cyproheptadine"
    },
    {
        "atc_level": "R06AX03",
        "atc_description": "thenalidine"
    },
    {
        "atc_level": "R06AX04",
        "atc_description": "phenindamine"
    },
    {
        "atc_level": "R06AX05",
        "atc_description": "antazoline"
    },
    {
        "atc_level": "R06AX07",
        "atc_description": "triprolidine"
    },
    {
        "atc_level": "R06AX08",
        "atc_description": "pyrrobutamine"
    },
    {
        "atc_level": "R06AX09",
        "atc_description": "azatadine"
    },
    {
        "atc_level": "R06AX10",
        "atc_description": "Astemizole"
    },
    {
        "atc_level": "R06AX11",
        "atc_description": "astemizole"
    },
    {
        "atc_level": "R06AX12",
        "atc_description": "terfenadine"
    },
    {
        "atc_level": "R06AX13",
        "atc_description": "loratadine"
    },
    {
        "atc_level": "R06AX15",
        "atc_description": "mebhydrolin"
    },
    {
        "atc_level": "R06AX16",
        "atc_description": "deptropine"
    },
    {
        "atc_level": "R06AX17",
        "atc_description": "ketotifen"
    },
    {
        "atc_level": "R06AX18",
        "atc_description": "acrivastine"
    },
    {
        "atc_level": "R06AX19",
        "atc_description": "azelastine"
    },
    {
        "atc_level": "R06AX21",
        "atc_description": "tritoqualine"
    },
    {
        "atc_level": "R06AX22",
        "atc_description": "ebastine"
    },
    {
        "atc_level": "R06AX23",
        "atc_description": "pimethixene"
    },
    {
        "atc_level": "R06AX24",
        "atc_description": "epinastine"
    },
    {
        "atc_level": "R06AX25",
        "atc_description": "mizolastine"
    },
    {
        "atc_level": "R06AX26",
        "atc_description": "fexofenadine"
    },
    {
        "atc_level": "R06AX27",
        "atc_description": "desloratadine"
    },
    {
        "atc_level": "R06AX28",
        "atc_description": "rupatadine"
    },
    {
        "atc_level": "R06AX29",
        "atc_description": "bilastine"
    },
    {
        "atc_level": "R06AX31",
        "atc_description": "quifenadine"
    },
    {
        "atc_level": "R06AX32",
        "atc_description": "sequifenadine"
    },
    {
        "atc_level": "R06AX53",
        "atc_description": "thenalidine, combinations"
    },
    {
        "atc_level": "R06AX58",
        "atc_description": "pyrrobutamine, combinations"
    },
    {
        "atc_level": "R07",
        "atc_description": "OTHER RESPIRATORY SYSTEM PRODUCTS"
    },
    {
        "atc_level": "R07A",
        "atc_description": "OTHER RESPIRATORY SYSTEM PRODUCTS"
    },
    {
        "atc_level": "R07AA",
        "atc_description": "Lung surfactants"
    },
    {
        "atc_level": "R07AA01",
        "atc_description": "colfosceril palmitate"
    },
    {
        "atc_level": "R07AA02",
        "atc_description": "natural phospholipids"
    },
    {
        "atc_level": "R07AA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "R07AB",
        "atc_description": "Respiratory stimulants"
    },
    {
        "atc_level": "R07AB01",
        "atc_description": "doxapram"
    },
    {
        "atc_level": "R07AB02",
        "atc_description": "nikethamide"
    },
    {
        "atc_level": "R07AB03",
        "atc_description": "pentetrazol"
    },
    {
        "atc_level": "R07AB04",
        "atc_description": "etamivan"
    },
    {
        "atc_level": "R07AB05",
        "atc_description": "bemegride"
    },
    {
        "atc_level": "R07AB06",
        "atc_description": "prethcamide"
    },
    {
        "atc_level": "R07AB07",
        "atc_description": "almitrine"
    },
    {
        "atc_level": "R07AB08",
        "atc_description": "dimefline"
    },
    {
        "atc_level": "R07AB09",
        "atc_description": "mepixanox"
    },
    {
        "atc_level": "R07AB52",
        "atc_description": "nikethamide, combinations"
    },
    {
        "atc_level": "R07AB53",
        "atc_description": "pentetrazol, combinations"
    },
    {
        "atc_level": "R07AX",
        "atc_description": "Other respiratory system products"
    },
    {
        "atc_level": "R07AX01",
        "atc_description": "nitric oxide"
    },
    {
        "atc_level": "R07AX02",
        "atc_description": "ivacaftor"
    },
    {
        "atc_level": "R07AX30",
        "atc_description": "ivacaftor and lumacaftor"
    },
    {
        "atc_level": "R07AX31",
        "atc_description": "ivacaftor and tezacaftor"
    },
    {
        "atc_level": "R07AX32",
        "atc_description": "ivacaftor, tezacaftor and elexacaftor"
    },
    {
        "atc_level": "S",
        "atc_description": "SENSORY ORGANS"
    },
    {
        "atc_level": "S00",
        "atc_description": "SENSORY ORGANS"
    },
    {
        "atc_level": "S01",
        "atc_description": "OPHTHALMOLOGICALS"
    },
    {
        "atc_level": "S01A",
        "atc_description": "ANTIINFECTIVES"
    },
    {
        "atc_level": "S01AA",
        "atc_description": "Antibiotics"
    },
    {
        "atc_level": "S01AA01",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "S01AA02",
        "atc_description": "chlortetracycline"
    },
    {
        "atc_level": "S01AA03",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "S01AA04",
        "atc_description": "oxytetracycline"
    },
    {
        "atc_level": "S01AA05",
        "atc_description": "tyrothricin"
    },
    {
        "atc_level": "S01AA07",
        "atc_description": "framycetin"
    },
    {
        "atc_level": "S01AA09",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "S01AA10",
        "atc_description": "natamycin"
    },
    {
        "atc_level": "S01AA11",
        "atc_description": "gentamicin"
    },
    {
        "atc_level": "S01AA12",
        "atc_description": "tobramycin"
    },
    {
        "atc_level": "S01AA13",
        "atc_description": "fusidic acid"
    },
    {
        "atc_level": "S01AA14",
        "atc_description": "benzylpenicillin"
    },
    {
        "atc_level": "S01AA15",
        "atc_description": "dihydrostreptomycin"
    },
    {
        "atc_level": "S01AA16",
        "atc_description": "rifamycin"
    },
    {
        "atc_level": "S01AA17",
        "atc_description": "erythromycin"
    },
    {
        "atc_level": "S01AA18",
        "atc_description": "polymyxin B"
    },
    {
        "atc_level": "S01AA19",
        "atc_description": "ampicillin"
    },
    {
        "atc_level": "S01AA20",
        "atc_description": "antibiotics in combination with other drugs"
    },
    {
        "atc_level": "S01AA21",
        "atc_description": "amikacin"
    },
    {
        "atc_level": "S01AA22",
        "atc_description": "micronomicin"
    },
    {
        "atc_level": "S01AA23",
        "atc_description": "netilmicin"
    },
    {
        "atc_level": "S01AA24",
        "atc_description": "kanamycin"
    },
    {
        "atc_level": "S01AA25",
        "atc_description": "azidamfenicol"
    },
    {
        "atc_level": "S01AA26",
        "atc_description": "azithromycin"
    },
    {
        "atc_level": "S01AA27",
        "atc_description": "cefuroxime"
    },
    {
        "atc_level": "S01AA28",
        "atc_description": "vancomycin"
    },
    {
        "atc_level": "S01AA30",
        "atc_description": "combinations of different antibiotics"
    },
    {
        "atc_level": "S01AB",
        "atc_description": "Sulfonamides"
    },
    {
        "atc_level": "S01AB01",
        "atc_description": "sulfamethizole"
    },
    {
        "atc_level": "S01AB02",
        "atc_description": "sulfafurazole"
    },
    {
        "atc_level": "S01AB03",
        "atc_description": "sulfadicramide"
    },
    {
        "atc_level": "S01AB04",
        "atc_description": "sulfacetamide"
    },
    {
        "atc_level": "S01AB05",
        "atc_description": "sulfafenazol"
    },
    {
        "atc_level": "S01AC",
        "atc_description": "OTHER ANTIINFECTIVES"
    },
    {
        "atc_level": "S01AD",
        "atc_description": "Antivirals"
    },
    {
        "atc_level": "S01AD01",
        "atc_description": "idoxuridine"
    },
    {
        "atc_level": "S01AD02",
        "atc_description": "trifluridine"
    },
    {
        "atc_level": "S01AD03",
        "atc_description": "aciclovir"
    },
    {
        "atc_level": "S01AD04",
        "atc_description": "Trifluridine"
    },
    {
        "atc_level": "S01AD05",
        "atc_description": "interferon"
    },
    {
        "atc_level": "S01AD06",
        "atc_description": "vidarabine"
    },
    {
        "atc_level": "S01AD07",
        "atc_description": "famciclovir"
    },
    {
        "atc_level": "S01AD08",
        "atc_description": "fomivirsen"
    },
    {
        "atc_level": "S01AD09",
        "atc_description": "ganciclovir"
    },
    {
        "atc_level": "S01AE",
        "atc_description": "Fluoroquinolones"
    },
    {
        "atc_level": "S01AE01",
        "atc_description": "ofloxacin"
    },
    {
        "atc_level": "S01AE02",
        "atc_description": "norfloxacin"
    },
    {
        "atc_level": "S01AE03",
        "atc_description": "ciprofloxacin"
    },
    {
        "atc_level": "S01AE04",
        "atc_description": "lomefloxacin"
    },
    {
        "atc_level": "S01AE05",
        "atc_description": "levofloxacin"
    },
    {
        "atc_level": "S01AE06",
        "atc_description": "gatifloxacin"
    },
    {
        "atc_level": "S01AE07",
        "atc_description": "moxifloxacin"
    },
    {
        "atc_level": "S01AE08",
        "atc_description": "besifloxacin"
    },
    {
        "atc_level": "S01AX",
        "atc_description": "Other antiinfectives"
    },
    {
        "atc_level": "S01AX01",
        "atc_description": "mercury compounds"
    },
    {
        "atc_level": "S01AX02",
        "atc_description": "silver compounds"
    },
    {
        "atc_level": "S01AX03",
        "atc_description": "zinc compounds"
    },
    {
        "atc_level": "S01AX04",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "S01AX05",
        "atc_description": "bibrocathol"
    },
    {
        "atc_level": "S01AX06",
        "atc_description": "resorcinol"
    },
    {
        "atc_level": "S01AX07",
        "atc_description": "sodium borate"
    },
    {
        "atc_level": "S01AX08",
        "atc_description": "hexamidine"
    },
    {
        "atc_level": "S01AX09",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "S01AX10",
        "atc_description": "sodium propionate"
    },
    {
        "atc_level": "S01AX11",
        "atc_description": "ofloxacin"
    },
    {
        "atc_level": "S01AX12",
        "atc_description": "norfloxacin"
    },
    {
        "atc_level": "S01AX13",
        "atc_description": "ciprofloxacin"
    },
    {
        "atc_level": "S01AX14",
        "atc_description": "dibrompropamidine"
    },
    {
        "atc_level": "S01AX15",
        "atc_description": "propamidine"
    },
    {
        "atc_level": "S01AX16",
        "atc_description": "picloxydine"
    },
    {
        "atc_level": "S01AX17",
        "atc_description": "lomefloxacin"
    },
    {
        "atc_level": "S01AX18",
        "atc_description": "povidone-iodine"
    },
    {
        "atc_level": "S01AX19",
        "atc_description": "levofloxacin"
    },
    {
        "atc_level": "S01AX21",
        "atc_description": "gatifloxacin"
    },
    {
        "atc_level": "S01AX22",
        "atc_description": "moxifloxacin"
    },
    {
        "atc_level": "S01AX23",
        "atc_description": "besifloxacin"
    },
    {
        "atc_level": "S01B",
        "atc_description": "ANTIINFLAMMATORY AGENTS"
    },
    {
        "atc_level": "S01BA",
        "atc_description": "Corticosteroids, plain"
    },
    {
        "atc_level": "S01BA01",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "S01BA02",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "S01BA03",
        "atc_description": "cortisone"
    },
    {
        "atc_level": "S01BA04",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "S01BA05",
        "atc_description": "triamcinolone"
    },
    {
        "atc_level": "S01BA06",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "S01BA07",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "S01BA08",
        "atc_description": "medrysone"
    },
    {
        "atc_level": "S01BA09",
        "atc_description": "clobetasone"
    },
    {
        "atc_level": "S01BA10",
        "atc_description": "alclometasone"
    },
    {
        "atc_level": "S01BA11",
        "atc_description": "desonide"
    },
    {
        "atc_level": "S01BA12",
        "atc_description": "formocortal"
    },
    {
        "atc_level": "S01BA13",
        "atc_description": "rimexolone"
    },
    {
        "atc_level": "S01BA14",
        "atc_description": "loteprednol"
    },
    {
        "atc_level": "S01BA15",
        "atc_description": "fluocinolone acetonide"
    },
    {
        "atc_level": "S01BB",
        "atc_description": "Corticosteroids and mydriatics in combination"
    },
    {
        "atc_level": "S01BB01",
        "atc_description": "hydrocortisone and mydriatics"
    },
    {
        "atc_level": "S01BB02",
        "atc_description": "prednisolone and mydriatics"
    },
    {
        "atc_level": "S01BB03",
        "atc_description": "fluorometholone and mydriatics"
    },
    {
        "atc_level": "S01BB04",
        "atc_description": "betamethasone and mydriatics"
    },
    {
        "atc_level": "S01BC",
        "atc_description": "Antiinflammatory agents, non-steroids"
    },
    {
        "atc_level": "S01BC01",
        "atc_description": "indometacin"
    },
    {
        "atc_level": "S01BC02",
        "atc_description": "oxyphenbutazone"
    },
    {
        "atc_level": "S01BC03",
        "atc_description": "diclofenac"
    },
    {
        "atc_level": "S01BC04",
        "atc_description": "flurbiprofen"
    },
    {
        "atc_level": "S01BC05",
        "atc_description": "ketorolac"
    },
    {
        "atc_level": "S01BC06",
        "atc_description": "piroxicam"
    },
    {
        "atc_level": "S01BC07",
        "atc_description": "bendazac"
    },
    {
        "atc_level": "S01BC08",
        "atc_description": "salicylic acid"
    },
    {
        "atc_level": "S01BC09",
        "atc_description": "pranoprofen"
    },
    {
        "atc_level": "S01BC10",
        "atc_description": "nepafenac"
    },
    {
        "atc_level": "S01BC11",
        "atc_description": "bromfenac"
    },
    {
        "atc_level": "S01C",
        "atc_description": "ANTIINFLAMMATORY AGENTS AND ANTIINFECTIVES IN COMBINATION"
    },
    {
        "atc_level": "S01CA",
        "atc_description": "Corticosteroids and antiinfectives in combination"
    },
    {
        "atc_level": "S01CA01",
        "atc_description": "dexamethasone and antiinfectives"
    },
    {
        "atc_level": "S01CA02",
        "atc_description": "prednisolone and antiinfectives"
    },
    {
        "atc_level": "S01CA03",
        "atc_description": "hydrocortisone and antiinfectives"
    },
    {
        "atc_level": "S01CA04",
        "atc_description": "fluocortolone and antiinfectives"
    },
    {
        "atc_level": "S01CA05",
        "atc_description": "betamethasone and antiinfectives"
    },
    {
        "atc_level": "S01CA06",
        "atc_description": "fludrocortisone and antiinfectives"
    },
    {
        "atc_level": "S01CA07",
        "atc_description": "fluorometholone and antiinfectives"
    },
    {
        "atc_level": "S01CA08",
        "atc_description": "methylprednisolone and antiinfectives"
    },
    {
        "atc_level": "S01CA09",
        "atc_description": "chloroprednisone and antiinfectives"
    },
    {
        "atc_level": "S01CA10",
        "atc_description": "fluocinolone acetonide and antiinfectives"
    },
    {
        "atc_level": "S01CA11",
        "atc_description": "clobetasone and antiinfectives"
    },
    {
        "atc_level": "S01CB",
        "atc_description": "Corticosteroids/antiinfectives/mydriatics in combination"
    },
    {
        "atc_level": "S01CB01",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "S01CB02",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "S01CB03",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "S01CB04",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "S01CB05",
        "atc_description": "fluorometholone"
    },
    {
        "atc_level": "S01CC",
        "atc_description": "Antiinflammatory agents, non-steroids and antiinfectives in combination"
    },
    {
        "atc_level": "S01CC01",
        "atc_description": "diclofenac and antiinfectives"
    },
    {
        "atc_level": "S01CC02",
        "atc_description": "indometacin and antiinfectives"
    },
    {
        "atc_level": "S01D",
        "atc_description": "OTHER OPHTHALMOLOGICALS"
    },
    {
        "atc_level": "S01E",
        "atc_description": "ANTIGLAUCOMA PREPARATIONS AND MIOTICS"
    },
    {
        "atc_level": "S01EA",
        "atc_description": "Sympathomimetics in glaucoma therapy"
    },
    {
        "atc_level": "S01EA01",
        "atc_description": "epinephrine"
    },
    {
        "atc_level": "S01EA02",
        "atc_description": "dipivefrine"
    },
    {
        "atc_level": "S01EA03",
        "atc_description": "apraclonidine"
    },
    {
        "atc_level": "S01EA04",
        "atc_description": "clonidine"
    },
    {
        "atc_level": "S01EA05",
        "atc_description": "brimonidine"
    },
    {
        "atc_level": "S01EA51",
        "atc_description": "epinephrine, combinations"
    },
    {
        "atc_level": "S01EB",
        "atc_description": "Parasympathomimetics"
    },
    {
        "atc_level": "S01EB01",
        "atc_description": "pilocarpine"
    },
    {
        "atc_level": "S01EB02",
        "atc_description": "carbachol"
    },
    {
        "atc_level": "S01EB03",
        "atc_description": "ecothiopate"
    },
    {
        "atc_level": "S01EB04",
        "atc_description": "demecarium"
    },
    {
        "atc_level": "S01EB05",
        "atc_description": "physostigmine"
    },
    {
        "atc_level": "S01EB06",
        "atc_description": "neostigmine"
    },
    {
        "atc_level": "S01EB07",
        "atc_description": "fluostigmine"
    },
    {
        "atc_level": "S01EB08",
        "atc_description": "aceclidine"
    },
    {
        "atc_level": "S01EB09",
        "atc_description": "acetylcholine"
    },
    {
        "atc_level": "S01EB10",
        "atc_description": "paraoxon"
    },
    {
        "atc_level": "S01EB51",
        "atc_description": "pilocarpine, combinations"
    },
    {
        "atc_level": "S01EB58",
        "atc_description": "aceclidine, combinations"
    },
    {
        "atc_level": "S01EC",
        "atc_description": "Carbonic anhydrase inhibitors"
    },
    {
        "atc_level": "S01EC01",
        "atc_description": "acetazolamide"
    },
    {
        "atc_level": "S01EC02",
        "atc_description": "diclofenamide"
    },
    {
        "atc_level": "S01EC03",
        "atc_description": "dorzolamide"
    },
    {
        "atc_level": "S01EC04",
        "atc_description": "brinzolamide"
    },
    {
        "atc_level": "S01EC05",
        "atc_description": "methazolamide"
    },
    {
        "atc_level": "S01EC54",
        "atc_description": "brinzolamide, combinations"
    },
    {
        "atc_level": "S01ED",
        "atc_description": "Beta blocking agents"
    },
    {
        "atc_level": "S01ED01",
        "atc_description": "timolol"
    },
    {
        "atc_level": "S01ED02",
        "atc_description": "betaxolol"
    },
    {
        "atc_level": "S01ED03",
        "atc_description": "levobunolol"
    },
    {
        "atc_level": "S01ED04",
        "atc_description": "metipranolol"
    },
    {
        "atc_level": "S01ED05",
        "atc_description": "carteolol"
    },
    {
        "atc_level": "S01ED06",
        "atc_description": "befunolol"
    },
    {
        "atc_level": "S01ED51",
        "atc_description": "timolol, combinations"
    },
    {
        "atc_level": "S01ED52",
        "atc_description": "betaxolol, combinations"
    },
    {
        "atc_level": "S01ED54",
        "atc_description": "metipranolol, combinations"
    },
    {
        "atc_level": "S01ED55",
        "atc_description": "carteolol, combinations"
    },
    {
        "atc_level": "S01EE",
        "atc_description": "Prostaglandin analogues"
    },
    {
        "atc_level": "S01EE01",
        "atc_description": "latanoprost"
    },
    {
        "atc_level": "S01EE02",
        "atc_description": "unoprostone"
    },
    {
        "atc_level": "S01EE03",
        "atc_description": "bimatoprost"
    },
    {
        "atc_level": "S01EE04",
        "atc_description": "travoprost"
    },
    {
        "atc_level": "S01EE05",
        "atc_description": "tafluprost"
    },
    {
        "atc_level": "S01EE06",
        "atc_description": "latanoprostene bunod"
    },
    {
        "atc_level": "S01EE51",
        "atc_description": "latanoprost and netarsudil"
    },
    {
        "atc_level": "S01EX",
        "atc_description": "Other antiglaucoma preparations"
    },
    {
        "atc_level": "S01EX01",
        "atc_description": "guanethidine"
    },
    {
        "atc_level": "S01EX02",
        "atc_description": "dapiprazole"
    },
    {
        "atc_level": "S01EX03",
        "atc_description": "Latanoprost"
    },
    {
        "atc_level": "S01EX04",
        "atc_description": "Unoprostone"
    },
    {
        "atc_level": "S01EX05",
        "atc_description": "netarsudil"
    },
    {
        "atc_level": "S01EX06",
        "atc_description": "omidenepag"
    },
    {
        "atc_level": "S01EX07",
        "atc_description": "ripasudil"
    },
    {
        "atc_level": "S01F",
        "atc_description": "MYDRIATICS AND CYCLOPLEGICS"
    },
    {
        "atc_level": "S01FA",
        "atc_description": "Anticholinergics"
    },
    {
        "atc_level": "S01FA01",
        "atc_description": "atropine"
    },
    {
        "atc_level": "S01FA02",
        "atc_description": "scopolamine"
    },
    {
        "atc_level": "S01FA03",
        "atc_description": "methylscopolamine"
    },
    {
        "atc_level": "S01FA04",
        "atc_description": "cyclopentolate"
    },
    {
        "atc_level": "S01FA05",
        "atc_description": "homatropine"
    },
    {
        "atc_level": "S01FA06",
        "atc_description": "tropicamide"
    },
    {
        "atc_level": "S01FA54",
        "atc_description": "cyclopentolate, combinations"
    },
    {
        "atc_level": "S01FA56",
        "atc_description": "tropicamide, combinations"
    },
    {
        "atc_level": "S01FB",
        "atc_description": "Sympathomimetics excl. antiglaucoma preparations"
    },
    {
        "atc_level": "S01FB01",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "S01FB02",
        "atc_description": "ephedrine"
    },
    {
        "atc_level": "S01FB03",
        "atc_description": "ibopamine"
    },
    {
        "atc_level": "S01FB51",
        "atc_description": "phenylephrine and ketorolac"
    },
    {
        "atc_level": "S01G",
        "atc_description": "DECONGESTANTS AND ANTIALLERGICS"
    },
    {
        "atc_level": "S01GA",
        "atc_description": "Sympathomimetics used as decongestants"
    },
    {
        "atc_level": "S01GA01",
        "atc_description": "naphazoline"
    },
    {
        "atc_level": "S01GA02",
        "atc_description": "tetryzoline"
    },
    {
        "atc_level": "S01GA03",
        "atc_description": "xylometazoline"
    },
    {
        "atc_level": "S01GA04",
        "atc_description": "oxymetazoline"
    },
    {
        "atc_level": "S01GA05",
        "atc_description": "phenylephrine"
    },
    {
        "atc_level": "S01GA06",
        "atc_description": "oxedrine"
    },
    {
        "atc_level": "S01GA07",
        "atc_description": "brimonidine"
    },
    {
        "atc_level": "S01GA51",
        "atc_description": "naphazoline, combinations"
    },
    {
        "atc_level": "S01GA52",
        "atc_description": "tetryzoline, combinations"
    },
    {
        "atc_level": "S01GA53",
        "atc_description": "xylometazoline, combinations"
    },
    {
        "atc_level": "S01GA55",
        "atc_description": "phenylephrine, combinations"
    },
    {
        "atc_level": "S01GA56",
        "atc_description": "oxedrine, combinations"
    },
    {
        "atc_level": "S01GX",
        "atc_description": "Other antiallergics"
    },
    {
        "atc_level": "S01GX01",
        "atc_description": "cromoglicic acid"
    },
    {
        "atc_level": "S01GX02",
        "atc_description": "levocabastine"
    },
    {
        "atc_level": "S01GX03",
        "atc_description": "spaglumic acid"
    },
    {
        "atc_level": "S01GX04",
        "atc_description": "nedocromil"
    },
    {
        "atc_level": "S01GX05",
        "atc_description": "lodoxamide"
    },
    {
        "atc_level": "S01GX06",
        "atc_description": "emedastine"
    },
    {
        "atc_level": "S01GX07",
        "atc_description": "azelastine"
    },
    {
        "atc_level": "S01GX08",
        "atc_description": "ketotifen"
    },
    {
        "atc_level": "S01GX09",
        "atc_description": "olopatadine"
    },
    {
        "atc_level": "S01GX10",
        "atc_description": "epinastine"
    },
    {
        "atc_level": "S01GX11",
        "atc_description": "alcaftadine"
    },
    {
        "atc_level": "S01GX12",
        "atc_description": "cetirizine"
    },
    {
        "atc_level": "S01GX13",
        "atc_description": "bilastine"
    },
    {
        "atc_level": "S01GX51",
        "atc_description": "cromoglicic acid, combinations"
    },
    {
        "atc_level": "S01H",
        "atc_description": "LOCAL ANESTHETICS"
    },
    {
        "atc_level": "S01HA",
        "atc_description": "Local anesthetics"
    },
    {
        "atc_level": "S01HA01",
        "atc_description": "cocaine"
    },
    {
        "atc_level": "S01HA02",
        "atc_description": "oxybuprocaine"
    },
    {
        "atc_level": "S01HA03",
        "atc_description": "tetracaine"
    },
    {
        "atc_level": "S01HA04",
        "atc_description": "proxymetacaine"
    },
    {
        "atc_level": "S01HA05",
        "atc_description": "procaine"
    },
    {
        "atc_level": "S01HA06",
        "atc_description": "cinchocaine"
    },
    {
        "atc_level": "S01HA07",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "S01HA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "S01J",
        "atc_description": "DIAGNOSTIC AGENTS"
    },
    {
        "atc_level": "S01JA",
        "atc_description": "Colouring agents"
    },
    {
        "atc_level": "S01JA01",
        "atc_description": "fluorescein"
    },
    {
        "atc_level": "S01JA02",
        "atc_description": "rose bengal sodium"
    },
    {
        "atc_level": "S01JA51",
        "atc_description": "fluorescein, combinations"
    },
    {
        "atc_level": "S01JX",
        "atc_description": "Other ophthalmological diagnostic agents"
    },
    {
        "atc_level": "S01K",
        "atc_description": "SURGICAL AIDS"
    },
    {
        "atc_level": "S01KA",
        "atc_description": "Viscoelastic substances"
    },
    {
        "atc_level": "S01KA01",
        "atc_description": "hyaluronic acid"
    },
    {
        "atc_level": "S01KA02",
        "atc_description": "hypromellose"
    },
    {
        "atc_level": "S01KA51",
        "atc_description": "hyaluronic acid, combinations"
    },
    {
        "atc_level": "S01KX",
        "atc_description": "Other surgical aids"
    },
    {
        "atc_level": "S01KX01",
        "atc_description": "chymotrypsin"
    },
    {
        "atc_level": "S01L",
        "atc_description": "OCULAR VASCULAR DISORDER AGENTS"
    },
    {
        "atc_level": "S01LA",
        "atc_description": "Antineovascularisation agents"
    },
    {
        "atc_level": "S01LA01",
        "atc_description": "verteporfin"
    },
    {
        "atc_level": "S01LA02",
        "atc_description": "anecortave"
    },
    {
        "atc_level": "S01LA03",
        "atc_description": "pegaptanib"
    },
    {
        "atc_level": "S01LA04",
        "atc_description": "ranibizumab"
    },
    {
        "atc_level": "S01LA05",
        "atc_description": "aflibercept"
    },
    {
        "atc_level": "S01LA06",
        "atc_description": "brolucizumab"
    },
    {
        "atc_level": "S01LA07",
        "atc_description": "abicipar pegol"
    },
    {
        "atc_level": "S01LA08",
        "atc_description": "bevacizumab"
    },
    {
        "atc_level": "S01X",
        "atc_description": "OTHER OPHTHALMOLOGICALS"
    },
    {
        "atc_level": "S01XA",
        "atc_description": "Other ophthalmologicals"
    },
    {
        "atc_level": "S01XA01",
        "atc_description": "guaiazulen"
    },
    {
        "atc_level": "S01XA02",
        "atc_description": "retinol"
    },
    {
        "atc_level": "S01XA03",
        "atc_description": "sodium chloride, hypertonic"
    },
    {
        "atc_level": "S01XA04",
        "atc_description": "potassium iodide"
    },
    {
        "atc_level": "S01XA05",
        "atc_description": "sodium edetate"
    },
    {
        "atc_level": "S01XA06",
        "atc_description": "ethylmorphine"
    },
    {
        "atc_level": "S01XA07",
        "atc_description": "alum"
    },
    {
        "atc_level": "S01XA08",
        "atc_description": "acetylcysteine"
    },
    {
        "atc_level": "S01XA09",
        "atc_description": "iodoheparinate"
    },
    {
        "atc_level": "S01XA10",
        "atc_description": "inosine"
    },
    {
        "atc_level": "S01XA11",
        "atc_description": "nandrolone"
    },
    {
        "atc_level": "S01XA12",
        "atc_description": "dexpanthenol"
    },
    {
        "atc_level": "S01XA13",
        "atc_description": "alteplase"
    },
    {
        "atc_level": "S01XA14",
        "atc_description": "heparin"
    },
    {
        "atc_level": "S01XA15",
        "atc_description": "ascorbic acid"
    },
    {
        "atc_level": "S01XA16",
        "atc_description": "Anecortave"
    },
    {
        "atc_level": "S01XA17",
        "atc_description": "Pegaptanib"
    },
    {
        "atc_level": "S01XA18",
        "atc_description": "ciclosporin"
    },
    {
        "atc_level": "S01XA19",
        "atc_description": "limbal stem cells, autologous"
    },
    {
        "atc_level": "S01XA20",
        "atc_description": "artificial tears and other indifferent preparations"
    },
    {
        "atc_level": "S01XA21",
        "atc_description": "mercaptamine"
    },
    {
        "atc_level": "S01XA22",
        "atc_description": "ocriplasmin"
    },
    {
        "atc_level": "S01XA23",
        "atc_description": "sirolimus"
    },
    {
        "atc_level": "S01XA24",
        "atc_description": "cenegermin"
    },
    {
        "atc_level": "S01XA25",
        "atc_description": "lifitegrast"
    },
    {
        "atc_level": "S01XA26",
        "atc_description": "riboflavin"
    },
    {
        "atc_level": "S01XA27",
        "atc_description": "voretigene neparvovec"
    },
    {
        "atc_level": "S02",
        "atc_description": "OTOLOGICALS"
    },
    {
        "atc_level": "S02A",
        "atc_description": "ANTIINFECTIVES"
    },
    {
        "atc_level": "S02AA",
        "atc_description": "Antiinfectives"
    },
    {
        "atc_level": "S02AA01",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "S02AA02",
        "atc_description": "nitrofural"
    },
    {
        "atc_level": "S02AA03",
        "atc_description": "boric acid"
    },
    {
        "atc_level": "S02AA04",
        "atc_description": "aluminium acetotartrate"
    },
    {
        "atc_level": "S02AA05",
        "atc_description": "clioquinol"
    },
    {
        "atc_level": "S02AA06",
        "atc_description": "hydrogen peroxide"
    },
    {
        "atc_level": "S02AA07",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "S02AA08",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "S02AA09",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "S02AA10",
        "atc_description": "acetic acid"
    },
    {
        "atc_level": "S02AA11",
        "atc_description": "polymyxin B"
    },
    {
        "atc_level": "S02AA12",
        "atc_description": "rifamycin"
    },
    {
        "atc_level": "S02AA13",
        "atc_description": "miconazole"
    },
    {
        "atc_level": "S02AA14",
        "atc_description": "gentamicin"
    },
    {
        "atc_level": "S02AA15",
        "atc_description": "ciprofloxacin"
    },
    {
        "atc_level": "S02AA16",
        "atc_description": "ofloxacin"
    },
    {
        "atc_level": "S02AA30",
        "atc_description": "antiinfectives, combinations"
    },
    {
        "atc_level": "S02B",
        "atc_description": "CORTICOSTEROIDS"
    },
    {
        "atc_level": "S02BA",
        "atc_description": "Corticosteroids"
    },
    {
        "atc_level": "S02BA01",
        "atc_description": "hydrocortisone"
    },
    {
        "atc_level": "S02BA03",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "S02BA06",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "S02BA07",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "S02BA08",
        "atc_description": "fluocinolone acetonide"
    },
    {
        "atc_level": "S02C",
        "atc_description": "CORTICOSTEROIDS AND ANTIINFECTIVES IN COMBINATION"
    },
    {
        "atc_level": "S02CA",
        "atc_description": "Corticosteroids and antiinfectives in combination"
    },
    {
        "atc_level": "S02CA01",
        "atc_description": "prednisolone and antiinfectives"
    },
    {
        "atc_level": "S02CA02",
        "atc_description": "flumetasone and antiinfectives"
    },
    {
        "atc_level": "S02CA03",
        "atc_description": "hydrocortisone and antiinfectives"
    },
    {
        "atc_level": "S02CA04",
        "atc_description": "triamcinolone and antiinfectives"
    },
    {
        "atc_level": "S02CA05",
        "atc_description": "fluocinolone acetonide and antiinfectives"
    },
    {
        "atc_level": "S02CA06",
        "atc_description": "dexamethasone and antiinfectives"
    },
    {
        "atc_level": "S02CA07",
        "atc_description": "fludrocortisone and antiinfectives"
    },
    {
        "atc_level": "S02D",
        "atc_description": "OTHER OTOLOGICALS"
    },
    {
        "atc_level": "S02DA",
        "atc_description": "Analgesics and anesthetics"
    },
    {
        "atc_level": "S02DA01",
        "atc_description": "lidocaine"
    },
    {
        "atc_level": "S02DA02",
        "atc_description": "cocaine"
    },
    {
        "atc_level": "S02DA03",
        "atc_description": "phenazone"
    },
    {
        "atc_level": "S02DA04",
        "atc_description": "cinchocaine"
    },
    {
        "atc_level": "S02DA30",
        "atc_description": "combinations"
    },
    {
        "atc_level": "S02DC",
        "atc_description": "Indifferent preparations"
    },
    {
        "atc_level": "S02DZ",
        "atc_description": "SWIMMER'S EAR (DRIES EXCESS MOISTURE)"
    },
    {
        "atc_level": "S03",
        "atc_description": "OPHTHALMOLOGICAL AND OTOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "S03A",
        "atc_description": "ANTIINFECTIVES"
    },
    {
        "atc_level": "S03AA",
        "atc_description": "Antiinfectives"
    },
    {
        "atc_level": "S03AA01",
        "atc_description": "neomycin"
    },
    {
        "atc_level": "S03AA02",
        "atc_description": "tetracycline"
    },
    {
        "atc_level": "S03AA03",
        "atc_description": "polymyxin B"
    },
    {
        "atc_level": "S03AA04",
        "atc_description": "chlorhexidine"
    },
    {
        "atc_level": "S03AA05",
        "atc_description": "hexamidine"
    },
    {
        "atc_level": "S03AA06",
        "atc_description": "gentamicin"
    },
    {
        "atc_level": "S03AA07",
        "atc_description": "ciprofloxacin"
    },
    {
        "atc_level": "S03AA08",
        "atc_description": "chloramphenicol"
    },
    {
        "atc_level": "S03AA30",
        "atc_description": "antiinfectives, combinations"
    },
    {
        "atc_level": "S03B",
        "atc_description": "CORTICOSTEROIDS"
    },
    {
        "atc_level": "S03BA",
        "atc_description": "Corticosteroids"
    },
    {
        "atc_level": "S03BA01",
        "atc_description": "dexamethasone"
    },
    {
        "atc_level": "S03BA02",
        "atc_description": "prednisolone"
    },
    {
        "atc_level": "S03BA03",
        "atc_description": "betamethasone"
    },
    {
        "atc_level": "S03C",
        "atc_description": "CORTICOSTEROIDS AND ANTIINFECTIVES IN COMBINATION"
    },
    {
        "atc_level": "S03CA",
        "atc_description": "Corticosteroids and antiinfectives in combination"
    },
    {
        "atc_level": "S03CA01",
        "atc_description": "dexamethasone and antiinfectives"
    },
    {
        "atc_level": "S03CA02",
        "atc_description": "prednisolone and antiinfectives"
    },
    {
        "atc_level": "S03CA04",
        "atc_description": "hydrocortisone and antiinfectives"
    },
    {
        "atc_level": "S03CA05",
        "atc_description": "fludrocortisone and antiinfectives"
    },
    {
        "atc_level": "S03CA06",
        "atc_description": "betamethasone and antiinfectives"
    },
    {
        "atc_level": "S03D",
        "atc_description": "OTHER OPHTHALMOLOGICAL AND OTOLOGICAL PREPARATIONS"
    },
    {
        "atc_level": "V",
        "atc_description": "VARIOUS"
    },
    {
        "atc_level": "V00",
        "atc_description": "VARIOUS"
    },
    {
        "atc_level": "V01",
        "atc_description": "ALLERGENS"
    },
    {
        "atc_level": "V01A",
        "atc_description": "ALLERGENS"
    },
    {
        "atc_level": "V01AA",
        "atc_description": "Allergen extracts"
    },
    {
        "atc_level": "V01AA01",
        "atc_description": "feather"
    },
    {
        "atc_level": "V01AA02",
        "atc_description": "grass pollen"
    },
    {
        "atc_level": "V01AA03",
        "atc_description": "house dust mites"
    },
    {
        "atc_level": "V01AA04",
        "atc_description": "mould fungus and yeast fungus"
    },
    {
        "atc_level": "V01AA05",
        "atc_description": "tree pollen"
    },
    {
        "atc_level": "V01AA07",
        "atc_description": "insects"
    },
    {
        "atc_level": "V01AA08",
        "atc_description": "food"
    },
    {
        "atc_level": "V01AA09",
        "atc_description": "textiles"
    },
    {
        "atc_level": "V01AA10",
        "atc_description": "flowers"
    },
    {
        "atc_level": "V01AA11",
        "atc_description": "animals"
    },
    {
        "atc_level": "V01AA20",
        "atc_description": "various"
    },
    {
        "atc_level": "V02",
        "atc_description": "IMMUNOSUPPRESSIVE DRUGS"
    },
    {
        "atc_level": "V02C",
        "atc_description": "IMMUNOSUPPRESSIVE DRUGS"
    },
    {
        "atc_level": "V02CA",
        "atc_description": "SELECTIVE IMMUNOSUPPRESSIVE AGENTS"
    },
    {
        "atc_level": "V03",
        "atc_description": "ALL OTHER THERAPEUTIC PRODUCTS"
    },
    {
        "atc_level": "V03A",
        "atc_description": "ALL OTHER THERAPEUTIC PRODUCTS"
    },
    {
        "atc_level": "V03AA",
        "atc_description": "Drugs for treatment of chronic alcoholism"
    },
    {
        "atc_level": "V03AA01",
        "atc_description": "Disulfiram"
    },
    {
        "atc_level": "V03AA02",
        "atc_description": "Calcium carbimide"
    },
    {
        "atc_level": "V03AA03",
        "atc_description": "Acamprosate"
    },
    {
        "atc_level": "V03AB",
        "atc_description": "Antidotes"
    },
    {
        "atc_level": "V03AB01",
        "atc_description": "ipecacuanha"
    },
    {
        "atc_level": "V03AB02",
        "atc_description": "nalorphine"
    },
    {
        "atc_level": "V03AB03",
        "atc_description": "edetates"
    },
    {
        "atc_level": "V03AB04",
        "atc_description": "pralidoxime"
    },
    {
        "atc_level": "V03AB05",
        "atc_description": "prednisolone and promethazine"
    },
    {
        "atc_level": "V03AB06",
        "atc_description": "thiosulfate"
    },
    {
        "atc_level": "V03AB07",
        "atc_description": "Apomorphine"
    },
    {
        "atc_level": "V03AB08",
        "atc_description": "sodium nitrite"
    },
    {
        "atc_level": "V03AB09",
        "atc_description": "dimercaprol"
    },
    {
        "atc_level": "V03AB13",
        "atc_description": "obidoxime"
    },
    {
        "atc_level": "V03AB14",
        "atc_description": "protamine"
    },
    {
        "atc_level": "V03AB15",
        "atc_description": "naloxone"
    },
    {
        "atc_level": "V03AB16",
        "atc_description": "ethanol"
    },
    {
        "atc_level": "V03AB17",
        "atc_description": "methylthioninium chloride"
    },
    {
        "atc_level": "V03AB18",
        "atc_description": "potassium permanganate"
    },
    {
        "atc_level": "V03AB19",
        "atc_description": "physostigmine"
    },
    {
        "atc_level": "V03AB20",
        "atc_description": "copper sulfate"
    },
    {
        "atc_level": "V03AB21",
        "atc_description": "potassium iodide"
    },
    {
        "atc_level": "V03AB22",
        "atc_description": "amyl nitrite"
    },
    {
        "atc_level": "V03AB23",
        "atc_description": "acetylcysteine"
    },
    {
        "atc_level": "V03AB24",
        "atc_description": "digitalis antitoxin"
    },
    {
        "atc_level": "V03AB25",
        "atc_description": "flumazenil"
    },
    {
        "atc_level": "V03AB26",
        "atc_description": "methionine"
    },
    {
        "atc_level": "V03AB27",
        "atc_description": "4-dimethylaminophenol"
    },
    {
        "atc_level": "V03AB28",
        "atc_description": "Calcium folinate"
    },
    {
        "atc_level": "V03AB29",
        "atc_description": "cholinesterase"
    },
    {
        "atc_level": "V03AB30",
        "atc_description": "Naltrexone"
    },
    {
        "atc_level": "V03AB31",
        "atc_description": "prussian blue"
    },
    {
        "atc_level": "V03AB32",
        "atc_description": "glutathione"
    },
    {
        "atc_level": "V03AB33",
        "atc_description": "hydroxocobalamin"
    },
    {
        "atc_level": "V03AB34",
        "atc_description": "fomepizole"
    },
    {
        "atc_level": "V03AB35",
        "atc_description": "sugammadex"
    },
    {
        "atc_level": "V03AB36",
        "atc_description": "phentolamine"
    },
    {
        "atc_level": "V03AB37",
        "atc_description": "idarucizumab"
    },
    {
        "atc_level": "V03AB38",
        "atc_description": "andexanet alfa"
    },
    {
        "atc_level": "V03AC",
        "atc_description": "Iron chelating agents"
    },
    {
        "atc_level": "V03AC01",
        "atc_description": "deferoxamine"
    },
    {
        "atc_level": "V03AC02",
        "atc_description": "deferiprone"
    },
    {
        "atc_level": "V03AC03",
        "atc_description": "deferasirox"
    },
    {
        "atc_level": "V03AE",
        "atc_description": "Drugs for treatment of hyperkalemia and hyperphosphatemia"
    },
    {
        "atc_level": "V03AE01",
        "atc_description": "polystyrene sulfonate"
    },
    {
        "atc_level": "V03AE02",
        "atc_description": "sevelamer"
    },
    {
        "atc_level": "V03AE03",
        "atc_description": "lanthanum carbonate"
    },
    {
        "atc_level": "V03AE04",
        "atc_description": "calcium acetate and magnesium carbonate"
    },
    {
        "atc_level": "V03AE05",
        "atc_description": "sucroferric oxyhydroxide"
    },
    {
        "atc_level": "V03AE06",
        "atc_description": "colestilan"
    },
    {
        "atc_level": "V03AE07",
        "atc_description": "calcium acetate"
    },
    {
        "atc_level": "V03AE08",
        "atc_description": "ferric citrate"
    },
    {
        "atc_level": "V03AE09",
        "atc_description": "patiromer calcium"
    },
    {
        "atc_level": "V03AE10",
        "atc_description": "sodium zirconium cyclosilicate"
    },
    {
        "atc_level": "V03AF",
        "atc_description": "Detoxifying agents for antineoplastic treatment"
    },
    {
        "atc_level": "V03AF01",
        "atc_description": "mesna"
    },
    {
        "atc_level": "V03AF02",
        "atc_description": "dexrazoxane"
    },
    {
        "atc_level": "V03AF03",
        "atc_description": "calcium folinate"
    },
    {
        "atc_level": "V03AF04",
        "atc_description": "calcium levofolinate"
    },
    {
        "atc_level": "V03AF05",
        "atc_description": "amifostine"
    },
    {
        "atc_level": "V03AF06",
        "atc_description": "sodium folinate"
    },
    {
        "atc_level": "V03AF07",
        "atc_description": "rasburicase"
    },
    {
        "atc_level": "V03AF08",
        "atc_description": "palifermin"
    },
    {
        "atc_level": "V03AF09",
        "atc_description": "glucarpidase"
    },
    {
        "atc_level": "V03AF10",
        "atc_description": "sodium levofolinate"
    },
    {
        "atc_level": "V03AF11",
        "atc_description": "arginine and lysine"
    },
    {
        "atc_level": "V03AF12",
        "atc_description": "trilaciclib"
    },
    {
        "atc_level": "V03AG",
        "atc_description": "Drugs for treatment of hypercalcemia"
    },
    {
        "atc_level": "V03AG01",
        "atc_description": "sodium cellulose phosphate"
    },
    {
        "atc_level": "V03AG02",
        "atc_description": "Etidronic acid"
    },
    {
        "atc_level": "V03AG03",
        "atc_description": "Clodronic acid"
    },
    {
        "atc_level": "V03AG04",
        "atc_description": "Pamidronic acid"
    },
    {
        "atc_level": "V03AG05",
        "atc_description": "sodium phosphate"
    },
    {
        "atc_level": "V03AH",
        "atc_description": "Drugs for treatment of hypoglycemia"
    },
    {
        "atc_level": "V03AH01",
        "atc_description": "diazoxide"
    },
    {
        "atc_level": "V03AJ",
        "atc_description": "Anti-smoking agents"
    },
    {
        "atc_level": "V03AJ01",
        "atc_description": "Nicotine"
    },
    {
        "atc_level": "V03AK",
        "atc_description": "Tissue adhesives"
    },
    {
        "atc_level": "V03AM",
        "atc_description": "Drugs for embolisation"
    },
    {
        "atc_level": "V03AN",
        "atc_description": "Medical gases"
    },
    {
        "atc_level": "V03AN01",
        "atc_description": "oxygen"
    },
    {
        "atc_level": "V03AN02",
        "atc_description": "carbon dioxide"
    },
    {
        "atc_level": "V03AN03",
        "atc_description": "helium"
    },
    {
        "atc_level": "V03AN04",
        "atc_description": "nitrogen"
    },
    {
        "atc_level": "V03AN05",
        "atc_description": "medical air"
    },
    {
        "atc_level": "V03AX",
        "atc_description": "Other therapeutic products"
    },
    {
        "atc_level": "V03AX01",
        "atc_description": "Yohimbin"
    },
    {
        "atc_level": "V03AX02",
        "atc_description": "nalfurafine"
    },
    {
        "atc_level": "V03AX03",
        "atc_description": "cobicistat"
    },
    {
        "atc_level": "V03AX04",
        "atc_description": "difelikefalin"
    },
    {
        "atc_level": "V03AZ",
        "atc_description": "Nerve depressants"
    },
    {
        "atc_level": "V03AZ01",
        "atc_description": "ethanol"
    },
    {
        "atc_level": "V04",
        "atc_description": "DIAGNOSTIC AGENTS"
    },
    {
        "atc_level": "V04A",
        "atc_description": "Contrast media"
    },
    {
        "atc_level": "V04AA",
        "atc_description": "Barium sulphate"
    },
    {
        "atc_level": "V04AA01",
        "atc_description": "Barium sulphate with suspending agents"
    },
    {
        "atc_level": "V04AA02",
        "atc_description": "Barium sulphate without suspending agents"
    },
    {
        "atc_level": "V04AB",
        "atc_description": "Aliphatic iodine compounds"
    },
    {
        "atc_level": "V04AB01",
        "atc_description": "Ethyl esters of iodised fatty acids"
    },
    {
        "atc_level": "V04AB02",
        "atc_description": "Methiodal"
    },
    {
        "atc_level": "V04AC",
        "atc_description": "Diiodopyridone derivatives"
    },
    {
        "atc_level": "V04AC01",
        "atc_description": "Diodone"
    },
    {
        "atc_level": "V04AC02",
        "atc_description": "Propyliodone"
    },
    {
        "atc_level": "V04AC03",
        "atc_description": "Iopydol"
    },
    {
        "atc_level": "V04AD",
        "atc_description": "Triiodobenzene derivatives"
    },
    {
        "atc_level": "V04AD01",
        "atc_description": "Iocetamic acid"
    },
    {
        "atc_level": "V04AD02",
        "atc_description": "Iopanoic acid"
    },
    {
        "atc_level": "V04AD03",
        "atc_description": "Sodium iopodate"
    },
    {
        "atc_level": "V04AD04",
        "atc_description": "Tyropanoic acid"
    },
    {
        "atc_level": "V04AE",
        "atc_description": "Triiodobenzoic acid derivatives"
    },
    {
        "atc_level": "V04AE01",
        "atc_description": "Adipiodone"
    },
    {
        "atc_level": "V04AE02",
        "atc_description": "Diatrizoic acid"
    },
    {
        "atc_level": "V04AE03",
        "atc_description": "Ioglycamic acid"
    },
    {
        "atc_level": "V04AE04",
        "atc_description": "Metrizoic acid"
    },
    {
        "atc_level": "V04AE05",
        "atc_description": "Metrizamide"
    },
    {
        "atc_level": "V04AE06",
        "atc_description": "Iodamide"
    },
    {
        "atc_level": "V04AE07",
        "atc_description": "Iobenzamic acid"
    },
    {
        "atc_level": "V04AE08",
        "atc_description": "Iotroxic acid"
    },
    {
        "atc_level": "V04AE09",
        "atc_description": "Iodoxamic acid"
    },
    {
        "atc_level": "V04AE10",
        "atc_description": "Acetrizoic acid"
    },
    {
        "atc_level": "V04AF",
        "atc_description": "Triiodophthalamic acid derivatives"
    },
    {
        "atc_level": "V04AF01",
        "atc_description": "Iotalamic acid"
    },
    {
        "atc_level": "V04AF02",
        "atc_description": "Iocarmic acid"
    },
    {
        "atc_level": "V04AF03",
        "atc_description": "Ioxitalamic acid"
    },
    {
        "atc_level": "V04AF04",
        "atc_description": "Iohexol"
    },
    {
        "atc_level": "V04AF05",
        "atc_description": "Ioxaglic acid"
    },
    {
        "atc_level": "V04AF06",
        "atc_description": "Iopamidol"
    },
    {
        "atc_level": "V04AF07",
        "atc_description": "Iopromide"
    },
    {
        "atc_level": "V04AF09",
        "atc_description": "Ioglicic acid"
    },
    {
        "atc_level": "V04AF10",
        "atc_description": "Iotrolan"
    },
    {
        "atc_level": "V04AF11",
        "atc_description": "Iopentol"
    },
    {
        "atc_level": "V04AF12",
        "atc_description": "Ioversol"
    },
    {
        "atc_level": "V04AX",
        "atc_description": "Other contrast media"
    },
    {
        "atc_level": "V04AX01",
        "atc_description": "Iofendylate"
    },
    {
        "atc_level": "V04AX02",
        "atc_description": "Gadopentetic acid"
    },
    {
        "atc_level": "V04AX03",
        "atc_description": "Gadoteric acid"
    },
    {
        "atc_level": "V04B",
        "atc_description": "URINE TESTS"
    },
    {
        "atc_level": "V04C",
        "atc_description": "OTHER DIAGNOSTIC AGENTS"
    },
    {
        "atc_level": "V04CA",
        "atc_description": "Tests for diabetes"
    },
    {
        "atc_level": "V04CA01",
        "atc_description": "tolbutamide"
    },
    {
        "atc_level": "V04CA02",
        "atc_description": "glucose"
    },
    {
        "atc_level": "V04CB",
        "atc_description": "Tests for fat absorption"
    },
    {
        "atc_level": "V04CB01",
        "atc_description": "vitamin A concentrates"
    },
    {
        "atc_level": "V04CC",
        "atc_description": "Tests for bile duct patency"
    },
    {
        "atc_level": "V04CC01",
        "atc_description": "sorbitol"
    },
    {
        "atc_level": "V04CC02",
        "atc_description": "magnesium sulfate"
    },
    {
        "atc_level": "V04CC03",
        "atc_description": "sincalide"
    },
    {
        "atc_level": "V04CC04",
        "atc_description": "ceruletide"
    },
    {
        "atc_level": "V04CD",
        "atc_description": "Tests for pituitary function"
    },
    {
        "atc_level": "V04CD01",
        "atc_description": "metyrapone"
    },
    {
        "atc_level": "V04CD02",
        "atc_description": "Arginine"
    },
    {
        "atc_level": "V04CD03",
        "atc_description": "sermorelin"
    },
    {
        "atc_level": "V04CD04",
        "atc_description": "corticorelin"
    },
    {
        "atc_level": "V04CD05",
        "atc_description": "somatorelin"
    },
    {
        "atc_level": "V04CD06",
        "atc_description": "macimorelin"
    },
    {
        "atc_level": "V04CE",
        "atc_description": "Tests for liver functional capacity"
    },
    {
        "atc_level": "V04CE01",
        "atc_description": "galactose"
    },
    {
        "atc_level": "V04CE02",
        "atc_description": "sulfobromophthalein"
    },
    {
        "atc_level": "V04CE03",
        "atc_description": "methacetin (13C)"
    },
    {
        "atc_level": "V04CF",
        "atc_description": "Tuberculosis diagnostics"
    },
    {
        "atc_level": "V04CF01",
        "atc_description": "tuberculin"
    },
    {
        "atc_level": "V04CG",
        "atc_description": "Tests for gastric secretion"
    },
    {
        "atc_level": "V04CG01",
        "atc_description": "cation exchange resins"
    },
    {
        "atc_level": "V04CG02",
        "atc_description": "betazole"
    },
    {
        "atc_level": "V04CG03",
        "atc_description": "histamine phosphate"
    },
    {
        "atc_level": "V04CG04",
        "atc_description": "pentagastrin"
    },
    {
        "atc_level": "V04CG05",
        "atc_description": "methylthioninium chloride"
    },
    {
        "atc_level": "V04CG30",
        "atc_description": "caffeine and sodium benzoate"
    },
    {
        "atc_level": "V04CH",
        "atc_description": "Tests for renal function and ureteral injuries"
    },
    {
        "atc_level": "V04CH01",
        "atc_description": "inulin and other polyfructosans"
    },
    {
        "atc_level": "V04CH02",
        "atc_description": "indigo carmine"
    },
    {
        "atc_level": "V04CH03",
        "atc_description": "phenolsulfonphthalein"
    },
    {
        "atc_level": "V04CH04",
        "atc_description": "alsactide"
    },
    {
        "atc_level": "V04CH30",
        "atc_description": "aminohippuric acid"
    },
    {
        "atc_level": "V04CH31",
        "atc_description": "Polyfructosan"
    },
    {
        "atc_level": "V04CJ",
        "atc_description": "Tests for thyreoidea function"
    },
    {
        "atc_level": "V04CJ01",
        "atc_description": "thyrotropin"
    },
    {
        "atc_level": "V04CJ02",
        "atc_description": "protirelin"
    },
    {
        "atc_level": "V04CK",
        "atc_description": "Tests for pancreatic function"
    },
    {
        "atc_level": "V04CK01",
        "atc_description": "secretin"
    },
    {
        "atc_level": "V04CK02",
        "atc_description": "pancreozymin (cholecystokinin)"
    },
    {
        "atc_level": "V04CK03",
        "atc_description": "bentiromide"
    },
    {
        "atc_level": "V04CL",
        "atc_description": "Tests for allergic diseases"
    },
    {
        "atc_level": "V04CM",
        "atc_description": "Tests for fertility disturbances"
    },
    {
        "atc_level": "V04CM01",
        "atc_description": "gonadorelin"
    },
    {
        "atc_level": "V04CX",
        "atc_description": "Other diagnostic agents"
    },
    {
        "atc_level": "V04CX01",
        "atc_description": "indocyanine green"
    },
    {
        "atc_level": "V04CX02",
        "atc_description": "folic acid"
    },
    {
        "atc_level": "V04CX03",
        "atc_description": "methacholine"
    },
    {
        "atc_level": "V04CX04",
        "atc_description": "mannitol"
    },
    {
        "atc_level": "V04CX05",
        "atc_description": "13C-urea"
    },
    {
        "atc_level": "V04CX06",
        "atc_description": "hexaminolevulinate"
    },
    {
        "atc_level": "V04CX07",
        "atc_description": "edrophonium"
    },
    {
        "atc_level": "V04CX08",
        "atc_description": "carbon monoxide"
    },
    {
        "atc_level": "V04CX09",
        "atc_description": "patent blue"
    },
    {
        "atc_level": "V04D",
        "atc_description": "Diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V04DX",
        "atc_description": "NON RADIOISOTOPES USED IN CONJUNCTION WITH V04D"
    },
    {
        "atc_level": "V05",
        "atc_description": "SURGICAL ANTISEPTICS"
    },
    {
        "atc_level": "V05A",
        "atc_description": "SURGICAL ANTISEPTICS"
    },
    {
        "atc_level": "V06",
        "atc_description": "GENERAL NUTRIENTS"
    },
    {
        "atc_level": "V06A",
        "atc_description": "DIET FORMULATIONS FOR TREATMENT OF OBESITY"
    },
    {
        "atc_level": "V06AA",
        "atc_description": "Low-energy diets"
    },
    {
        "atc_level": "V06AZ",
        "atc_description": "OTHERS E.G. BULK-PRODUCING APPETITE SUPPRESSANTS GLUCOMANNAN"
    },
    {
        "atc_level": "V06B",
        "atc_description": "PROTEIN SUPPLEMENTS"
    },
    {
        "atc_level": "V06C",
        "atc_description": "INFANT FORMULAS"
    },
    {
        "atc_level": "V06CA",
        "atc_description": "Nutrients without phenylalanine"
    },
    {
        "atc_level": "V06D",
        "atc_description": "OTHER NUTRIENTS"
    },
    {
        "atc_level": "V06DA",
        "atc_description": "Carbohydrates/proteins/minerals/vitamins, combinations"
    },
    {
        "atc_level": "V06DB",
        "atc_description": "Fat/carbohydrates/proteins/minerals/vitamins, combinations"
    },
    {
        "atc_level": "V06DC",
        "atc_description": "Carbohydrates"
    },
    {
        "atc_level": "V06DC01",
        "atc_description": "glucose"
    },
    {
        "atc_level": "V06DC02",
        "atc_description": "fructose"
    },
    {
        "atc_level": "V06DD",
        "atc_description": "Amino acids, incl. combinations with polypeptides"
    },
    {
        "atc_level": "V06DE",
        "atc_description": "Amino acids/carbohydrates/minerals/vitamins, combinations"
    },
    {
        "atc_level": "V06DF",
        "atc_description": "Milk substitutes"
    },
    {
        "atc_level": "V06DX",
        "atc_description": "Other combinations of nutrients"
    },
    {
        "atc_level": "V07",
        "atc_description": "ALL OTHER NON-THERAPEUTIC PRODUCTS"
    },
    {
        "atc_level": "V07A",
        "atc_description": "ALL OTHER NON-THERAPEUTIC PRODUCTS"
    },
    {
        "atc_level": "V07AA",
        "atc_description": "Plasters"
    },
    {
        "atc_level": "V07AB",
        "atc_description": "Solvents and diluting agents, incl. irrigating solutions"
    },
    {
        "atc_level": "V07AC",
        "atc_description": "Blood transfusion, auxiliary products"
    },
    {
        "atc_level": "V07AD",
        "atc_description": "Blood tests, auxiliary products"
    },
    {
        "atc_level": "V07AN",
        "atc_description": "Incontinence equipment"
    },
    {
        "atc_level": "V07AR",
        "atc_description": "Sensitivity tests, discs and tablets"
    },
    {
        "atc_level": "V07AS",
        "atc_description": "Stomi equipment"
    },
    {
        "atc_level": "V07AT",
        "atc_description": "Cosmetics"
    },
    {
        "atc_level": "V07AV",
        "atc_description": "Technical disinfectants"
    },
    {
        "atc_level": "V07AX",
        "atc_description": "Washing agents etc."
    },
    {
        "atc_level": "V07AY",
        "atc_description": "Other non-therapeutic auxiliary products"
    },
    {
        "atc_level": "V07AZ",
        "atc_description": "Chemicals and reagents for analysis"
    },
    {
        "atc_level": "V08",
        "atc_description": "CONTRAST MEDIA"
    },
    {
        "atc_level": "V08A",
        "atc_description": "X-RAY CONTRAST MEDIA, IODINATED"
    },
    {
        "atc_level": "V08AA",
        "atc_description": "Watersoluble, nephrotropic, high osmolar X-ray contrast media"
    },
    {
        "atc_level": "V08AA01",
        "atc_description": "diatrizoic acid"
    },
    {
        "atc_level": "V08AA02",
        "atc_description": "metrizoic acid"
    },
    {
        "atc_level": "V08AA03",
        "atc_description": "iodamide"
    },
    {
        "atc_level": "V08AA04",
        "atc_description": "iotalamic acid"
    },
    {
        "atc_level": "V08AA05",
        "atc_description": "ioxitalamic acid"
    },
    {
        "atc_level": "V08AA06",
        "atc_description": "ioglicic acid"
    },
    {
        "atc_level": "V08AA07",
        "atc_description": "acetrizoic acid"
    },
    {
        "atc_level": "V08AA08",
        "atc_description": "iocarmic acid"
    },
    {
        "atc_level": "V08AA09",
        "atc_description": "methiodal"
    },
    {
        "atc_level": "V08AA10",
        "atc_description": "diodone"
    },
    {
        "atc_level": "V08AB",
        "atc_description": "Watersoluble, nephrotropic, low osmolar X-ray contrast media"
    },
    {
        "atc_level": "V08AB01",
        "atc_description": "metrizamide"
    },
    {
        "atc_level": "V08AB02",
        "atc_description": "iohexol"
    },
    {
        "atc_level": "V08AB03",
        "atc_description": "ioxaglic acid"
    },
    {
        "atc_level": "V08AB04",
        "atc_description": "iopamidol"
    },
    {
        "atc_level": "V08AB05",
        "atc_description": "iopromide"
    },
    {
        "atc_level": "V08AB06",
        "atc_description": "iotrolan"
    },
    {
        "atc_level": "V08AB07",
        "atc_description": "ioversol"
    },
    {
        "atc_level": "V08AB08",
        "atc_description": "iopentol"
    },
    {
        "atc_level": "V08AB09",
        "atc_description": "iodixanol"
    },
    {
        "atc_level": "V08AB10",
        "atc_description": "iomeprol"
    },
    {
        "atc_level": "V08AB11",
        "atc_description": "iobitridol"
    },
    {
        "atc_level": "V08AB12",
        "atc_description": "ioxilan"
    },
    {
        "atc_level": "V08AC",
        "atc_description": "Watersoluble, hepatotropic X-ray contrast media"
    },
    {
        "atc_level": "V08AC01",
        "atc_description": "iodoxamic acid"
    },
    {
        "atc_level": "V08AC02",
        "atc_description": "iotroxic acid"
    },
    {
        "atc_level": "V08AC03",
        "atc_description": "ioglycamic acid"
    },
    {
        "atc_level": "V08AC04",
        "atc_description": "adipiodone"
    },
    {
        "atc_level": "V08AC05",
        "atc_description": "iobenzamic acid"
    },
    {
        "atc_level": "V08AC06",
        "atc_description": "iopanoic acid"
    },
    {
        "atc_level": "V08AC07",
        "atc_description": "iocetamic acid"
    },
    {
        "atc_level": "V08AC08",
        "atc_description": "sodium iopodate"
    },
    {
        "atc_level": "V08AC09",
        "atc_description": "tyropanoic acid"
    },
    {
        "atc_level": "V08AC10",
        "atc_description": "calcium iopodate"
    },
    {
        "atc_level": "V08AD",
        "atc_description": "Non-watersoluble X-ray contrast media"
    },
    {
        "atc_level": "V08AD01",
        "atc_description": "ethyl esters of iodised fatty acids"
    },
    {
        "atc_level": "V08AD02",
        "atc_description": "iopydol"
    },
    {
        "atc_level": "V08AD03",
        "atc_description": "propyliodone"
    },
    {
        "atc_level": "V08AD04",
        "atc_description": "iofendylate"
    },
    {
        "atc_level": "V08B",
        "atc_description": "X-RAY CONTRAST MEDIA, NON-IODINATED"
    },
    {
        "atc_level": "V08BA",
        "atc_description": "Barium sulfate containing X-ray contrast media"
    },
    {
        "atc_level": "V08BA01",
        "atc_description": "barium sulfate with suspending agents"
    },
    {
        "atc_level": "V08BA02",
        "atc_description": "barium sulfate without suspending agents"
    },
    {
        "atc_level": "V08C",
        "atc_description": "MAGNETIC RESONANCE IMAGING CONTRAST MEDIA"
    },
    {
        "atc_level": "V08CA",
        "atc_description": "Paramagnetic contrast media"
    },
    {
        "atc_level": "V08CA01",
        "atc_description": "gadopentetic acid"
    },
    {
        "atc_level": "V08CA02",
        "atc_description": "gadoteric acid"
    },
    {
        "atc_level": "V08CA03",
        "atc_description": "gadodiamide"
    },
    {
        "atc_level": "V08CA04",
        "atc_description": "gadoteridol"
    },
    {
        "atc_level": "V08CA05",
        "atc_description": "mangafodipir"
    },
    {
        "atc_level": "V08CA06",
        "atc_description": "gadoversetamide"
    },
    {
        "atc_level": "V08CA07",
        "atc_description": "ferric ammonium citrate"
    },
    {
        "atc_level": "V08CA08",
        "atc_description": "gadobenic acid"
    },
    {
        "atc_level": "V08CA09",
        "atc_description": "gadobutrol"
    },
    {
        "atc_level": "V08CA10",
        "atc_description": "gadoxetic acid"
    },
    {
        "atc_level": "V08CA11",
        "atc_description": "gadofosveset"
    },
    {
        "atc_level": "V08CB",
        "atc_description": "Superparamagnetic contrast media"
    },
    {
        "atc_level": "V08CB01",
        "atc_description": "ferumoxsil"
    },
    {
        "atc_level": "V08CB02",
        "atc_description": "ferristene"
    },
    {
        "atc_level": "V08CB03",
        "atc_description": "iron oxide, nanoparticles"
    },
    {
        "atc_level": "V08CX",
        "atc_description": "Other magnetic resonance imaging contrast media"
    },
    {
        "atc_level": "V08CX01",
        "atc_description": "perflubron"
    },
    {
        "atc_level": "V08D",
        "atc_description": "ULTRASOUND CONTRAST MEDIA"
    },
    {
        "atc_level": "V08DA",
        "atc_description": "Ultrasound contrast media"
    },
    {
        "atc_level": "V08DA01",
        "atc_description": "perflutren, human albumin microspheres"
    },
    {
        "atc_level": "V08DA02",
        "atc_description": "microparticles of galactose"
    },
    {
        "atc_level": "V08DA03",
        "atc_description": "perflenapent"
    },
    {
        "atc_level": "V08DA04",
        "atc_description": "perflutren, phospholipid microspheres"
    },
    {
        "atc_level": "V08DA05",
        "atc_description": "sulfur hexafluoride, phospholipid microspheres"
    },
    {
        "atc_level": "V08DA06",
        "atc_description": "perflubutane, phospholipid microspheres"
    },
    {
        "atc_level": "V09",
        "atc_description": "DIAGNOSTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "V09A",
        "atc_description": "CENTRAL NERVOUS SYSTEM"
    },
    {
        "atc_level": "V09AA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09AA01",
        "atc_description": "technetium (99mTc) exametazime"
    },
    {
        "atc_level": "V09AA02",
        "atc_description": "technetium (99mTc) bicisate"
    },
    {
        "atc_level": "V09AB",
        "atc_description": "Iodine (123I) compounds"
    },
    {
        "atc_level": "V09AB01",
        "atc_description": "iodine iofetamine (123I)"
    },
    {
        "atc_level": "V09AB02",
        "atc_description": "iodine iolopride (123I)"
    },
    {
        "atc_level": "V09AB03",
        "atc_description": "iodine ioflupane (123I)"
    },
    {
        "atc_level": "V09AC",
        "atc_description": "ESSENTIAL OILS"
    },
    {
        "atc_level": "V09AX",
        "atc_description": "Other central nervous system diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09AX01",
        "atc_description": "indium (111In) pentetic acid"
    },
    {
        "atc_level": "V09AX02",
        "atc_description": "Fludeoxyglucose (18F)"
    },
    {
        "atc_level": "V09AX03",
        "atc_description": "iodine (124I) 2beta-carbomethoxy-3beta-(4 iodophenyl)-tropane"
    },
    {
        "atc_level": "V09AX04",
        "atc_description": "flutemetamol (18F)"
    },
    {
        "atc_level": "V09AX05",
        "atc_description": "florbetapir (18F)"
    },
    {
        "atc_level": "V09AX06",
        "atc_description": "florbetaben (18F)"
    },
    {
        "atc_level": "V09B",
        "atc_description": "SKELETON"
    },
    {
        "atc_level": "V09BA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09BA01",
        "atc_description": "technetium (99mTc) oxidronic acid"
    },
    {
        "atc_level": "V09BA02",
        "atc_description": "technetium (99mTc) medronic acid"
    },
    {
        "atc_level": "V09BA03",
        "atc_description": "technetium (99mTc) pyrophosphate"
    },
    {
        "atc_level": "V09BA04",
        "atc_description": "technetium (99mTc) butedronic acid"
    },
    {
        "atc_level": "V09C",
        "atc_description": "RENAL SYSTEM"
    },
    {
        "atc_level": "V09CA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09CA01",
        "atc_description": "technetium (99mTc) pentetic acid"
    },
    {
        "atc_level": "V09CA02",
        "atc_description": "technetium (99mTc) succimer"
    },
    {
        "atc_level": "V09CA03",
        "atc_description": "technetium (99mTc) mertiatide"
    },
    {
        "atc_level": "V09CA04",
        "atc_description": "technetium (99mTc) gluceptate"
    },
    {
        "atc_level": "V09CA05",
        "atc_description": "technetium (99mTc) gluconate"
    },
    {
        "atc_level": "V09CA06",
        "atc_description": "technetium (99mTc) ethylenedicysteine"
    },
    {
        "atc_level": "V09CX",
        "atc_description": "Other renal system diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09CX01",
        "atc_description": "sodium iodohippurate (123I)"
    },
    {
        "atc_level": "V09CX02",
        "atc_description": "sodium iodohippurate (131I)"
    },
    {
        "atc_level": "V09CX03",
        "atc_description": "sodium iothalamate (125I)"
    },
    {
        "atc_level": "V09CX04",
        "atc_description": "chromium (51Cr) edetate"
    },
    {
        "atc_level": "V09D",
        "atc_description": "HEPATIC AND RETICULO ENDOTHELIAL SYSTEM"
    },
    {
        "atc_level": "V09DA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09DA01",
        "atc_description": "technetium (99mTc) disofenin"
    },
    {
        "atc_level": "V09DA02",
        "atc_description": "technetium (99mTc) etifenin"
    },
    {
        "atc_level": "V09DA03",
        "atc_description": "technetium (99mTc) lidofenin"
    },
    {
        "atc_level": "V09DA04",
        "atc_description": "technetium (99mTc) mebrofenin"
    },
    {
        "atc_level": "V09DA05",
        "atc_description": "technetium (99mTc) galtifenin"
    },
    {
        "atc_level": "V09DB",
        "atc_description": "Technetium (99mTc), particles and colloids"
    },
    {
        "atc_level": "V09DB01",
        "atc_description": "technetium (99mTc) nanocolloid"
    },
    {
        "atc_level": "V09DB02",
        "atc_description": "technetium (99mTc) microcolloid"
    },
    {
        "atc_level": "V09DB03",
        "atc_description": "technetium (99mTc) millimicrospheres"
    },
    {
        "atc_level": "V09DB04",
        "atc_description": "technetium (99mTc) tin colloid"
    },
    {
        "atc_level": "V09DB05",
        "atc_description": "technetium (99mTc) sulfur colloid"
    },
    {
        "atc_level": "V09DB06",
        "atc_description": "technetium (99mTc) rheniumsulfide colloid"
    },
    {
        "atc_level": "V09DB07",
        "atc_description": "technetium (99mTc) phytate"
    },
    {
        "atc_level": "V09DX",
        "atc_description": "Other hepatic and reticulo endothelial system diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09DX01",
        "atc_description": "selenium (75Se) tauroselcholic acid"
    },
    {
        "atc_level": "V09E",
        "atc_description": "RESPIRATORY SYSTEM"
    },
    {
        "atc_level": "V09EA",
        "atc_description": "Technetium (99mTc), inhalants"
    },
    {
        "atc_level": "V09EA01",
        "atc_description": "technetium (99mTc) pentetic acid"
    },
    {
        "atc_level": "V09EA02",
        "atc_description": "technetium (99mTc) technegas"
    },
    {
        "atc_level": "V09EA03",
        "atc_description": "technetium (99mTc) nanocolloid"
    },
    {
        "atc_level": "V09EB",
        "atc_description": "Technetium (99mTc), particles for injection"
    },
    {
        "atc_level": "V09EB01",
        "atc_description": "technetium (99mTc) macrosalb"
    },
    {
        "atc_level": "V09EB02",
        "atc_description": "technetium (99mTc) microspheres"
    },
    {
        "atc_level": "V09EX",
        "atc_description": "Other respiratory system diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09EX01",
        "atc_description": "krypton (81mKr) gas"
    },
    {
        "atc_level": "V09EX02",
        "atc_description": "xenon (127Xe) gas"
    },
    {
        "atc_level": "V09EX03",
        "atc_description": "xenon (133Xe) gas"
    },
    {
        "atc_level": "V09F",
        "atc_description": "THYROID"
    },
    {
        "atc_level": "V09FX",
        "atc_description": "Various thyroid diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09FX01",
        "atc_description": "technetium (99mTc) pertechnetate"
    },
    {
        "atc_level": "V09FX02",
        "atc_description": "sodium iodide (123I)"
    },
    {
        "atc_level": "V09FX03",
        "atc_description": "sodium iodide (131I)"
    },
    {
        "atc_level": "V09FX04",
        "atc_description": "sodium iodide (124I)"
    },
    {
        "atc_level": "V09G",
        "atc_description": "CARDIOVASCULAR SYSTEM"
    },
    {
        "atc_level": "V09GA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09GA01",
        "atc_description": "technetium (99mTc) sestamibi"
    },
    {
        "atc_level": "V09GA02",
        "atc_description": "technetium (99mTc) tetrofosmin"
    },
    {
        "atc_level": "V09GA03",
        "atc_description": "technetium (99mTc) teboroxime"
    },
    {
        "atc_level": "V09GA04",
        "atc_description": "technetium (99mTc) human albumin"
    },
    {
        "atc_level": "V09GA05",
        "atc_description": "technetium (99mTc) furifosmin"
    },
    {
        "atc_level": "V09GA06",
        "atc_description": "technetium (99mTc) stannous agent labelled cells"
    },
    {
        "atc_level": "V09GA07",
        "atc_description": "technetium (99mTc) apcitide"
    },
    {
        "atc_level": "V09GB",
        "atc_description": "Iodine (125I) compounds"
    },
    {
        "atc_level": "V09GB01",
        "atc_description": "fibrinogen (125I)"
    },
    {
        "atc_level": "V09GB02",
        "atc_description": "iodine (125I) human albumin"
    },
    {
        "atc_level": "V09GX",
        "atc_description": "Other cardiovascular system diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09GX01",
        "atc_description": "thallium (201Tl) chloride"
    },
    {
        "atc_level": "V09GX02",
        "atc_description": "indium (111In) imciromab"
    },
    {
        "atc_level": "V09GX03",
        "atc_description": "chromium (51Cr) chromate labelled cells"
    },
    {
        "atc_level": "V09GX04",
        "atc_description": "rubidium (82Rb) chloride"
    },
    {
        "atc_level": "V09GX05",
        "atc_description": "ammonia (13N)"
    },
    {
        "atc_level": "V09H",
        "atc_description": "INFLAMMATION AND INFECTION DETECTION"
    },
    {
        "atc_level": "V09HA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09HA01",
        "atc_description": "technetium (99mTc) human immunoglobulin"
    },
    {
        "atc_level": "V09HA02",
        "atc_description": "technetium (99mTc) exametazime labelled cells"
    },
    {
        "atc_level": "V09HA03",
        "atc_description": "technetium (99mTc) antigranulocyte antibody"
    },
    {
        "atc_level": "V09HA04",
        "atc_description": "technetium (99mTc) sulesomab"
    },
    {
        "atc_level": "V09HB",
        "atc_description": "Indium (111In) compounds"
    },
    {
        "atc_level": "V09HB01",
        "atc_description": "indium (111In) oxinate labelled cells"
    },
    {
        "atc_level": "V09HB02",
        "atc_description": "indium (111In) tropolonate labelled cells"
    },
    {
        "atc_level": "V09HX",
        "atc_description": "Other diagnostic radiopharmaceuticals for inflammation and infection detection"
    },
    {
        "atc_level": "V09HX01",
        "atc_description": "gallium (67Ga) citrate"
    },
    {
        "atc_level": "V09I",
        "atc_description": "TUMOUR DETECTION"
    },
    {
        "atc_level": "V09IA",
        "atc_description": "Technetium (99mTc) compounds"
    },
    {
        "atc_level": "V09IA01",
        "atc_description": "technetium (99mTc) antiCarcinoEmbryonicAntigen antibody"
    },
    {
        "atc_level": "V09IA02",
        "atc_description": "technetium (99mTc) antimelanoma antibody"
    },
    {
        "atc_level": "V09IA03",
        "atc_description": "technetium (99mTc) pentavalent succimer"
    },
    {
        "atc_level": "V09IA04",
        "atc_description": "technetium (99mTc) votumumab"
    },
    {
        "atc_level": "V09IA05",
        "atc_description": "technetium (99mTc) depreotide"
    },
    {
        "atc_level": "V09IA06",
        "atc_description": "technetium (99mTc) arcitumomab"
    },
    {
        "atc_level": "V09IA07",
        "atc_description": "technetium (99mTc) hynic-octreotide"
    },
    {
        "atc_level": "V09IA08",
        "atc_description": "technetium (99mTc) etarfolatide"
    },
    {
        "atc_level": "V09IA09",
        "atc_description": "technetium (99mTc) tilmanocept"
    },
    {
        "atc_level": "V09IB",
        "atc_description": "Indium (111In) compounds"
    },
    {
        "atc_level": "V09IB01",
        "atc_description": "indium (111In) pentetreotide"
    },
    {
        "atc_level": "V09IB02",
        "atc_description": "indium (111In) satumomab pendetide"
    },
    {
        "atc_level": "V09IB03",
        "atc_description": "indium (111In) antiovariumcarcinoma antibody"
    },
    {
        "atc_level": "V09IB04",
        "atc_description": "indium (111In) capromab pendetide"
    },
    {
        "atc_level": "V09IX",
        "atc_description": "Other diagnostic radiopharmaceuticals for tumour detection"
    },
    {
        "atc_level": "V09IX01",
        "atc_description": "iobenguane (123I)"
    },
    {
        "atc_level": "V09IX02",
        "atc_description": "iobenguane (131I)"
    },
    {
        "atc_level": "V09IX03",
        "atc_description": "iodine (125I) CC49-monoclonal antibody"
    },
    {
        "atc_level": "V09IX04",
        "atc_description": "fludeoxyglucose (18F)"
    },
    {
        "atc_level": "V09IX05",
        "atc_description": "fluorodopa (18F)"
    },
    {
        "atc_level": "V09IX06",
        "atc_description": "sodium fluoride (18F)"
    },
    {
        "atc_level": "V09IX07",
        "atc_description": "fluorocholine(18F)"
    },
    {
        "atc_level": "V09IX08",
        "atc_description": "fluoroethylcholine (18F)"
    },
    {
        "atc_level": "V09IX09",
        "atc_description": "gallium (68Ga) edotreotide"
    },
    {
        "atc_level": "V09IX10",
        "atc_description": "fluoroethyl-L-tyrosine (18F)"
    },
    {
        "atc_level": "V09IX11",
        "atc_description": "fluoroestradiol (18F)"
    },
    {
        "atc_level": "V09IX12",
        "atc_description": "fluciclovine (18F)"
    },
    {
        "atc_level": "V09IX13",
        "atc_description": "methionine (11C)"
    },
    {
        "atc_level": "V09IX14",
        "atc_description": "gallium (68Ga) gozetotide"
    },
    {
        "atc_level": "V09X",
        "atc_description": "OTHER DIAGNOSTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "V09XA",
        "atc_description": "Iodine (131I) compounds"
    },
    {
        "atc_level": "V09XA01",
        "atc_description": "iodine (131I) norcholesterol"
    },
    {
        "atc_level": "V09XA02",
        "atc_description": "iodocholesterol (131I)"
    },
    {
        "atc_level": "V09XA03",
        "atc_description": "iodine (131I) human albumin"
    },
    {
        "atc_level": "V09XX",
        "atc_description": "Various diagnostic radiopharmaceuticals"
    },
    {
        "atc_level": "V09XX01",
        "atc_description": "cobalt (57Co) cyanocobalamine"
    },
    {
        "atc_level": "V09XX02",
        "atc_description": "cobalt (58Co) cyanocobalamine"
    },
    {
        "atc_level": "V09XX03",
        "atc_description": "selenium (75Se) norcholesterol"
    },
    {
        "atc_level": "V09XX04",
        "atc_description": "ferric (59Fe) citrate"
    },
    {
        "atc_level": "V10",
        "atc_description": "THERAPEUTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "V10A",
        "atc_description": "ANTIINFLAMMATORY AGENTS"
    },
    {
        "atc_level": "V10AA",
        "atc_description": "Yttrium (90Y) compounds"
    },
    {
        "atc_level": "V10AA01",
        "atc_description": "yttrium (90Y) citrate colloid"
    },
    {
        "atc_level": "V10AA02",
        "atc_description": "yttrium (90Y) ferrihydroxide colloid"
    },
    {
        "atc_level": "V10AA03",
        "atc_description": "yttrium (90Y) silicate colloid"
    },
    {
        "atc_level": "V10AB",
        "atc_description": "HOMEOPATHIC PRODUCTS WITH THERAPEUTIC CLAIMS"
    },
    {
        "atc_level": "V10AX",
        "atc_description": "Other antiinflammatory therapeutic radiopharmaceuticals"
    },
    {
        "atc_level": "V10AX01",
        "atc_description": "phosphorous (32P) chromicphosphate colloid"
    },
    {
        "atc_level": "V10AX02",
        "atc_description": "samarium (153Sm) hydroxyapatite colloid"
    },
    {
        "atc_level": "V10AX03",
        "atc_description": "dysprosium (165Dy) colloid"
    },
    {
        "atc_level": "V10AX04",
        "atc_description": "erbium (169Er) citrate colloid"
    },
    {
        "atc_level": "V10AX05",
        "atc_description": "rhenium (186Re) sulfide colloid"
    },
    {
        "atc_level": "V10AX06",
        "atc_description": "gold (198Au) colloidal"
    },
    {
        "atc_level": "V10B",
        "atc_description": "PAIN PALLIATION (BONE SEEKING AGENTS)"
    },
    {
        "atc_level": "V10BX",
        "atc_description": "Various pain palliation radiopharmaceuticals"
    },
    {
        "atc_level": "V10BX01",
        "atc_description": "strontium (89Sr) chloride"
    },
    {
        "atc_level": "V10BX02",
        "atc_description": "samarium (153Sm) lexidronam"
    },
    {
        "atc_level": "V10BX03",
        "atc_description": "rhenium (186Re) etidronic acid"
    },
    {
        "atc_level": "V10X",
        "atc_description": "OTHER THERAPEUTIC RADIOPHARMACEUTICALS"
    },
    {
        "atc_level": "V10XA",
        "atc_description": "Iodine (131I) compounds"
    },
    {
        "atc_level": "V10XA01",
        "atc_description": "sodium iodide (131I)"
    },
    {
        "atc_level": "V10XA02",
        "atc_description": "iobenguane (131I)"
    },
    {
        "atc_level": "V10XA03",
        "atc_description": "iodine (131I) omburtamab"
    },
    {
        "atc_level": "V10XA53",
        "atc_description": "tositumomab/iodine (131I) tositumomab"
    },
    {
        "atc_level": "V10XX",
        "atc_description": "Various therapeutic radiopharmaceuticals"
    },
    {
        "atc_level": "V10XX01",
        "atc_description": "sodium phosphate (32P)"
    },
    {
        "atc_level": "V10XX02",
        "atc_description": "ibritumomab tiuxetan (90Y)"
    },
    {
        "atc_level": "V10XX03",
        "atc_description": "radium (223Ra) dichloride"
    },
    {
        "atc_level": "V10XX04",
        "atc_description": "lutetium (177Lu) oxodotreotide"
    },
    {
        "atc_level": "V20",
        "atc_description": "SURGICAL DRESSINGS"
    }
];

//medGroupAndRisk
const riskMap = {

    "H2Blockers": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Laxatives": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Loperamide": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Prochlorperazine": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 1
    },
    "Metoclopramide": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "PPI": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "ACE_ARB": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 1,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Thiazide": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Loop": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "ACE_ARB_Combo": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Spironolactone": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 1,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Betablockers": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 1,
        "CV_events": 0,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "CCB_Dihydro": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "CCB_Dv": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 1,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Nitrates_Nicorandil": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Digoxin": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Antihypertensive": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Amiodarone": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Theophylline": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Steroid": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 1,
        "heart_failure": 1,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 1,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 1

    },
    "Opioid": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "angle_closure_glaucoma": 0

    },
    "Benzodiazepines": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Sedating_Antihistamines": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "H1Blockers": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Antipsychotics_Excl_Prochlorperazine": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "SSRI": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "angle_closure_glaucoma": 0

    },
    "SNRI": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "angle_closure_glaucoma": 0

    },
    "TCA": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "angle_closure_glaucoma": 1

    },
    "MAO_Inhibitors": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 1,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 1,
        "angle_closure_glaucoma": 1

    },
    "OtherAntidep": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Antimicrobials_Renal": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 1,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Sulfonylurea": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Gliptins": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Glutides": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Gliflozins": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Pioglitazone": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 1,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Insulin": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Hypoglycemics_Combo": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Metformin": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "UrinaryAntispasm": {
        "falls_fracture": 1,
        "constipation": 1,
        "urinary_retention": 1,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 1,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 1
    },
    "SelectiveAlphaBlockers": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "NSAIDs": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 1,
        "hypoglycaemia": 0,
        "renal_injury": 1,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Anticoagulant": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0

    },
    "Antiplt_Excl_PAH": {
        "falls_fracture": 0,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 1,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "PregabalinOrGabapentin": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 0,
        "bleeding": 0,
        "heart_failure": 1,
        "bradycardia": 0,
        "CV_events": 0,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    },
    "Antiepileptic_Excl_Gabapentinoid": {
        "falls_fracture": 1,
        "constipation": 0,
        "urinary_retention": 0,
        "CNS_depression": 1,
        "bleeding": 0,
        "heart_failure": 0,
        "bradycardia": 0,
        "CV_events": 1,
        "respiratory": 0,
        "hypoglycaemia": 0,
        "renal_injury": 0,
        "hypokalemia": 0,
        "hyperkalemia": 0,
        "serotonin_syndrome": 0,
        "angle_closure_glaucoma": 0
    }

};

//ATC med and med group map
const medMap = [

    {
        "atcLevel": "N05CD",
        "medGroup": "Benzodiazepines"
    },
    {
        "atcLevel": "N05BA",
        "medGroup": "Benzodiazepines"
    },
    {
        "atcLevel": "N06AB",
        "medGroup": "SSRI"
    },
    {
        "atcLevel": "N06AF",
        "medGroup": "MAO_Inhibitors"
    },
    {
        "atcLevel": "N06AG",
        "medGroup": "MAO_Inhibitors"
    },
    {
        "atcLevel": "N06AA",
        "medGroup": "TCA"
    },
    {
        "atcLevel": "N02A",
        "medGroup": "Opioid"
    },
    {
        "atcLevel": "N05A",
        "medGroup": "Antipsychotics_Excl_Prochlorperazine"

    },
    {
        "atcLevel": "N06AX16",
        "medGroup": "SNRI"

    },
    {
        "atcLevel": "N06AX17",
        "medGroup": "SNRI"

    },
    {
        "atcLevel": "N06AX21",
        "medGroup": "SNRI"

    },
    {
        "atcLevel": "N06AX23",
        "medGroup": "SNRI"

    },
    {
        "atcLevel": "N06AX03",
        "medGroup": "OtherAntidep"

    },
    {
        "atcLevel": "N06AX11",
        "medGroup": "OtherAntidep"

    },
    {
        "atcLevel": "N06AX18",
        "medGroup": "OtherAntidep"

    },
    {
        "atcLevel": "N06AX22",
        "medGroup": "OtherAntidep"

    },
    {
        "atcLevel": "N06AX26",
        "medGroup": "OtherAntidep"

    },
    {
        "atcLevel": "C03CA",
        "medGroup": "Loop"

    },
    {
        "atcLevel": "C03AA",
        "medGroup": "Thiazide"

    },
    {
        "atcLevel": "C09AA",
        "medGroup": "ACE_ARB"

    },
    {
        "atcLevel": "C09CA",
        "medGroup": "ACE_ARB"

    },
    {
        "atcLevel": "C09BA",
        "medGroup": "ACE_ARB_Combo"

    },
    {
        "atcLevel": "C09BB",
        "medGroup": "ACE_ARB_Combo"

    },
    {
        "atcLevel": "C09DA",
        "medGroup": "ACE_ARB_Combo"

    },
    {
        "atcLevel": "C09DB",
        "medGroup": "ACE_ARB_Combo"

    },
    {
        "atcLevel": "C09DX",
        "medGroup": "ACE_ARB_Combo"

    },
    {
        "atcLevel": "C03DA01",
        "medGroup": "Spironolactone"

    },
    {
        "atcLevel": "C01AA05",
        "medGroup": "Digoxin"

    },
    {
        "atcLevel": "C07",
        "medGroup": "Betablockers"

    },
    {
        "atcLevel": "C01DA",
        "medGroup": "Nitrates_Nicorandil"

    },
    {
        "atcLevel": "C01DX",
        "medGroup": "Nitrates_Nicorandil"

    },
    {
        "atcLevel": "C08C",
        "medGroup": "CCB_Dihydro"

    },
    {
        "atcLevel": "C08D",
        "medGroup": "CCB_Dv"

    },
    {
        "atcLevel": "C01BD01",
        "medGroup": "Amiodarone"

    },
    {
        "atcLevel": "C02A",
        "medGroup": "Antihypertensive"

    },
    {
        "atcLevel": "C02C",
        "medGroup": "Antihypertensive"

    },
    {
        "atcLevel": "C02D",
        "medGroup": "Antihypertensive"

    },
    {
        "atcLevel": "A10A",
        "medGroup": "Insulin"

    },
    {
        "atcLevel": "A10BB",
        "medGroup": "Sulfonylurea"

    },
    {
        "atcLevel": "A10BD",
        "medGroup": "Hypoglycemics_Combo"

    },
    {
        "atcLevel": "A10BH",
        "medGroup": "Gliptins"

    },
    {
        "atcLevel": "A10BJ",
        "medGroup": "Glutides"

    },
    {
        "atcLevel": "A10BK",
        "medGroup": "Gliflozins"

    },
    {
        "atcLevel": "A10BA02",
        "medGroup": "Metformin"

    },
    {
        "atcLevel": "A10BG03",
        "medGroup": "Pioglitazone"

    },
    {
        "atcLevel": "B01AA",
        "medGroup": "Anticoagulant"

    },
    {
        "atcLevel": "B01AB",
        "medGroup": "Anticoagulant"

    },
    {
        "atcLevel": "B01AE",
        "medGroup": "Anticoagulant"

    },
    {
        "atcLevel": "B01AF",
        "medGroup": "Anticoagulant"

    },
    {
        "atcLevel": "B01AX",
        "medGroup": "Anticoagulant"

    },
    {
        "atcLevel": "B01AC04",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC05",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC07",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC13",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC16",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC17",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC22",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC24",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "B01AC30",
        "medGroup": "Antiplt_Excl_PAH"

    },
    {
        "atcLevel": "H02AB",
        "medGroup": "Steroid"

    },
    {
        "atcLevel": "M01A",
        "medGroup": "NSAIDs"

    },
    {
        "atcLevel": "R03DA04",
        "medGroup": "Theophylline"

    },
    {
        "atcLevel": "A02BA",
        "medGroup": "H2Blockers"

    },
    {
        "atcLevel": "A02BC",
        "medGroup": "PPI"

    },
    {
        "atcLevel": "J01DH",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01MA",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01XB",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01G",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01EE01",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01XA01",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J01XX09",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J02AA01",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "J02AX04",
        "medGroup": "Antimicrobials_Renal"

    },
    {
        "atcLevel": "A07DA03",
        "medGroup": "Loperamide"

    },
    {
        "atcLevel": "R06AE07",
        "medGroup": "H1Blockers"

    },
    {
        "atcLevel": "R06AX13",
        "medGroup": "H1Blockers"

    },
    {
        "atcLevel": "R06AX26",
        "medGroup": "H1Blockers"

    },
    {
        "atcLevel": "R06AX27",
        "medGroup": "H1Blockers"

    },
    {
        "atcLevel": "G04CA01",
        "medGroup": "SelectiveAlphaBlockers"

    },
    {
        "atcLevel": "G04CA02",
        "medGroup": "SelectiveAlphaBlockers"

    },
    {
        "atcLevel": "G04CA04",
        "medGroup": "SelectiveAlphaBlockers"

    },
    {
        "atcLevel": "A03AB05",
        "medGroup": "UrinaryAntispasm"

    },
    {
        "atcLevel": "G04BD03",
        "medGroup": "UrinaryAntispasm"

    },
    {
        "atcLevel": "G04BD07",
        "medGroup": "UrinaryAntispasm"

    },
    {
        "atcLevel": "G04BD08",
        "medGroup": "UrinaryAntispasm"

    },
    {
        "atcLevel": "G04BD10",
        "medGroup": "UrinaryAntispasm"

    },
    {
        "atcLevel": "A06",
        "medGroup": "Laxatives"

    },
    {
        "atcLevel": "N05AB04",
        "medGroup": "Prochlorperazine"

    },
    {
        "atcLevel": "A03FA01",
        "medGroup": "Metoclopramide"

    },
    {
        "atcLevel": "R06AD01",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AD02",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AA02",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AA09",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AB02",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AB05",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AE03",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "R06AX02",
        "medGroup": "Sedating_Antihistamines"

    },
    {
        "atcLevel": "N03AX16",
        "medGroup": "PregabalinOrGabapentin"

    },
    {
        "atcLevel": "N03AX12",
        "medGroup": "PregabalinOrGabapentin"

    },
    {
        "atcLevel": "N03A",
        "medGroup": "Antiepileptic"
    }
];

var selectedMedGroupList = new Array();

var selectedMedList = new Array();

var totalRisk = {
    "falls_fracture": 0,
    "constipation": 0,
    "urinary_retention": 0,
    "CNS_depression": 0,
    "bleeding": 0,
    "heart_failure": 0,
    "bradycardia": 0,
    "CV_events": 0,
    "respiratory": 0,
    "hypoglycaemia": 0,
    "renal_injury": 0,
    "hypokalemia": 0,
    "hyperkalemia": 0,
    "serotonin_syndrome": 0,
    "angle_closure_glaucoma": 0
}


$(document).ready(function () {

    //Get Empty Graph
    createCSV(selectedMedGroupList, "REMOVE");

    $(riskMap).each(function (index, item) {
        //console.log(item.Laxatives);
    })
    $(medicines).each(function (index, item) {
        //get only 5th level medicines codes and above
        if (item.atc_level.length >= 7) {
            addOnlyMappedMedsToSelectionList(item.atc_level, item.atc_description);
        }
    })
});


// When the user clicks on the button,toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function filterFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function createSelectedList(atcDescr, atcLevel) {

    $('#' + "a" + atcLevel)
        .attr('style', "display:none");
    //.off('click');

    var addedStatus = false;
    if ($('#selectedList').has('li').length == 0) {
        $('<li>').attr('id', atcLevel).text(atcDescr).appendTo('#selectedList');
    } else {
        //Get all the li Ids into const liIDs variable.
        const liIDs = $.map($('#selectedList > li'), li => li.id);

        $(liIDs).each(function (index, item) {
            if (item == atcLevel)
                addedStatus = true;
        });
        if (addedStatus != true)
            $('<li>').attr('id', atcLevel).text(atcDescr).appendTo('#selectedList');


    }
}

function getMedGroups(atcDescr, atcLevel) {

    var identifiedMedGroup = "";

    $(medMap).each(function (index, item) {

        var temp;
        if (atcLevel != 'N05AB04' && atcLevel != 'N03AX16' && atcLevel != 'N03AX12') {
            temp = atcLevel.substr(0, item.atcLevel.length);
        } else {
            temp = atcLevel;
        }
        if (temp == item.atcLevel) {

            identifiedMedGroup = item.medGroup;

            if (selectedMedGroupList.length == 0) {
                selectedMedGroupList.push(item.medGroup);
                identifiedMedGroup = item.medGroup;
            } else {
                var checkAvailablity = false;
                $.each(selectedMedGroupList, function (i, value) {

                    if (item.medGroup == value) {
                        checkAvailablity = true;
                    }
                    else {
                        checkAvailablity = false;
                    }
                });
                if (checkAvailablity == false) {
                    selectedMedGroupList.push(item.medGroup);
                }
            }
        }
    });

    if (identifiedMedGroup != null) {
        return identifiedMedGroup;
    }

}



function addOnlyMappedMedsToSelectionList(atcLevel, atcDescr) {
    $(medMap).each(function (index, item) {

        var temp;
        if (atcLevel != 'N05AB04' && atcLevel != 'N03AX16' && atcLevel != 'N03AX12') {
            temp = atcLevel.substr(0, item.atcLevel.length);
        }
        else {
            temp = atcLevel;
        }

        if (temp == item.atcLevel) {
            $med = $('<a>').attr('id', "a" + atcLevel + atcDescr.replace(/\s/g, "")).
                text(atcDescr).appendTo('#myDropdown');

            $med.on('click', function (event) {

                var medAddedStatus = false;

                //createSelectedList(atcDescr, atcLevel);
                var identifiedMedGroup = getMedGroups(atcDescr, atcLevel);
                if (selectedMedList == null) {
                    selectedMedList.push(atcDescr);
                    medAddedStatus = true;
                }
                else {

                    $.each(selectedMedList, function (i, value) {
                        if (value == atcDescr) {
                            medAddedStatus = true;
                        }
                    })

                    if (medAddedStatus == false)
                        selectedMedList.push(atcDescr);
                }


                if ($('#medGroup').has('.accordion-item').length == 0) {
                    //console.log(identifiedMedGroup);
                    createAccordionItem(identifiedMedGroup);
                    if (medAddedStatus == false) {

                        createAcordionContent(identifiedMedGroup, atcDescr, atcLevel);
                        //Calculate Total risk for first med group
                        calculateTotalRisk(identifiedMedGroup);

                        //Generate dynamic graph
                        createCSV(identifiedMedGroup, "ADD");

                    }

                } else {

                    var elementAddedStatus = false;
                    //Get all the accordion-item Ids into const liIDs variable.
                    const accordionIDs = $.map($('#medGroup > .accordion-item'), acordionItem => acordionItem.id);
                    //console.log(accordionIDs)
                    $(accordionIDs).each(function (index, id) {
                        if (id == identifiedMedGroup + 'accordion') {
                            elementAddedStatus = true;
                        }
                    });
                    if (elementAddedStatus != true) {
                        createAccordionItem(identifiedMedGroup);
                        //Calculate Total risk for created med group
                        calculateTotalRisk(identifiedMedGroup);

                        //Generate dynamic graph
                        createCSV(identifiedMedGroup, "ADD");

                        if (medAddedStatus != true)
                            createAcordionContent(identifiedMedGroup, atcDescr, atcLevel);
                    }
                    else {
                        if (medAddedStatus != true)
                            createAcordionContent(identifiedMedGroup, atcDescr, atcLevel);
                    }
                }


                //console.log(selectedMedList);
                //console.log(selectedMedGroupList);


                //myFunction();
            })
        }
    });

}

//CSV Header and pre-defined first cell value
var header = ["Risk"];


//CSV Rows and pre-defined first cell value
var fallsRisk = ["Falls Fracture"];
var constRisk = ["Constipation"];
var uretentRisk = ["Urinary Retention"];
var cnsdeprRisk = ["CNS Depression"];
var bleedRisk = ["Bleeding"];
var heartRisk = ["Heart Failure"];
var bradyRisk = ["Bradycardia"];
var cveRisk = ["CV Events"];
var respRisk = ["Respiratory"];
var hypoglycRisk = ["Hypoglycaemia"];
var renalRisk = ["Renal Injury"];
var hypoKRisk = ["Hypokalemia"];
var hyperKRisk = ["Hyperkalemia"];
var serosynRisk = ["Serotonin Syndrome"];
var acglaucRisk = ["Angle Closure Glaucoma"];



function createCSV(identifiedMedGroup, process) {


    var tempCSV = [];


    if (process == "REMOVE") {
        header = ["Risk"];
        header = $.merge(header, identifiedMedGroup);
    }
    else if (process == "ADD") {
        header.push(identifiedMedGroup);
    }


    console.log(header);

    $.each(riskMap, function (key, value) {
        if (key == identifiedMedGroup) {
            $.each(value, function (risk, status) {

                if (risk == "falls_fracture")
                    fallsRisk.push(status);
                else if (risk == "constipation")
                    constRisk.push(status);
                else if (risk == "urinary_retention")
                    uretentRisk.push(status);
                else if (risk == "CNS_depression")
                    cnsdeprRisk.push(status);
                else if (risk == "bleeding")
                    bleedRisk.push(status);
                else if (risk == "heart_failure")
                    heartRisk.push(status);
                else if (risk == "bradycardia")
                    bradyRisk.push(status);
                else if (risk == "CV_events")
                    cveRisk.push(status);
                else if (risk == "respiratory")
                    respRisk.push(status);
                else if (risk == "hypoglycaemia")
                    hypoglycRisk.push(status);
                else if (risk == "renal_injury")
                    renalRisk.push(status);
                else if (risk == "hypokalemia")
                    hypoKRisk.push(status);
                else if (risk == "hyperkalemia")
                    hyperKRisk.push(status);
                else if (risk == "serotonin_syndrome")
                    serosynRisk.push(status);
                else if (risk == "angle_closure_glaucoma")
                    acglaucRisk.push(status);
                else
                    console.log("Something wrong with the risks");

            })
        }

    })


    tempCSV.push(header, fallsRisk, constRisk, uretentRisk, cnsdeprRisk, bleedRisk,
        heartRisk, cveRisk, respRisk, hypoglycRisk, renalRisk, hypoKRisk, hyperKRisk, serosynRisk, acglaucRisk);

    console.log(tempCSV);

    //create a csv file
    let csvContent = "data:text/csv;charset=utf-8,"
        + tempCSV.map(e => e.join(",")).join("\n");

    d3.csv(csvContent).then(d => initialization(d));



}
function calculateTotalRisk(identifiedMedGroup) {

    $.each(riskMap, function (i, value) {

        if (i == identifiedMedGroup) {

            $.each(value, function (i, value) {
                if (value == 1) {
                    totalRisk[i] = totalRisk[i] + 1;
                }

            })
            //console.log(totalRisk);

        }
    })

}
function createAccordionItem(medGroup) {
    $accordion = $('<div>')
        .attr('id', medGroup + 'accordion')
        .addClass('accordion-item')
        .appendTo($('#medGroup'));

    $accordionHeader = $('<h2>')
        .attr('title', 'Click to view medicines group details')
        .attr('id', medGroup + 'header')
        .addClass('accordion-header')
        .append(
            $('<button>')
                .attr('type', 'button')
                .attr('data-bs-toggle', 'collapse')
                .attr('data-bs-target', '#' + medGroup + 'div')
                .attr('aria-expanded', 'true')
                .attr('aria-controls', medGroup + 'div')
                .addClass('accordion-button')
                .text(medGroup + ' Class')
                .append(
                    $('<span>').addClass('medGroupColur')
                )
        )
        .appendTo($accordion);

    $accordionBodyHeader = $('<div>')
        .attr('id', medGroup + 'div')
        .addClass('accordion-collapse collapse show')
        .attr('aria-labelledby', medGroup + 'aria')
        .attr('data-bs-parent', '#medGroup')
        .appendTo($accordion);

    //.append(
    //    $accordionBody = $('<div>')
    //        .attr('id', 'accordion-body-' + medGroup)
    //        .addClass('accordion-body')
    //)

    $accordionContent = $('<ul>')
        .attr('id', medGroup + 'ul')
        .addClass('list-group')
        .appendTo($accordionBodyHeader);
}
function createAcordionContent(medGroup, atcDescr, atcLevel) {

    $('<li>')
        .attr('id', medGroup + atcLevel + 'li')
        .addClass('list-group-item')
        .addClass('acordionContent')
        .text(atcDescr + '[' + atcLevel + ']')
        .append(
            $('<span>')
                .attr('id', medGroup + atcLevel + 'span')
                .addClass('close')
                .on('click', function (event) {

                    const index = selectedMedList.indexOf(atcDescr);
                    if (index > -1) {
                        selectedMedList.splice(index, 1);
                    }
                    console.log(selectedMedList);
                    $('#' + medGroup + atcLevel + 'li').remove();
                    const liIDs = $.map($('#' + medGroup + 'ul' + '> li'), li => li.id);
                    if (liIDs.length == 0) {
                        const index = selectedMedGroupList.indexOf(medGroup);
                        if (index > -1) {
                            selectedMedGroupList.splice(index, 1);
                            //create graph again with deleted list.
                            createCSV(selectedMedGroupList, "REMOVE");
                        }
                        $('#' + medGroup + 'accordion').remove();


                    }

                })
        )
        .appendTo($('#' + medGroup + 'ul'));
}

//***********************************************************Graph******************************************************************



//d3.csv("test.csv").then(d => initialization(d));

function initialization(data) {

    keys = data.columns.slice(1)

    data.forEach(function (d) {
        d.total = d3.sum(keys, k => +d[k])
        return d
    })

    riskmedGroups = keys.flatMap(medGroup => data.map(d => ({ risk: d.Risk, medGroup, status: d[medGroup] }))) // pivot

    $('#legend').empty();
    $('#chart').empty();


    if ($('#chartType').is(':checked')) {

        //Vertical Stacked Bar Chart
        chart = StackedBarChartVertical(riskmedGroups, {
            x: d => d.risk,
            y: d => d.status,
            z: d => d.medGroup,
            xDomain: data.map(d => d.Risk),
            yDomain: [0, getRange(d3.max(data, d => d.total))],
            /* yDomain: [0, d3.max(data, d => d.total) + 2]*/
            yLabel: "↑ Med Class Risk Count",
            zDomain: keys,
            colors: d3.schemeSpectral[keys.length],
            width: 2200,
            height: 500
        })

        key = Legend(chart.scales.color, { title: "Med Groups" })
        $('#legend').append(key);
        $('#chart').append(chart);

    }
    else {
        //Horizontal Stacked Bar Chart
        chart = StackedBarChartHorizontal(riskmedGroups, {
            x: d => d.status,
            y: d => d.risk,
            z: d => d.medGroup,
            xLabel: "Med Class Risk Count →",
            xDomain: [0, getRange(d3.max(data, d => d.total))]
                               /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
            yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
            zDomain: keys,
            colors: d3.schemeSpectral[keys.length]
        })
        key = Legend(chart.scales.color, { title: "Med Groups" })
        $('#legend').append(key);
        $('#chart').append(chart);
    }

    //Toggle Vertical
    $('#chartType').on('click', function (e) {

        if ($('#chartType').is(':checked')) {
            $('#legend').empty();
            $('#chart').empty();

            //Vertical Stacked Bar Chart
            chart = StackedBarChartVertical(riskmedGroups, {
                x: d => d.risk,
                y: d => d.status,
                z: d => d.medGroup,
                xDomain: data.map(d => d.Risk),
                yDomain: [0, getRange(d3.max(data, d => d.total))],
                /* yDomain: [0, d3.max(data, d => d.total) + 2]*/
                yLabel: "↑ Med Class Risk Count",
                zDomain: keys,
                colors: d3.schemeSpectral[keys.length],
                width: 2200,
                height: 500
            })

            key = Legend(chart.scales.color, { title: "Med Groups" })
            $('#legend').append(key);
            $('#chart').append(chart);
        }
        else {
            $('#legendFieledSet').empty();
            $('#chart').empty();
            //Horizontal Stacked Bar Chart
            chart = StackedBarChartHorizontal(riskmedGroups, {
                x: d => d.status,
                y: d => d.risk,
                z: d => d.medGroup,
                xLabel: "Med Class Risk Count →",
                xDomain: [0, getRange(d3.max(data, d => d.total))]
                               /* xDomain: [0, d3.max(data, d => d.total) + 2]*/,
                yDomain: data.map(d => d.Risk), //d3.groupSort(stateages, D => d3.sum(D, d => d.population), d => d.state), // sort y by x
                zDomain: keys,
                colors: d3.schemeSpectral[keys.length]
            })
            key = Legend(chart.scales.color, { title: "Med Groups" })
            $('#legend').append(key);
            $('#chart').append(chart);
        }

    });
}


function getRange(total) {
    if (total < 10)
        return 10
    else
        return total + 2
}

//Vertical Stacked Bar Chart
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-bar-chart
function StackedBarChartVertical(data, {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = d => d, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    marginTop = 30, // top margin, in pixels
    marginRight = 80, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xDomain, // array of x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    xPadding = 0.75, // amount of x-range to reserve to separate bars
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    colors = d3.schemePaired, // array of colors
} = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);

    // Compute default x- and z-domains, and unique them.
    if (xDomain === undefined) xDomain = X;
    if (zDomain === undefined) zDomain = Z;
    xDomain = new d3.InternSet(xDomain);
    zDomain = new d3.InternSet(zDomain);

    // Omit any data not present in the x- and z-domains.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

    // Compute a nested array of series where each series is [[y1, y2], [y1, y2],
    // [y1, y2], …] representing the y-extent of each stacked rect. In addition,
    // each tuple has an i (index) property so that we can refer back to the
    // original data point (data[i]). This code assumes that there is only one
    // data point for a given unique x- and z-value.
    const series = d3.stack()
        .keys(zDomain)
        .value(([x, I], z) => Y[I.get(z)])
        .order(order)
        .offset(offset)
        (d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
        .map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

    // Compute the default y-domain. Note: diverging stacks can be negative.
    if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
    const yScale = yType(yDomain, yRange);
    const color = d3.scaleOrdinal(zDomain, colors);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

    // Compute titles.
    if (title === undefined) {
        const formatValue = yScale.tickFormat(100, yFormat);
        title = i => `${X[i]}\n${Z[i]}\n${formatValue(Y[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "height: auto; height: intrinsic;");

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

    const bar = svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", ([{ i }]) => color(Z[i]))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", ({ i }) => xScale(X[i]))
        .attr("y", ([y1, y2]) => Math.min(yScale(y1), yScale(y2)))
        .attr("height", ([y1, y2]) => Math.abs(yScale(y1) - yScale(y2)))
        .attr("width", xScale.bandwidth());


    if (title) bar.append("title")
        .text(({ i }) => title(i))
        .attr('data-bs-toggle', 'tooltip')
        .attr('data-bs-placement', 'right');


    svg.append("g")
        .attr("transform", `translate(0,${yScale(0)})`)
        .call(xAxis);



    return Object.assign(svg.node(), { scales: { color } });
}

//Horizontal Stacked Bar Chart
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-horizontal-bar-chart
function StackedBarChartHorizontal(data, {
    x = d => d, // given d in data, returns the (quantitative) x-value
    y = (d, i) => i, // given d in data, returns the (ordinal) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    marginTop = 40, // top margin, in pixels
    marginRight = 80, // right margin, in pixels
    marginBottom = 40, // bottom margin, in pixels
    marginLeft = 200, // left margin, in pixels
    width = 640, // outer width, in pixels
    height, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yDomain, // array of y-values
    yRange, // [bottom, top]
    yPadding = 0.5, // amount of y-range to reserve to separate bars
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    xFormat, // a format specifier string for the x-axis
    xLabel, // a label for the x-axis
    colors = d3.schemePaired, // array of colors
} = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);

    // Compute default y- and z-domains, and unique them.
    if (yDomain === undefined) yDomain = Y;
    if (zDomain === undefined) zDomain = Z;
    yDomain = new d3.InternSet(yDomain);
    zDomain = new d3.InternSet(zDomain);

    // Omit any data not present in the y- and z-domains.
    const I = d3.range(X.length).filter(i => yDomain.has(Y[i]) && zDomain.has(Z[i]));

    // If the height is not specified, derive it from the y-domain.
    if (height === undefined) height = yDomain.size * 25 + marginTop + marginBottom;
    if (yRange === undefined) yRange = [height - marginBottom, marginTop];

    // Compute a nested array of series where each series is [[x1, x2], [x1, x2],
    // [x1, x2], …] representing the x-extent of each stacked rect. In addition,
    // each tuple has an i (index) property so that we can refer back to the
    // original data point (data[i]). This code assumes that there is only one
    // data point for a given unique y- and z-value.
    const series = d3.stack()
        .keys(zDomain)
        .value(([, I], z) => X[I.get(z)])
        .order(order)
        .offset(offset)
        (d3.rollup(I, ([i]) => i, i => Y[i], i => Z[i]))
        .map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

    // Compute the default x-domain. Note: diverging stacks can be negative.
    if (xDomain === undefined) xDomain = d3.extent(series.flat(2));

    // Construct scales, axes, and formats.
    const xScale = xType(xDomain, xRange);
    const yScale = d3.scaleBand(yDomain, yRange).paddingInner(yPadding);
    const color = d3.scaleOrdinal(zDomain, colors);
    const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);



    // Compute titles.
    if (title === undefined) {
        const formatValue = xScale.tickFormat(100, xFormat);
        title = i => `${Y[i]}\n${Z[i]}\n${formatValue(X[i])}`;
    } else {
        const O = d3.map(data, d => d);
        const T = title;
        title = i => T(O[i], i, data);
    }

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "height:auto; height:intrinsic;");

    svg.append("g")
        .attr("transform", `translate(0,${marginTop})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", height - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", width - marginRight)
            .attr("y", -22)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text(xLabel));

    const bar = svg.append("g")
        .selectAll("g")
        .data(series)
        .join("g")
        .attr("fill", ([{ i }]) => color(Z[i]))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", ([x1, x2]) => Math.min(xScale(x1), xScale(x2)))
        .attr("y", ({ i }) => yScale(Y[i]))
        .attr("width", ([x1, x2]) => Math.abs(xScale(x1) - xScale(x2)))
        .attr("height", yScale.bandwidth());

    if (title) bar.append("title")
        .text(({ i }) => title(i));

    svg.append("g")
        .attr("transform", `translate(${xScale(0)},0)`)
        .call(yAxis);

    return Object.assign(svg.node(), { scales: { color } });
}

// Copyright 2021, Observable Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/color-legend
function Legend(color, {
    title,
    tickSize = 6,
    width = 200,
    height = 900,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0 + tickSize,
    marginLeft = 0,
    ticks = height / 64,
    tickFormat,
    tickValues
} = {}) {



    function ramp(color, n = 256) {
        const canvas = document.createElement("canvas");
        canvas.width = n;
        canvas.height = 1;
        const context = canvas.getContext("2d");
        for (let i = 0; i < n; ++i) {
            context.fillStyle = color(i / (n - 1));
            context.fillRect(i, 0, 1, 1);
        }
        return canvas;
    }

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")
        .style("display", "block");

    let tickAdjust = g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
    let x;

    // Continuous
    if (color.interpolate) {
        const n = Math.min(color.domain().length, color.range().length);

        x = color.copy().rangeRound(d3.quantize(d3.interpolate(marginLeft, width - marginRight), n));

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.copy().domain(d3.quantize(d3.interpolate(0, 1), n))).toDataURL());
    }

    // Sequential
    else if (color.interpolator) {
        x = Object.assign(color.copy()
            .interpolator(d3.interpolateRound(marginLeft, width - marginRight)),
            { range() { return [marginLeft, width - marginRight]; } });

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.interpolator()).toDataURL());

        // scaleSequentialQuantile doesn’t implement ticks or tickFormat.
        if (!x.ticks) {
            if (tickValues === undefined) {
                const n = Math.round(ticks + 1);
                tickValues = d3.range(n).map(i => d3.quantile(color.domain(), i / (n - 1)));
            }
            if (typeof tickFormat !== "function") {
                tickFormat = d3.format(tickFormat === undefined ? ",f" : tickFormat);
            }
        }
    }

    // Threshold
    else if (color.invertExtent) {
        const thresholds
            = color.thresholds ? color.thresholds() // scaleQuantize
                : color.quantiles ? color.quantiles() // scaleQuantile
                    : color.domain(); // scaleThreshold

        const thresholdFormat
            = tickFormat === undefined ? d => d
                : typeof tickFormat === "string" ? d3.format(tickFormat)
                    : tickFormat;

        x = d3.scaleLinear()
            .domain([-1, color.range().length - 1])
            .rangeRound([marginLeft, width - marginRight]);

        svg.append("g")
            .selectAll("rect")
            .data(color.range())
            .join("rect")
            .attr("x", (d, i) => x(i - 1))
            .attr("y", marginTop)
            .attr("width", (d, i) => x(i) - x(i - 1))
            .attr("height", height - marginTop - marginBottom)
            .attr("fill", d => d);

        tickValues = d3.range(thresholds.length);
        tickFormat = i => thresholdFormat(thresholds[i], i);
    }

    // Ordinal
    else {

        // Add one dot in the legend for each name.
        var size = 10;
        svg.selectAll("mydots")
            .data(color.domain())
            .enter()
            .append("rect")
            .attr("x", 10)
            .attr("y", function (d, i) { return 10 + i * (size + 5) }) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("width", size)
            .attr("height", size)
            .style("fill", function (d) { return color(d) })

        // Add one dot in the legend for each name.
        svg.selectAll("mylabels")
            .data(keys)
            .enter()
            .append("text")
            .attr("x", 10 + size * 1.2)
            .attr("y", function (d, i) { return 10 + i * (size + 5) + (size / 2) }) // 100 is where the first dot appears. 25 is the distance between dots
            .style("fill", '#000')
            .text(function (d) { return d })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")

        tickAdjust = () => { };
    }

    //svg.append("g")
    //    .attr("transform", `translate(0,${height - marginBottom})`)
    //    .call(d3.axisBottom(x)
    //        .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
    //        .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
    //        .tickSize(tickSize)
    //        .tickValues(tickValues))
    //    .call(tickAdjust)
    //    .call(g => g.select(".domain").remove())
    //    .call(g => g.append("text")
    //        .attr("x", marginLeft)
    //        .attr("y", marginTop + marginBottom - height - 6)
    //        .attr("fill", "currentColor")
    //        .attr("text-anchor", "start")
    //        .attr("font-weight", "bold")
    //        .attr("class", "title")
    //        .text(title));

    return svg.node();
}




        //***********************************************************End Graph******************************************************************
