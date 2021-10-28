<script>
      var subjectObject = {
        "Surgical Events": {
          "Surgery performed on the wrong body part.": ["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Surgery performed on the wrong patient.": ["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Wrong surgical procedure .": ["No Error", "Error, No Harm", "Error, Harm", "Error, Death"], 
          "Unintended retention of a foreign object in an enclosed body cavity in a patient after surgery/ procedure. ":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Transfer of donor organ to a wrong recipient. ":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Return to surgery (repeat surgery).":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Admission to ICU post-operatively.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Intra or post-operative death.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Mechanical ventilation more than 24hours post-operation.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Change in procedure.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Normal pathology reports or unrelated to diagnosis.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Occurrence of any operative (intra-op or post-op) complications.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Patient Identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
        },
        "Anesthetic Events": {
          "Airway injury or airway problems.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Awareness under general anaesthesia.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Aspiration":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Dental damage.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Post-operative pain (24 hours after surgery).":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Mendelsohn’s syndrome.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Equipment failure/ malfunction.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Death":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Change in anesthetic use during surgery.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Intra-operative epinephrine or norepinephrine administration.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Intubation/ re-intubation post-operatively in PACU.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Admission to ICU post-operatively.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          "Mechanical ventilation more than 24hours post-operation.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Product and device related events": {
            "Use of contaminated medications, medical devices or biologics provided by the hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Use of a medical device other functions than was intended or anticipated in the care of a patient provided by the healthcare provider.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Patient protection events": {
            "Infant/ child or any other dependent person discharged to the wrong person.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Absconding patient.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient suicide/ attempted suicide while admitted in hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Patient Care management events": {
            "Patient Falls":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Decubitus ulcers.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Readmission within 30 (thirty) days.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "In-hospital stroke/ Cardiovascular accident.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Complications arising from bedside procedures.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Use of restraints on patients.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missing essential information required on patient clinical/ request forms.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Wrong formulation/ route administration of medication.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Administration of incompatible blood or blood products. ":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Incorrect blood or blood products transfused.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Environmental events": {
            "Electric shock while being cared for in the hospital but excluding events involving planned treatments such as cardioversion":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Contaminated oxygen/ other gases being delivered to a patient while in hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Burn injury incurred within the hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Radiologic events ": {
            "Introduction of a metallic object into the MRI room.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missed fractures":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missed diagnosis.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Accidental irradiation exposure to pregnant patients.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Errors in interpretation of radiological films.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Errors in radiology reporting.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delayed imaging procedures.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delay in results.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delay in alerting clinician about emergency situations.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure to suggest the next appropriate procedure.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure to communicate in a timely and clinically appropriate manner.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Obstetrics and Gynecology events": {
            "Maternal death ":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Use of mis-matched donor sperm or ovum or transfer of wrong zygote during IVF.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Mix-up in babies.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missed diagnosis.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Third- or fourth-degree tears.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Birth asphyxia.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Unattended birth/ delivery.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Ruptured uterus.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Post-partum hemorrhage.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Birth trauma.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Laboratory related events": {
            "Patient identification error.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Specimen Labelling error.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Error in specimen reporting.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Error in collection of specimens.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Equipment malfunction/ quality control issues.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Mix- up of samples.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Contamination of samples/ specimen.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure to communicate in a timely and clinically appropriate manner.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Use of wrong reagents.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure to alert clinician on critical values.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delayed results.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Errors in transport of blood and blood products/ components.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Storing blood and blood products at ‘inadequate’ temperatures.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Errors in tissue handling.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Errors in interpretation by a pathologist.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Criminal Events": {
            "Impersonating a doctor, nurse, pharmacist or other licensed healthcare provider.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Abduction of patient of any age while being cared for in the hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Sexual assault on a patient or staff within or on hospital grounds.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Physical assault on a patient/staff that occurs within or on the grounds of the hospital.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Farewell Home Events": {
            "Body identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Post mortem done on wrong bodies.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Release of wrong body to wrong family.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Unauthorized removal and retention of organs from bodies.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Refrigerator/ equipment malfunction.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure in communication between farewell home and other departments.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missing body.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Inappropriate and unauthorized access to farewell home/ unsupervised collection of bodies.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Accident and Emergency events": {
            "Revisit to A&E department within 48 hours.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missing patient":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Pediatric events": {
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Breast milk administration errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Mix-up in babies.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missed diagnosis.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delayed diagnosis.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Medicine and critical care unit events": {
            "Missed diagnosis":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Delayed diagnosis":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Excess administration of intravenous narcotics.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Readmission to ICU.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Over sedation of patients.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Failure to monitor ":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Patient identification errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Pharmacy related events": {
            "Improper dose.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Wrong time.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Wrong patient.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Administration of unauthorized drug":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Dispensing error.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Prescribing errors.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          },
          "Health Information related events": {
            "Patient names not matching in HMIS.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
            "Missing file.":["No Error", "Error, No Harm", "Error, Harm", "Error, Death"],
          }
      
      }
      window.onload = function() {
        var subjectSel = document.getElementById("subject");
        var topicSel = document.getElementById("topic");
        var chapterSel = document.getElementById("chapter");
        for (var x in subjectObject) {
          subjectSel.options[subjectSel.options.length] = new Option(x, x);
        }
        subjectSel.onchange = function() {
          //empty Chapters- and Topics- dropdowns
          chapterSel.length = 1;
          topicSel.length = 1;
          //display correct values
          for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
          }
        }
        topicSel.onchange = function() {
          //empty Chapters dropdown
          chapterSel.length = 1;
          //display correct values
          var z = subjectObject[subjectSel.value][this.value];
          for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
          }
        }
      }
      </script>