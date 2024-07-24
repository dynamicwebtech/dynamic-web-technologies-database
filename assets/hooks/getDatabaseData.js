/**
 *
 *  This is the getDatabaseData hook
 *
 */

import { useState, useEffect } from "react";

import { fetchClients } from "../functions/async/fetchers/fetchClients";
import { fetchProjects } from "../functions/async/fetchers/fetchProjects";
import { fetchNotes } from "../functions/async/fetchers/fetchNotes";
import { fetchPayments } from "../functions/async/fetchers/fetchPayments";
import { fetchReminders } from "../functions/async/fetchers/fetchReminders";
import { fetchTemplates } from "../functions/async/fetchers/fetchTemplates";
import { fetchUsers } from "../functions/async/fetchers/fetchUsers";

const getDatabaseData = () => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [payments, setPayments] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetchClients("/api/clients/getClients", setClients);
    fetchProjects("/api/projects/getProjects", setProjects);
    fetchUsers("/api/users/getUsers", setUsers);
    fetchNotes("/api/notes/getNotes", setNotes);
    fetchPayments("/api/payments/getPayments", setPayments);
    fetchReminders("/api/reminders/getReminders", setReminders);
    fetchTemplates("/api/templates/getTemplates", setTemplates);
  }, []);

  return { clients, projects, users, notes, templates, payments, reminders };
};

export default getDatabaseData;
