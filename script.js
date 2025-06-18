let wordData = {};

window.onload = function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      wordData = data;
      console.log("Data loaded");
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
};

function personal_pronouns() {
  const outputDiv = document.getElementById("output");
  tableHTML = ""
  tableHTML += `
    <table border='1'>
      <tr>
        <th></th>
        <th></th>
        <th>nominative</th>
        <th>accusative</th>
        <th>dative/instr</th>
        <th>possessive</th>
      </tr>
      <tr>
        <th rowspan="2">singular</th>
        <th>first person</th>
        <td> <p>ek</p> <p>(unstressed ik)</p> </td>
        <td> <p>mek</p> <p>(unstressed mik)</p> </td>
        <td>miz</td>
        <td>mīnaz</td>
      </tr>
      <tr>
        <th>second person</th>
        <td>þū</td>
        <td> <p>þek</p> <p>(unstressed þik)</p> </td>
        <td>þiz</td>
        <td>þīnaz</td>
      </tr>
      <tr>
        <th rowspan="2">dual</th>
        <th>first person</th>
        <td> <p>wet</p> <p>(unstressed wit)</p> </td>
        <td>unk</td>
        <td>unkiz</td>
        <td>unkeraz</td>
      </tr>
      <tr>
        <th>second person</th>
        <td><p>jut, jit</p></td>
        <td>inkw</td>
        <td>inkwiz</td>
        <td>inkweraz</td>
      </tr>
      <tr>
        <th rowspan="2">plural</th>
        <th>first person</th>
        <td> <p>wīz</p> <p>(unstressed wiz)</p> </td>
        <td>uns</td>
        <td>unsiz</td>
        <td>unseraz</td>
      </tr>
      <tr>
        <th>second person</th>
        <td><p>jūz, jīz</p></td>
        <td>izwiz</td>
        <td>izwiz</td>
        <td>izweraz</td>
      </tr>
      <tr>
        <th colspan="2">reflexive</th>
        <td>se-</td>
        <td><p>sek</p> <p>(unstressed sik)</p></td>
        <td>siz</td>
        <td>sinaz</td>
      </tr>
    </table>
  `; 

  tableHTML += "</table>";

  outputDiv.innerHTML = `
        ${tableHTML}
    `;

  found = true;
}

function third_person_pronouns() {
  const outputDiv = document.getElementById("output");
  tableHTML = ""
  tableHTML += `
    <table border='1'>
      <tr>
        <th></th>
        <th colspan="3">singular</th>
        <th colspan="3">plural</th>
      </tr>
      <tr>
        <th></th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
      </tr>
      <tr>
        <th>nominative</th>
        <td>iz</td>
        <td>sī</td>
        <td>it</td>
        <td>īz</td>
        <td>ijôz</td>
        <td>ijō</td>
      </tr>
      <tr>
        <th>accusative</th>
        <td>inǭ</td>
        <td>ijǭ</td>
        <td>it</td>
        <td>inz</td>
        <td>ijōz</td>
        <td>ijō</td>
      </tr>
      <tr>
        <th>genitive</th>
        <td>es</td>
        <td>ezōz</td>
        <td>es</td>
        <td>ezǫ̂</td>
        <td>ezǫ̂</td>
        <td>ezǫ̂</td>
      </tr>
      <tr>
        <th>dative</th>
        <td>immai</td>
        <td>ezōi</td>
        <td>immai</td>
        <td>imaz</td>
        <td>imaz</td>
        <td>imaz</td>
      </tr>
      <tr>
        <th>instrumental</th>
        <td>inō</td>
        <td>ezō</td>
        <td>inō</td>
        <td>imiz</td>
        <td>imiz</td>
        <td>imiz</td>
      </tr>
    </table>
  `; 

  tableHTML += "</table>";

  outputDiv.innerHTML = `
        ${tableHTML}
    `;

  found = true;
}

function third_person_possessive_pronouns() {
  const outputDiv = document.getElementById("output");
  tableHTML = ""
  tableHTML += `
    <table border='1'>
      <tr>
        <th></th>
        <th colspan="3">singular</th>
        <th colspan="3">plural</th>
      </tr>
      <tr>
        <th></th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
      </tr>
      <tr>
        <th>nominative</th>
        <td>sīnaz</td>
        <td>sīnō</td>
        <td>sīną, -at(ō)</td>
        <td>sīnai</td>
        <td>sīnôz</td>
        <td>sīnō</td>
      </tr>
      <tr>
        <th>accusative</th>
        <td>sīnanǭ</td>
        <td>sīnǭ</td>
        <td>sīną, -at(ō)</td>
        <td>sīnanz</td>
        <td>sīnōz</td>
        <td>sīnō</td>
      </tr>
      <tr>
        <th>genitive</th>
        <td>sīnas, sīnis</td>
        <td>sīnaizōz</td>
        <td>sīnas, sīnis</td>
        <td>sīnaizǫ̂</td>
        <td>sīnaizǫ̂</td>
        <td>sīnaizǫ̂</td>
      </tr>
      <tr>
        <th>dative</th>
        <td>sīnammai</td>
        <td>sīnaizōi</td>
        <td>sīnammai</td>
        <td>sīnaimaz</td>
        <td>sīnaimaz</td>
        <td>sīnaimaz</td>
      </tr>
      <tr>
        <th>instrumental</th>
        <td>sīnanō</td>
        <td>sīnaizō</td>
        <td>sīnanō</td>
        <td>sīnaimiz</td>
        <td>sīnaimiz</td>
        <td>sīnaimiz</td>
      </tr>
    </table>
  `; 

  tableHTML += "</table>";

  outputDiv.innerHTML = `
        ${tableHTML}
    `;

  found = true;
}

function first_person_possessive_pronouns() {
  const outputDiv = document.getElementById("output");
  tableHTML = ""
  tableHTML += `
    <table border='1'>
      <tr>
        <th></th>
        <th colspan="3">singular</th>
        <th colspan="3">plural</th>
      </tr>
      <tr>
        <th></th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
      </tr>
      <tr>
        <th>nominative</th>
        <td>mīnaz</td>
        <td>mīnō</td>
        <td>mīną, -at(ō)</td>
        <td>mīnai</td>
        <td>mīnôz</td>
        <td>mīnō</td>
      </tr>
      <tr>
        <th>accusative</th>
        <td>mīnanǭ</td>
        <td>mīnǭ</td>
        <td>mīną, -at(ō)</td>
        <td>mīnanz</td>
        <td>mīnōz</td>
        <td>mīnō</td>
      </tr>
      <tr>
        <th>genitive</th>
        <td>mīnas, mīnis</td>
        <td>mīnaizōz</td>
        <td>mīnas, mīnis</td>
        <td>mīnaizǫ̂</td>
        <td>mīnaizǫ̂</td>
        <td>mīnaizǫ̂</td>
      </tr>
      <tr>
        <th>dative</th>
        <td>mīnammai</td>
        <td>mīnaizōi</td>
        <td>mīnammai</td>
        <td>mīnaimaz</td>
        <td>mīnaimaz</td>
        <td>mīnaimaz</td>
      </tr>
      <tr>
        <th>instrumental</th>
        <td>mīnanō</td>
        <td>mīnaizō</td>
        <td>mīnanō</td>
        <td>mīnaimiz</td>
        <td>mīnaimiz</td>
        <td>mīnaimiz</td>
      </tr>
    </table>
  `; 

  tableHTML += "</table>";

  outputDiv.innerHTML = `
        ${tableHTML}
    `;

  found = true;
}

function second_person_possessive_pronouns() {
  const outputDiv = document.getElementById("output");
  tableHTML = ""
  tableHTML += `
    <table border='1'>
      <tr>
        <th></th>
        <th colspan="3">singular</th>
        <th colspan="3">plural</th>
      </tr>
      <tr>
        <th></th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
        <th>masculine</th>
        <th>feminine</th>
        <th>neuter</th>
      </tr>
      <tr>
        <th>nominative</th>
        <td>þīnaz</td>
        <td>þīnō</td>
        <td>þīną, -at(ō)</td>
        <td>þīnai</td>
        <td>þīnôz</td>
        <td>þīnō</td>
      </tr>
      <tr>
        <th>accusative</th>
        <td>þīnanǭ</td>
        <td>þīnǭ</td>
        <td>þīną, -at(ō)</td>
        <td>þīnanz</td>
        <td>þīnōz</td>
        <td>þīnō</td>
      </tr>
      <tr>
        <th>genitive</th>
        <td>þīnas, þīnis</td>
        <td>þīnaizōz</td>
        <td>þīnas, þīnis</td>
        <td>þīnaizǫ̂</td>
        <td>þīnaizǫ̂</td>
        <td>þīnaizǫ̂</td>
      </tr>
      <tr>
        <th>dative</th>
        <td>þīnammai</td>
        <td>þīnaizōi</td>
        <td>þīnammai</td>
        <td>þīnaimaz</td>
        <td>þīnaimaz</td>
        <td>þīnaimaz</td>
      </tr>
      <tr>
        <th>instrumental</th>
        <td>þīnanō</td>
        <td>þīnaizō</td>
        <td>þīnanō</td>
        <td>þīnaimiz</td>
        <td>þīnaimiz</td>
        <td>þīnaimiz</td>
      </tr>
    </table>
  `; 

  tableHTML += "</table>";

  outputDiv.innerHTML = `
        ${tableHTML}
    `;

  found = true;
}

function checkWord() {
  const input = document.getElementById("wordInput").value.trim().toLowerCase();
  const outputDiv = document.getElementById("output");

  let found = false;

  for (const englishWord in wordData) {
    const entry = wordData[englishWord];
    const germanicWord = entry.germanic.toLowerCase();
    const english1Word = entry.english1.toLowerCase();
    const english2Word = entry.english2.toLowerCase();

    if (englishWord.toLowerCase() === input || germanicWord === input || english1Word === input || english2Word === input) {
      const type = entry.type;
      const options = entry.options;

      let tableHTML = "";

      if (type === "noun") {
        tableHTML += `
          <table border='1'>
            <tr>
              <th></th>
              <th>singular</th>
              <th>plural</th>
            </tr>
            <tr>
              <th>nominative</th>
              <td>${options.sing_nomi}</td>
              <td>${options.plur_nomi}</td>
            </tr>
            <tr>
              <th>vocative</th>
              <td>${options.sing_voc}</td>
              <td>${options.plur_voc}</td>
            </tr>
            <tr>
              <th>accusative</th>
              <td>${options.sing_acc}</td>
              <td>${options.plur_acc}</td>
            </tr>
            <tr>
              <th>genitive</th>
              <td>${options.sing_gen}</td>
              <td>${options.plur_gen}</td>
            </tr>
            <tr>
              <th>dative</th>
              <td>${options.sing_dat}</td>
              <td>${options.plur_dat}</td>
            </tr>
            <tr>
              <th>instrumental</th>
              <td>${options.sing_inst}</td>
              <td>${options.plur_inst}</td>
            </tr>
          </table>
        `;

      } else if (type === "verb") {
        tableHTML += `
          <div style="display: flex;">
            <table border='1'>
              <tr>
                <td></td>
                <th colspan="3">active voice</th>
              </tr>
              <tr>
                <th>present tense</th>
                <th>indicative</th>
                <th>subjunctive</th>
                <th>imperative</th>
              </tr>
              <tr>
                <th>1st singular</th>
                <td>${options.act_pres_ind_1st_sing}</td>
                <td>${options.act_pres_sub_1st_sing}</td>
                <td>${options.act_pres_imp_1st_sing}</td>
              </tr>
              <tr>
                <th>2nd singular</th>
                <td>${options.act_pres_ind_2nd_sing}</td>
                <td>${options.act_pres_sub_2nd_sing}</td>
                <td>${options.act_pres_imp_2nd_sing}</td>
              </tr>
              <tr>
                <th>3rd singular</th>
                <td>${options.act_pres_ind_3rd_sing}</td>
                <td>${options.act_pres_sub_3rd_sing}</td>
                <td>${options.act_pres_imp_3rd_sing}</td>
              </tr>
              <tr>
                <th>1st dual</th>
                <td>${options.act_pres_ind_1st_dual}</td>
                <td>${options.act_pres_sub_1st_dual}</td>
                <td>${options.act_pres_imp_1st_dual}</td>
              </tr>
              <tr>
                <th>2nd dual</th>
                <td>${options.act_pres_ind_2nd_dual}</td>
                <td>${options.act_pres_sub_2nd_dual}</td>
                <td>${options.act_pres_imp_2nd_dual}</td>
              </tr>
              <tr>
                <th>1st plural</th>
                <td>${options.act_pres_ind_1st_plural}</td>
                <td>${options.act_pres_sub_1st_plural}</td>
                <td>${options.act_pres_imp_1st_plural}</td>
              </tr>
              <tr>
                <th>2nd plural</th>
                <td>${options.act_pres_ind_2nd_plural}</td>
                <td>${options.act_pres_sub_2nd_plural}</td>
                <td>${options.act_pres_imp_2nd_plural}</td>
              </tr>
              <tr>
                <th>3rd plural</th>
                <td>${options.act_pres_ind_3rd_plural}</td>
                <td>${options.act_pres_sub_3rd_plural}</td>
                <td>${options.act_pres_imp_3rd_plural}</td>
              </tr>

            </table>

            <table border='1'>
              <tr>
                <th colspan="2">passive voice</th>
              </tr>
              <tr>
                <th>subjunctive</th>
                <th>indicative</th>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_1st_sing}</td>
                <td>${options.pass_pres_sub_1st_sing}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_2nd_sing}</td>
                <td>${options.pass_pres_sub_2nd_sing}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_3rd_sing}</td>
                <td>${options.pass_pres_sub_3rd_sing}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_1st_dual}</td>
                <td>${options.pass_pres_sub_1st_dual}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_2nd_dual}</td>
                <td>${options.pass_pres_sub_2nd_dual}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_1st_plural}</td>
                <td>${options.pass_pres_sub_1st_plural}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_2nd_plural}</td>
                <td>${options.pass_pres_sub_2nd_plural}</td>
              </tr>
              <tr>
                <td>${options.pass_pres_ind_3rd_plural}</td>
                <td>${options.pass_pres_sub_3rd_plural}</td>
              </tr>
            </table>
          </div>

          <table border='1'>
              <tr>
                <th>past tense</th>
                <th>indicative</th>
                <th>subjunctive</th>
              </tr>
              <tr>
                <th>1st singular</th>
                <td>${options.act_past_ind_1st_sing}</td>
                <td>${options.act_past_sub_1st_sing}</td>
              </tr>
              <tr>
                <th>2nd singular</th>
                <td>${options.act_past_ind_2nd_sing}</td>
                <td>${options.act_past_sub_2nd_sing}</td>
              </tr>
              <tr>
                <th>3rd singular</th>
                <td>${options.act_past_ind_3rd_sing}</td>
                <td>${options.act_past_sub_3rd_sing}</td>
              </tr>
              <tr>
                <th>1st dual</th>
                <td>${options.act_past_ind_1st_dual}</td>
                <td>${options.act_past_sub_1st_dual}</td>
              </tr>
              <tr>
                <th>2nd dual</th>
                <td>${options.act_past_ind_2nd_dual}</td>
                <td>${options.act_past_sub_2nd_dual}</td>
              </tr>
              <tr>
                <th>1st plural</th>
                <td>${options.act_past_ind_1st_plural}</td>
                <td>${options.act_past_sub_1st_plural}</td>
              </tr>
              <tr>
                <th>2nd plural</th>
                <td>${options.act_past_ind_2nd_plural}</td>
                <td>${options.act_past_sub_2nd_plural}</td>
              </tr>
              <tr>
                <th>3rd plural</th>
                <td>${options.act_past_ind_3rd_plural}</td>
                <td>${options.act_past_sub_3rd_plural}</td>
              </tr>
            </table>

            <table border='1'>
              <tr>
                <th></th>
                <th>present</th>
                <th>past</th>
              </tr>
              <tr>
                <th>participles</th>
                <td>${options.present_participle}</td>
                <td>${options.past_participle}</td>
              </tr>
            </table>
        `;

      } else if (type === "adjective") {
        tableHTML += `
          <table border='1'>
            <tr>
                <th colspan="7">Strong declension</th>
            </tr>
            <tr>
                <th></th>
                <th colspan="3">singular</th>
                <th colspan="3">plural</th>
            </tr>
            <tr>
                <th></th>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
            </tr>
            <tr>
                <td>nominative</td>
                <td>${options.strong_sing_masc_nom}</td>
                <td>${options.strong_sing_fem_nom}</td>
                <td>${options.strong_sing_neut_nom}</td>
                <td>${options.strong_plur_masc_nom}</td>
                <td>${options.strong_plur_fem_nom}</td>
                <td>${options.strong_plur_neut_nom}</td>
            </tr>
            <tr>
                <td>accusative</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>genitive</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>dative</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>instrumental</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
          </table>

          <table border='1'>
            <tr>
                <th colspan="7">Weak declension</th>
            </tr>
            <tr>
                <th></th>
                <th colspan="3">singular</th>
                <th colspan="3">plural</th>
            </tr>
            <tr>
                <th></th>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
            </tr>
            <tr>
                <td>nominative</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>accusative</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>genitive</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>dative</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
            <tr>
                <td>instrumental</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option1}</td>
                <td>${options.option2}</td>
                <td>${options.option3}</td>
                <td>${options.option3}</td>
            </tr>
          </table>
        `;
      } else if (type === "personal_pronouns") {
        tableHTML += `
          <table border='1'>
            <tr>
              <th></th>
              <th></th>
              <th>nominative</th>
              <th>accusative</th>
              <th>dative/instr</th>
              <th>possessive</th>
            </tr>
            <tr>
              <th rowspan="2">singular</th>
              <th>first person</th>
              <td> <p>ek</p> <p>(unstressed ik)</p> </td>
              <td> <p>mek</p> <p>(unstressed mik)</p> </td>
              <td>miz</td>
              <td>mīnaz</td>
            </tr>
            <tr>
              <th>second person</th>
              <td>þū</td>
              <td> <p>þek</p> <p>(unstressed þik)</p> </td>
              <td>þiz</td>
              <td>þīnaz</td>
            </tr>
            <tr>
              <th rowspan="2">dual</th>
              <th>first person</th>
              <td> <p>wet</p> <p>(unstressed wit)</p> </td>
              <td>unk</td>
              <td>unkiz</td>
              <td>unkeraz</td>
            </tr>
            <tr>
              <th>second person</th>
              <td><p>jut, jit</p></td>
              <td>inkw</td>
              <td>inkwiz</td>
              <td>inkweraz</td>
            </tr>
            <tr>
              <th rowspan="2">plural</th>
              <th>first person</th>
              <td> <p>wīz</p> <p>(unstressed wiz)</p> </td>
              <td>uns</td>
              <td>unsiz</td>
              <td>unseraz</td>
            </tr>
            <tr>
              <th>second person</th>
              <td><p>jūz, *jīz</p></td>
              <td>izwiz</td>
              <td>izwiz</td>
              <td>izweraz</td>
            </tr>
            <tr>
              <th colspan="2">reflexive</th>
              <td>se-</td>
              <td><p>sek</p> <p>(unstressed sik)</p></td>
              <td>siz</td>
              <td>sinaz</td>
            </tr>
          </table>
        `; 
      } else if (type === "3rd_possessive_pronouns") {
        tableHTML += `
          <table border='1'>
            <tr>
              <th></th>
              <th colspan="3">singular</th>
              <th colspan="3">plural</th>
            </tr>
            <tr>
              <th></th>
              <th>masculine</th>
              <th>feminine</th>
              <th>neuter</th>
              <th>masculine</th>
              <th>feminine</th>
              <th>neuter</th>
            </tr>
            <tr>
              <th>nominative</th>
              <td>sīnaz</td>
              <td>sīnō</td>
              <td>sīną, -at(ō)</td>
              <td>sīnai</td>
              <td>sīnôz</td>
              <td>sīnō</td>
            </tr>
            <tr>
              <th>accusative</th>
              <td>sīnanǭ</td>
              <td>sīnǭ</td>
              <td>sīną, -at(ō)</td>
              <td>sīnanz</td>
              <td>sīnōz</td>
              <td>sīnō</td>
            </tr>
            <tr>
              <th>genitive</th>
              <td>sīnas, sīnis</td>
              <td>sīnaizōz</td>
              <td>sīnas, sīnis</td>
              <td>sīnaizǫ̂</td>
              <td>sīnaizǫ̂</td>
              <td>sīnaizǫ̂</td>
            </tr>
            <tr>
              <th>dative</th>
              <td>sīnammai</td>
              <td>sīnaizōi</td>
              <td>sīnammai</td>
              <td>sīnaimaz</td>
              <td>sīnaimaz</td>
              <td>sīnaimaz</td>
            </tr>
            <tr>
              <th>instrumental</th>
              <td>sīnanō</td>
              <td>sīnaizō</td>
              <td>sīnanō</td>
              <td>sīnaimiz</td>
              <td>sīnaimiz</td>
              <td>sīnaimiz</td>
            </tr>
          </table>
        `; 
      } else if (type === "word") {
        tableHTML += `
          <div style="display: flex;">
            <table border='1'>
              <tr>
                <th></th>
                <th colspan="3">singular</th>
              </tr>
              <tr>
                <th></th>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
              </tr>
              <tr>
                <th>nominative</th>
                <td>${options.sing_masc_nomi}</td>
                <td>${options.sing_fem_nomi}</td>
                <td>${options.sing_neut_nomi}</td>
              </tr>
              <tr>
                <th>accusative</th>
                <td>${options.sing_masc_acc}</td>
                <td>${options.sing_fem_acc}</td>
                <td>${options.sing_neut_acc}</td>
              </tr>
              <tr>
                <th>genitive</th>
                <td>${options.sing_masc_gen}</td>
                <td>${options.sing_fem_gen}</td>
                <td>${options.sing_neut_gen}</td>
              </tr>
              <tr>
                <th>dative</th>
                <td>${options.sing_masc_dat}</td>
                <td>${options.sing_fem_dat}</td>
                <td>${options.sing_neut_dat}</td>
              </tr>
              <tr>
                <th>instrumental</th>
                <td>${options.sing_masc_inst}</td>
                <td>${options.sing_fem_inst}</td>
                <td>${options.sing_neut_inst}</td>
              </tr>
            </table>

            <table border='1'>
              <tr>
                <th colspan="3">plural</th>
              </tr>
              <tr>
                <th>masculine</th>
                <th>feminine</th>
                <th>neuter</th>
              </tr>
              <tr>
                <td>${options.plur_masc_nomi}</td>
                <td>${options.plur_fem_nomi}</td>
                <td>${options.plur_neut_nomi}</td>
              </tr>
              <tr>
                <td>${options.plur_masc_acc}</td>
                <td>${options.plur_fem_acc}</td>
                <td>${options.plur_neut_acc}</td>
              </tr>
              <tr>
                <td>${options.plur_masc_gen}</td>
                <td>${options.plur_fem_gen}</td>
                <td>${options.plur_neut_gen}</td>
              </tr>
              <tr>
                <td>${options.plur_masc_dat}</td>
                <td>${options.plur_fem_dat}</td>
                <td>${options.plur_neut_dat}</td>
              </tr>
              <tr>
                <td>${options.plur_masc_inst}</td>
                <td>${options.plur_fem_inst}</td>
                <td>${options.plur_neut_inst}</td>
              </tr>
            </table>
          </div>
        `; 
      } else if (type === "preposition") {
        tableHTML += ` 
          <h3>${options.addition}</h3>
        `;
      } else if (type === "numeral") {
        tableHTML += ` 
          <table>
            <tr>
              <th>cardinal</th>
              <td>${options.cardinal}</td>
            </tr>
            <tr>
              <th>ordinal</th>
              <td>${options.ordinal}</td>
            </tr>
            <tr>
              <th>multiplier</th>
              <td>${options.multiplier}</td>
            </tr>
          </table>
        `; 
      } else {
        tableHTML += `<td>Unknown type</td>`;
      }

      tableHTML += "</table>";

      let englishOutput = '';

      if (entry.english1) {
        englishOutput += `<h2>2: ${entry.english1}</h2>`;
      }
      if (entry.english2) {
        englishOutput += `<h2>3: ${entry.english2}</h2>`;
      }
      if (entry.gender) {
        englishOutput += `<h2>Gender: ${entry.gender}</h2>`;
      }

      outputDiv.innerHTML = `
        <h2>English word: </h2> 
        <h2>1: ${englishWord}</h2>
        ${englishOutput}
        <h2>Germanic word: ${entry.germanic}</h2>
        <h2>Pronunciation: ${entry.pronunciation}</h2>
        ${tableHTML}
      `;

      found = true;
      break;
    }
  }

  if (!found) {
    outputDiv.innerHTML = "<p>Word not found in dictionary.</p>";
  }
}
